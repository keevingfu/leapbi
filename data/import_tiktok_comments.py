#!/usr/bin/env python3
"""
Import TikTok comments data into anker.db
Handles 4 CSV files with TikTok comment data
"""

import sqlite3
import csv
import os
from datetime import datetime

def import_tiktok_comments():
    """Import TikTok comments data from CSV files"""
    
    # Database connection
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # TikTok comments files
    csv_files = [
        '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/robot vacuum tiktok-comments-scraper_202502.csv',
        '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/vacuun_tiktok-comments_202502.csv',
        '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/social_tiktok_robotvacuum_anchorink_voc.csv',
        '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/social_tiktok_robotvacuum_pinnedpost_voc.csv'
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
                    if not row.get('cid') or not row.get('uid'):
                        continue
                    
                    try:
                        cursor.execute('''
                            INSERT OR IGNORE INTO tiktok_comments 
                            (cid, uid, unique_id, avatar_thumbnail, text, 
                             create_time, create_time_iso, digg_count, 
                             replies_to_id, reply_comment_total, submitted_video_url, video_web_url)
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                        ''', (
                            row.get('cid', ''),
                            row.get('uid', ''),
                            row.get('uniqueId', ''),
                            row.get('avatarThumbnail', ''),
                            row.get('text', ''),
                            int(row.get('createTime', 0) or 0),
                            row.get('createTimeISO', ''),
                            int(row.get('diggCount', 0) or 0),
                            row.get('repliesToId', ''),
                            int(row.get('replyCommentTotal', 0) or 0),
                            row.get('submittedVideoUrl', ''),
                            row.get('videoWebUrl', '')
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
    print(f"\n=== TikTok Comments Import Summary ===")
    print(f"Total records imported: {total_imported}")
    print(f"Import timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    print(f"\nFile-by-file breakdown:")
    for detail in import_details:
        print(f"  {detail['file']}: {detail['imported']} records")
    
    # Get final table statistics
    cursor.execute("SELECT COUNT(*) FROM tiktok_comments")
    total_records = cursor.fetchone()[0]
    print(f"\nTotal records in tiktok_comments table: {total_records}")
    
    # Top engagement analysis
    cursor.execute('''
        SELECT unique_id, COUNT(*) as comment_count, 
               AVG(digg_count) as avg_likes, AVG(reply_comment_total) as avg_replies
        FROM tiktok_comments 
        WHERE unique_id != ''
        GROUP BY unique_id 
        ORDER BY comment_count DESC 
        LIMIT 10
    ''')
    
    print(f"\nTop commenters by volume:")
    for row in cursor.fetchall():
        username, count, avg_likes, avg_replies = row
        print(f"  {username}: {count} comments, {avg_likes:.1f} avg likes, {avg_replies:.1f} avg replies")
    
    conn.close()
    print(f"\nTikTok comments import completed successfully!")

if __name__ == "__main__":
    import_tiktok_comments()