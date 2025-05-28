const fs = require('fs');

// Read the current file
const filePath = './src/components/insight/ViralVideoInsights.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Update the default display from 20 to 50 videos
content = content.replace(
  '// Default display: Top 20 highest-view videos\n        const top20Videos = videoData.slice(0, 20);\n        setFilteredVideos(top20Videos);',
  '// Default display: Top 50 highest-view videos\n        const top50Videos = videoData.slice(0, 50);\n        setFilteredVideos(top50Videos);'
);

// Also update the search results to show top 50
content = content.replace(
  'const top20Videos = allVideos.slice(0, 20);\n      setFilteredVideos(top20Videos);',
  'const top50Videos = allVideos.slice(0, 50);\n      setFilteredVideos(top50Videos);'
);

// Update the display text
content = content.replace(
  '`Displaying top ${filteredVideos.length} videos from 5 database tables with real performance data`',
  '`Displaying top ${filteredVideos.length} TikTok videos sorted by views with real-time preview`'
);

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated ViralVideoInsights.tsx to display top 50 TikTok videos by default!');