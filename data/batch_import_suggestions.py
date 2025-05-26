#!/usr/bin/env python3
"""
批量导入搜索建议CSV文件到SQLite数据库
自动扫描目录中的所有CSV文件并导入
"""

import sqlite3
import csv
import os
import sys
import glob
from datetime import datetime
import argparse
import logging

# 设置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)

class SearchSuggestionsImporter:
    """搜索建议数据导入器"""
    
    def __init__(self, db_path, data_dir=None):
        self.db_path = db_path
        self.data_dir = data_dir or os.path.dirname(db_path)
        self.conn = None
        self.total_imported = 0
        self.total_skipped = 0
        self.total_errors = 0
        
    def connect(self):
        """连接数据库"""
        try:
            self.conn = sqlite3.connect(self.db_path)
            logger.info(f"已连接到数据库: {self.db_path}")
            return True
        except Exception as e:
            logger.error(f"连接数据库失败: {e}")
            return False
    
    def create_table(self):
        """创建表结构（如果不存在）"""
        try:
            cursor = self.conn.cursor()
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS search_suggestions (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    modifier_type TEXT NOT NULL,
                    modifier TEXT,
                    suggestion TEXT NOT NULL,
                    language TEXT NOT NULL,
                    region TEXT NOT NULL,
                    keyword TEXT NOT NULL,
                    search_volume INTEGER,
                    cost_per_click REAL,
                    created_date TEXT,
                    data_source TEXT,
                    import_timestamp TEXT,
                    UNIQUE(suggestion, language, region, keyword, data_source)
                )
            ''')
            
            # 创建索引以提高查询性能
            cursor.execute('''
                CREATE INDEX IF NOT EXISTS idx_search_volume 
                ON search_suggestions(search_volume DESC)
            ''')
            
            cursor.execute('''
                CREATE INDEX IF NOT EXISTS idx_modifier_type 
                ON search_suggestions(modifier_type)
            ''')
            
            cursor.execute('''
                CREATE INDEX IF NOT EXISTS idx_keyword 
                ON search_suggestions(keyword)
            ''')
            
            self.conn.commit()
            logger.info("数据表结构已准备就绪")
            return True
            
        except Exception as e:
            logger.error(f"创建表结构失败: {e}")
            return False
    
    def detect_csv_format(self, file_path):
        """检测CSV文件格式"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                first_line = f.readline().strip()
                second_line = f.readline().strip()
                
                # 检查是否有标题行
                has_title = False
                if 'Modifier Type' not in first_line and 'Modifier Type' in second_line:
                    has_title = True
                
                # 检测分隔符
                delimiter = ','
                if '\t' in second_line:
                    delimiter = '\t'
                
                return has_title, delimiter
                
        except Exception as e:
            logger.error(f"检测文件格式失败: {e}")
            return False, ','
    
    def import_csv_file(self, csv_path):
        """导入单个CSV文件"""
        
        filename = os.path.basename(csv_path)
        logger.info(f"开始导入: {filename}")
        
        # 检测文件格式
        has_title, delimiter = self.detect_csv_format(csv_path)
        
        cursor = self.conn.cursor()
        imported = 0
        skipped = 0
        errors = 0
        duplicates = 0
        
        try:
            with open(csv_path, 'r', encoding='utf-8') as file:
                # 如果有标题行，跳过它
                if has_title:
                    file.readline()
                
                # 创建CSV reader
                reader = csv.DictReader(file, delimiter=delimiter)
                
                # 批量插入数据
                batch_data = []
                batch_size = 500  # 增大批次大小以提高性能
                
                for row_num, row in enumerate(reader, start=2):
                    try:
                        # 提取并清理数据
                        modifier_type = self.clean_text(row.get('Modifier Type', ''))
                        modifier = self.clean_text(row.get('Modifier', ''))
                        suggestion = self.clean_text(row.get('Suggestion', ''))
                        language = self.clean_text(row.get('Language', ''))
                        region = self.clean_text(row.get('Region', ''))
                        keyword = self.clean_text(row.get('Keyword', ''))
                        
                        # 转换数值字段
                        search_volume = self.parse_number(row.get('Search Volume'), int)
                        cost_per_click = self.parse_number(row.get('Cost Per Click'), float)
                        
                        # 验证必需字段
                        if not all([modifier_type, suggestion, language, region, keyword]):
                            skipped += 1
                            if skipped <= 5:  # 只记录前5个跳过的记录
                                logger.debug(f"行 {row_num}: 缺少必需字段，跳过")
                            continue
                        
                        # 添加到批次
                        batch_data.append((
                            modifier_type,
                            modifier if modifier else None,
                            suggestion,
                            language,
                            region,
                            keyword,
                            search_volume,
                            cost_per_click,
                            datetime.now().strftime('%Y-%m-%d'),
                            filename,
                            datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                        ))
                        
                        # 批量插入
                        if len(batch_data) >= batch_size:
                            duplicates += self.insert_batch(cursor, batch_data)
                            imported += len(batch_data)
                            batch_data = []
                            
                            # 显示进度
                            if imported % 1000 == 0:
                                logger.info(f"  已处理 {imported} 条记录...")
                        
                    except Exception as e:
                        errors += 1
                        if errors <= 5:  # 只显示前5个错误
                            logger.error(f"行 {row_num} 错误: {str(e)}")
                        continue
                
                # 插入剩余的数据
                if batch_data:
                    duplicates += self.insert_batch(cursor, batch_data)
                    imported += len(batch_data)
                
                self.conn.commit()
                
                # 更新总计数
                self.total_imported += imported
                self.total_skipped += skipped
                self.total_errors += errors
                
                # 显示导入结果
                logger.info(f"{filename} 导入完成:")
                logger.info(f"  - 成功导入: {imported - duplicates} 条新记录")
                logger.info(f"  - 重复记录: {duplicates} 条")
                logger.info(f"  - 跳过: {skipped} 条")
                logger.info(f"  - 错误: {errors} 条")
                
                # 显示该文件的统计信息
                self.show_file_stats(cursor, filename)
                
                return True
                
        except Exception as e:
            logger.error(f"导入 {filename} 时发生错误: {str(e)}")
            self.conn.rollback()
            return False
    
    def insert_batch(self, cursor, batch_data):
        """批量插入数据，返回重复记录数"""
        duplicates = 0
        for data in batch_data:
            try:
                cursor.execute('''
                    INSERT INTO search_suggestions 
                    (modifier_type, modifier, suggestion, language, region, keyword, 
                     search_volume, cost_per_click, created_date, data_source, import_timestamp)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''', data)
            except sqlite3.IntegrityError:
                # 记录已存在（重复）
                duplicates += 1
            except Exception as e:
                logger.error(f"插入数据时出错: {e}")
        return duplicates
    
    def show_file_stats(self, cursor, filename):
        """显示文件导入统计"""
        cursor.execute('''
            SELECT 
                COUNT(*) as total,
                COUNT(DISTINCT modifier_type) as types,
                COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as with_volume,
                MAX(search_volume) as max_volume,
                AVG(CASE WHEN search_volume IS NOT NULL THEN search_volume END) as avg_volume
            FROM search_suggestions
            WHERE data_source = ?
        ''', (filename,))
        
        stats = cursor.fetchone()
        logger.info(f"  - 总记录数: {stats[0]}")
        logger.info(f"  - 修饰词类型: {stats[1]} 种")
        logger.info(f"  - 有搜索量的记录: {stats[2]} 条")
        logger.info(f"  - 最大搜索量: {stats[3] if stats[3] else 'N/A'}")
        logger.info(f"  - 平均搜索量: {stats[4]:.0f}" if stats[4] else "  - 平均搜索量: N/A")
    
    def clean_text(self, text):
        """清理文本数据"""
        if text is None:
            return ''
        return str(text).strip()
    
    def parse_number(self, value, num_type):
        """解析数字"""
        if value is None or value == '' or str(value).strip() == '':
            return None
        try:
            return num_type(value)
        except (ValueError, TypeError):
            return None
    
    def find_csv_files(self, pattern='*.csv'):
        """查找目录中的所有CSV文件"""
        csv_files = []
        
        # 支持多种文件模式
        patterns = [pattern] if isinstance(pattern, str) else pattern
        
        for pat in patterns:
            files = glob.glob(os.path.join(self.data_dir, pat))
            csv_files.extend(files)
        
        # 去重并排序
        csv_files = sorted(list(set(csv_files)))
        
        # 过滤掉可能的非CSV文件
        csv_files = [f for f in csv_files if f.lower().endswith('.csv')]
        
        return csv_files
    
    def show_final_stats(self):
        """显示最终统计信息"""
        cursor = self.conn.cursor()
        
        logger.info("\n" + "=" * 60)
        logger.info("导入总结")
        logger.info("=" * 60)
        
        # 总体统计
        cursor.execute('''
            SELECT 
                COUNT(*) as total,
                COUNT(DISTINCT suggestion) as unique_suggestions,
                COUNT(DISTINCT data_source) as sources,
                COUNT(DISTINCT modifier_type) as types,
                COUNT(DISTINCT keyword) as keywords
            FROM search_suggestions
        ''')
        
        stats = cursor.fetchone()
        logger.info(f"数据库总记录数: {stats[0]:,}")
        logger.info(f"唯一建议词数: {stats[1]:,}")
        logger.info(f"数据源数: {stats[2]}")
        logger.info(f"修饰词类型数: {stats[3]}")
        logger.info(f"关键词数: {stats[4]}")
        
        # 显示搜索量TOP 15
        logger.info("\n搜索量 TOP 15:")
        cursor.execute('''
            SELECT suggestion, search_volume, modifier_type, data_source
            FROM search_suggestions
            WHERE search_volume IS NOT NULL
            ORDER BY search_volume DESC
            LIMIT 15
        ''')
        
        for i, (suggestion, volume, mtype, source) in enumerate(cursor.fetchall(), 1):
            logger.info(f"{i:2d}. {suggestion:<60} 搜索量: {volume:>6,} ({mtype})")
        
        # 显示各类型统计
        logger.info("\n各修饰词类型统计:")
        cursor.execute('''
            SELECT 
                modifier_type,
                COUNT(*) as count,
                COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as with_volume,
                AVG(CASE WHEN search_volume IS NOT NULL THEN search_volume END) as avg_volume,
                MAX(search_volume) as max_volume
            FROM search_suggestions
            GROUP BY modifier_type
            ORDER BY count DESC
        ''')
        
        for mtype, count, with_vol, avg_vol, max_vol in cursor.fetchall():
            avg_str = f"{avg_vol:,.0f}" if avg_vol else "N/A"
            max_str = f"{max_vol:,}" if max_vol else "N/A"
            logger.info(f"  {mtype:<15} 记录数: {count:>5,}  有搜索量: {with_vol:>5,}  平均: {avg_str:>8}  最大: {max_str:>8}")
        
        # 显示各数据源统计
        logger.info("\n各数据源统计:")
        cursor.execute('''
            SELECT 
                data_source,
                COUNT(*) as count,
                MIN(created_date) as first_date,
                MAX(import_timestamp) as last_import
            FROM search_suggestions
            GROUP BY data_source
            ORDER BY count DESC
        ''')
        
        for source, count, first_date, last_import in cursor.fetchall():
            logger.info(f"  {source:<50} 记录数: {count:>5,}")
    
    def run(self, file_pattern='*.csv', specific_files=None):
        """运行导入过程"""
        
        # 连接数据库
        if not self.connect():
            return False
        
        # 创建表
        if not self.create_table():
            return False
        
        # 确定要导入的文件
        if specific_files:
            # 使用指定的文件列表
            csv_files = [os.path.join(self.data_dir, f) for f in specific_files]
            csv_files = [f for f in csv_files if os.path.exists(f)]
        else:
            # 自动查找CSV文件
            csv_files = self.find_csv_files(file_pattern)
        
        if not csv_files:
            logger.warning(f"在 {self.data_dir} 中没有找到CSV文件")
            return False
        
        logger.info(f"找到 {len(csv_files)} 个CSV文件")
        
        # 导入每个文件
        success_count = 0
        for i, csv_file in enumerate(csv_files, 1):
            logger.info(f"\n处理第 {i}/{len(csv_files)} 个文件")
            if self.import_csv_file(csv_file):
                success_count += 1
        
        # 显示最终统计
        self.show_final_stats()
        
        logger.info(f"\n总计: 成功导入 {success_count}/{len(csv_files)} 个文件")
        logger.info(f"总共导入 {self.total_imported} 条记录")
        
        # 关闭连接
        self.conn.close()
        
        return success_count == len(csv_files)

def main():
    """主函数"""
    
    # 命令行参数解析
    parser = argparse.ArgumentParser(description='批量导入搜索建议CSV文件到SQLite数据库')
    parser.add_argument('--db', type=str, 
                      default='/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db',
                      help='数据库文件路径')
    parser.add_argument('--dir', type=str,
                      help='CSV文件所在目录（默认为数据库所在目录）')
    parser.add_argument('--pattern', type=str, default='*.csv',
                      help='文件匹配模式（默认: *.csv）')
    parser.add_argument('--files', nargs='+',
                      help='指定要导入的文件列表')
    parser.add_argument('--verbose', action='store_true',
                      help='显示详细信息')
    
    args = parser.parse_args()
    
    # 设置日志级别
    if args.verbose:
        logging.getLogger().setLevel(logging.DEBUG)
    
    # 确定数据目录
    data_dir = args.dir or os.path.dirname(args.db)
    
    # 创建导入器实例
    importer = SearchSuggestionsImporter(args.db, data_dir)
    
    # 运行导入
    logger.info("=" * 60)
    logger.info("搜索建议数据批量导入工具")
    logger.info("=" * 60)
    logger.info(f"数据库: {args.db}")
    logger.info(f"数据目录: {data_dir}")
    logger.info(f"文件模式: {args.pattern}")
    
    start_time = datetime.now()
    
    # 执行导入
    success = importer.run(args.pattern, args.files)
    
    # 计算耗时
    elapsed = datetime.now() - start_time
    logger.info(f"\n总耗时: {elapsed.total_seconds():.1f} 秒")
    
    # 返回状态码
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
