#!/bin/bash

# LeapAI Application Fix Script
echo "🔧 Starting LeapAI Application Fix Script..."

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 2: Check for common import issues
echo "🔍 Checking for import issues..."

# Step 3: Try to build the app to catch errors
echo "🏗️ Attempting to build application..."
npm run build 2>&1 | tee build-log.txt

# Step 4: If build fails, show the errors
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Error details:"
    cat build-log.txt | grep -A 5 -B 5 "ERROR"
else
    echo "✅ Build successful!"
    echo "🚀 Starting development server..."
    npm start
fi