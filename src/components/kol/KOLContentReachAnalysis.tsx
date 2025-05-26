import React from 'react';
import {
  Users,
  TrendingUp,
  Play,
  Clock,
  Share2,
  Eye,
  Award,
  Target,
  MapPin,
  BarChart3,
  Youtube,
  Instagram,
  Video,
  Globe,
  Zap,
  MessageCircle
} from 'lucide-react';

interface KOLContentReachAnalysisProps {
  onNavigate?: (page: string) => void;
}

const KOLContentReachAnalysis: React.FC<KOLContentReachAnalysisProps> = ({ onNavigate }) => {
  const kolEngagementStats = [
    {
      metric: "KOL Participation Rate",
      value: "87.3%",
      description: "KOLs using brand-provided content materials",
      total: "124 out of 142 active KOLs",
      change: "+15.7%"
    },
    {
      metric: "Average Follower Growth",
      value: "+12.4K",
      description: "Monthly follower increase per KOL",
      total: "Across all tier levels",
      change: "+28.3%"
    },
    {
      metric: "Content Publishing Frequency",
      value: "2.8x/week",
      description: "Average content posts per KOL",
      total: "Brand-related content only",
      change: "+22.1%"
    },
    {
      metric: "Engagement Quality Score",
      value: "8.7/10",
      description: "Comment quality and interaction depth",
      total: "AI-analyzed engagement metrics",
      change: "+18.9%"
    }
  ];

  const contentPerformanceAnalysis = [
    {
      contentType: "Product Demonstration",
      qualityScore: 9.2,
      brandIntegration: "95%",
      avgWatchTime: "2:34",
      completionRate: "78%",
      shareability: "High"
    },
    {
      contentType: "Lifestyle Integration",
      qualityScore: 8.6,
      brandIntegration: "87%",
      avgWatchTime: "1:47",
      completionRate: "65%",
      shareability: "Very High"
    },
    {
      contentType: "Behind the Scenes",
      qualityScore: 8.1,
      brandIntegration: "72%",
      avgWatchTime: "3:12",
      completionRate: "82%",
      shareability: "Medium"
    },
    {
      contentType: "User Generated Content",
      qualityScore: 7.8,
      brandIntegration: "81%",
      avgWatchTime: "1:23",
      completionRate: "59%",
      shareability: "Very High"
    },
    {
      contentType: "Educational Content",
      qualityScore: 9.0,
      brandIntegration: "93%",
      avgWatchTime: "4:18",
      completionRate: "89%",
      shareability: "Medium"
    }
  ];

  const platformDistribution = [
    {
      platform: "YouTube",
      totalViews: "6.2M",
      avgWatchTime: "3:45",
      organicReach: "68%",
      algorithmicBoost: "32%",
      shareRate: "12.4%",
      geography: ["US: 42%", "EU: 28%", "APAC: 30%"]
    },
    {
      platform: "Instagram",
      totalViews: "4.1M",
      avgWatchTime: "1:58",
      organicReach: "45%",
      algorithmicBoost: "55%",
      shareRate: "18.7%",
      geography: ["US: 38%", "EU: 35%", "APAC: 27%"]
    },
    {
      platform: "TikTok",
      totalViews: "2.5M",
      avgWatchTime: "0:52",
      organicReach: "23%",
      algorithmicBoost: "77%",
      shareRate: "24.3%",
      geography: ["US: 45%", "EU: 22%", "APAC: 33%"]
    }
  ];

  const audienceGeography = [
    { region: "North America", percentage: "41%", engagement: "8.9%", conversionRate: "5.2%" },
    { region: "Europe", percentage: "29%", engagement: "7.6%", conversionRate: "4.8%" },
    { region: "APAC", percentage: "24%", engagement: "9.3%", conversionRate: "6.1%" },
    { region: "Others", percentage: "6%", engagement: "6.4%", conversionRate: "3.7%" }
  ];

  const contentPathAnalysis = [
    {
      step: "Initial Video View",
      users: "100%",
      dropRate: "0%",
      avgDuration: "0:00"
    },
    {
      step: "30-Second Engagement",
      users: "67%",
      dropRate: "33%",
      avgDuration: "0:30"
    },
    {
      step: "Full Video Completion",
      users: "42%",
      dropRate: "25%",
      avgDuration: "2:15"
    },
    {
      step: "Profile Visit",
      users: "18%",
      dropRate: "24%",
      avgDuration: "1:45"
    },
    {
      step: "Link Click",
      users: "12%",
      dropRate: "6%",
      avgDuration: "0:12"
    },
    {
      step: "Purchase Action",
      users: "4.2%",
      dropRate: "7.8%",
      avgDuration: "5:30"
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">KOL Content & Reach Analysis</h2>
            <p className="text-gray-600">Comprehensive analysis of content empowerment effects and reach performance</p>
          </div>

          {/* KOL Engagement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kolEngagementStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Users size={20} className="text-blue-600" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm mb-2">{stat.metric}</p>
                <p className="text-gray-500 text-xs mb-1">{stat.description}</p>
                <p className="text-gray-400 text-xs">{stat.total}</p>
              </div>
            ))}
          </div>

          {/* Content Performance Analysis */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Content Performance Analysis</h3>
              <p className="text-gray-500 text-sm">Detailed analysis of content quality and brand integration effectiveness</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {contentPerformanceAnalysis.map((content, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{content.contentType}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Quality Score:</span>
                        <span className="font-semibold text-blue-600">{content.qualityScore}/10</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-green-600">{content.brandIntegration}</div>
                        <div className="text-xs text-gray-500">Brand Integration</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-purple-600">{content.avgWatchTime}</div>
                        <div className="text-xs text-gray-500">Avg Watch Time</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-orange-600">{content.completionRate}</div>
                        <div className="text-xs text-gray-500">Completion Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-pink-600">{content.shareability}</div>
                        <div className="text-xs text-gray-500">Shareability</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center">
                          <Award size={16} className="text-yellow-500" />
                        </div>
                        <div className="text-xs text-gray-500">Performance</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Platform Distribution Analysis */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Platform Distribution Analysis</h3>
                <p className="text-gray-500 text-sm">Content performance and reach across different platforms</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {platformDistribution.map((platform, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          {platform.platform === 'YouTube' && <Youtube size={20} className="text-red-600 mr-2" />}
                          {platform.platform === 'Instagram' && <Instagram size={20} className="text-pink-600 mr-2" />}
                          {platform.platform === 'TikTok' && <Video size={20} className="text-gray-900 mr-2" />}
                          <h4 className="font-medium text-gray-900">{platform.platform}</h4>
                        </div>
                        <span className="font-semibold text-blue-600">{platform.totalViews}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Watch Time:</span>
                            <span className="font-medium">{platform.avgWatchTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Organic Reach:</span>
                            <span className="font-medium text-green-600">{platform.organicReach}</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Algorithmic:</span>
                            <span className="font-medium text-purple-600">{platform.algorithmicBoost}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Share Rate:</span>
                            <span className="font-medium text-orange-600">{platform.shareRate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        <span className="font-medium">Geographic Distribution: </span>
                        {platform.geography.join(" | ")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Audience Geography */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Audience Geographic Distribution</h3>
                <p className="text-gray-500 text-sm">Global reach and engagement performance by region</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {audienceGeography.map((geo, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <MapPin size={16} className="text-blue-600 mr-2" />
                          <h4 className="font-medium text-gray-900">{geo.region}</h4>
                        </div>
                        <span className="text-lg font-semibold text-blue-600">{geo.percentage}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Engagement Rate:</span>
                          <span className="font-medium text-green-600">{geo.engagement}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Conversion Rate:</span>
                          <span className="font-medium text-purple-600">{geo.conversionRate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Conversion Path Analysis */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Content Conversion Path Analysis</h3>
              <p className="text-gray-500 text-sm">User journey from video viewing to purchase completion</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {contentPathAnalysis.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm mr-4">
                      {index + 1}
                    </div>
                    <div className="flex-1 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{step.step}</h4>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="text-center">
                            <div className="font-semibold text-blue-600">{step.users}</div>
                            <div className="text-xs text-gray-500">Users</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-red-600">{step.dropRate}</div>
                            <div className="text-xs text-gray-500">Drop Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-green-600">{step.avgDuration}</div>
                            <div className="text-xs text-gray-500">Avg Duration</div>
                          </div>
                        </div>
                      </div>
                      {index < contentPathAnalysis.length - 1 && (
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${parseFloat(contentPathAnalysis[index + 1].users)}%` }}
                          ></div>
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
    </div>
  );
};

export default KOLContentReachAnalysis;