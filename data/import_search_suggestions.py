#!/usr/bin/env python3
"""
Script to import search suggestions from CSV files into SQLite database
"""

import sqlite3
import csv
import os
from datetime import datetime

def import_csv_to_db(csv_file_path, db_path, data_source=None):
    """
    Import search suggestions from CSV file to SQLite database
    
    Args:
        csv_file_path: Path to the CSV file
        db_path: Path to the SQLite database
        data_source: Optional data source identifier
    """
    
    if not os.path.exists(csv_file_path):
        print(f"Error: CSV file not found: {csv_file_path}")
        return
    
    if not os.path.exists(db_path):
        print(f"Error: Database file not found: {db_path}")
        return
    
    # Extract date from filename if not provided
    if data_source is None:
        filename = os.path.basename(csv_file_path)
        data_source = filename
    
    # Connect to database
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Prepare insert statement
    insert_query = """
    INSERT OR IGNORE INTO search_suggestions 
    (modifier_type, modifier, suggestion, language, region, keyword, 
     search_volume, cost_per_click, created_date, data_source)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """
    
    imported_count = 0
    skipped_count = 0
    error_count = 0
    
    try:
        with open(csv_file_path, 'r', encoding='utf-8') as csvfile:
            # Skip the first line if it's a title line
            first_line = csvfile.readline()
            
            # Reset to beginning if first line is the header
            if not first_line.startswith('Modifier Type'):
                csvfile.seek(0)
            
            reader = csv.DictReader(csvfile)
            
            for row_num, row in enumerate(reader, start=2):
                try:
                    # Extract data from row
                    modifier_type = row.get('Modifier Type', '').strip()
                    modifier = row.get('Modifier', '').strip() if row.get('Modifier') else None
                    suggestion = row.get('Suggestion', '').strip()
                    language = row.get('Language', '').strip()
                    region = row.get('Region', '').strip()
                    keyword = row.get('Keyword', '').strip()
                    
                    # Handle search volume - convert to integer if present
                    search_volume = None
                    if row.get('Search Volume'):
                        try:
                            search_volume = int(row['Search Volume'])
                        except ValueError:
                            pass
                    
                    # Handle cost per click - convert to float if present
                    cost_per_click = None
                    if row.get('Cost Per Click'):
                        try:
                            cost_per_click = float(row['Cost Per Click'])
                        except ValueError:
                            pass
                    
                    # Skip if essential fields are missing
                    if not all([modifier_type, suggestion, language, region, keyword]):
                        print(f"Row {row_num}: Skipping - missing required fields")
                        skipped_count += 1
                        continue
                    
                    # Insert into database
                    cursor.execute(insert_query, (
                        modifier_type,
                        modifier,
                        suggestion,
                        language,
                        region,
                        keyword,
                        search_volume,
                        cost_per_click,
                        datetime.now().isoformat(),
                        data_source
                    ))
                    
                    imported_count += 1
                    
                except Exception as e:
                    print(f"Row {row_num}: Error - {str(e)}")
                    error_count += 1
                    continue
            
        # Commit changes
        conn.commit()
        
        print(f"\nImport Summary:")
        print(f"- Successfully imported: {imported_count} records")
        print(f"- Skipped (missing data): {skipped_count} records")
        print(f"- Errors: {error_count} records")
        print(f"- Total rows processed: {imported_count + skipped_count + error_count}")
        
        # Show sample of imported data
        cursor.execute("""
            SELECT COUNT(*) as total,
                   COUNT(DISTINCT modifier_type) as unique_types,
                   COUNT(DISTINCT suggestion) as unique_suggestions,
                   AVG(search_volume) as avg_search_volume
            FROM search_suggestions
            WHERE data_source = ?
        """, (data_source,))
        
        stats = cursor.fetchone()
        print(f"\nDatabase Statistics for {data_source}:")
        print(f"- Total records: {stats[0]}")
        print(f"- Unique modifier types: {stats[1]}")
        print(f"- Unique suggestions: {stats[2]}")
        print(f"- Average search volume: {stats[3]:.2f}" if stats[3] else "- Average search volume: N/A")
        
    except Exception as e:
        print(f"Error reading CSV file: {str(e)}")
        conn.rollback()
    
    finally:
        conn.close()

def main():
    """Main function to run the import"""
    
    # Configuration
    base_dir = "/Users/cavin/Desktop/anker/creative-ai-system/data"
    db_path = os.path.join(base_dir, "anker.db")
    
    # CSV files to import
    csv_files = [
        "eufy robot vacuumenussuggestions24022025.csv",
        "eufyrobot vacuumensuggestions20242025.csv"
    ]
    
    print("Starting import process...")
    print(f"Database: {db_path}")
    print()
    
    for csv_file in csv_files:
        csv_path = os.path.join(base_dir, csv_file)
        if os.path.exists(csv_path):
            print(f"Importing: {csv_file}")
            import_csv_to_db(csv_path, db_path, csv_file)
            print("-" * 50)
        else:
            print(f"Warning: File not found - {csv_file}")
            print("-" * 50)
    
    # Display final database summary
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    cursor.execute("""
        SELECT COUNT(*) as total_records,
               COUNT(DISTINCT suggestion) as unique_suggestions,
               COUNT(DISTINCT data_source) as data_sources
        FROM search_suggestions
    """)
    
    final_stats = cursor.fetchone()
    print("\nFinal Database Summary:")
    print(f"- Total records: {final_stats[0]}")
    print(f"- Unique suggestions: {final_stats[1]}")
    print(f"- Data sources: {final_stats[2]}")
    
    # Show top search volume suggestions
    print("\nTop 10 Suggestions by Search Volume:")
    cursor.execute("""
        SELECT suggestion, search_volume, modifier_type
        FROM search_suggestions
        WHERE search_volume IS NOT NULL
        ORDER BY search_volume DESC
        LIMIT 10
    """)
    
    for i, (suggestion, volume, type_) in enumerate(cursor.fetchall(), 1):
        print(f"{i}. {suggestion} (Volume: {volume}, Type: {type_})")
    
    conn.close()

if __name__ == "__main__":
    main()
