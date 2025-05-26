#!/usr/bin/env python3
"""
Import second Eufy CSV file to database
"""

import sqlite3
import csv
import os
from datetime import datetime

def import_eufy_csv_2():
    csv_file_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/eufy-robot vacuum-en-suggestions-2024-2025.csv'
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    data_source = 'eufy-robot vacuum-en-suggestions-2024-2025.csv'
    
    print(f'CSV文件: {csv_file_path}')
    print(f'数据库: {db_path}')
    print(f'数据源: {data_source}')
    print()
    
    if not os.path.exists(csv_file_path):
        print(f'错误: CSV文件未找到: {csv_file_path}')
        return
    
    if not os.path.exists(db_path):
        print(f'错误: 数据库文件未找到: {db_path}')
        return
    
    # 连接数据库
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # 检查当前数据库状态
    cursor.execute('SELECT COUNT(*) FROM search_suggestions')
    before_count = cursor.fetchone()[0]
    print(f'导入前数据库记录数: {before_count}')
    
    # 检查是否已存在该数据源
    cursor.execute('SELECT COUNT(*) FROM search_suggestions WHERE data_source = ?', (data_source,))
    existing_count = cursor.fetchone()[0]
    if existing_count > 0:
        print(f'警告: 数据源 "{data_source}" 已存在 {existing_count} 条记录')
        print('继续导入将跳过重复记录...')
    
    print()
    
    # 准备插入语句
    insert_query = """
    INSERT OR IGNORE INTO search_suggestions 
    (modifier_type, modifier, suggestion, language, region, keyword, 
     search_volume, cost_per_click, created_date, data_source)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """
    
    imported_count = 0
    skipped_count = 0
    error_count = 0
    
    try:
        with open(csv_file_path, 'r', encoding='utf-8-sig') as csvfile:
            # 读取第一行检查格式
            first_line = csvfile.readline()
            csvfile.seek(0)
            
            # 跳过标题行
            if not first_line.startswith('Modifier Type'):
                next(csvfile)  # 跳过标题行
            
            reader = csv.DictReader(csvfile)
            
            for row_num, row in enumerate(reader, start=2):
                try:
                    # 提取数据
                    modifier_type = row.get('Modifier Type', '').strip()
                    modifier = row.get('Modifier', '').strip() if row.get('Modifier') else None
                    suggestion = row.get('Suggestion', '').strip()
                    language = row.get('Language', '').strip()
                    # 注意：这个文件没有Region列，我们设置为默认值
                    region = 'us'  # 默认为美国
                    keyword = row.get('Keyword', '').strip()
                    
                    # 处理搜索量
                    search_volume = None
                    if row.get('Search Volume') and row.get('Search Volume').strip():
                        try:
                            search_volume = int(row['Search Volume'])
                        except ValueError:
                            pass
                    
                    # 处理每次点击成本
                    cost_per_click = None
                    if row.get('Cost Per Click') and row.get('Cost Per Click').strip():
                        try:
                            # 移除可能的美元符号
                            cpc_str = row['Cost Per Click'].replace('$', '')
                            if cpc_str and cpc_str != '0.0':
                                cost_per_click = float(cpc_str)
                        except ValueError:
                            pass
                    
                    # 跳过缺少必要字段的记录
                    if not all([modifier_type, suggestion, language, keyword]):
                        skipped_count += 1
                        continue
                    
                    # 插入数据库
                    cursor.execute(insert_query, (
                        modifier_type,
                        modifier,
                        suggestion,
                        language,
                        region,  # 默认为'us'
                        keyword,
                        search_volume,
                        cost_per_click,
                        datetime.now().isoformat(),
                        data_source
                    ))
                    
                    imported_count += 1
                    
                except Exception as e:
                    print(f'第{row_num}行错误: {str(e)}')
                    error_count += 1
                    continue
        
        # 提交更改
        conn.commit()
        
        # 检查导入后状态
        cursor.execute('SELECT COUNT(*) FROM search_suggestions')
        after_count = cursor.fetchone()[0]
        
        print(f'导入总结:')
        print(f'- 成功导入: {imported_count} 条记录')
        print(f'- 跳过(缺少数据): {skipped_count} 条记录')  
        print(f'- 错误: {error_count} 条记录')
        print(f'- 处理总行数: {imported_count + skipped_count + error_count}')
        print(f'- 导入前数据库记录: {before_count}')
        print(f'- 导入后数据库记录: {after_count}')
        print(f'- 实际新增记录: {after_count - before_count}')
        
        print()
        
        # 显示新导入数据的统计
        cursor.execute("""
            SELECT COUNT(*) as total,
                   COUNT(DISTINCT modifier_type) as unique_types,
                   COUNT(DISTINCT suggestion) as unique_suggestions,
                   COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as with_volume,
                   AVG(CASE WHEN search_volume IS NOT NULL THEN search_volume END) as avg_search_volume
            FROM search_suggestions
            WHERE data_source = ?
        """, (data_source,))
        
        stats = cursor.fetchone()
        print(f'新导入数据统计:')
        print(f'- 该数据源总记录: {stats[0]}')
        print(f'- 唯一修饰符类型: {stats[1]}')
        print(f'- 唯一建议: {stats[2]}')
        print(f'- 有搜索量的记录: {stats[3]}')
        if stats[4]:
            print(f'- 平均搜索量: {stats[4]:.2f}')
        else:
            print('- 平均搜索量: N/A')
        
        # 显示搜索量最高的建议
        print()
        print('新数据中搜索量最高的5个建议:')
        cursor.execute("""
            SELECT suggestion, search_volume, modifier_type
            FROM search_suggestions
            WHERE data_source = ? AND search_volume IS NOT NULL
            ORDER BY search_volume DESC
            LIMIT 5
        """, (data_source,))
        
        results = cursor.fetchall()
        if results:
            for i, (suggestion, volume, mod_type) in enumerate(results, 1):
                print(f'{i}. {suggestion} (搜索量: {volume}, 类型: {mod_type})')
        else:
            print('该数据源中没有带搜索量的记录')
        
        # 显示整个数据库的统计
        print()
        print('整个数据库统计:')
        cursor.execute("""
            SELECT COUNT(*) as total,
                   COUNT(DISTINCT data_source) as sources,
                   COUNT(DISTINCT suggestion) as unique_suggestions
            FROM search_suggestions
        """)
        final_stats = cursor.fetchone()
        print(f'- 总记录数: {final_stats[0]}')
        print(f'- 数据源数量: {final_stats[1]}')
        print(f'- 唯一建议数: {final_stats[2]}')
        
    except Exception as e:
        print(f'读取CSV文件错误: {str(e)}')
        conn.rollback()
    
    finally:
        conn.close()

if __name__ == "__main__":
    import_eufy_csv_2()