#!/usr/bin/env python3
"""
简单版批量导入脚本 - 一键导入所有CSV文件
"""

import sqlite3
import csv
import os
import glob
from datetime import datetime

def import_all_csv_files():
    """导入所有CSV文件到数据库"""
    
    # 配置
    data_dir = "/Users/cavin/Desktop/anker/creative-ai-system/data"
    db_path = os.path.join(data_dir, "anker.db")
    
    print("=" * 60)
    print("开始批量导入CSV文件")
    print("=" * 60)
    print(f"数据库: {db_path}")
    print(f"数据目录: {data_dir}")
    
    # 连接数据库
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # 创建表（如果不存在）
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
            UNIQUE(suggestion, language, region, keyword, data_source)
        )
    ''')
    conn.commit()
    
    # 查找所有CSV文件
    csv_files = glob.glob(os.path.join(data_dir, "*.csv"))
    print(f"\n找到 {len(csv_files)} 个CSV文件\n")
    
    total_imported = 0
    
    # 导入每个文件
    for csv_file in csv_files:
        filename = os.path.basename(csv_file)
        print(f"正在导入: {filename}")
        
        imported = 0
        skipped = 0
        
        try:
            with open(csv_file, 'r', encoding='utf-8') as file:
                # 检查第一行是否是标题
                first_line = file.readline()
                if 'Modifier Type' not in first_line:
                    file.seek(0)  # 如果第一行是标题，重置到开始
                
                reader = csv.DictReader(file)
                
                for row in reader:
                    # 提取数据
                    try:
                        modifier_type = row.get('Modifier Type', '').strip()
                        modifier = row.get('Modifier', '').strip() if row.get('Modifier') else None
                        suggestion = row.get('Suggestion', '').strip()
                        language = row.get('Language', '').strip()
                        region = row.get('Region', '').strip()
                        keyword = row.get('Keyword', '').strip()
                        
                        # 处理数字字段
                        search_volume = None
                        if row.get('Search Volume'):
                            try:
                                search_volume = int(row['Search Volume'])
                            except:
                                pass
                        
                        cost_per_click = None
                        if row.get('Cost Per Click'):
                            try:
                                cost_per_click = float(row['Cost Per Click'])
                            except:
                                pass
                        
                        # 验证必需字段
                        if not all([modifier_type, suggestion, language, region, keyword]):
                            skipped += 1
                            continue
                        
                        # 插入数据
                        cursor.execute('''
                            INSERT OR IGNORE INTO search_suggestions 
                            (modifier_type, modifier, suggestion, language, region, keyword, 
                             search_volume, cost_per_click, created_date, data_source)
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                        ''', (
                            modifier_type,
                            modifier,
                            suggestion,
                            language,
                            region,
                            keyword,
                            search_volume,
                            cost_per_click,
                            datetime.now().strftime('%Y-%m-%d'),
                            filename
                        ))
                        
                        imported += cursor.rowcount
                        
                    except Exception as e:
                        print(f"  错误: {e}")
                        continue
                
                conn.commit()
                total_imported += imported
                print(f"  ✓ 导入 {imported} 条记录，跳过 {skipped} 条\n")
                
        except Exception as e:
            print(f"  ✗ 导入失败: {e}\n")
            continue
    
    # 显示统计信息
    print("=" * 60)
    print("导入完成！")
    print("=" * 60)
    
    # 总体统计
    cursor.execute('SELECT COUNT(*) FROM search_suggestions')
    total = cursor.fetchone()[0]
    print(f"数据库总记录数: {total}")
    
    # TOP 10搜索量
    print("\n搜索量TOP 10:")
    cursor.execute('''
        SELECT suggestion, search_volume 
        FROM search_suggestions 
        WHERE search_volume IS NOT NULL 
        ORDER BY search_volume DESC 
        LIMIT 10
    ''')
    
    for i, (suggestion, volume) in enumerate(cursor.fetchall(), 1):
        print(f"{i:2d}. {suggestion:<60} 搜索量: {volume}")
    
    # 各类型统计
    print("\n各类型记录数:")
    cursor.execute('''
        SELECT modifier_type, COUNT(*) as count 
        FROM search_suggestions 
        GROUP BY modifier_type 
        ORDER BY count DESC
    ''')
    
    for mtype, count in cursor.fetchall():
        print(f"  {mtype:<20} {count:>6} 条")
    
    conn.close()
    print(f"\n总共导入 {total_imported} 条新记录")

if __name__ == "__main__":
    import_all_csv_files()
