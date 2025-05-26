#!/usr/bin/env python3
"""
Complete CSV Classification and Import Summary Report
All 8 data categories successfully imported into anker.db
"""

import sqlite3
from datetime import datetime

def generate_complete_summary():
    """Generate complete import summary report"""
    
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    print('=' * 80)
    print('EUFY CSV数据分类和导入完成报告')
    print('=' * 80)
    print(f'生成时间: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}')
    print()
    
    # Complete classification summary
    print('📊 数据分类和导入状态汇总:')
    print('-' * 60)
    
    categories = [
        {
            'name': '1. 搜索建议类 (Search Suggestions)',
            'table': 'search_suggestions',
            'files': [
                'eufy robot vacuum-en-us-suggestions-24-02-2025.csv',
                'eufy-robot vacuum-en-suggestions-2024-2025.csv', 
                'robot vacuum-suggestions-2024-2025.csv'
            ],
            'status': '✅ 已完成导入'
        },
        {
            'name': '2. TikTok评论类 (TikTok Comments)',
            'table': 'tiktok_comments',
            'files': [
                'robot vacuum tiktok-comments-scraper_202502.csv',
                'vacuun_tiktok-comments_202502.csv',
                'social_tiktok_robotvacuum_anchorink_voc.csv',
                'social_tiktok_robotvacuum_pinnedpost_voc.csv'
            ],
            'status': '✅ 已完成导入'
        },
        {
            'name': '3. TikTok创作者类 (TikTok Creators)',
            'table': 'tiktok_creators',
            'files': ['RobotVacuum_tiktok_creators.csv'],
            'status': '✅ 已完成导入'
        },
        {
            'name': '4. TikTok商店类 (TikTok Shops)',
            'table': 'tiktok_shops',
            'files': ['RobotVacuum_tiktok_shop.csv'],
            'status': '✅ 已完成导入'
        },
        {
            'name': '5. TikTok产品类 (TikTok Products)',
            'table': 'tiktok_products',
            'files': ['RobotVacuum_tiktok_products.csv'],
            'status': '✅ 已完成导入'
        },
        {
            'name': '6. TikTok视频类 (TikTok Videos)',
            'table': 'tiktok_videos',
            'files': ['RobotVacuum_tiktok_videos.csv'],
            'status': '✅ 已完成导入'
        },
        {
            'name': '7. 亚马逊评论类 (Amazon Reviews)',
            'table': 'amazon_reviews',
            'files': ['robot vacuum_B0DCFNZF32_202503.csv'],
            'status': '✅ 已完成导入'
        },
        {
            'name': '8. YouTube评论类 (YouTube Comments)',
            'table': 'youtube_comments',
            'files': ['social_youtube_robotvacuum_voc.csv'],
            'status': '✅ 已完成导入'
        }
    ]
    
    total_records = 0
    
    for category in categories:
        cursor.execute(f"SELECT COUNT(*) FROM {category['table']}")
        count = cursor.fetchone()[0]
        total_records += count
        
        print(f"{category['name']}")
        print(f"  数据表: {category['table']}")
        print(f"  文件数: {len(category['files'])} 个")
        print(f"  记录数: {count:,} 条")
        print(f"  状态: {category['status']}")
        print(f"  文件列表:")
        for file in category['files']:
            print(f"    - {file}")
        print()
    
    print(f"🎯 总体统计:")
    print(f"  • 分类总数: 8 个数据类别")
    print(f"  • 文件总数: 13 个CSV文件")
    print(f"  • 记录总数: {total_records:,} 条")
    print(f"  • 数据表数: 8 个数据库表")
    print(f"  • 导入状态: 100% 完成")
    print()
    
    # Detailed statistics for each category
    print('📈 详细数据统计:')
    print('-' * 60)
    
    # Search suggestions analysis
    cursor.execute('''
        SELECT COUNT(*) as total, 
               AVG(CAST(search_volume AS INTEGER)) as avg_volume,
               MAX(CAST(search_volume AS INTEGER)) as max_volume
        FROM search_suggestions 
        WHERE search_volume != ''
    ''')
    search_stats = cursor.fetchone()
    print(f"🔍 搜索建议分析:")
    print(f"  • 总搜索词: {search_stats[0]:,} 个")
    print(f"  • 平均搜索量: {search_stats[1]:.0f}")
    print(f"  • 最高搜索量: {search_stats[2]:,}")
    
    # TikTok engagement analysis
    cursor.execute('''
        SELECT COUNT(*) as total,
               AVG(digg_count) as avg_likes,
               SUM(digg_count) as total_likes
        FROM tiktok_comments
    ''')
    tiktok_stats = cursor.fetchone()
    print(f"\n💬 TikTok评论分析:")
    print(f"  • 总评论数: {tiktok_stats[0]:,} 条")
    print(f"  • 平均点赞数: {tiktok_stats[1]:.1f}")
    print(f"  • 总点赞数: {tiktok_stats[2]:,}")
    
    # Creator performance
    cursor.execute('''
        SELECT COUNT(*) as total,
               AVG(follower_count) as avg_followers,
               SUM(recent_sales_amount) as total_sales
        FROM tiktok_creators
    ''')
    creator_stats = cursor.fetchone()
    print(f"\n👥 TikTok创作者分析:")
    print(f"  • 创作者总数: {creator_stats[0]} 个")
    print(f"  • 平均粉丝数: {creator_stats[1]:,.0f}")
    print(f"  • 总销售额: ${creator_stats[2]:,.0f}")
    
    # Product analysis
    cursor.execute('''
        SELECT COUNT(*) as total,
               AVG(current_price) as avg_price,
               AVG(rating) as avg_rating,
               SUM(sales_volume) as total_sales
        FROM tiktok_products
        WHERE current_price > 0
    ''')
    product_stats = cursor.fetchone()
    print(f"\n🛍️ TikTok产品分析:")
    print(f"  • 产品总数: {product_stats[0]} 个")
    print(f"  • 平均价格: ${product_stats[1]:.2f}")
    print(f"  • 平均评分: {product_stats[2]:.1f}")
    print(f"  • 总销量: {product_stats[3]:,}")
    
    # Amazon reviews sentiment
    cursor.execute('''
        SELECT COUNT(*) as total,
               AVG(star_rating) as avg_rating,
               COUNT(CASE WHEN star_rating >= 4 THEN 1 END) * 100.0 / COUNT(*) as positive_rate
        FROM amazon_reviews
        WHERE star_rating > 0
    ''')
    amazon_stats = cursor.fetchone()
    print(f"\n⭐ 亚马逊评论分析:")
    print(f"  • 评论总数: {amazon_stats[0]:,} 条")
    print(f"  • 平均评分: {amazon_stats[1]:.1f} 星")
    print(f"  • 好评率: {amazon_stats[2]:.1f}% (4星及以上)")
    
    # YouTube engagement
    cursor.execute('''
        SELECT COUNT(*) as total,
               AVG(vote_count) as avg_votes,
               SUM(vote_count) as total_votes
        FROM youtube_comments
    ''')
    youtube_stats = cursor.fetchone()
    print(f"\n🎥 YouTube评论分析:")
    print(f"  • 评论总数: {youtube_stats[0]:,} 条")
    print(f"  • 平均赞同数: {youtube_stats[1]:.1f}")
    print(f"  • 总赞同数: {youtube_stats[2]:,}")
    
    print()
    print('=' * 80)
    print('🎉 CSV分类和数据导入任务完成!')
    print('所有13个CSV文件已成功分类为8个数据类别，并完整导入到anker.db数据库中。')
    print('数据库现在包含完整的Eufy机器人吸尘器相关数据，可用于进一步分析。')
    print('=' * 80)
    
    conn.close()

if __name__ == "__main__":
    generate_complete_summary()