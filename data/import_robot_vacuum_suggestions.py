#!/usr/bin/env python3
"""
Import robot vacuum suggestions file
"""

import sqlite3
import csv
from datetime import datetime

def import_missing_suggestions():
    csv_file_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/robot vacuum-suggestions-2024-2025.csv'
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    data_source = 'robot vacuum-suggestions-2024-2025.csv'
    
    print(f'导入文件: {data_source}')
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # 检查是否已存在
    cursor.execute('SELECT COUNT(*) FROM search_suggestions WHERE data_source = ?', (data_source,))
    existing_count = cursor.fetchone()[0]
    
    if existing_count > 0:
        print(f'数据源已存在 {existing_count} 条记录')
        conn.close()
        return
    
    insert_query = """
    INSERT OR IGNORE INTO search_suggestions 
    (modifier_type, modifier, suggestion, language, region, keyword, 
     search_volume, cost_per_click, created_date, data_source)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """
    
    imported_count = 0
    
    try:
        with open(csv_file_path, 'r', encoding='utf-8-sig') as csvfile:
            # 跳过第一行（标题）
            first_line = csvfile.readline()
            print(f'第一行: {first_line.strip()}')
            
            # 读取表头行
            header_line = csvfile.readline()
            print(f'表头行: {header_line.strip()}')
            
            # 重新设置文件指针到表头行开始
            csvfile.seek(0)
            csvfile.readline()  # 跳过第一行标题
            
            reader = csv.DictReader(csvfile)
            
            # 调试：显示字段名
            print(f'CSV字段名: {reader.fieldnames}')
            
            for row_num, row in enumerate(reader, 1):
                modifier_type = row.get('Modifier Type', '').strip()
                modifier = row.get('Modifier', '').strip() if row.get('Modifier') else None
                suggestion = row.get('Suggestion', '').strip()
                language = row.get('Language', '').strip()
                region = 'us'  # 默认为美国
                keyword = row.get('Keyword', '').strip()
                
                # 处理搜索量
                search_volume = None
                if row.get('Search Volume') and row.get('Search Volume').strip():
                    try:
                        search_volume = int(row['Search Volume'])
                    except ValueError:
                        pass
                
                # 处理CPC
                cost_per_click = None
                if row.get('Cost Per Click') and row.get('Cost Per Click').strip():
                    try:
                        cpc_str = row['Cost Per Click'].replace('$', '')
                        if cpc_str and cpc_str != '0.0':
                            cost_per_click = float(cpc_str)
                    except ValueError:
                        pass
                
                # 调试信息 - 只显示前几行
                if row_num <= 5:
                    print(f'行{row_num}: modifier_type={modifier_type}, suggestion={suggestion}, language={language}, keyword={keyword}')
                
                if not all([modifier_type, suggestion, language, keyword]):
                    if row_num <= 10:  # 只显示前10行的跳过信息
                        print(f'跳过行{row_num}: modifier_type={modifier_type}, suggestion={suggestion}, language={language}, keyword={keyword}')
                    continue
                
                cursor.execute(insert_query, (
                    modifier_type, modifier, suggestion, language, region, keyword,
                    search_volume, cost_per_click, datetime.now().isoformat(), data_source
                ))
                imported_count += 1
        
        conn.commit()
        print(f'成功导入: {imported_count} 条记录')
        
        # 显示统计
        cursor.execute("""
            SELECT COUNT(*) as total,
                   COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as with_volume,
                   AVG(CASE WHEN search_volume IS NOT NULL THEN search_volume END) as avg_volume
            FROM search_suggestions
            WHERE data_source = ?
        """, (data_source,))
        
        stats = cursor.fetchone()
        print(f'导入数据统计:')
        print(f'- 总记录: {stats[0]}')
        print(f'- 有搜索量: {stats[1]}')
        if stats[2]:
            print(f'- 平均搜索量: {stats[2]:.2f}')
        
    except Exception as e:
        print(f'导入错误: {str(e)}')
        conn.rollback()
    
    finally:
        conn.close()

if __name__ == "__main__":
    import_missing_suggestions()