#!/usr/bin/env python3
"""
Import TikTok creators data into anker.db
Handles TikTok creator profile data
"""

import sqlite3
import csv
import os
from datetime import datetime

def import_tiktok_creators():
    """Import TikTok creators data from CSV files"""
    
    # Database connection
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # TikTok creators files
    csv_files = [
        '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/RobotVacuum_tiktok_creators.csv'
    ]
    
    total_imported = 0
    import_details = []
    
    for csv_file in csv_files:
        if not os.path.exists(csv_file):
            print(f"Warning: File not found: {csv_file}")
            continue
            
        print(f"Processing: {csv_file}")
        
        try:
            file_imported = 0
            with open(csv_file, 'r', encoding='utf-8-sig') as f:
                reader = csv.DictReader(f)
                
                # Debug: Print headers
                print(f"Headers found: {reader.fieldnames}")
                
                for row in reader:
                    # Validate required fields
                    if not row.get('达人账号'):
                        continue
                    
                    try:
                        cursor.execute('''
                            INSERT OR IGNORE INTO tiktok_creators 
                            (avatar, creator_name, creator_account, creator_url,
                             video_count, live_count, follower_count, follower_growth,
                             avg_views, product_count, recent_sales_amount, recent_sales_volume,
                             video_gpm, live_gpm, mcn, creator_type, created_date, data_source)
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                        ''', (
                            row.get('达人头像', ''),
                            row.get('达人名称', ''),
                            row.get('达人账号', ''),
                            row.get('达人主页链接', ''),
                            int(row.get('达人视频数', 0) or 0),
                            int(row.get('达人直播数', 0) or 0),
                            int(row.get('达人粉丝数', 0) or 0),
                            int(row.get('粉丝增长数', 0) or 0),
                            int(row.get('均播量', 0) or 0),
                            int(row.get('达人带货数', 0) or 0),
                            float(row.get('近30日销售额', 0.0) or 0.0),
                            int(row.get('近30日销量', 0) or 0),
                            float(row.get('视频GPM', 0.0) or 0.0),
                            float(row.get('直播GPM', 0.0) or 0.0),
                            row.get('MCN', ''),
                            row.get('达人类型', ''),
                            datetime.now().strftime('%Y-%m-%d'),
                            'RobotVacuum_tiktok_creators'
                        ))
                        file_imported += 1
                    except (ValueError, TypeError) as e:
                        print(f"Error processing row in {csv_file}: {e}")
                        continue
            
            conn.commit()
            total_imported += file_imported
            import_details.append({
                'file': os.path.basename(csv_file),
                'imported': file_imported
            })
            print(f"Imported {file_imported} records from {os.path.basename(csv_file)}")
            
        except Exception as e:
            print(f"Error processing {csv_file}: {e}")
            continue
    
    # Generate summary report
    print(f"\n=== TikTok Creators Import Summary ===")
    print(f"Total records imported: {total_imported}")
    print(f"Import timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    print(f"\nFile-by-file breakdown:")
    for detail in import_details:
        print(f"  {detail['file']}: {detail['imported']} records")
    
    # Get final table statistics
    cursor.execute("SELECT COUNT(*) FROM tiktok_creators")
    total_records = cursor.fetchone()[0]
    print(f"\nTotal records in tiktok_creators table: {total_records}")
    
    # Top creators analysis
    cursor.execute('''
        SELECT creator_name, creator_account, follower_count, video_count, recent_sales_amount
        FROM tiktok_creators 
        ORDER BY follower_count DESC 
        LIMIT 10
    ''')
    
    print(f"\nTop creators by follower count:")
    for row in cursor.fetchall():
        name, account, followers, videos, sales = row
        print(f"  {name} (@{account}): {followers:,} followers, {videos} videos, ${sales:.0f} sales")
    
    # Top performers by sales
    cursor.execute('''
        SELECT creator_name, creator_account, recent_sales_amount, recent_sales_volume, video_gpm
        FROM tiktok_creators 
        WHERE recent_sales_amount > 0
        ORDER BY recent_sales_amount DESC 
        LIMIT 5
    ''')
    
    print(f"\nTop performers by sales:")
    for row in cursor.fetchall():
        name, account, sales, volume, gpm = row
        print(f"  {name} (@{account}): ${sales:.0f} sales, {volume} volume, ${gpm:.1f} GPM")
    
    conn.close()
    print(f"\nTikTok creators import completed successfully!")

if __name__ == "__main__":
    import_tiktok_creators()