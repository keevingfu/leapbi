#!/usr/bin/env python3
"""
Import remaining data categories into anker.db
Handles TikTok products, videos, Amazon reviews, and YouTube comments
"""

import sqlite3
import csv
import os
from datetime import datetime

def import_tiktok_products():
    """Import TikTok products data"""
    print("\n=== Importing TikTok Products ===")
    
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    csv_file = '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/RobotVacuum_tiktok_products.csv'
    
    if not os.path.exists(csv_file):
        print(f"Warning: File not found: {csv_file}")
        return
    
    imported = 0
    with open(csv_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        print(f"Headers: {reader.fieldnames}")
        
        for row in reader:
            if not row.get('商品链接'):
                continue
            
            try:
                cursor.execute('''
                    INSERT OR IGNORE INTO tiktok_products 
                    (product_title, product_image, product_url, region, current_price, original_price,
                     rating, shop_icon, shop_url, shop_name, sales_volume, review_count,
                     category_en, category_cn, commission_count, commission_rate, order_count,
                     update_date, shipping_fee, favorites, gmv, created_date, data_source)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''', (
                    row.get('商品名称', ''),
                    row.get('商品缩略图', ''),
                    row.get('商品链接', ''),
                    row.get('国家、地区', ''),
                    float(row.get('商品价格最小值', 0.0) or 0.0),
                    float(row.get('商品价格最大值', 0.0) or 0.0),
                    float(row.get('商品星级', 0.0) or 0.0),
                    row.get('店铺商标链接', ''),
                    row.get('店铺链接', ''),
                    row.get('店铺名称', ''),
                    int(row.get('销量', 0) or 0),
                    int(row.get('商品评论数', 0) or 0),
                    row.get('商品类目-en', ''),
                    row.get('商品类目-zh', ''),
                    int(row.get('带货达人数', 0) or 0),
                    float(row.get('销量环比', 0.0) or 0.0),
                    int(row.get('店铺销量', 0) or 0),
                    row.get('上架时间', ''),
                    0.0,  # shipping_fee - will parse later if needed
                    0,    # favorites - not in this dataset
                    float(row.get('销售额', 0.0) or 0.0),
                    datetime.now().strftime('%Y-%m-%d'),
                    'RobotVacuum_tiktok_products'
                ))
                imported += 1
            except Exception as e:
                print(f"Error processing product row: {e}")
                continue
    
    conn.commit()
    conn.close()
    print(f"Imported {imported} TikTok products")

def import_tiktok_videos():
    """Import TikTok videos data"""
    print("\n=== Importing TikTok Videos ===")
    
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    csv_file = '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/RobotVacuum_tiktok_videos.csv'
    
    if not os.path.exists(csv_file):
        print(f"Warning: File not found: {csv_file}")
        return
    
    imported = 0
    with open(csv_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        print(f"Headers: {reader.fieldnames}")
        
        for row in reader:
            if not row.get('视频链接'):
                continue
            
            try:
                cursor.execute('''
                    INSERT OR IGNORE INTO tiktok_videos 
                    (video_thumbnail, category, video_url, video_description, creator_name,
                     creator_username, creator_url, creator_avatar, like_count, view_count,
                     comment_count, share_count, play_rate, collection_count, publish_time,
                     duration, video_score, product_id, product_thumbnail, product_title,
                     product_price, product_rating, product_category_en, product_category_cn,
                     product_commission, product_sales, created_date, data_source)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''', (
                    row.get('视频封面', ''),
                    row.get('主营类目', ''),
                    row.get('视频链接', ''),
                    row.get('视频标题', ''),
                    row.get('达人名称', ''),
                    row.get('达人账号', ''),
                    row.get('达人主页', ''),
                    row.get('达人头像', ''),
                    int(row.get('点赞数', 0) or 0),
                    int(row.get('播放量', 0) or 0),
                    int(row.get('评论数', 0) or 0),
                    0,  # share_count not in dataset
                    float(row.get('互动率（百分比）', 0.0) or 0.0),
                    int(row.get('收藏数', 0) or 0),
                    row.get('发布日期', ''),
                    int(row.get('视频时长（秒）', 0) or 0),
                    0.0,  # video_score not in dataset
                    row.get('commodityId', ''),
                    row.get('商品头像', ''),
                    row.get('商品名称', ''),
                    float(row.get('商品价格', 0.0) or 0.0),
                    float(row.get('商品星级', 0.0) or 0.0),
                    row.get('商品类目', ''),
                    row.get('commodityCategoryCn', ''),
                    int(row.get('商品销量', 0) or 0),
                    float(row.get('商品销售额', 0.0) or 0.0),
                    datetime.now().strftime('%Y-%m-%d'),
                    'RobotVacuum_tiktok_videos'
                ))
                imported += 1
            except Exception as e:
                print(f"Error processing video row: {e}")
                continue
    
    conn.commit()
    conn.close()
    print(f"Imported {imported} TikTok videos")

def import_amazon_reviews():
    """Import Amazon reviews data"""
    print("\n=== Importing Amazon Reviews ===")
    
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    csv_file = '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/robot vacuum_B0DCFNZF32_202503.csv'
    
    if not os.path.exists(csv_file):
        print(f"Warning: File not found: {csv_file}")
        return
    
    imported = 0
    with open(csv_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        print(f"Headers: {reader.fieldnames}")
        
        for row in reader:
            if not row.get('ASIN') or not row.get('评论ID'):
                continue
            
            try:
                cursor.execute('''
                    INSERT OR IGNORE INTO amazon_reviews 
                    (country_site, asin, review_id, review_title, product_attributes,
                     review_content, vp_flag, star_rating, author, review_time,
                     created_date, data_source)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''', (
                    row.get('国家站点', ''),
                    row.get('ASIN', ''),
                    row.get('评论ID', ''),
                    row.get('评论标题', ''),
                    row.get('属性', ''),
                    row.get('评论内容', ''),
                    row.get('VP标识', ''),
                    int(row.get('星级', 0) or 0),
                    row.get('作者', ''),
                    row.get('评论时间', ''),
                    datetime.now().strftime('%Y-%m-%d'),
                    'robot_vacuum_B0DCFNZF32_202503'
                ))
                imported += 1
            except Exception as e:
                print(f"Error processing review row: {e}")
                continue
    
    conn.commit()
    conn.close()
    print(f"Imported {imported} Amazon reviews")

def import_youtube_comments():
    """Import YouTube comments data"""
    print("\n=== Importing YouTube Comments ===")
    
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    csv_file = '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/social_youtube_robotvacuum_voc.csv'
    
    if not os.path.exists(csv_file):
        print(f"Warning: File not found: {csv_file}")
        return
    
    imported = 0
    with open(csv_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        print(f"Headers: {reader.fieldnames}")
        
        for row in reader:
            if not row.get('cid'):
                continue
            
            try:
                cursor.execute('''
                    INSERT OR IGNORE INTO youtube_comments 
                    (author, author_is_channel_owner, comment_id, comment_text, comments_count,
                     has_creator_heart, page_url, published_time_text, reply_count, reply_to_cid,
                     video_title, comment_type, video_id, vote_count, created_date, data_source)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''', (
                    row.get('author', ''),
                    row.get('authorIsChannelOwner', '').lower() == 'true',
                    row.get('cid', ''),
                    row.get('comment', ''),
                    int(row.get('commentsCount', 0) or 0),
                    row.get('hasCreatorHeart', '').lower() == 'true',
                    row.get('pageUrl', ''),
                    row.get('publishedTimeText', ''),
                    int(row.get('replyCount', 0) or 0),
                    row.get('replyToCid', ''),
                    row.get('title', ''),
                    row.get('type', ''),
                    row.get('videoId', ''),
                    int(row.get('voteCount', 0) or 0),
                    datetime.now().strftime('%Y-%m-%d'),
                    'social_youtube_robotvacuum_voc'
                ))
                imported += 1
            except Exception as e:
                print(f"Error processing YouTube comment row: {e}")
                continue
    
    conn.commit()
    conn.close()
    print(f"Imported {imported} YouTube comments")

def main():
    """Import all remaining categories"""
    print("Starting import of remaining data categories...")
    
    import_tiktok_products()
    import_tiktok_videos()
    import_amazon_reviews()
    import_youtube_comments()
    
    print("\n=== All Imports Completed ===")
    
    # Final statistics
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    tables = ['tiktok_products', 'tiktok_videos', 'amazon_reviews', 'youtube_comments']
    
    for table in tables:
        cursor.execute(f"SELECT COUNT(*) FROM {table}")
        count = cursor.fetchone()[0]
        print(f"{table}: {count} records")
    
    conn.close()

if __name__ == "__main__":
    main()