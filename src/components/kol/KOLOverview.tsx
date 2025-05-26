import React from 'react';
import {
  TrendingUp,
  Play,
  Heart,
  DollarSign,
  Users,
  BarChart3,
  Eye,
  Share2,
  Target,
  Award,
  Youtube,
  Instagram,
  Video,
  Clock,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

interface KOLOverviewProps {
  onNavigate?: (page: string) => void;
}

const KOLOverview: React.FC<KOLOverviewProps> = ({ onNavigate }) => {
  const keyMetrics = [
    {
      title: "Total Views",
      value: "12.8M",
      change: "+34.7%",
      description: "Total video views across all KOL partnerships",
      icon: <Play size={20} className="text-blue-600" />
    },
    {
      title: "Engagement Rate",
      value: "8.4%",
      change: "+12.3%",
      description: "(Likes + Comments + Shares) / Total Views",
      icon: <Heart size={20} className="text-pink-600" />
    },
    {
      title: "GMV Conversion Rate",
      value: "4.2%",
      change: "+18.9%",
      description: "Total GMV / Total Views",
      icon: <Target size={20} className="text-green-600" />
    },
    {
      title: "Influence Score",
      value: "847",
      change: "+28.1%",
      description: "Follower Growth + Engagement Quality Index",
      icon: <Award size={20} className="text-purple-600" />
    },
    {
      title: "ROI",
      value: "3.8x",
      change: "+22.4%",
      description: "GMV Revenue / Operational Costs",
      icon: <DollarSign size={20} className="text-orange-600" />
    }
  ];

  const performanceTrends = [
    { month: "Jan", views: 8.2, engagement: 6.8, conversion: 3.1, followers: 245 },
    { month: "Feb", views: 9.1, engagement: 7.2, conversion: 3.4, followers: 267 },
    { month: "Mar", views: 10.3, engagement: 7.8, conversion: 3.7, followers: 289 },
    { month: "Apr", views: 11.7, engagement: 8.1, conversion: 3.9, followers: 312 },
    { month: "May", views: 12.8, engagement: 8.4, conversion: 4.2, followers: 334 }
  ];

  const platformBreakdown = [
    {
      platform: "YouTube",
      views: "6.2M",
      engagement: "9.1%",
      conversion: "5.3%",
      gmvContribution: "42%",
      icon: <Youtube size={24} className="text-red-600" />
    },
    {
      platform: "Instagram",
      views: "4.1M", 
      engagement: "8.7%",
      conversion: "3.8%",
      gmvContribution: "31%",
      icon: <Instagram size={24} className="text-pink-600" />
    },
    {
      platform: "TikTok",
      views: "2.5M",
      engagement: "7.2%",
      conversion: "2.9%",
      gmvContribution: "27%",
      icon: <Video size={24} className="text-gray-900" />
    }
  ];

  const kolTierAnalysis = [
    {
      tier: "Top Tier KOLs",
      count: 8,
      followerRange: "1M+",
      avgViews: "850K",
      engagementRate: "12.4%",
      gmvContribution: "58%",
      cooperation: "Weekly",
      avgDealSize: "$45K"
    },
    {
      tier: "Mid Tier KOLs", 
      count: 24,
      followerRange: "100K-1M",
      avgViews: "120K",
      engagementRate: "9.8%",
      gmvContribution: "31%",
      cooperation: "Bi-weekly",
      avgDealSize: "$12K"
    },
    {
      tier: "Micro KOLs",
      count: 67,
      followerRange: "10K-100K",
      avgViews: "15K",
      engagementRate: "6.2%",
      gmvContribution: "11%",
      cooperation: "Monthly",
      avgDealSize: "$3K"
    }
  ];

  const optimizationInsights = [
    {
      category: "High Conversion Content",
      insight: "Product demonstration videos show 67% higher conversion rates",
      recommendation: "Increase demo content allocation by 30%",
      priority: "High"
    },
    {
      category: "Low Engagement Analysis",
      insight: "Lifestyle content shows low engagement but high brand awareness",
      recommendation: "Optimize lifestyle content for conversion touchpoints",
      priority: "Medium"
    },
    {
      category: "KOL Selection Optimization",
      insight: "Mid-tier KOLs show best ROI performance",
      recommendation: "Increase mid-tier KOL partnerships by 40%",
      priority: "High"
    },
    {
      category: "Platform Strategy",
      insight: "YouTube shows highest conversion but Instagram has best reach",
      recommendation: "Cross-platform content strategy implementation",
      priority: "Medium"
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">KOL Content Empowerment Overview</h2>
            <p className="text-gray-600">Comprehensive performance metrics and trends for KOL content collaboration</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-gray-100">
                    {metric.icon}
                  </div>
                  <span className="text-green-500 text-sm font-medium">{metric.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-gray-600 text-sm mb-2">{metric.title}</p>
                <p className="text-gray-500 text-xs">{metric.description}</p>
              </div>
            ))}
          </div>

          {/* Performance Trends */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Performance Trends</h3>
              <p className="text-gray-500 text-sm">Key metrics evolution over the last 5 months</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Views & Engagement Growth</h4>
                  <div className="space-y-3">
                    {performanceTrends.map((trend, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="font-medium text-gray-900">{trend.month}</div>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="text-center">
                            <div className="font-semibold text-blue-600">{trend.views}M</div>
                            <div className="text-xs text-gray-500">Views</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-pink-600">{trend.engagement}%</div>
                            <div className="text-xs text-gray-500">Engagement</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-green-600">{trend.conversion}%</div>
                            <div className="text-xs text-gray-500">Conversion</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Follower Growth Trend</h4>
                  <div className="space-y-3">
                    {performanceTrends.map((trend, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="font-medium text-gray-900">{trend.month}</div>
                        <div className="flex items-center space-x-2">
                          <div className="font-semibold text-purple-600">{trend.followers}K</div>
                          <div className="text-xs text-gray-500">New Followers</div>
                          {index > 0 && (
                            <div className="text-green-500">
                              <ArrowUp size={14} />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Platform Breakdown */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Platform Performance</h3>
                <p className="text-gray-500 text-sm">Content performance across different platforms</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {platformBreakdown.map((platform, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          {platform.icon}
                          <h4 className="font-medium text-gray-900 ml-2">{platform.platform}</h4>
                        </div>
                        <span className="text-lg font-semibold text-orange-600">{platform.gmvContribution}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-blue-600">{platform.views}</div>
                          <div className="text-xs text-gray-500">Views</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-600">{platform.engagement}</div>
                          <div className="text-xs text-gray-500">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-purple-600">{platform.conversion}</div>
                          <div className="text-xs text-gray-500">Conversion</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* KOL Tier Analysis */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">KOL Tier Contribution</h3>
                <p className="text-gray-500 text-sm">Performance analysis by KOL tier levels</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {kolTierAnalysis.map((tier, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{tier.tier}</h4>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">{tier.count} KOLs</div>
                          <div className="text-xs text-gray-500">{tier.followerRange}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-3 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-blue-600">{tier.avgViews}</div>
                          <div className="text-xs text-gray-500">Avg Views</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-600">{tier.engagementRate}</div>
                          <div className="text-xs text-gray-500">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-purple-600">{tier.gmvContribution}</div>
                          <div className="text-xs text-gray-500">GMV Share</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-orange-600">{tier.avgDealSize}</div>
                          <div className="text-xs text-gray-500">Avg Deal</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Optimization Insights */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Strategic Optimization Insights</h3>
              <p className="text-gray-500 text-sm">Data-driven recommendations for KOL content strategy</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {optimizationInsights.map((insight, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{insight.category}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        insight.priority === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {insight.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{insight.insight}</p>
                    <p className="text-sm font-medium text-indigo-600">{insight.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KOLOverview;