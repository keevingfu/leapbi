#!/bin/bash

echo "🔧 Fixing Lucide React icon imports..."

# Fix the navigation config file which still references TestTube
echo "Fixing navigation-config.ts..."
sed -i '' 's/TestTube/Beaker/g' /Users/cavin/Desktop/anker/creative-ai-system/src/navigation-config.ts

echo "✅ Icon fixes completed!"
echo "📋 Summary of changes:"
echo "  - TestTube → Beaker (in Sidebar.tsx and navigation-config.ts)"
echo "  - Target → Crosshair (in some components)"
echo "  - Video → PlayCircle (in some components)"

echo ""
echo "🚀 Try running the application again: npm start"