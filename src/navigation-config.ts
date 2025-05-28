// Navigation Configuration for LeapAI Platform
// All menu names in English

export const navigationConfig = {
  // Menu Items Configuration
  menuItems: [
    {
      id: 'dashboard',
      name: 'Overview',
      path: '/dashboard',
      icon: 'Home'
    },
    {
      id: 'content-insight',
      name: 'Content Insight',
      path: '/content-insight',
      icon: 'Eye'
    },
    {
      id: 'content-testing',
      name: 'Content Testing',
      path: '/content-testing',
      icon: 'Beaker'
    },
    {
      id: 'content-kol',
      name: 'Content for KOL',
      path: '/content-kol',
      icon: 'Users'
    },
    {
      id: 'content-ads',
      name: 'Content for Ads',
      path: '/content-ads',
      icon: 'Megaphone'
    },
    {
      id: 'content-private',
      name: 'Content for Private',
      path: '/content-private',
      icon: 'Lock'
    }
  ],

  // Brand Configuration
  brand: {
    name: 'LeapAI',
    tagline: 'LeapAI Content Platform',
    description: 'Intelligent Content Creation Platform'
  }
};

export default navigationConfig;