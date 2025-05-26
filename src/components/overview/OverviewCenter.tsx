import React, { useState } from 'react';
import {
  BarChart3,
  Users,
  Eye,
  Heart,
  MessageCircle,
  TrendingUp,
  DollarSign,
  Target,
  Play,
  Zap,
  Award,
  Share2,
  MousePointer,
  ShoppingCart,
  Trophy,
  CheckCircle,
  Lightbulb,
  Video,
  RefreshCw,
  Star,
  Lock,
  Settings,
  Download,
  Filter,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
  description?: string;
}

interface ContentModule {
  name: string;
  status: 'active' | 'testing' | 'optimizing';
  performance: {
    score: number;
    trend: 'up' | 'down' | 'stable';
  };
  keyMetrics: {
    primary: string;
    secondary: string;
  };
}

interface OverviewCenterProps {
  onNavigate: (page: string) => void;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon, color, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 rounded-lg ${color}`}>
        {icon}
      </div>
      <span className={`px-2 py-1 rounded-full text-sm font-medium ${
        change.startsWith('+') ? 'bg-green-100 text-green-700' : 
        change.startsWith('-') ? 'bg-red-100 text-red-700' : 
        'bg-gray-100 text-gray-700'
      }`}>
        {change}
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
    <p className="text-sm text-gray-600 mb-1">{title}</p>
    {description && <p className="text-xs text-gray-500">{description}</p>}
  </div>
);

const OverviewCenter: React.FC<OverviewCenterProps> = ({ onNavigate }) => {
  const [timeRange, setTimeRange] = useState('30days');

  // Core metrics from all modules
  const coreMetrics = [
    {
      title: "Total Content Views",
      value: "13.1M",
      change: "+18.2%",
      icon: <Eye size={20} />,
      color: "bg-blue-100",
      description: "Across all platforms and content types"
    },
    {
      title: "Average Engagement Rate",
      value: "15.2%",
      change: "+12.4%",
      icon: <Heart size={20} />,
      color: "bg-pink-100",
      description: "Combined engagement across all modules"
    },
    {
      title: "Revenue Attribution (GMV)",
      value: "$2.68M",
      change: "+24.8%",
      icon: <DollarSign size={20} />,
      color: "bg-green-100",
      description: "Content-driven revenue attribution"
    },
    {
      title: "Conversion Rate",
      value: "4.7%",
      change: "+15.3%",
      icon: <Target size={20} />,
      color: "bg-purple-100",
      description: "Overall content-to-purchase conversion"
    },
    {
      title: "ROI Efficiency",
      value: "324%",
      change: "+18.0%",
      icon: <TrendingUp size={20} />,
      color: "bg-orange-100",
      description: "Return on content investment"
    },
    {
      title: "Active Testing Accounts",
      value: "15",
      change: "+3",
      icon: <Users size={20} />,
      color: "bg-indigo-100",
      description: "Cross-platform testing matrix"
    }
  ];

  // Content modules status
  const contentModules: ContentModule[] = [
    {
      name: "Content Insight",
      status: "active",
      performance: { score: 92, trend: "up" },
      keyMetrics: { primary: "Voice Analysis", secondary: "Viral Factors" }
    },
    {
      name: "Content Testing",
      status: "testing",
      performance: { score: 88, trend: "up" },
      keyMetrics: { primary: "A/B Testing", secondary: "Matrix Accounts" }
    },
    {
      name: "Content for KOL",
      status: "optimizing",
      performance: { score: 85, trend: "stable" },
      keyMetrics: { primary: "Influencer ROI", secondary: "Reach Analysis" }
    },
    {
      name: "Content for Ads",
      status: "active",
      performance: { score: 90, trend: "up" },
      keyMetrics: { primary: "Ad Performance", secondary: "CTR Optimization" }
    },
    {
      name: "Content for Private",
      status: "active",
      performance: { score: 87, trend: "stable" },
      keyMetrics: { primary: "Access Control", secondary: "Premium Content" }
    }
  ];

  // Platform performance data
  const platformData = [
    { platform: "TikTok", views: "6.1M", engagement: "18.7%", conversion: "3.2%", revenue: "$850K" },
    { platform: "YouTube", views: "4.8M", engagement: "12.8%", conversion: "5.8%", revenue: "$1.2M" },
    { platform: "Instagram", views: "3.2M", engagement: "15.2%", conversion: "4.9%", revenue: "$630K" }
  ];

  // Content type performance
  const contentTypeData = [
    { type: "Product Reviews", suitability: "High", ctr: "7.2%", cvr: "5.8%", gmv: "$890K" },
    { type: "Lifestyle Integration", suitability: "Medium-High", ctr: "6.1%", cvr: "4.9%", gmv: "$720K" },
    { type: "Interactive Content", suitability: "High", ctr: "9.4%", cvr: "6.1%", gmv: "$650K" },
    { type: "Dramatic Storytelling", suitability: "Medium", ctr: "8.9%", cvr: "3.2%", gmv: "$420K" }
  ];

  // High-impact content highlights
  const topPerformers = [
    {
      title: "Pet Hair Challenge - 30 Day Test",
      platform: "YouTube",
      type: "Product Review",
      views: "1.8M",
      engagement: "12.4%",
      revenue: "$420K",
      source: "Content Testing"
    },
    {
      title: "Smart Home Morning Routine", 
      platform: "Instagram",
      type: "Lifestyle",
      views: "980K",
      engagement: "15.2%",
      revenue: "$280K",
      source: "Content for Ads"
    },
    {
      title: "Cleaning Robot vs Traditional Methods",
      platform: "TikTok", 
      type: "Interactive",
      views: "2.4M",
      engagement: "18.7%",
      revenue: "$350K",
      source: "Content Testing"
    }
  ];

  // Testing insights from Content Testing module
  const testingInsights = [
    {
      test: "Pet Hair Challenge A vs B",
      winner: "Version B - Story Format",
      improvement: "+18% engagement",
      accounts: "4 testing accounts"
    },
    {
      test: "Battery Life Technical vs Lifestyle",
      winner: "Version B - Lifestyle Focus", 
      improvement: "+25% CVR",
      accounts: "3 testing accounts"
    }
  ];

  // KOL performance highlights
  const kolHighlights = [
    {
      metric: "Top KOL ROI",
      value: "4.2x",
      description: "Best performing influencer partnership"
    },
    {
      metric: "Avg KOL Reach",
      value: "580K",
      description: "Average reach per KOL campaign"
    },
    {
      metric: "KOL Conversion",
      value: "3.8%",
      description: "KOL-driven conversion rate"
    }
  ];

  // Revenue trend data for CSS chart
  const revenueData = [
    { month: 'Jan', value: 285, height: 60 },
    { month: 'Feb', value: 320, height: 80 },
    { month: 'Mar', value: 380, height: 100 },
    { month: 'Apr', value: 420, height: 120 },
    { month: 'May', value: 465, height: 140 }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Content-Powered Growth</h1>
              <p className="text-gray-600">Comprehensive insights across all content modules and performance analytics</p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
              </select>
              
              <button className="p-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-md">
                <Filter size={18} />
              </button>
              
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center text-sm">
                <RefreshCw size={16} className="mr-2" />
                Refresh Data
              </button>
              
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                <Download size={16} className="mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Core Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {coreMetrics.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                change={metric.change}
                icon={metric.icon}
                color={metric.color}
                description={metric.description}
              />
            ))}
          </div>

          {/* Content Module Status */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Settings className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Content Module Performance</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {contentModules.map((module, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => onNavigate(module.name.toLowerCase().replace(' ', '-'))}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      module.status === 'active' ? 'bg-green-100 text-green-700' :
                      module.status === 'testing' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {module.status}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${
                      module.performance.trend === 'up' ? 'bg-green-500' :
                      module.performance.trend === 'down' ? 'bg-red-500' :
                      'bg-gray-400'
                    }`}></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{module.name}</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">{module.performance.score}</div>
                  <div className="text-xs text-gray-500 mb-2">Performance Score</div>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600">{module.keyMetrics.primary}</div>
                    <div className="text-xs text-gray-500">{module.keyMetrics.secondary}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Trend */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Content Revenue Trend</h3>
              </div>
              <div className="h-64 p-4 bg-gray-50 rounded-lg">
                <div className="h-full flex items-end justify-between gap-2">
                  {revenueData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-xs font-medium text-green-600 mb-2">${data.value}K</div>
                      <div 
                        className="w-12 bg-gradient-to-t from-green-500 to-green-300 rounded-t-lg shadow-sm transition-all duration-1000 hover:from-green-600 hover:to-green-400"
                        style={{ height: `${data.height}px` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-2 font-medium">{data.month}</div>
                    </div>
                  ))}
                </div>
                {/* Chart baseline */}
                <div className="mt-2 border-t border-gray-300"></div>
              </div>
            </div>

            {/* Platform Distribution */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Platform Performance Distribution</h3>
              </div>
              <div className="h-64 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border-8 border-transparent"
                       style={{
                         background: `conic-gradient(from 0deg, #ef4444 0deg 150deg, #dc2626 150deg 210deg, #8b5cf6 210deg 360deg)`
                       }}>
                  </div>
                  <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900">13.1M</div>
                      <div className="text-sm text-gray-600">Total Views</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>TikTok (47%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <span>YouTube (37%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Instagram (24%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Performance Table */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Video className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Platform Performance Breakdown</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Platform</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Total Views</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Engagement Rate</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Conversion Rate</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {platformData.map((platform, index) => {
                    const getPlatformIcon = (platformName: string) => {
                      switch (platformName) {
                        case 'TikTok':
                          return (
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                                  <Video className="w-3 h-3 text-black" />
                                </div>
                              </div>
                              <span className="font-medium text-gray-900">TikTok</span>
                            </div>
                          );
                        case 'YouTube':
                          return (
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                                <Play className="w-4 h-4 text-white fill-white" />
                              </div>
                              <span className="font-medium text-gray-900">YouTube</span>
                            </div>
                          );
                        case 'Instagram':
                          return (
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <div className="w-5 h-5 border-2 border-white rounded-lg">
                                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                                </div>
                              </div>
                              <span className="font-medium text-gray-900">Instagram</span>
                            </div>
                          );
                        default:
                          return <span className="font-medium text-gray-900">{platformName}</span>;
                      }
                    };

                    return (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          {getPlatformIcon(platform.platform)}
                        </td>
                        <td className="py-4 px-4">{platform.views}</td>
                        <td className="py-4 px-4">
                          <span className="text-green-600 font-medium">{platform.engagement}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-blue-600 font-medium">{platform.conversion}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-purple-600 font-medium">{platform.revenue}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Content Type Performance */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Award className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Content Type Performance Analysis</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contentTypeData.map((content, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{content.type}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      content.suitability === 'High' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {content.suitability}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="font-bold text-blue-600">{content.ctr}</div>
                      <div className="text-xs text-gray-500">CTR</div>
                    </div>
                    <div>
                      <div className="font-bold text-green-600">{content.cvr}</div>
                      <div className="text-xs text-gray-500">CVR</div>
                    </div>
                    <div>
                      <div className="font-bold text-orange-600">{content.gmv}</div>
                      <div className="text-xs text-gray-500">GMV</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performing Content */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Trophy className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Top Performing Content</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {topPerformers.map((content, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900 mb-1">{content.title}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                        {content.platform}
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs">
                        {content.type}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                    <div>
                      <span className="text-gray-600">Views: </span>
                      <span className="font-medium">{content.views}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Engagement: </span>
                      <span className="font-medium text-green-600">{content.engagement}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-orange-600">{content.revenue}</span>
                    <span className="text-xs text-gray-500">{content.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testing & KOL Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* A/B Testing Insights */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">A/B Testing Insights</h3>
              </div>
              <div className="space-y-4">
                {testingInsights.map((test, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <h4 className="font-semibold text-gray-900">{test.test}</h4>
                    </div>
                    <div className="text-sm text-gray-700 mb-1">
                      <strong>Winner:</strong> {test.winner}
                    </div>
                    <div className="text-sm text-green-600 font-medium mb-1">
                      {test.improvement}
                    </div>
                    <div className="text-xs text-gray-500">{test.accounts}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* KOL Performance Highlights */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-pink-100 rounded-lg">
                  <Star className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">KOL Performance Highlights</h3>
              </div>
              <div className="space-y-4">
                {kolHighlights.map((highlight, index) => (
                  <div key={index} className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                    <div className="text-2xl font-bold text-pink-600 mb-1">{highlight.value}</div>
                    <div className="font-medium text-gray-900 mb-1">{highlight.metric}</div>
                    <div className="text-sm text-gray-600">{highlight.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="mt-8 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <button
                onClick={() => onNavigate('content-insight')}
                className="flex items-center gap-2 px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 transition-colors"
              >
                <MessageCircle size={16} />
                <span className="text-sm font-medium">View Insights</span>
              </button>
              <button
                onClick={() => onNavigate('content-testing')}
                className="flex items-center gap-2 px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg text-green-700 transition-colors"
              >
                <Play size={16} />
                <span className="text-sm font-medium">Run Tests</span>
              </button>
              <button
                onClick={() => onNavigate('content-kol')}
                className="flex items-center gap-2 px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-purple-700 transition-colors"
              >
                <Users size={16} />
                <span className="text-sm font-medium">Manage KOLs</span>
              </button>
              <button
                onClick={() => onNavigate('content-ads')}
                className="flex items-center gap-2 px-4 py-3 bg-orange-50 hover:bg-orange-100 rounded-lg text-orange-700 transition-colors"
              >
                <Target size={16} />
                <span className="text-sm font-medium">Ad Campaigns</span>
              </button>
              <button
                onClick={() => onNavigate('content-private')}
                className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 transition-colors"
              >
                <Lock size={16} />
                <span className="text-sm font-medium">Private Content</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCenter;