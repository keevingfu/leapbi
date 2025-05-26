#!/usr/bin/env python3
"""
Simple script to quickly import CSV data into SQLite database
"""

import sqlite3
import pandas as pd
import os
from datetime import datetime

def import_csv_simple(csv_path, db_path):
    """Simple import using pandas"""
    
    # Read CSV, skipping the first title row
    df = pd.read_csv(csv_path, skiprows=1)
    
    # Clean column names (remove any leading/trailing spaces)
    df.columns = df.columns.str.strip()
    
    # Add metadata columns
    df['created_date'] = datetime.now().isoformat()
    df['data_source'] = os.path.basename(csv_path)
    
    # Rename columns to match database schema
    column_mapping = {
        'Modifier Type': 'modifier_type',
        'Modifier': 'modifier',
        'Suggestion': 'suggestion',
        'Language': 'language',
        'Region': 'region',
        'Keyword': 'keyword',
        'Search Volume': 'search_volume',
        'Cost Per Click': 'cost_per_click'
    }
    
    df.rename(columns=column_mapping, inplace=True)
    
    # Connect to database and import
    conn = sqlite3.connect(db_path)
    
    # Import to database (replace existing data)
    df.to_sql('search_suggestions', conn, if_exists='append', index=False)
    
    # Get statistics
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM search_suggestions")
    total_count = cursor.fetchone()[0]
    
    print(f"Successfully imported {len(df)} records")
    print(f"Total records in database: {total_count}")
    
    conn.close()

if __name__ == "__main__":
    base_dir = "/Users/cavin/Desktop/anker/creative-ai-system/data"
    db_path = os.path.join(base_dir, "anker.db")
    csv_path = os.path.join(base_dir, "eufy robot vacuumenussuggestions24022025.csv")
    
    print(f"Importing {csv_path} to {db_path}")
    import_csv_simple(csv_path, db_path)
