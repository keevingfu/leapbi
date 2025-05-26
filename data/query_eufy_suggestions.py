#!/usr/bin/env python3
"""
Query script for Eufy search suggestions data
"""

import sqlite3
import argparse

def query_suggestions(db_path, modifier_type=None, min_volume=None, limit=50):
    """
    Query search suggestions with filters
    
    Args:
        db_path: Path to SQLite database
        modifier_type: Filter by modifier type (optional)
        min_volume: Minimum search volume (optional)
        limit: Maximum number of results
    """
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Build query with filters
    where_clauses = ["data_source = 'eufy robot vacuum-en-us-suggestions-24-02-2025.csv'"]
    params = []
    
    if modifier_type:
        where_clauses.append("modifier_type = ?")
        params.append(modifier_type)
    
    if min_volume is not None:
        where_clauses.append("search_volume >= ?")
        params.append(min_volume)
    
    where_clause = " AND ".join(where_clauses)
    
    query = f"""
    SELECT suggestion, modifier_type, modifier, search_volume, cost_per_click
    FROM search_suggestions
    WHERE {where_clause}
    ORDER BY search_volume DESC NULLS LAST, suggestion
    LIMIT ?
    """
    
    params.append(limit)
    
    cursor.execute(query, params)
    results = cursor.fetchall()
    
    print(f"=== Eufy搜索建议查询结果 ===")
    print(f"筛选条件:")
    if modifier_type:
        print(f"  修饰符类型: {modifier_type}")
    if min_volume is not None:
        print(f"  最小搜索量: {min_volume}")
    print(f"  限制结果: {limit}")
    print()
    
    if not results:
        print("未找到匹配的结果")
        return
    
    print(f"找到 {len(results)} 条结果:")
    print("-" * 100)
    print(f"{'序号':<4} {'建议':<50} {'类型':<15} {'修饰符':<10} {'搜索量':<8} {'CPC':<8}")
    print("-" * 100)
    
    for i, (suggestion, mod_type, modifier, volume, cpc) in enumerate(results, 1):
        volume_str = str(volume) if volume else "N/A"
        cpc_str = f"{cpc:.2f}" if cpc else "N/A"
        modifier_str = modifier if modifier else "N/A"
        
        print(f"{i:<4} {suggestion:<50} {mod_type:<15} {modifier_str:<10} {volume_str:<8} {cpc_str:<8}")
    
    conn.close()

def show_statistics(db_path):
    """Show database statistics"""
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    print("=== Eufy数据统计 ===")
    print()
    
    # Overall stats
    cursor.execute("""
        SELECT COUNT(*) as total,
               COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as with_volume,
               AVG(CASE WHEN search_volume IS NOT NULL THEN search_volume END) as avg_volume,
               MAX(search_volume) as max_volume
        FROM search_suggestions
        WHERE data_source = 'eufy robot vacuum-en-us-suggestions-24-02-2025.csv'
    """)
    
    stats = cursor.fetchone()
    print(f"总记录数: {stats[0]}")
    print(f"有搜索量的记录: {stats[1]}")
    print(f"平均搜索量: {stats[2]:.2f}" if stats[2] else "平均搜索量: N/A")
    print(f"最大搜索量: {stats[3]}")
    print()
    
    # Modifier type distribution
    print("修饰符类型分布:")
    cursor.execute("""
        SELECT modifier_type, COUNT(*) as count,
               COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as with_volume
        FROM search_suggestions
        WHERE data_source = 'eufy robot vacuum-en-us-suggestions-24-02-2025.csv'
        GROUP BY modifier_type
        ORDER BY count DESC
    """)
    
    for mod_type, count, with_vol in cursor.fetchall():
        print(f"  {mod_type}: {count} 条记录 (其中 {with_vol} 条有搜索量)")
    
    print()
    
    # Top keywords by search volume
    print("搜索量最高的10个建议:")
    cursor.execute("""
        SELECT suggestion, search_volume, modifier_type
        FROM search_suggestions
        WHERE data_source = 'eufy robot vacuum-en-us-suggestions-24-02-2025.csv'
              AND search_volume IS NOT NULL
        ORDER BY search_volume DESC
        LIMIT 10
    """)
    
    for i, (suggestion, volume, mod_type) in enumerate(cursor.fetchall(), 1):
        print(f"  {i}. {suggestion} (搜索量: {volume}, 类型: {mod_type})")
    
    conn.close()

def main():
    """Main function"""
    
    parser = argparse.ArgumentParser(description='Query Eufy search suggestions')
    parser.add_argument('--db', default='/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db',
                       help='Database path')
    parser.add_argument('--type', help='Filter by modifier type')
    parser.add_argument('--min-volume', type=int, help='Minimum search volume')
    parser.add_argument('--limit', type=int, default=50, help='Maximum results')
    parser.add_argument('--stats', action='store_true', help='Show statistics only')
    
    args = parser.parse_args()
    
    if args.stats:
        show_statistics(args.db)
    else:
        query_suggestions(args.db, args.type, args.min_volume, args.limit)

if __name__ == "__main__":
    main()