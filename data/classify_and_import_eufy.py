#!/usr/bin/env python3
"""
分类和导入Eufy目录下的所有CSV文件
"""

import sqlite3
import csv
import os
from datetime import datetime

def classify_csv_files():
    """分类CSV文件"""
    
    eufy_dir = '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy'
    
    # 定义文件分类
    file_classifications = {
        # 搜索建议类 - 已有表search_suggestions
        'search_suggestions': {
            'files': [
                'eufy robot vacuum-en-us-suggestions-24-02-2025.csv',
                'eufy-robot vacuum-en-suggestions-2024-2025.csv',
                'robot vacuum-suggestions-2024-2025.csv'
            ],
            'table_name': 'search_suggestions',
            'headers': ['modifier_type', 'modifier', 'suggestion', 'language', 'region', 'keyword', 'search_volume', 'cost_per_click', 'created_date', 'data_source']
        },
        
        # TikTok评论类
        'tiktok_comments': {
            'files': [
                'robot vacuum tiktok-comments-scraper_202502.csv',
                'vacuun_tiktok-comments_202502.csv',
                'social_tiktok_robotvacuum_anchorink_voc.csv',
                'social_tiktok_robotvacuum_pinnedpost_voc.csv'
            ],
            'table_name': 'tiktok_comments',
            'headers': ['avatar_thumbnail', 'comment_id', 'create_time', 'create_time_iso', 'digg_count', 'replies_to_id', 'reply_comment_total', 'submitted_video_url', 'comment_text', 'user_id', 'username', 'error', 'input_url', 'liked_by_author', 'pinned_by_author', 'created_date', 'data_source']
        },
        
        # TikTok创作者类
        'tiktok_creators': {
            'files': [
                'RobotVacuum_tiktok_creators.csv'
            ],
            'table_name': 'tiktok_creators',
            'headers': ['avatar', 'creator_name', 'creator_account', 'creator_url', 'video_count', 'live_count', 'follower_count', 'follower_growth', 'avg_views', 'product_count', 'recent_sales_amount', 'recent_sales_volume', 'video_gpm', 'live_gpm', 'mcn', 'creator_type', 'created_date', 'data_source']
        },
        
        # TikTok商店类
        'tiktok_shops': {
            'files': [
                'RobotVacuum_tiktok_shop.csv'
            ],
            'table_name': 'tiktok_shops',
            'headers': ['shop_icon', 'shop_name', 'region', 'main_category', 'product_count', 'shop_rating', 'sales_volume', 'sales_growth_rate', 'creator_count', 'shop_type', 'created_date', 'data_source']
        },
        
        # TikTok产品类  
        'tiktok_products': {
            'files': [
                'RobotVacuum_tiktok_products.csv'
            ],
            'table_name': 'tiktok_products',
            'headers': ['product_title', 'product_image', 'product_url', 'region', 'current_price', 'original_price', 'rating', 'shop_icon', 'shop_url', 'shop_name', 'sales_volume', 'review_count', 'category_en', 'category_cn', 'commission_count', 'commission_rate', 'order_count', 'update_date', 'shipping_fee', 'favorites', 'gmv', 'created_date', 'data_source']
        },
        
        # TikTok视频类
        'tiktok_videos': {
            'files': [
                'RobotVacuum_tiktok_videos.csv'
            ],
            'table_name': 'tiktok_videos',
            'headers': ['video_thumbnail', 'category', 'video_url', 'video_description', 'creator_name', 'creator_username', 'creator_url', 'creator_avatar', 'like_count', 'view_count', 'comment_count', 'share_count', 'play_rate', 'collection_count', 'publish_time', 'duration', 'video_score', 'product_id', 'product_thumbnail', 'product_title', 'product_price', 'product_rating', 'product_category_en', 'product_category_cn', 'product_commission', 'product_sales', 'created_date', 'data_source']
        },
        
        # Amazon评论类
        'amazon_reviews': {
            'files': [
                'robot vacuum_B0DCFNZF32_202503.csv'
            ],
            'table_name': 'amazon_reviews',
            'headers': ['country_site', 'asin', 'review_id', 'review_title', 'product_attributes', 'review_content', 'vp_flag', 'star_rating', 'author', 'review_time', 'created_date', 'data_source']
        },
        
        # YouTube评论类
        'youtube_comments': {
            'files': [
                'social_youtube_robotvacuum_voc.csv'
            ],
            'table_name': 'youtube_comments',
            'headers': ['author', 'author_is_channel_owner', 'comment_id', 'comment_text', 'comments_count', 'has_creator_heart', 'page_url', 'published_time_text', 'reply_count', 'reply_to_cid', 'video_title', 'comment_type', 'video_id', 'vote_count', 'created_date', 'data_source']
        }
    }
    
    return file_classifications

def create_tables(db_path, classifications):
    """创建数据库表"""
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # 表结构定义
    table_schemas = {
        'search_suggestions': '''
            CREATE TABLE IF NOT EXISTS search_suggestions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                modifier_type TEXT,
                modifier TEXT,
                suggestion TEXT,
                language TEXT,
                region TEXT,
                keyword TEXT,
                search_volume INTEGER,
                cost_per_click REAL,
                created_date TEXT,
                data_source TEXT,
                UNIQUE(suggestion, language, region, keyword, data_source)
            )
        ''',
        
        'tiktok_comments': '''
            CREATE TABLE IF NOT EXISTS tiktok_comments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                avatar_thumbnail TEXT,
                comment_id TEXT,
                create_time TEXT,
                create_time_iso TEXT,
                digg_count INTEGER,
                replies_to_id TEXT,
                reply_comment_total INTEGER,
                submitted_video_url TEXT,
                comment_text TEXT,
                user_id TEXT,
                username TEXT,
                error TEXT,
                input_url TEXT,
                liked_by_author BOOLEAN,
                pinned_by_author BOOLEAN,
                created_date TEXT,
                data_source TEXT,
                UNIQUE(comment_id, data_source)
            )
        ''',
        
        'tiktok_creators': '''
            CREATE TABLE IF NOT EXISTS tiktok_creators (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                avatar TEXT,
                creator_name TEXT,
                creator_account TEXT,
                creator_url TEXT,
                video_count INTEGER,
                live_count INTEGER,
                follower_count INTEGER,
                follower_growth INTEGER,
                avg_views INTEGER,
                product_count INTEGER,
                recent_sales_amount REAL,
                recent_sales_volume INTEGER,
                video_gpm REAL,
                live_gpm REAL,
                mcn TEXT,
                creator_type TEXT,
                created_date TEXT,
                data_source TEXT,
                UNIQUE(creator_account, data_source)
            )
        ''',
        
        'tiktok_shops': '''
            CREATE TABLE IF NOT EXISTS tiktok_shops (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                shop_icon TEXT,
                shop_name TEXT,
                region TEXT,
                main_category TEXT,
                product_count INTEGER,
                shop_rating REAL,
                sales_volume INTEGER,
                sales_growth_rate REAL,
                creator_count INTEGER,
                shop_type TEXT,
                created_date TEXT,
                data_source TEXT,
                UNIQUE(shop_name, region, data_source)
            )
        ''',
        
        'tiktok_products': '''
            CREATE TABLE IF NOT EXISTS tiktok_products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                product_title TEXT,
                product_image TEXT,
                product_url TEXT,
                region TEXT,
                current_price REAL,
                original_price REAL,
                rating REAL,
                shop_icon TEXT,
                shop_url TEXT,
                shop_name TEXT,
                sales_volume INTEGER,
                review_count INTEGER,
                category_en TEXT,
                category_cn TEXT,
                commission_count INTEGER,
                commission_rate REAL,
                order_count INTEGER,
                update_date TEXT,
                shipping_fee REAL,
                favorites INTEGER,
                gmv REAL,
                created_date TEXT,
                data_source TEXT,
                UNIQUE(product_url, data_source)
            )
        ''',
        
        'tiktok_videos': '''
            CREATE TABLE IF NOT EXISTS tiktok_videos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                video_thumbnail TEXT,
                category TEXT,
                video_url TEXT,
                video_description TEXT,
                creator_name TEXT,
                creator_username TEXT,
                creator_url TEXT,
                creator_avatar TEXT,
                like_count INTEGER,
                view_count INTEGER,
                comment_count INTEGER,
                share_count INTEGER,
                play_rate REAL,
                collection_count INTEGER,
                publish_time TEXT,
                duration INTEGER,
                video_score REAL,
                product_id TEXT,
                product_thumbnail TEXT,
                product_title TEXT,
                product_price REAL,
                product_rating REAL,
                product_category_en TEXT,
                product_category_cn TEXT,
                product_commission INTEGER,
                product_sales INTEGER,
                created_date TEXT,
                data_source TEXT,
                UNIQUE(video_url, data_source)
            )
        ''',
        
        'amazon_reviews': '''
            CREATE TABLE IF NOT EXISTS amazon_reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                country_site TEXT,
                asin TEXT,
                review_id TEXT,
                review_title TEXT,
                product_attributes TEXT,
                review_content TEXT,
                vp_flag TEXT,
                star_rating INTEGER,
                author TEXT,
                review_time TEXT,
                created_date TEXT,
                data_source TEXT,
                UNIQUE(review_id, asin, data_source)
            )
        ''',
        
        'youtube_comments': '''
            CREATE TABLE IF NOT EXISTS youtube_comments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                author TEXT,
                author_is_channel_owner BOOLEAN,
                comment_id TEXT,
                comment_text TEXT,
                comments_count INTEGER,
                has_creator_heart BOOLEAN,
                page_url TEXT,
                published_time_text TEXT,
                reply_count INTEGER,
                reply_to_cid TEXT,
                video_title TEXT,
                comment_type TEXT,
                video_id TEXT,
                vote_count INTEGER,
                created_date TEXT,
                data_source TEXT,
                UNIQUE(comment_id, video_id, data_source)
            )
        '''
    }
    
    # 创建表
    for category, info in classifications.items():
        table_name = info['table_name']
        if table_name in table_schemas:
            print(f'创建表: {table_name}')
            cursor.execute(table_schemas[table_name])
    
    conn.commit()
    conn.close()
    print('所有表创建完成!')

def import_data_by_category(db_path, classifications):
    """按分类导入数据"""
    
    eufy_dir = '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy'
    
    for category, info in classifications.items():
        print(f'\n=== 处理分类: {category} ===')
        table_name = info['table_name']
        files = info['files']
        
        for filename in files:
            filepath = os.path.join(eufy_dir, filename)
            if os.path.exists(filepath):
                print(f'导入文件: {filename}')
                
                if category == 'search_suggestions':
                    import_search_suggestions(db_path, filepath, filename)
                elif category == 'tiktok_comments':
                    import_tiktok_comments(db_path, filepath, filename)
                elif category == 'tiktok_creators':
                    import_tiktok_creators(db_path, filepath, filename)
                elif category == 'tiktok_shops':
                    import_tiktok_shops(db_path, filepath, filename)
                elif category == 'tiktok_products':
                    import_tiktok_products(db_path, filepath, filename)
                elif category == 'tiktok_videos':
                    import_tiktok_videos(db_path, filepath, filename)
                elif category == 'amazon_reviews':
                    import_amazon_reviews(db_path, filepath, filename)
                elif category == 'youtube_comments':
                    import_youtube_comments(db_path, filepath, filename)
            else:
                print(f'文件不存在: {filename}')

def import_search_suggestions(db_path, filepath, filename):
    """导入搜索建议数据"""
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # 检查导入前状态
    cursor.execute('SELECT COUNT(*) FROM search_suggestions WHERE data_source = ?', (filename,))
    existing_count = cursor.fetchone()[0]
    
    if existing_count > 0:
        print(f'  警告: 数据源 {filename} 已存在 {existing_count} 条记录，跳过导入')
        conn.close()
        return
    
    insert_query = '''
    INSERT OR IGNORE INTO search_suggestions 
    (modifier_type, modifier, suggestion, language, region, keyword, 
     search_volume, cost_per_click, created_date, data_source)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    '''
    
    imported_count = 0
    
    try:
        with open(filepath, 'r', encoding='utf-8-sig') as csvfile:
            # 跳过标题行
            first_line = csvfile.readline()
            if not first_line.startswith('Modifier Type'):
                next(csvfile)
            
            reader = csv.DictReader(csvfile)
            
            for row in reader:
                modifier_type = row.get('Modifier Type', '').strip()
                modifier = row.get('Modifier', '').strip() if row.get('Modifier') else None
                suggestion = row.get('Suggestion', '').strip()
                language = row.get('Language', '').strip()
                region = row.get('Region', 'us').strip()  # 默认us
                keyword = row.get('Keyword', '').strip()
                
                # 处理搜索量和CPC
                search_volume = None
                if row.get('Search Volume'):
                    try:
                        search_volume = int(row['Search Volume'])
                    except ValueError:
                        pass
                
                cost_per_click = None
                if row.get('Cost Per Click'):
                    try:
                        cpc_str = row['Cost Per Click'].replace('$', '')
                        if cpc_str and cpc_str != '0.0':
                            cost_per_click = float(cpc_str)
                    except ValueError:
                        pass
                
                if all([modifier_type, suggestion, language, keyword]):
                    cursor.execute(insert_query, (
                        modifier_type, modifier, suggestion, language, region, keyword,
                        search_volume, cost_per_click, datetime.now().isoformat(), filename
                    ))
                    imported_count += 1
        
        conn.commit()
        print(f'  成功导入: {imported_count} 条记录')
        
    except Exception as e:
        print(f'  导入错误: {str(e)}')
        conn.rollback()
    
    finally:
        conn.close()

# 其他导入函数的简化版本
def import_tiktok_comments(db_path, filepath, filename):
    print(f'  TikTok评论导入功能开发中: {filename}')

def import_tiktok_creators(db_path, filepath, filename):
    print(f'  TikTok创作者导入功能开发中: {filename}')

def import_tiktok_shops(db_path, filepath, filename):
    print(f'  TikTok商店导入功能开发中: {filename}')

def import_tiktok_products(db_path, filepath, filename):
    print(f'  TikTok产品导入功能开发中: {filename}')

def import_tiktok_videos(db_path, filepath, filename):
    print(f'  TikTok视频导入功能开发中: {filename}')

def import_amazon_reviews(db_path, filepath, filename):
    print(f'  Amazon评论导入功能开发中: {filename}')

def import_youtube_comments(db_path, filepath, filename):
    print(f'  YouTube评论导入功能开发中: {filename}')

def main():
    """主函数"""
    
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    
    print('=== Eufy CSV文件分类和导入系统 ===')
    print()
    
    # 获取分类信息
    classifications = classify_csv_files()
    
    # 显示分类结果
    print('文件分类结果:')
    print('-' * 60)
    for category, info in classifications.items():
        print(f'分类: {category}')
        print(f'  表名: {info["table_name"]}')
        print(f'  文件数: {len(info["files"])}')
        for filename in info['files']:
            print(f'    - {filename}')
        print()
    
    # 创建表
    print('创建数据库表...')
    create_tables(db_path, classifications)
    
    # 导入数据
    print('\n开始导入数据...')
    import_data_by_category(db_path, classifications)
    
    print('\n=== 导入完成 ===')

if __name__ == "__main__":
    main()