#!/usr/bin/env python3
"""
Query script for all Eufy search suggestions data
"""

import sqlite3
import argparse

def query_all_eufy_suggestions(db_path, modifier_type=None, min_volume=None, data_source=None, limit=50):
    """
    Query all Eufy search suggestions with filters
    
    Args:
        db_path: Path to SQLite database
        modifier_type: Filter by modifier type (optional)
        min_volume: Minimum search volume (optional)
        data_source: Filter by specific data source (optional)
        limit: Maximum number of results
    """
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Build query with filters
    where_clauses = ["data_source LIKE '%eufy%'"]
    params = []
    
    if modifier_type:
        where_clauses.append("modifier_type = ?")
        params.append(modifier_type)
    
    if min_volume is not None:
        where_clauses.append("search_volume >= ?")
        params.append(min_volume)
    
    if data_source:
        where_clauses.append("data_source LIKE ?")
        params.append(f"%{data_source}%")
    
    where_clause = " AND ".join(where_clauses)
    
    query = f"""
    SELECT suggestion, modifier_type, modifier, search_volume, cost_per_click, data_source
    FROM search_suggestions
    WHERE {where_clause}
    ORDER BY search_volume DESC NULLS LAST, suggestion
    LIMIT ?
    """
    
    params.append(limit)
    
    cursor.execute(query, params)
    results = cursor.fetchall()
    
    print(f"=== 所有Eufy搜索建议查询结果 ===")
    print(f"筛选条件:")
    if modifier_type:
        print(f"  修饰符类型: {modifier_type}")
    if min_volume is not None:
        print(f"  最小搜索量: {min_volume}")
    if data_source:
        print(f"  数据源包含: {data_source}")
    print(f"  限制结果: {limit}")
    print()
    
    if not results:
        print("未找到匹配的结果")
        return
    
    print(f"找到 {len(results)} 条结果:")
    print("-" * 120)
    print(f"{'序号':<4} {'建议':<40} {'类型':<15} {'修饰符':<10} {'搜索量':<8} {'CPC':<8} {'数据源':<20}")
    print("-" * 120)
    
    for i, (suggestion, mod_type, modifier, volume, cpc, source) in enumerate(results, 1):
        volume_str = str(volume) if volume else "N/A"
        cpc_str = f"{cpc:.2f}" if cpc else "N/A"
        modifier_str = modifier if modifier else "N/A"
        source_short = source.split('.')[0]  # 简化数据源显示
        
        print(f"{i:<4} {suggestion:<40} {mod_type:<15} {modifier_str:<10} {volume_str:<8} {cpc_str:<8} {source_short:<20}")
    
    conn.close()

def show_all_eufy_statistics(db_path):
    """Show statistics for all Eufy data"""
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    print("=== 所有Eufy数据统计 ===")
    print()
    
    # Overall stats for all Eufy data
    cursor.execute("""
        SELECT COUNT(*) as total,
               COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as with_volume,
               AVG(CASE WHEN search_volume IS NOT NULL THEN search_volume END) as avg_volume,
               MAX(search_volume) as max_volume,
               COUNT(DISTINCT suggestion) as unique_suggestions,
               COUNT(DISTINCT data_source) as data_sources
        FROM search_suggestions
        WHERE data_source LIKE '%eufy%'
    """)
    
    stats = cursor.fetchone()
    print(f"Eufy数据总体统计:")
    print(f"- 总记录数: {stats[0]}")
    print(f"- 有搜索量的记录: {stats[1]}")
    print(f"- 平均搜索量: {stats[2]:.2f}" if stats[2] else "- 平均搜索量: N/A")
    print(f"- 最大搜索量: {stats[3]}")
    print(f"- 唯一建议数: {stats[4]}")
    print(f"- 数据源数量: {stats[5]}")
    print()
    
    # Data source breakdown
    print("数据源分布:")
    cursor.execute("""
        SELECT data_source, COUNT(*) as count,
               COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as with_volume,
               AVG(CASE WHEN search_volume IS NOT NULL THEN search_volume END) as avg_volume
        FROM search_suggestions
        WHERE data_source LIKE '%eufy%'
        GROUP BY data_source
        ORDER BY count DESC
    """)
    
    for source, count, with_vol, avg_vol in cursor.fetchall():
        avg_str = f"{avg_vol:.2f}" if avg_vol else "N/A"
        source_short = source.split('.')[0]
        print(f"  {source_short}: {count} 条记录 (其中 {with_vol} 条有搜索量, 平均: {avg_str})")
    
    print()
    
    # Modifier type distribution
    print("修饰符类型分布:")
    cursor.execute("""
        SELECT modifier_type, COUNT(*) as count,
               COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as with_volume
        FROM search_suggestions
        WHERE data_source LIKE '%eufy%'
        GROUP BY modifier_type
        ORDER BY count DESC
    """)
    
    for mod_type, count, with_vol in cursor.fetchall():
        print(f"  {mod_type}: {count} 条记录 (其中 {with_vol} 条有搜索量)")
    
    print()
    
    # Top keywords by search volume
    print("所有Eufy数据中搜索量最高的15个建议:")
    cursor.execute("""
        SELECT suggestion, search_volume, modifier_type, data_source
        FROM search_suggestions
        WHERE data_source LIKE '%eufy%' AND search_volume IS NOT NULL
        ORDER BY search_volume DESC
        LIMIT 15
    """)
    
    for i, (suggestion, volume, mod_type, source) in enumerate(cursor.fetchall(), 1):
        source_short = source.split('.')[0]
        print(f"  {i}. {suggestion} (搜索量: {volume}, 类型: {mod_type}, 来源: {source_short})")
    
    print()
    
    # Search volume distribution
    print("搜索量分布:")
    cursor.execute("""
        SELECT 
            CASE 
                WHEN search_volume >= 10000 THEN '10K+'
                WHEN search_volume >= 1000 THEN '1K-10K'
                WHEN search_volume >= 100 THEN '100-1K'
                WHEN search_volume >= 10 THEN '10-100'
                WHEN search_volume > 0 THEN '1-10'
                ELSE '0'
            END as volume_range,
            COUNT(*) as count
        FROM search_suggestions
        WHERE data_source LIKE '%eufy%'
        GROUP BY volume_range
        ORDER BY 
            CASE volume_range
                WHEN '10K+' THEN 6
                WHEN '1K-10K' THEN 5
                WHEN '100-1K' THEN 4
                WHEN '10-100' THEN 3
                WHEN '1-10' THEN 2
                ELSE 1
            END DESC
    """)
    
    for volume_range, count in cursor.fetchall():
        print(f"  {volume_range}: {count} 条记录")
    
    conn.close()

def main():
    """Main function"""
    
    parser = argparse.ArgumentParser(description='Query all Eufy search suggestions')
    parser.add_argument('--db', default='/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db',
                       help='Database path')
    parser.add_argument('--type', help='Filter by modifier type')
    parser.add_argument('--min-volume', type=int, help='Minimum search volume')
    parser.add_argument('--source', help='Filter by data source (partial match)')
    parser.add_argument('--limit', type=int, default=50, help='Maximum results')
    parser.add_argument('--stats', action='store_true', help='Show statistics only')
    
    args = parser.parse_args()
    
    if args.stats:
        show_all_eufy_statistics(args.db)
    else:
        query_all_eufy_suggestions(args.db, args.type, args.min_volume, args.source, args.limit)

if __name__ == "__main__":
    main()