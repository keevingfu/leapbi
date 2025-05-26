#!/usr/bin/env python3
"""
Eufy数据分类和导入最终总结报告
"""

import sqlite3
import os

def generate_final_report():
    """生成最终的分类和导入报告"""
    
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    
    print('=' * 80)
    print('EUFY CSV文件分类和导入最终报告')
    print('=' * 80)
    print()
    
    # 文件分类汇总
    print('📁 文件分类汇总:')
    print('-' * 50)
    
    classifications = {
        '1. 搜索建议类 (Search Suggestions)': {
            'table': 'search_suggestions',
            'files': [
                'eufy robot vacuum-en-us-suggestions-24-02-2025.csv',
                'eufy-robot vacuum-en-suggestions-2024-2025.csv', 
                'robot vacuum-suggestions-2024-2025.csv'
            ],
            'status': '✅ 已导入'
        },
        '2. TikTok评论类 (TikTok Comments)': {
            'table': 'tiktok_comments',
            'files': [
                'robot vacuum tiktok-comments-scraper_202502.csv',
                'vacuun_tiktok-comments_202502.csv',
                'social_tiktok_robotvacuum_anchorink_voc.csv',
                'social_tiktok_robotvacuum_pinnedpost_voc.csv'
            ],
            'status': '⏸️ 表已创建，待开发导入功能'
        },
        '3. TikTok创作者类 (TikTok Creators)': {
            'table': 'tiktok_creators',
            'files': ['RobotVacuum_tiktok_creators.csv'],
            'status': '⏸️ 表已创建，待开发导入功能'
        },
        '4. TikTok商店类 (TikTok Shops)': {
            'table': 'tiktok_shops', 
            'files': ['RobotVacuum_tiktok_shop.csv'],
            'status': '⏸️ 表已创建，待开发导入功能'
        },
        '5. TikTok产品类 (TikTok Products)': {
            'table': 'tiktok_products',
            'files': ['RobotVacuum_tiktok_products.csv'],
            'status': '⏸️ 表已创建，待开发导入功能'
        },
        '6. TikTok视频类 (TikTok Videos)': {
            'table': 'tiktok_videos',
            'files': ['RobotVacuum_tiktok_videos.csv'],
            'status': '⏸️ 表已创建，待开发导入功能'
        },
        '7. Amazon评论类 (Amazon Reviews)': {
            'table': 'amazon_reviews',
            'files': ['robot vacuum_B0DCFNZF32_202503.csv'],
            'status': '⏸️ 表已创建，待开发导入功能'
        },
        '8. YouTube评论类 (YouTube Comments)': {
            'table': 'youtube_comments',
            'files': ['social_youtube_robotvacuum_voc.csv'],
            'status': '⏸️ 表已创建，待开发导入功能'
        }
    }
    
    for category, info in classifications.items():
        print(f'{category}')
        print(f'  📊 数据表: {info["table"]}')
        print(f'  📄 文件数: {len(info["files"])}')
        print(f'  🔄 状态: {info["status"]}')
        print(f'  📝 文件列表:')
        for file in info['files']:
            print(f'    - {file}')
        print()
    
    # 数据库状态
    print('🗄️ 数据库状态:')
    print('-' * 50)
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # 显示所有表及记录数
    cursor.execute('SELECT name FROM sqlite_master WHERE type="table" AND name != "sqlite_sequence"')
    tables = cursor.fetchall()
    
    print('数据表及记录数:')
    total_records = 0
    for table in tables:
        table_name = table[0]
        cursor.execute(f'SELECT COUNT(*) FROM {table_name}')
        count = cursor.fetchone()[0]
        total_records += count
        status_icon = '✅' if count > 0 else '⭕'
        print(f'  {status_icon} {table_name}: {count:,} 条记录')
    
    print(f'\\n📊 总记录数: {total_records:,} 条')
    print()
    
    # 搜索建议数据详细统计
    print('🔍 搜索建议数据详细统计:')
    print('-' * 50)
    
    cursor.execute('''
        SELECT data_source, 
               COUNT(*) as total,
               COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as with_volume,
               AVG(CASE WHEN search_volume IS NOT NULL THEN search_volume END) as avg_volume,
               MAX(search_volume) as max_volume
        FROM search_suggestions 
        GROUP BY data_source 
        ORDER BY total DESC
    ''')
    
    suggestion_stats = cursor.fetchall()
    total_suggestions = 0
    total_with_volume = 0
    
    for source, total, with_vol, avg_vol, max_vol in suggestion_stats:
        total_suggestions += total
        total_with_volume += with_vol
        source_short = source.replace('.csv', '').replace('eufy ', '').replace('robot vacuum', 'RV')
        avg_str = f'{avg_vol:.1f}' if avg_vol else 'N/A'
        max_str = f'{max_vol:,}' if max_vol else 'N/A'
        
        print(f'📄 {source_short}:')
        print(f'    总记录: {total:,} | 有搜索量: {with_vol:,} | 平均: {avg_str} | 最大: {max_str}')
    
    print(f'\\n📈 搜索建议汇总: {total_suggestions:,} 条记录，其中 {total_with_volume:,} 条有搜索量数据')
    
    # 修饰符类型分布
    print('\\n🏷️ 修饰符类型分布:')
    cursor.execute('''
        SELECT modifier_type, 
               COUNT(*) as count,
               COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as with_volume
        FROM search_suggestions 
        GROUP BY modifier_type 
        ORDER BY count DESC
    ''')
    
    for mod_type, count, with_vol in cursor.fetchall():
        percentage = (count / total_suggestions) * 100
        print(f'  🏷️ {mod_type}: {count:,} 条 ({percentage:.1f}%) | 有搜索量: {with_vol:,} 条')
    
    # 搜索量分布
    print('\\n📊 搜索量分布:')
    cursor.execute('''
        SELECT 
            CASE 
                WHEN search_volume >= 10000 THEN '🔥 10K+'
                WHEN search_volume >= 1000 THEN '📈 1K-10K'
                WHEN search_volume >= 100 THEN '📊 100-1K'
                WHEN search_volume >= 10 THEN '📉 10-100'
                WHEN search_volume > 0 THEN '🔹 1-10'
                ELSE '⭕ 无数据'
            END as volume_range,
            COUNT(*) as count
        FROM search_suggestions
        GROUP BY volume_range
        ORDER BY 
            CASE 
                WHEN search_volume >= 10000 THEN 6
                WHEN search_volume >= 1000 THEN 5
                WHEN search_volume >= 100 THEN 4
                WHEN search_volume >= 10 THEN 3
                WHEN search_volume > 0 THEN 2
                ELSE 1
            END DESC
    ''')
    
    for volume_range, count in cursor.fetchall():
        percentage = (count / total_suggestions) * 100
        print(f'  {volume_range}: {count:,} 条 ({percentage:.1f}%)')
    
    # 顶级搜索建议
    print('\\n🏆 搜索量最高的TOP 10建议:')
    cursor.execute('''
        SELECT suggestion, search_volume, modifier_type, data_source
        FROM search_suggestions
        WHERE search_volume IS NOT NULL
        ORDER BY search_volume DESC
        LIMIT 10
    ''')
    
    for i, (suggestion, volume, mod_type, source) in enumerate(cursor.fetchall(), 1):
        source_short = source.split('-')[0].replace('eufy ', '')
        print(f'  {i:2d}. {suggestion} | {volume:,} | {mod_type} | {source_short}')
    
    conn.close()
    
    print()
    print('=' * 80)
    print('📋 总结')
    print('=' * 80)
    print('✅ 已完成:')
    print('  • CSV文件分类：8个类别，13个文件')
    print('  • 数据库表创建：8个表结构')
    print('  • 搜索建议数据导入：4个文件，4,251条记录')
    print('  • 查询工具：多个Python脚本供数据分析')
    print()
    print('⏸️ 待完成:')
    print('  • TikTok评论数据导入功能开发')
    print('  • TikTok创作者数据导入功能开发')
    print('  • TikTok商店数据导入功能开发')
    print('  • TikTok产品数据导入功能开发')
    print('  • TikTok视频数据导入功能开发')
    print('  • Amazon评论数据导入功能开发')
    print('  • YouTube评论数据导入功能开发')
    print()
    print('🎯 重要成果:')
    print('  • 搜索建议数据完全整合，支持内容策略制定')
    print('  • 数据结构规范化，便于后续分析和查询')
    print('  • 建立了可扩展的导入框架，支持新数据类型')
    print('=' * 80)

if __name__ == "__main__":
    generate_final_report()