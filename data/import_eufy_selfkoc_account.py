#!/usr/bin/env python3
"""
Import script for eufy_selfkoc_account data into anker.db
Creates table and imports account data with proper schema and validation
"""

import sqlite3
import os
from datetime import datetime

def create_database_connection():
    """Create connection to anker.db database"""
    db_path = os.path.join(os.path.dirname(__file__), 'anker.db')
    return sqlite3.connect(db_path)

def create_eufy_selfkoc_account_table(cursor):
    """Create eufy_selfkoc_account table with proper schema"""
    create_table_sql = """
    CREATE TABLE IF NOT EXISTS eufy_selfkoc_account (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        brand TEXT NOT NULL,
        sub_brand TEXT NOT NULL,
        product TEXT NOT NULL,
        selfkoc_account TEXT NOT NULL,
        selfkoc_url TEXT NOT NULL,
        created_date TEXT DEFAULT (datetime('now')),
        UNIQUE(selfkoc_account, product)
    );
    """
    
    cursor.execute(create_table_sql)
    
    # Create indexes for performance optimization
    indexes = [
        "CREATE INDEX IF NOT EXISTS idx_selfkoc_account_brand ON eufy_selfkoc_account(brand);",
        "CREATE INDEX IF NOT EXISTS idx_selfkoc_account_product ON eufy_selfkoc_account(product);", 
        "CREATE INDEX IF NOT EXISTS idx_selfkoc_account_name ON eufy_selfkoc_account(selfkoc_account);",
        "CREATE INDEX IF NOT EXISTS idx_selfkoc_account_subbrand ON eufy_selfkoc_account(sub_brand);"
    ]
    
    for index_sql in indexes:
        cursor.execute(index_sql)
    
    print("✅ Created eufy_selfkoc_account table with indexes")

def insert_account_data(cursor):
    """Insert eufy_selfkoc_account data"""
    
    # Sample data from the provided table
    account_data = [
        ('anker', 'eufy', 'c20', 'luckyybvswewc', 'https://www.tiktok.com/@luckyybvswewc?_t=ZP-8um7BZznANy&_r=1'),
        ('anker', 'eufy', 'c20', 'daisywilson6', 'https://www.tiktok.com/@daisywilson6?_t=ZT-8um7BoZqXjq&_r=1'),
        ('anker', 'eufy', 'c20', 'jacekdrz', 'https://www.tiktok.com/@jacekdrz?_t=ZT-8um7Ap8clZ8&_r=1'),
        ('anker', 'eufy', 'c20', 'smithluiio', 'https://www.tiktok.com/@smithluiio?_t=ZP-8um7CGfIApS&_r=1'),
        ('anker', 'eufy', 'c20', 'johnsturgis6', 'https://www.tiktok.com/@johnsturgis6?_t=ZP-8um7Cg6MPJm&_r=1'),
        ('anker', 'eufy', 'c20', 'joelsoares081', 'https://www.tiktok.com/@joelsoares081?_t=ZP-8ulG0JhIQb0&_r=1'),
        ('anker', 'eufy', 'c20', 'annabwlxgie', 'https://www.tiktok.com/@annabwlxgie?_t=ZP-8ulFzOpZrtW&_r=1'),
        ('anker', 'eufy', 'c20', 'nikiaten07', 'https://www.tiktok.com/@nikiaten07?_t=ZT-8ulFyW1Joxa&_r=1'),
        ('anker', 'eufy', 'c20', 'kevinpotter66', 'https://www.tiktok.com/@kevinpotter66?_t=ZT-8uNTFw32C3a&_r=1'),
        ('anker', 'eufy', 'c20', 'jasonken66', 'https://www.tiktok.com/@jasonken66?_t=ZP-8uNTFPIN1yA&_r=1'),
        ('anker', 'eufy', 'c20', 'marvinslade3', 'https://www.tiktok.com/@marvinslade3?_t=ZT-8uNTGxv5IQF&_r=1'),
        ('anker', 'eufy', 'c20', 'yummyslifeee', 'https://www.tiktok.com/@yummyslifeee?_t=ZP-8vaI0OqtILv&_r=1'),
        ('anker', 'eufy', 'c20', 'winds1255', 'https://www.tiktok.com/@winds1255?_t=ZT-8vaHzGCRzIs&_r=1'),
        ('anker', 'eufy', 'c20', 'tears0093', 'https://www.tiktok.com/@tears0093?_t=ZP-8vaI1UrGBAs&_r=1'),
        ('anker', 'eufy', 'c20', 'balledjyoj9', 'https://www.tiktok.com/@balledjyoj9?_t=ZT-8vb1wiEh3TK&_r=1'),
        ('anker', 'eufy', 'c20', 'ovoo2112', 'https://www.tiktok.com/@ovoo2112?_t=ZP-8vb1yTck5Xy&_r=1'),
        ('anker', 'eufy', 'c20', 'koily121', 'https://www.tiktok.com/@koily121?_t=ZP-8vb1xTyNsly&_r=1'),
        ('anker', 'eufy', 'Camera', 'sherice396', 'https://www.tiktok.com/@sherice396?_t=ZT-8vgXgUgxUNO&_r=1'),
        ('anker', 'eufy', 'Camera', 'mariawezjg1', 'https://www.tiktok.com/@mariawezjg1?_t=ZT-8vgXcdkzjp5&_r=1'),
        ('anker', 'eufy', 'Camera', 'uhefipnkybw', 'https://www.tiktok.com/@uhefipnkybw?_t=ZT-8vgX8LFuskU&_r=1'),
        ('anker', 'eufy', 'Camera', 'ansimey', 'https://www.tiktok.com/@ansimey?_t=ZP-8vgXPv1Mpx9&_r=1'),
        ('anker', 'eufy', 'Camera', 'suuuuupoido', 'https://www.tiktok.com/@suuuuupoido'),
        ('anker', 'eufy', 'Camera', 'suuupoido', 'https://www.tiktok.com/@suuupoido'),
        ('anker', 'eufy', 'Camera', 'yummyslifeee', 'https://www.tiktok.com/@yummyslifeee'),
        ('anker', 'eufy', 'Camera', 'leosterling66', 'https://www.tiktok.com/@leosterling66')
    ]
    
    insert_sql = """
    INSERT OR IGNORE INTO eufy_selfkoc_account 
    (brand, sub_brand, product, selfkoc_account, selfkoc_url)
    VALUES (?, ?, ?, ?, ?)
    """
    
    inserted_count = 0
    for data in account_data:
        try:
            cursor.execute(insert_sql, data)
            if cursor.rowcount > 0:
                inserted_count += 1
        except Exception as e:
            print(f"❌ Error inserting {data[3]}: {e}")
    
    print(f"✅ Successfully inserted {inserted_count} account records")
    return inserted_count

def generate_summary_report(cursor):
    """Generate summary report of imported data"""
    print("\n" + "="*60)
    print("📊 EUFY SELFKOC ACCOUNT IMPORT SUMMARY")
    print("="*60)
    
    # Total records
    cursor.execute("SELECT COUNT(*) FROM eufy_selfkoc_account")
    total_records = cursor.fetchone()[0]
    print(f"📈 Total Records: {total_records}")
    
    # Records by product
    cursor.execute("""
        SELECT product, COUNT(*) as count 
        FROM eufy_selfkoc_account 
        GROUP BY product 
        ORDER BY count DESC
    """)
    products = cursor.fetchall()
    print(f"\n📦 Records by Product:")
    for product, count in products:
        print(f"   • {product}: {count} accounts")
    
    # Records by brand
    cursor.execute("""
        SELECT brand, sub_brand, COUNT(*) as count 
        FROM eufy_selfkoc_account 
        GROUP BY brand, sub_brand 
        ORDER BY count DESC
    """)
    brands = cursor.fetchall()
    print(f"\n🏷️  Records by Brand:")
    for brand, sub_brand, count in brands:
        print(f"   • {brand} {sub_brand}: {count} accounts")
    
    # Sample accounts
    cursor.execute("""
        SELECT selfkoc_account, product, selfkoc_url 
        FROM eufy_selfkoc_account 
        ORDER BY id 
        LIMIT 5
    """)
    samples = cursor.fetchall()
    print(f"\n👥 Sample Accounts:")
    for account, product, url in samples:
        print(f"   • @{account} ({product}): {url[:50]}...")
    
    print("="*60)

def main():
    """Main execution function"""
    print("🚀 Starting eufy_selfkoc_account data import...")
    
    try:
        # Create database connection
        conn = create_database_connection()
        cursor = conn.cursor()
        
        # Create table and indexes
        create_eufy_selfkoc_account_table(cursor)
        
        # Insert data
        inserted_count = insert_account_data(cursor)
        
        # Commit changes
        conn.commit()
        
        # Generate summary report
        generate_summary_report(cursor)
        
        print(f"\n✅ Import completed successfully! {inserted_count} new records added.")
        
    except Exception as e:
        print(f"❌ Import failed: {e}")
        if 'conn' in locals():
            conn.rollback()
    finally:
        if 'conn' in locals():
            conn.close()

if __name__ == "__main__":
    main()