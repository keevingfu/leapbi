import React from 'react';
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
  LineChart
} from 'lucide-react';

interface PerformanceAnalysisOptimizationProps {
  onNavigate: (page: string) => void;
}

const PerformanceAnalysisOptimization: React.FC<PerformanceAnalysisOptimizationProps> = ({ onNavigate }) => {
  const kolContentPerformance = [
    {
      kolName: "Pet Lifestyle Sarah",
      content: "45-Day Pet Hair Challenge",
      views: 1280000,
      engagement: "12.4%",
      shares: 18500,
      comments: 3420,
      conversionRate: "5.2%",
      platform: "TikTok"
    },
    {
      kolName: "Tech Reviewer Mike",
      content: "Smart Home Robot Review",
      views: 987000,
      engagement: "9.8%",
      shares: 12300,
      comments: 2890,
      conversionRate: "6.7%",
      platform: "YouTube"
    },
    {
      kolName: "Home Improvement Alex",
      content: "Cleaning Revolution Test",
      views: 756000,
      engagement: "11.2%",
      shares: 9800,
      comments: 2340,
      conversionRate: "4.9%",
      platform: "Instagram"
    },
    {
      kolName: "Busy Mom Jenny",
      content: "Time-Saving Gadget Demo",
      views: 645000,
      engagement: "14.6%",
      shares: 15600,
      comments: 4120,
      conversionRate: "7.3%",
      platform: "TikTok"
    }
  ];

  const adConversionData = [
    {
      adContent: "Pet Hair Problem Solver",
      impressions: 2480000,
      clicks: 186000,
      ctr: "7.5%",
      conversions: 8940,
      conversionRate: "4.8%",
      roas: "3.2x"
    },
    {
      adContent: "45-Day Battery Life",
      impressions: 1980000,
      clicks: 138600,
      ctr: "7.0%",
      conversions: 7290,
      conversionRate: "5.3%",
      roas: "3.8x"
    },
    {
      adContent: "Smart Home Integration",
      impressions: 1650000,
      clicks: 115500,
      ctr: "7.0%",
      conversions: 5775,
      conversionRate: "5.0%",
      roas: "3.1x"
    }
  ];

  const audienceDemographics = [
    {
      segment: "Pet Owners 25-35",
      percentage: "34%",
      engagement: "13.2%",
      conversionRate: "6.8%",
      topContent: "Pet hair cleaning demos"
    },
    {
      segment: "Tech Enthusiasts 30-45",
      percentage: "28%",
      engagement: "9.4%",
      conversionRate: "5.2%",
      topContent: "Smart home integration"
    },
    {
      segment: "Busy Parents 28-40",
      percentage: "25%",
      engagement: "11.8%",
      conversionRate: "7.1%",
      topContent: "Time-saving solutions"
    },
    {
      segment: "Home Improvement 35-50",
      percentage: "13%",
      engagement: "8.6%",
      conversionRate: "4.9%",
      topContent: "Product comparisons"
    }
  ];

  const optimizationStrategies = [
    {
      strategy: "Content Length Optimization",
      currentPerformance: "72%",
      targetImprovement: "+18%",
      actionItems: [
        "Test 15-30s vs 45-60s formats",
        "Optimize hook in first 3 seconds",
        "Add retention elements at 15s mark"
      ],
      priority: "High"
    },
    {
      strategy: "Audience Targeting Refinement",
      currentPerformance: "5.4%",
      targetImprovement: "+25%",
      actionItems: [
        "Focus on pet owner segment",
        "Adjust age range to 25-40",
        "Test interest-based targeting"
      ],
      priority: "High"
    },
    {
      strategy: "Creative Asset Optimization",
      currentPerformance: "7.2%",
      targetImprovement: "+15%",
      actionItems: [
        "A/B test thumbnail styles",
        "Optimize CTA placement",
        "Test emotional vs functional messaging"
      ],
      priority: "Medium"
    },
    {
      strategy: "Platform-Specific Adaptation",
      currentPerformance: "68%",
      targetImprovement: "+22%",
      actionItems: [
        "Vertical format for TikTok/IG",
        "Longer form for YouTube",
        "Platform-specific hashtags"
      ],
      priority: "Medium"
    }
  ];

  const geographicData = [
    { region: "North America", engagement: "11.4%", conversion: "6.2%", volume: "42%" },
    { region: "Europe", engagement: "9.8%", conversion: "5.7%", volume: "28%" },
    { region: "Asia Pacific", engagement: "13.2%", conversion: "4.9%", volume: "22%" },
    { region: "Others", engagement: "8.6%", conversion: "5.1%", volume: "8%" }
  ];

  const successMetrics = [
    { metric: "Overall Engagement Rate", current: "11.2%", target: "13.5%", progress: 83 },
    { metric: "Average Conversion Rate", current: "5.8%", target: "7.0%", progress: 83 },
    { metric: "Content Completion Rate", current: "74%", target: "85%", progress: 87 },
    { metric: "Cost Per Acquisition", current: "$18.50", target: "$15.00", progress: 81 }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Performance Analysis & Optimization</h2>
            <p className="text-gray-600">Optimize content strategy through data analysis to improve KOL empowerment and advertising performance</p>
          </div>

          {/* Performance Overview Charts */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <LineChart className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Performance Trend Analysis</h3>
            </div>

            {/* Performance Evolution Chart */}
            <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4">30-Day Performance Evolution</h4>
              <div className="relative h-40">
                <div className="absolute inset-0 flex items-end justify-between">
                  {[4.2, 4.8, 5.1, 5.3, 5.8, 6.0, 6.2].map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-xs mb-1 font-semibold text-green-600">{value}%</div>
                      <div 
                        className="w-8 bg-gradient-to-t from-green-500 to-green-300 rounded-t"
                        style={{ height: `${(value / 6.2) * 100}%` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-2">
                        {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'][index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="text-sm text-green-600 font-semibold">+47% improvement in conversion rate</span>
              </div>
            </div>

            {/* Performance Metrics Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <PieChart className="w-4 h-4" />
                  Content Performance Distribution
                </h4>
                <div className="flex items-center justify-center">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 rounded-full border-8 border-transparent"
                         style={{
                           background: `conic-gradient(from 0deg, #ef4444 0deg 120deg, #8b5cf6 120deg 220deg, #6b7280 220deg 300deg, #10b981 300deg 360deg)`
                         }}>
                    </div>
                    <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">100%</div>
                        <div className="text-xs text-gray-600">Content</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>High Conv. (33%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Med Conv. (28%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <span>Low Conv. (22%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Optimized (17%)</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-4">Platform ROI Comparison</h4>
                <div className="space-y-3">
                  {[
                    { platform: 'TikTok', roi: 4.2, color: 'bg-red-500' },
                    { platform: 'Instagram', roi: 3.8, color: 'bg-purple-500' },
                    { platform: 'YouTube', roi: 3.1, color: 'bg-gray-500' }
                  ].map((item) => (
                    <div key={item.platform} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                        <span className="text-sm text-gray-700">{item.platform}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full`}
                            style={{ width: `${(item.roi / 4.2) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{item.roi}x</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* KOL Content Performance */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Crown className="text-purple-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">KOL Content Performance Analysis</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">KOL & Content</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Views</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Engagement</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Interactions</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Conversion</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Platform</th>
                  </tr>
                </thead>
                <tbody>
                  {kolContentPerformance.map((kol, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{kol.kolName}</div>
                          <div className="text-sm text-gray-600">{kol.content}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Eye size={16} className="text-blue-500" />
                          <span className="font-medium">{(kol.views / 1000000).toFixed(1)}M</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                          parseFloat(kol.engagement) > 12 ? 'bg-green-100 text-green-700' :
                          parseFloat(kol.engagement) > 10 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {kol.engagement}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-3 text-sm">
                          <div className="flex items-center gap-1">
                            <Share2 size={14} className="text-green-500" />
                            <span>{(kol.shares / 1000).toFixed(1)}K</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle size={14} className="text-blue-500" />
                            <span>{(kol.comments / 1000).toFixed(1)}K</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-bold text-green-600">{kol.conversionRate}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          kol.platform === 'TikTok' ? 'bg-red-100 text-red-700' :
                          kol.platform === 'YouTube' ? 'bg-red-100 text-red-700' :
                          'bg-pink-100 text-pink-700'
                        }`}>
                          {kol.platform}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ad Conversion Analysis */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Target className="text-green-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Ad Conversion Analysis</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {adConversionData.map((ad, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-3">{ad.adContent}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Impressions:</span>
                      <span className="font-medium">{(ad.impressions / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Clicks:</span>
                      <span className="font-medium">{(ad.clicks / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">CTR:</span>
                      <span className="font-bold text-blue-600">{ad.ctr}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Conversion Rate:</span>
                      <span className="font-bold text-green-600">{ad.conversionRate}</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-green-200 pt-2">
                      <span className="text-gray-600">ROAS:</span>
                      <span className="font-bold text-purple-600">{ad.roas}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audience Demographics */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Users className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Audience Demographics Analysis</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Audience Segments</h4>
                <div className="space-y-3">
                  {audienceDemographics.map((segment, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{segment.segment}</span>
                        <span className="text-lg font-bold text-blue-600">{segment.percentage}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600">Engagement: </span>
                          <span className="font-medium">{segment.engagement}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Conversion: </span>
                          <span className="font-medium">{segment.conversionRate}</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Top content: {segment.topContent}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Geographic Performance</h4>
                <div className="space-y-3">
                  {geographicData.map((geo, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-gray-500" />
                          <span className="font-medium text-gray-900">{geo.region}</span>
                        </div>
                        <span className="text-sm font-bold text-purple-600">{geo.volume}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600">Engagement: </span>
                          <span className="font-medium">{geo.engagement}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Conversion: </span>
                          <span className="font-medium">{geo.conversion}</span>
                        </div>
                      </div>
                    </div>
                  ))}
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