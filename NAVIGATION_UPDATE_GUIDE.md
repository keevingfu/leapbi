# Navigation Menu Translation Guide

## Overview
This guide details the changes needed to translate all Chinese menu names to English in the left sidebar navigation.

## Menu Name Changes

| Chinese Original | English Translation |
|------------------|-------------------|
| 仪表盘 | Overview |
| 内容洞察 | Content Insight |
| 内容测试 | Content Testing |
| 内容赋能KOL | Content for KOL |
| 内容赋能广告 | Content for Ads |
| 内容赋能Private | Content for Private |
| 创意工作台 | CreativeWorkspace |
| 脚本编辑器 | ScriptEditor |
| 系统设置 | Settings |
| CreativeAI | LeapAI |

## Files to Update

### 1. Sidebar Component
**File:** `src/components/layout/Sidebar.tsx`

Update the menuItems array:
```typescript
const menuItems = [
  { id: 'dashboard', name: 'Overview', icon: Home },
  { id: 'content-insight', name: 'Content Insight', icon: Eye },
  { id: 'content-testing', name: 'Content Testing', icon: TestTube },
  { id: 'content-kol', name: 'Content for KOL', icon: Users },
  { id: 'content-ads', name: 'Content for Ads', icon: Megaphone },
  { id: 'content-private', name: 'Content for Private', icon: Lock },
  { id: 'creative-workspace', name: 'CreativeWorkspace', icon: Palette },
  { id: 'script-editor', name: 'ScriptEditor', icon: FileText },
  { id: 'settings', name: 'Settings', icon: Settings },
];
```

Update the brand name:
```typescript
<h1 className="text-xl font-bold text-gray-900">LeapAI</h1>
```

### 2. Main Layout Component
**File:** `src/components/layout/MainLayout.tsx`

Update the getPageTitle function:
```typescript
const getPageTitle = (page: string): string => {
  const titles: Record<string, string> = {
    'dashboard': 'Overview',
    'content-insight': 'Content Insight',
    'content-testing': 'Content Testing',
    'content-kol': 'Content for KOL',
    'content-ads': 'Content for Ads',
    'content-private': 'Content for Private',
    'creative-workspace': 'CreativeWorkspace',
    'script-editor': 'ScriptEditor',
    'settings': 'Settings'
  };
  return titles[page] || 'LeapAI Platform';
};
```

Update welcome message:
```typescript
<p className="text-sm text-gray-600 mt-1">
  Welcome to LeapAI Content Platform
</p>
```

### 3. App Component Routing
**File:** `src/App.tsx`

Ensure all route cases use English IDs:
```typescript
const renderPage = () => {
  switch (currentPage) {
    case 'dashboard':
      return <Dashboard onNavigate={setCurrentPage} />;
    case 'content-insight':
      return <ContentInsight onNavigate={setCurrentPage} />;
    case 'content-testing':
      return <ContentTesting onNavigate={setCurrentPage} />;
    case 'content-kol':
      return <ContentKOL onNavigate={setCurrentPage} />;
    case 'content-ads':
      return <ContentAds onNavigate={setCurrentPage} />;
    case 'content-private':
      return <ContentPrivate onNavigate={setCurrentPage} />;
    case 'creative-workspace':
      return <CreativeWorkspace onNavigate={setCurrentPage} />;
    case 'script-editor':
      return <ScriptEditor onNavigate={setCurrentPage} />;
    case 'settings':
      return <SystemSettings onNavigate={setCurrentPage} />;
    default:
      return <Dashboard onNavigate={setCurrentPage} />;
  }
};
```

## Additional Updates Needed

### Brand Name Changes
1. Replace all instances of "CreativeAI" with "LeapAI"
2. Update footer text to "LeapAI Content Platform"
3. Update any logo or branding elements

### Component Headers
Ensure all individual component headers use the new English names:
- Dashboard component should show "Overview"
- ContentInsight should show "Content Insight"
- And so on for all components

### Navigation State Management
Make sure all navigation calls use the English route IDs:
```typescript
onNavigate('dashboard')      // for Overview
onNavigate('content-insight') // for Content Insight
onNavigate('content-testing') // for Content Testing
// etc.
```

## Implementation Steps

1. **Update Sidebar.tsx** - Change menu item names and brand
2. **Update MainLayout.tsx** - Change page titles and welcome message  
3. **Update App.tsx** - Ensure routing uses English IDs
4. **Update individual components** - Change any remaining Chinese text
5. **Test navigation** - Verify all menu items work correctly
6. **Update styling** - Adjust any layout issues from longer English text

## Notes
- Some English menu names are longer than Chinese, may need layout adjustments
- Ensure all hover states and active states work correctly
- Test responsive design with new menu names
- Update any tooltips or help text that reference old names