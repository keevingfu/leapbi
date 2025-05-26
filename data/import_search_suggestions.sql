-- Import search suggestions data
-- Generated on 2025-05-24
-- Source: eufy robot vacuumenussuggestions24022025.csv

BEGIN TRANSACTION;

-- Sample INSERT statements (showing first 10 for brevity)
INSERT OR IGNORE INTO search_suggestions (modifier_type, modifier, suggestion, language, region, keyword, search_volume, cost_per_click, created_date, data_source) VALUES ('Questions', 'how', 'how does eufy robot vacuum work', 'en', 'us', 'eufy robot vacuum', NULL, NULL, '2025-05-24', 'eufy robot vacuumenussuggestions24022025.csv');
INSERT OR IGNORE INTO search_suggestions (modifier_type, modifier, suggestion, language, region, keyword, search_volume, cost_per_click, created_date, data_source) VALUES ('Questions', 'how', 'how to clean eufy robot vacuum', 'en', 'us', 'eufy robot vacuum', 10, 0, '2025-05-24', 'eufy robot vacuumenussuggestions24022025.csv');
INSERT OR IGNORE INTO search_suggestions (modifier_type, modifier, suggestion, language, region, keyword, search_volume, cost_per_click, created_date, data_source) VALUES ('Questions', 'how', 'how to reset eufy robot vacuum', 'en', 'us', 'eufy robot vacuum', 20, 0, '2025-05-24', 'eufy robot vacuumenussuggestions24022025.csv');
INSERT OR IGNORE INTO search_suggestions (modifier_type, modifier, suggestion, language, region, keyword, search_volume, cost_per_click, created_date, data_source) VALUES ('Questions', 'how', 'how to connect eufy robot vacuum to wifi', 'en', 'us', 'eufy robot vacuum', 10, 0, '2025-05-24', 'eufy robot vacuumenussuggestions24022025.csv');
INSERT OR IGNORE INTO search_suggestions (modifier_type, modifier, suggestion, language, region, keyword, search_volume, cost_per_click, created_date, data_source) VALUES ('Questions', 'how', 'how to empty eufy robot vacuum', 'en', 'us', 'eufy robot vacuum', NULL, NULL, '2025-05-24', 'eufy robot vacuumenussuggestions24022025.csv');

COMMIT;

-- Verify import
SELECT 
    COUNT(*) as total_records,
    COUNT(DISTINCT suggestion) as unique_suggestions,
    COUNT(CASE WHEN search_volume IS NOT NULL THEN 1 END) as records_with_volume,
    AVG(CASE WHEN search_volume IS NOT NULL THEN search_volume END) as avg_search_volume,
    MAX(search_volume) as max_search_volume
FROM search_suggestions
WHERE data_source = 'eufy robot vacuumenussuggestions24022025.csv';
