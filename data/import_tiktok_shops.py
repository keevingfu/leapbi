#!/usr/bin/env python3
"""
Import TikTok shops data into anker.db
Handles TikTok shop profile data
"""

import sqlite3
import csv
import os
from datetime import datetime

def import_tiktok_shops():
    """Import TikTok shops data from CSV files"""
    
    # Database connection
    db_path = '/Users/cavin/Desktop/anker/creative-ai-system/data/anker.db'
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # TikTok shops files
    csv_files = [
        '/Users/cavin/Desktop/anker/creative-ai-system/data/Eufy/RobotVacuum_tiktok_shop.csv'
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
                    if not row.get('店铺名字'):
                        continue
                    
                    try:
                        cursor.execute('''
                            INSERT OR IGNORE INTO tiktok_shops 
                            (shop_icon, shop_name, region, main_category,
                             product_count, shop_rating, sales_volume, sales_growth_rate,
                             creator_count, shop_type, created_date, data_source)
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                        ''', (
                            row.get('店铺图标', ''),
                            row.get('店铺名字', ''),
                            row.get('地区', ''),
                            row.get('主营类目', ''),
                            int(row.get('在售商品数', 0) or 0),
                            float(row.get('店铺评分', 0.0) or 0.0),
                            int(row.get('销量', 0) or 0),
                            float(row.get('销量环比（百分比）', 0.0) or 0.0),
                            int(row.get('关联达人数量', 0) or 0),
                            row.get('店铺类型', ''),
                            datetime.now().strftime('%Y-%m-%d'),
                            'RobotVacuum_tiktok_shop'
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
    print(f"\n=== TikTok Shops Import Summary ===")
    print(f"Total records imported: {total_imported}")
    print(f"Import timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    print(f"\nFile-by-file breakdown:")
    for detail in import_details:
        print(f"  {detail['file']}: {detail['imported']} records")
    
    # Get final table statistics
    cursor.execute("SELECT COUNT(*) FROM tiktok_shops")
    total_records = cursor.fetchone()[0]
    print(f"\nTotal records in tiktok_shops table: {total_records}")
    
    # Top shops analysis
    cursor.execute('''
        SELECT shop_name, region, sales_volume, shop_rating, product_count
        FROM tiktok_shops 
        ORDER BY sales_volume DESC 
        LIMIT 10
    ''')
    
    print(f"\nTop shops by sales volume:")
    for row in cursor.fetchall():
        name, region, sales, rating, products = row
        print(f"  {name} ({region}): {sales:,} sales, {rating} rating, {products} products")
    
    # Shop type distribution
    cursor.execute('''
        SELECT shop_type, COUNT(*) as shop_count, AVG(sales_volume) as avg_sales
        FROM tiktok_shops 
        GROUP BY shop_type 
        ORDER BY shop_count DESC
    ''')
    
    print(f"\nShop type distribution:")
    for row in cursor.fetchall():
        shop_type, count, avg_sales = row
        print(f"  {shop_type}: {count} shops, {avg_sales:.0f} avg sales")
    
    conn.close()
    print(f"\nTikTok shops import completed successfully!")

if __name__ == "__main__":
    import_tiktok_shops()