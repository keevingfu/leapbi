#!/usr/bin/env python3
"""
Create insight_tk table and import data from insight_kol_videos.csv
Comprehensive KOL video insights analysis for TikTok content performance
"""

import sqlite3
import csv
import os
from datetime import datetime

def create_insight_tk_table():
    """Create insight_tk table with comprehensive schema"""
    
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Drop table if exists to recreate with proper schema
    cursor.execute('DROP TABLE IF EXISTS insight_tk')
    
    # Create insight_tk table with optimized schema
    cursor.execute('''
        CREATE TABLE insight_tk (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            kol_video_id TEXT NOT NULL UNIQUE,
            kol_title TEXT NOT NULL,
            kol_views INTEGER DEFAULT 0,
            kol_likes INTEGER DEFAULT 0,
            kol_comments INTEGER DEFAULT 0,
            kol_video_url TEXT NOT NULL,
            engagement_rate REAL DEFAULT 0.0,
            virality_score REAL DEFAULT 0.0,
            content_category TEXT DEFAULT 'General',
            brand_mentions TEXT DEFAULT '',
            hashtag_count INTEGER DEFAULT 0,
            created_date TEXT DEFAULT (datetime('now')),
            data_source TEXT DEFAULT 'insight_kol_videos',
            last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Create indexes for optimized queries
    cursor.execute('CREATE INDEX idx_insight_tk_video_id ON insight_tk(kol_video_id)')
    cursor.execute('CREATE INDEX idx_insight_tk_views ON insight_tk(kol_views)')
    cursor.execute('CREATE INDEX idx_insight_tk_engagement ON insight_tk(engagement_rate)')
    cursor.execute('CREATE INDEX idx_insight_tk_category ON insight_tk(content_category)')
    
    conn.commit()
    conn.close()
    
    print("✅ insight_tk table created successfully with optimized schema")

def analyze_content_category(title):
    """Analyze content and categorize based on keywords"""
    title_lower = title.lower()
    
    # Brand and product categories
    if any(brand in title_lower for brand in ['eufy', 'anker', 'soundcore']):
        return 'Anker Products'
    elif any(brand in title_lower for brand in ['miniso', 'himalaya', 'jbl', 'insta360']):
        return 'Partner Brands'
    elif any(keyword in title_lower for keyword in ['vacuum', 'robot', 'clean', 'mop']):
        return 'Home Appliances'
    elif any(keyword in title_lower for keyword in ['headphones', 'earbuds', 'speaker', 'audio']):
        return 'Audio Electronics'
    elif any(keyword in title_lower for keyword in ['phone', 'charger', 'powerbank', 'tech']):
        return 'Mobile Tech'
    elif any(keyword in title_lower for keyword in ['camera', 'photo', 'video', 'shot']):
        return 'Photography'
    elif any(keyword in title_lower for keyword in ['diamond', 'mining', 'gold', 'treasure']):
        return 'Entertainment'
    elif any(keyword in title_lower for keyword in ['camping', 'outdoor', 'survival', 'travel']):
        return 'Outdoor Lifestyle'
    else:
        return 'General Content'

def extract_brand_mentions(title):
    """Extract brand mentions from video title"""
    brands = []
    title_lower = title.lower()
    
    brand_list = ['eufy', 'anker', 'soundcore', 'miniso', 'himalaya', 'jbl', 'insta360', 
                  'poco', 'xiaomi', 'mediatek', 'foodpanda', 'minecraft']
    
    for brand in brand_list:
        if brand in title_lower:
            brands.append(brand.title())
    
    return ', '.join(brands) if brands else 'None'

def count_hashtags(title):
    """Count hashtags in video title"""
    return title.count('#')

def calculate_engagement_rate(views, likes, comments):
    """Calculate engagement rate as percentage"""
    if views == 0:
        return 0.0
    return ((likes + comments) / views) * 100

def calculate_virality_score(views, likes, comments):
    """Calculate virality score based on engagement metrics"""
    if views == 0:
        return 0.0
    
    # Weighted formula: views weight 40%, likes 40%, comments 20%
    normalized_views = min(views / 10000000, 1.0)  # Normalize to 10M views max
    normalized_likes = min(likes / 500000, 1.0)    # Normalize to 500K likes max
    normalized_comments = min(comments / 50000, 1.0)  # Normalize to 50K comments max
    
    virality_score = (normalized_views * 0.4 + normalized_likes * 0.4 + normalized_comments * 0.2) * 100
    return round(virality_score, 2)

def import_insight_kol_videos():
    """Import data from insight_kol_videos.csv into insight_tk table"""
    
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    csv_file = '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/insight_kol_videos.csv'
    
    if not os.path.exists(csv_file):
        print(f"❌ Error: File not found: {csv_file}")
        return
    
    print(f"📁 Processing file: {csv_file}")
    
    imported_count = 0
    error_count = 0
    
    with open(csv_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        
        print(f"📋 CSV Headers: {reader.fieldnames}")
        
        for row_num, row in enumerate(reader, 2):  # Start from row 2 (after header)
            # Skip rows with empty essential fields
            if not row.get('kol_video_id') or not row.get('kol_video_url'):
                continue
            
            try:
                # Clean and convert data
                video_id = str(row.get('kol_video_id', '')).strip()
                title = row.get('kol_title', '').strip()
                views = int(row.get('kol_views', 0) or 0)
                likes = int(row.get('kol_likes', 0) or 0)
                comments = int(row.get('kol_comments', 0) or 0)
                video_url = row.get('kol_video_url', '').strip()
                
                # Calculate derived metrics
                engagement_rate = calculate_engagement_rate(views, likes, comments)
                virality_score = calculate_virality_score(views, likes, comments)
                content_category = analyze_content_category(title)
                brand_mentions = extract_brand_mentions(title)
                hashtag_count = count_hashtags(title)
                
                # Insert into database
                cursor.execute('''
                    INSERT OR IGNORE INTO insight_tk 
                    (kol_video_id, kol_title, kol_views, kol_likes, kol_comments, 
                     kol_video_url, engagement_rate, virality_score, content_category,
                     brand_mentions, hashtag_count, created_date, data_source)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''', (
                    video_id, title, views, likes, comments, video_url,
                    engagement_rate, virality_score, content_category,
                    brand_mentions, hashtag_count,
                    datetime.now().strftime('%Y-%m-%d'),
                    'insight_kol_videos'
                ))
                
                imported_count += 1
                
                # Progress indicator for every 100 records
                if imported_count % 100 == 0:
                    print(f"📊 Processed {imported_count} records...")
                
            except (ValueError, TypeError) as e:
                error_count += 1
                print(f"⚠️  Error processing row {row_num}: {e}")
                continue
    
    conn.commit()
    
    # Generate comprehensive import summary
    print(f"\n{'='*60}")
    print(f"📈 INSIGHT KOL VIDEOS IMPORT SUMMARY")
    print(f"{'='*60}")
    print(f"✅ Records imported: {imported_count:,}")
    print(f"❌ Errors encountered: {error_count}")
    print(f"📁 Source file: insight_kol_videos.csv")
    print(f"🗄️  Target table: insight_tk")
    print(f"⏰ Import completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Get table statistics
    cursor.execute("SELECT COUNT(*) FROM insight_tk")
    total_records = cursor.fetchone()[0]
    
    cursor.execute("SELECT AVG(kol_views), AVG(kol_likes), AVG(kol_comments) FROM insight_tk")
    avg_stats = cursor.fetchone()
    
    cursor.execute("SELECT MAX(kol_views), MAX(kol_likes), MAX(kol_comments) FROM insight_tk")
    max_stats = cursor.fetchone()
    
    print(f"\n📊 TABLE STATISTICS:")
    print(f"   Total records in insight_tk: {total_records:,}")
    print(f"   Average views: {avg_stats[0]:,.0f}")
    print(f"   Average likes: {avg_stats[1]:,.0f}")
    print(f"   Average comments: {avg_stats[2]:,.0f}")
    print(f"   Max views: {max_stats[0]:,}")
    print(f"   Max likes: {max_stats[1]:,}")
    print(f"   Max comments: {max_stats[2]:,}")
    
    # Top performing videos analysis
    cursor.execute('''
        SELECT kol_title, kol_views, kol_likes, engagement_rate, content_category
        FROM insight_tk 
        ORDER BY kol_views DESC 
        LIMIT 5
    ''')
    
    print(f"\n🏆 TOP 5 VIDEOS BY VIEWS:")
    for i, video in enumerate(cursor.fetchall(), 1):
        title = video[0][:80] + "..." if len(video[0]) > 80 else video[0]
        print(f"   {i}. {title}")
        print(f"      📈 {video[1]:,} views | ❤️  {video[2]:,} likes | 📊 {video[3]:.2f}% engagement | 🏷️  {video[4]}")
        print()
    
    # Content category distribution
    cursor.execute('''
        SELECT content_category, COUNT(*) as video_count, AVG(kol_views) as avg_views
        FROM insight_tk 
        GROUP BY content_category 
        ORDER BY video_count DESC
    ''')
    
    print(f"🎯 CONTENT CATEGORY DISTRIBUTION:")
    for category, count, avg_views in cursor.fetchall():
        print(f"   {category}: {count} videos (avg: {avg_views:,.0f} views)")
    
    # Brand mentions analysis
    cursor.execute('''
        SELECT brand_mentions, COUNT(*) as mention_count
        FROM insight_tk 
        WHERE brand_mentions != 'None'
        GROUP BY brand_mentions 
        ORDER BY mention_count DESC
        LIMIT 10
    ''')
    
    print(f"\n🏷️  TOP BRAND MENTIONS:")
    for brand, count in cursor.fetchall():
        print(f"   {brand}: {count} videos")
    
    conn.close()
    print(f"\n🎉 Import process completed successfully!")

def main():
    """Main execution function"""
    print("🚀 Starting insight_tk table creation and data import...")
    
    # Step 1: Create table
    create_insight_tk_table()
    
    # Step 2: Import data
    import_insight_kol_videos()
    
    print("\n✨ All operations completed successfully!")

if __name__ == "__main__":
    main()