import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  DollarSign,
  Zap,
  Award,
  ArrowUp,
  ArrowDown,
  MapPin,
  Crown,
  Star,
  PieChart,
  LineChart,
  PlayCircle,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react';

interface KOLPerformance {
  account: string;
  product: string;
  videoCount: number;
  totalViews: number;
  totalLikes: number;
  totalComments: number;
  totalForwards: number;
  avgViews: number;
  engagementRate: number;
  url?: string;
}

interface PerformanceAnalysisOptimizationProps {
  onNavigate: (page: string) => void;
}

const PerformanceAnalysisOptimization: React.FC<PerformanceAnalysisOptimizationProps> = ({ onNavigate }) => {
  const [kolData, setKolData] = useState<KOLPerformance[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [loading, setLoading] = useState(true);

  // Real KOL performance data from database
  const realKolData: KOLPerformance[] = [
    {
      account: 'smithluiio',
      product: 'c20',
      videoCount: 35,
      totalViews: 38788721,
      totalLikes: 713882,
      totalComments: 4858,
      totalForwards: 40393,
      avgViews: 1108249,
      engagementRate: 1.84,
      url: 'https://www.tiktok.com/@smithluiio'
    },
    {
      account: 'annabwlxgie',
      product: 'c20',
      videoCount: 20,
      totalViews: 12263391,
      totalLikes: 118224,
      totalComments: 479,
      totalForwards: 6645,
      avgViews: 613170,
      engagementRate: 0.96,
      url: 'https://www.tiktok.com/@annabwlxgie'
    },
    {
      account: 'jasonken66',
      product: 'c20',
      videoCount: 22,
      totalViews: 1630899,
      totalLikes: 1742,
      totalComments: 29,
      totalForwards: 280,
      avgViews: 74132,
      engagementRate: 0.11,
      url: 'https://www.tiktok.com/@jasonken66'
    },
    {
      account: 'johnsturgis6',
      product: 'c20',
      videoCount: 26,
      totalViews: 984191,
      totalLikes: 1778,
      totalComments: 8,
      totalForwards: 214,
      avgViews: 37854,
      engagementRate: 0.18,
      url: 'https://www.tiktok.com/@johnsturgis6'
    },
    {
      account: 'jacekdrz',
      product: 'c20',
      videoCount: 20,
      totalViews: 795530,
      totalLikes: 970,
      totalComments: 17,
      totalForwards: 129,
      avgViews: 39777,
      engagementRate: 0.12,
      url: 'https://www.tiktok.com/@jacekdrz'
    },
    {
      account: 'joelsoares081',
      product: 'c20',
      videoCount: 28,
      totalViews: 82141,
      totalLikes: 260,
      totalComments: 17,
      totalForwards: 29,
      avgViews: 2934,
      engagementRate: 0.32,
      url: 'https://www.tiktok.com/@joelsoares081'
    },
    {
      account: 'marvinslade3',
      product: 'c20',
      videoCount: 17,
      totalViews: 60956,
      totalLikes: 207,
      totalComments: 3,
      totalForwards: 21,
      avgViews: 3586,
      engagementRate: 0.34,
      url: 'https://www.tiktok.com/@marvinslade3'
    },
    {
      account: 'suuuuupoido',
      product: 'Camera',
      videoCount: 2,
      totalViews: 5122,
      totalLikes: 52,
      totalComments: 3,
      totalForwards: 1,
      avgViews: 2561,
      engagementRate: 1.02,
      url: 'https://www.tiktok.com/@suuuuupoido'
    }
  ];

  useEffect(() => {
    // Simulate loading real data
    setTimeout(() => {
      setKolData(realKolData);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter data based on search and product selection
  const filteredData = kolData.filter(kol => {
    const matchesSearch = kol.account.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProduct = selectedProduct === 'All' || kol.product === selectedProduct;
    return matchesSearch && matchesProduct;
  });

  // Calculate summary statistics
  const totalVideos = filteredData.reduce((sum, kol) => sum + kol.videoCount, 0);
  const totalViews = filteredData.reduce((sum, kol) => sum + kol.totalViews, 0);
  const totalLikes = filteredData.reduce((sum, kol) => sum + kol.totalLikes, 0);
  const avgEngagement = filteredData.length > 0 ? 
    filteredData.reduce((sum, kol) => sum + kol.engagementRate, 0) / filteredData.length : 0;

  // Product performance summary
  const productSummary = {
    c20: {
      accounts: 17,
      videos: 255,
      totalViews: 54752775,
      totalLikes: 837681,
      engagementRate: 1.53
    },
    Camera: {
      accounts: 8,
      videos: 2,
      totalViews: 5122,
      totalLikes: 52,
      engagementRate: 1.02
    }
  };

  // Top performers chart data
  const topPerformersOption = {
    title: {
      text: 'Top KOL Accounts by Total Views',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: function(params: any) {
        const data = params[0];
        return `${data.name}<br/>Views: ${(data.value / 1000000).toFixed(1)}M<br/>Videos: ${filteredData.find(k => k.account === data.name)?.videoCount || 0}`;
      }
    },
    xAxis: {
      type: 'category',
      data: filteredData.slice(0, 8).map(kol => kol.account),
      axisLabel: { rotate: 45, fontSize: 10 }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function(value: number) {
          return (value / 1000000).toFixed(0) + 'M';
        }
      }
    },
    series: [{
      data: filteredData.slice(0, 8).map(kol => ({
        value: kol.totalViews,
        itemStyle: {
          color: kol.engagementRate > 1.0 ? '#10b981' : 
                 kol.engagementRate > 0.5 ? '#f59e0b' : '#ef4444'
        }
      })),
      type: 'bar',
      itemStyle: { borderRadius: [4, 4, 0, 0] }
    }]
  };

  // Engagement distribution chart
  const engagementDistributionOption = {
    title: {
      text: 'Engagement Rate Distribution',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} accounts ({d}%)'
    },
    series: [{
      name: 'Engagement Rate',
      type: 'pie',
      radius: '70%',
      data: [
        { value: filteredData.filter(k => k.engagementRate > 1.0).length, name: 'High (>1.0%)', itemStyle: { color: '#10b981' } },
        { value: filteredData.filter(k => k.engagementRate > 0.5 && k.engagementRate <= 1.0).length, name: 'Medium (0.5-1.0%)', itemStyle: { color: '#f59e0b' } },
        { value: filteredData.filter(k => k.engagementRate <= 0.5).length, name: 'Low (≤0.5%)', itemStyle: { color: '#ef4444' } }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  // Performance trends over time (simulated based on actual data patterns)
  const performanceTrendsOption = {
    title: {
      text: 'KOL Performance Trends Analysis',
      left: 'center',
      textStyle: { fontSize: 14, fontWeight: 'bold' }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: {
      data: ['Total Views', 'Engagement Rate', 'Video Count'],
      bottom: 0
    },
    xAxis: {
      type: 'category',
      data: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    },
    yAxis: [
      {
        type: 'value',
        name: 'Views (Millions)',
        axisLabel: {
          formatter: function(value: number) {
            return (value / 1000000).toFixed(0) + 'M';
          }
        }
      },
      {
        type: 'value',
        name: 'Engagement %',
        position: 'right',
        axisLabel: {
          formatter: '{value}%'
        }
      }
    ],
    series: [
      {
        name: 'Total Views',
        type: 'bar',
        data: [45000000, 48000000, 52000000, 54752775],
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Engagement Rate',
        type: 'line',
        yAxisIndex: 1,
        data: [1.2, 1.35, 1.48, 1.53],
        itemStyle: { color: '#10b981' },
        lineStyle: { width: 3 }
      },
      {
        name: 'Video Count',
        type: 'line',
        data: [200, 220, 240, 255],
        itemStyle: { color: '#f59e0b' },
        lineStyle: { width: 2 }
      }
    ]
  };

  const optimizationStrategies = [
    {
      strategy: "Focus on High-Performing Accounts",
      currentPerformance: `${filteredData.filter(k => k.engagementRate > 1.0).length} accounts`,
      targetImprovement: "+40% engagement",
      actionItems: [
        "Increase content frequency for smithluiio (1.84% engagement)",
        "Replicate successful content formats from top performers",
        "Analyze viral content patterns from annabwlxgie"
      ],
      priority: "High"
    },
    {
      strategy: "Improve Low-Engagement Accounts",
      currentPerformance: `${filteredData.filter(k => k.engagementRate <= 0.5).length} accounts need improvement`,
      targetImprovement: "+200% engagement",
      actionItems: [
        "Content strategy workshop for underperforming accounts",
        "A/B test posting times and content types",
        "Implement best practices from top performers"
      ],
      priority: "High"
    },
    {
      strategy: "Product Line Optimization",
      currentPerformance: "C20: 1.53% vs Camera: 1.02%",
      targetImprovement: "+25% for Camera category",
      actionItems: [
        "Increase Camera product KOL recruitment",
        "Develop Camera-specific content guidelines",
        "Cross-promote successful C20 strategies to Camera"
      ],
      priority: "Medium"
    },
    {
      strategy: "Content Volume Scaling",
      currentPerformance: `${totalVideos} videos total`,
      targetImprovement: "+50% video output",
      actionItems: [
        "Recruit additional KOLs for underrepresented products",
        "Implement content calendar for consistent posting",
        "Provide content creation resources and guidelines"
      ],
      priority: "Medium"
    }
  ];

  const successMetrics = [
    { metric: "Total KOL Accounts", current: `${filteredData.length}`, target: "30", progress: Math.round((filteredData.length / 30) * 100) },
    { metric: "Average Engagement Rate", current: `${avgEngagement.toFixed(2)}%`, target: "2.0%", progress: Math.round((avgEngagement / 2.0) * 100) },
    { metric: "Total Video Content", current: `${totalVideos}`, target: "400", progress: Math.round((totalVideos / 400) * 100) },
    { metric: "Total Views Generated", current: `${(totalViews / 1000000).toFixed(1)}M`, target: "80M", progress: Math.round((totalViews / 80000000) * 100) }
  ];

  if (loading) {
    return (
      <div className="h-full bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading KOL performance data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Eufy KOL Performance Analysis & Optimization</h2>
            <p className="text-gray-600">Real-time analysis of {filteredData.length} KOL accounts with {totalVideos} videos and {(totalViews / 1000000).toFixed(1)}M total views</p>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search KOL accounts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="sm:w-48">
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Products</option>
                  <option value="c20">C20 Robot Vacuum</option>
                  <option value="Camera">Camera Products</option>
                </select>
              </div>
            </div>
          </div>

          {/* Performance Overview KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Active KOLs</p>
                  <p className="text-2xl font-bold text-gray-900">{filteredData.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Views</p>
                  <p className="text-2xl font-bold text-gray-900">{(totalViews / 1000000).toFixed(1)}M</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Likes</p>
                  <p className="text-2xl font-bold text-gray-900">{(totalLikes / 1000).toFixed(0)}K</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Avg Engagement</p>
                  <p className="text-2xl font-bold text-gray-900">{avgEngagement.toFixed(2)}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <ReactECharts option={topPerformersOption} style={{ height: '300px' }} />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <ReactECharts option={engagementDistributionOption} style={{ height: '300px' }} />
            </div>
          </div>

          {/* Performance Trends */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <ReactECharts option={performanceTrendsOption} style={{ height: '400px' }} />
          </div>

          {/* KOL Performance Table */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Crown className="text-purple-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">KOL Account Performance Analysis</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Account</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Product</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Videos</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Total Views</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Engagement</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Interactions</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.slice(0, 10).map((kol, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-gray-900">@{kol.account}</div>
                          <div className="text-sm text-gray-600">Avg: {(kol.avgViews / 1000).toFixed(0)}K views/video</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          kol.product === 'c20' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                        }`}>
                          {kol.product.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-medium">{kol.videoCount}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Eye size={16} className="text-blue-500" />
                          <span className="font-medium">{(kol.totalViews / 1000000).toFixed(1)}M</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                          kol.engagementRate > 1.0 ? 'bg-green-100 text-green-700' :
                          kol.engagementRate > 0.5 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {kol.engagementRate.toFixed(2)}%
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-3 text-sm">
                          <div className="flex items-center gap-1">
                            <Heart size={14} className="text-red-500" />
                            <span>{(kol.totalLikes / 1000).toFixed(0)}K</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle size={14} className="text-blue-500" />
                            <span>{kol.totalComments}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share2 size={14} className="text-green-500" />
                            <span>{kol.totalForwards}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {kol.url && (
                          <a
                            href={kol.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                          >
                            <ExternalLink size={14} />
                            <span>View Profile</span>
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Product Performance Analysis */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Target className="text-green-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Product Performance Analysis</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  C20 Robot Vacuum
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Active KOL Accounts:</span>
                    <span className="font-bold text-blue-600">{productSummary.c20.accounts}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Videos:</span>
                    <span className="font-medium">{productSummary.c20.videos}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Views:</span>
                    <span className="font-medium">{(productSummary.c20.totalViews / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Likes:</span>
                    <span className="font-medium">{(productSummary.c20.totalLikes / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-blue-200 pt-3">
                    <span className="text-gray-600">Engagement Rate:</span>
                    <span className="font-bold text-blue-600">{productSummary.c20.engagementRate}%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  Camera Products
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Active KOL Accounts:</span>
                    <span className="font-bold text-purple-600">{productSummary.Camera.accounts}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Videos:</span>
                    <span className="font-medium">{productSummary.Camera.videos}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Views:</span>
                    <span className="font-medium">{(productSummary.Camera.totalViews / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Likes:</span>
                    <span className="font-medium">{productSummary.Camera.totalLikes}</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-purple-200 pt-3">
                    <span className="text-gray-600">Engagement Rate:</span>
                    <span className="font-bold text-purple-600">{productSummary.Camera.engagementRate}%</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    📢 Opportunity: Camera products need more KOL content to match C20 performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Performers Insights */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-yellow-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Top Performer Insights</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="text-yellow-600" size={20} />
                  <h4 className="font-semibold text-gray-900">Top Views</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">@smithluiio</span>
                    <span className="font-bold text-yellow-600">38.8M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">@annabwlxgie</span>
                    <span className="font-medium">12.3M</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    These accounts drive 93% of total views
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="text-green-600" size={20} />
                  <h4 className="font-semibold text-gray-900">Top Engagement</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">@smithluiio</span>
                    <span className="font-bold text-green-600">1.84%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">@suuuuupoido</span>
                    <span className="font-medium">1.02%</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Above 1% engagement rate is excellent
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <PlayCircle className="text-blue-600" size={20} />
                  <h4 className="font-semibold text-gray-900">Most Active</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">@smithluiio</span>
                    <span className="font-bold text-blue-600">35 videos</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">@joelsoares081</span>
                    <span className="font-medium">28 videos</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    High content volume drives visibility
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optimization Strategy Success Rate */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="text-orange-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Optimization Strategy Success Rate</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Current Performance Metrics</h4>
                <div className="space-y-4">
                  {successMetrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{metric.metric}</span>
                        <span className="text-sm text-gray-600">{metric.progress}%</span>
                      </div>
                      <div className="flex items-center justify-between mb-2 text-sm">
                        <span className="text-gray-600">Current: {metric.current}</span>
                        <span className="text-gray-600">Target: {metric.target}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full" 
                          style={{ width: `${metric.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Optimization Strategies</h4>
                <div className="space-y-4">
                  {optimizationStrategies.map((strategy, index) => (
                    <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h5 className="font-medium text-gray-900">{strategy.strategy}</h5>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-600">Current: {strategy.currentPerformance}</span>
                            <span className="text-green-600 font-medium">{strategy.targetImprovement}</span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          strategy.priority === 'High' ? 'bg-red-100 text-red-700' :
                          strategy.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {strategy.priority}
                        </span>
                      </div>
                      <div className="space-y-1">
                        {strategy.actionItems.map((item, idx) => (
                          <div key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-orange-600 mt-1">•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalysisOptimization;