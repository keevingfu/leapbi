#!/usr/bin/env python3
"""
Complete Amazon Reviews Import Script
Import all data from robot vacuum_B0DCFNZF32_202503.csv into amazon_reviews table
"""

import sqlite3
import csv
import os
from datetime import datetime

def import_amazon_reviews_complete():
    """Import all Amazon reviews data from CSV file"""
    
    print("🚀 Starting Amazon Reviews Complete Import Process...")
    
    # Database connection
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # CSV file path
    csv_file = '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/robot vacuum_B0DCFNZF32_202503.csv'
    
    if not os.path.exists(csv_file):
        print(f"❌ Error: File not found: {csv_file}")
        return
    
    print(f"📁 Processing file: {csv_file}")
    
    # Clear existing data from this source to avoid duplicates
    cursor.execute("DELETE FROM amazon_reviews WHERE data_source = 'robot_vacuum_B0DCFNZF32_202503'")
    deleted_count = cursor.rowcount
    print(f"🗑️  Cleared {deleted_count} existing records from this data source")
    
    imported_count = 0
    error_count = 0
    skipped_count = 0
    
    try:
        with open(csv_file, 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            
            # Display headers
            print(f"📋 CSV Headers: {reader.fieldnames}")
            
            # Process each row
            for row_num, row in enumerate(reader, 2):  # Start from row 2 (after header)
                
                # Skip rows with missing essential fields
                if not row.get('ASIN') or not row.get('评论ID'):
                    skipped_count += 1
                    continue
                
                try:
                    # Extract and clean data
                    country_site = row.get('国家站点', '').strip()
                    asin = row.get('ASIN', '').strip()
                    review_id = row.get('评论ID', '').strip()
                    review_title = row.get('评论标题', '').strip()
                    product_attributes = row.get('属性', '').strip()
                    review_content = row.get('评论内容', '').strip()
                    vp_flag = row.get('VP标识', '').strip()
                    star_rating = int(row.get('星级', 0) or 0)
                    author = row.get('作者', '').strip()
                    review_time = row.get('评论时间', '').strip()
                    
                    # Insert into database
                    cursor.execute('''
                        INSERT OR REPLACE INTO amazon_reviews 
                        (country_site, asin, review_id, review_title, product_attributes,
                         review_content, vp_flag, star_rating, author, review_time,
                         created_date, data_source)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    ''', (
                        country_site, asin, review_id, review_title, product_attributes,
                        review_content, vp_flag, star_rating, author, review_time,
                        datetime.now().strftime('%Y-%m-%d'),
                        'robot_vacuum_B0DCFNZF32_202503'
                    ))
                    
                    imported_count += 1
                    
                    # Progress indicator for every 1000 records
                    if imported_count % 1000 == 0:
                        print(f"📊 Processed {imported_count:,} records...")
                
                except (ValueError, TypeError, sqlite3.Error) as e:
                    error_count += 1
                    if error_count <= 10:  # Show only first 10 errors
                        print(f"⚠️  Error processing row {row_num}: {e}")
                    elif error_count == 11:
                        print(f"⚠️  ... (suppressing further error messages)")
                    continue
        
        # Commit all changes
        conn.commit()
        
        # Generate comprehensive import summary
        print(f"\n{'='*70}")
        print(f"📈 AMAZON REVIEWS IMPORT SUMMARY")
        print(f"{'='*70}")
        print(f"✅ Successfully imported: {imported_count:,} records")
        print(f"⚠️  Errors encountered: {error_count:,}")
        print(f"⏭️  Skipped (missing data): {skipped_count:,}")
        print(f"📁 Source file: robot vacuum_B0DCFNZF32_202503.csv")
        print(f"🗄️  Target table: amazon_reviews")
        print(f"⏰ Import completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        
        # Get final table statistics
        cursor.execute("SELECT COUNT(*) FROM amazon_reviews")
        total_records = cursor.fetchone()[0]
        
        cursor.execute('''
            SELECT COUNT(*) FROM amazon_reviews 
            WHERE data_source = 'robot_vacuum_B0DCFNZF32_202503'
        ''')
        source_records = cursor.fetchone()[0]
        
        print(f"\n📊 TABLE STATISTICS:")
        print(f"   Total records in amazon_reviews: {total_records:,}")
        print(f"   Records from this import: {source_records:,}")
        
        # Star rating distribution
        cursor.execute('''
            SELECT star_rating, COUNT(*) as count
            FROM amazon_reviews 
            WHERE data_source = 'robot_vacuum_B0DCFNZF32_202503'
            GROUP BY star_rating 
            ORDER BY star_rating DESC
        ''')
        
        print(f"\n⭐ STAR RATING DISTRIBUTION:")
        total_rated = sum(count for _, count in cursor.fetchall())
        cursor.execute('''
            SELECT star_rating, COUNT(*) as count
            FROM amazon_reviews 
            WHERE data_source = 'robot_vacuum_B0DCFNZF32_202503'
            GROUP BY star_rating 
            ORDER BY star_rating DESC
        ''')
        
        for rating, count in cursor.fetchall():
            percentage = (count / total_rated * 100) if total_rated > 0 else 0
            stars = '⭐' * rating if rating > 0 else '❌'
            print(f"   {stars} {rating} star: {count:,} reviews ({percentage:.1f}%)")
        
        # Average rating
        cursor.execute('''
            SELECT AVG(CAST(star_rating AS REAL)) as avg_rating
            FROM amazon_reviews 
            WHERE data_source = 'robot_vacuum_B0DCFNZF32_202503' AND star_rating > 0
        ''')
        avg_rating = cursor.fetchone()[0]
        print(f"\n📈 AVERAGE RATING: {avg_rating:.2f} stars")
        
        # Verified purchase analysis
        cursor.execute('''
            SELECT vp_flag, COUNT(*) as count
            FROM amazon_reviews 
            WHERE data_source = 'robot_vacuum_B0DCFNZF32_202503'
            GROUP BY vp_flag
        ''')
        
        print(f"\n✅ VERIFIED PURCHASE ANALYSIS:")
        for vp_flag, count in cursor.fetchall():
            verified_text = "Verified Purchase" if vp_flag == "是" else "Not Verified"
            print(f"   {verified_text}: {count:,} reviews")
        
        # Recent reviews sample
        cursor.execute('''
            SELECT review_title, star_rating, author, review_time
            FROM amazon_reviews 
            WHERE data_source = 'robot_vacuum_B0DCFNZF32_202503'
            ORDER BY review_time DESC 
            LIMIT 5
        ''')
        
        print(f"\n📝 RECENT REVIEWS SAMPLE:")
        for title, rating, author, review_time in cursor.fetchall():
            short_title = title[:60] + "..." if len(title) > 60 else title
            stars = '⭐' * rating if rating > 0 else '❌'
            print(f"   {stars} \"{short_title}\" - {author} ({review_time})")
        
        # Product analysis
        cursor.execute('''
            SELECT asin, COUNT(*) as review_count
            FROM amazon_reviews 
            WHERE data_source = 'robot_vacuum_B0DCFNZF32_202503'
            GROUP BY asin 
            ORDER BY review_count DESC
        ''')
        
        print(f"\n🛍️  PRODUCT ANALYSIS:")
        for asin, review_count in cursor.fetchall():
            print(f"   ASIN {asin}: {review_count:,} reviews")
        
    except Exception as e:
        print(f"❌ Critical error during import: {e}")
        conn.rollback()
        return
    
    finally:
        conn.close()
    
    print(f"\n{'='*70}")
    print(f"🎉 AMAZON REVIEWS IMPORT COMPLETED SUCCESSFULLY!")
    print(f"{'='*70}")
    print(f"📊 {imported_count:,} Amazon reviews are now available for analysis")
    print(f"🔍 Data includes star ratings, review content, and verified purchase status")
    print(f"📈 Ready for sentiment analysis and customer feedback insights")
    print(f"{'='*70}")

if __name__ == "__main__":
    import_amazon_reviews_complete()