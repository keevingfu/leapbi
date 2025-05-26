import React from 'react';
import {
  Linkedin,
  Users,
  TrendingUp,
  Play,
  Share2,
  MessageCircle,
  Eye,
  Target,
  Briefcase,
  UserCheck,
  Clock,
  Award
} from 'lucide-react';

interface LinkedInAnalyticsProps {
  onNavigate: (page: string) => void;
}

const LinkedInAnalytics: React.FC<LinkedInAnalyticsProps> = ({ onNavigate }) => {
  const linkedinMetrics = [
    {
      title: "Video Post Reach",
      value: "247K",
      change: "+34.2%",
      description: "Professional network video content reach",
      icon: <Eye size={20} className="text-blue-600" />
    },
    {
      title: "Professional Engagement",
      value: "18.7%",
      change: "+22.8%",
      description: "Engagement rate from business professionals",
      icon: <MessageCircle size={20} className="text-green-600" />
    },
    {
      title: "Lead Generation Rate",
      value: "12.4%",
      change: "+28.1%",
      description: "Video viewers who became qualified leads",
      icon: <Target size={20} className="text-purple-600" />
    },
    {
      title: "Connection Requests",
      value: "1,847",
      change: "+45.3%",
      description: "New connection requests from video content",
      icon: <UserCheck size={20} className="text-orange-600" />
    }
  ];

  const contentCategories = [
    {
      category: "Product Demos for B2B",
      posts: 28,
      avgReach: "8.9K",
      engagementRate: "24.3%",
      leadConversion: "15.7%",
      bestTime: "Tue-Thu 9-11AM"
    },
    {
      category: "Industry Insights",
      posts: 22,
      avgReach: "12.4K",
      engagementRate: "19.8%",
      leadConversion: "11.2%",
      bestTime: "Wed-Fri 2-4PM"
    },
    {
      category: "Executive Thought Leadership",
      posts: 18,
      avgReach: "15.6K",
      engagementRate: "31.2%",
      leadConversion: "8.9%",
      bestTime: "Mon-Wed 8-10AM"
    },
    {
      category: "Company Culture",
      posts: 15,
      avgReach: "6.7K",
      engagementRate: "16.4%",
      leadConversion: "4.3%",
      bestTime: "Fri 12-2PM"
    }
  ];

  const audienceBreakdown = [
    {
      role: "C-Level Executives",
      percentage: "18%",
      engagement: "32.4%",
      leads: "156",
      avgOrderValue: "$45K"
    },
    {
      role: "Directors & VPs",
      percentage: "24%",
      engagement: "28.7%",
      leads: "234",
      avgOrderValue: "$28K"
    },
    {
      role: "Managers",
      percentage: "31%",
      engagement: "22.1%",
      leads: "189",
      avgOrderValue: "$15K"
    },
    {
      role: "Individual Contributors",
      percentage: "27%",
      engagement: "18.9%",
      leads: "134",
      avgOrderValue: "$8K"
    }
  ];

  const topPerformingVideos = [
    {
      title: "Smart Office Solutions: Future of Work",
      views: "47.2K",
      engagement: "28.4%",
      shares: "892",
      leads: "67",
      industry: "Technology"
    },
    {
      title: "CEO Insights: Innovation in Cleaning Tech",
      views: "39.8K",
      engagement: "34.7%",
      shares: "734",
      leads: "54",
      industry: "Manufacturing"
    },
    {
      title: "Sustainability in Business Operations",
      views: "33.6K",
      engagement: "26.1%",
      shares: "567",
      leads: "42",
      industry: "Sustainability"
    },
    {
      title: "ROI Analysis: Automated Solutions",
      views: "28.9K",
      engagement: "22.8%",
      shares: "423",
      leads: "38",
      industry: "Finance"
    }
  ];

  const industryPerformance = [
    {
      industry: "Technology",
      reach: "78.4K",
      engagement: "24.7%",
      leads: "187",
      avgDealSize: "$32K"
    },
    {
      industry: "Manufacturing",
      reach: "65.2K",
      engagement: "21.3%",
      leads: "145",
      avgDealSize: "$28K"
    },
    {
      industry: "Healthcare",
      reach: "52.8K",
      engagement: "19.8%",
      leads: "123",
      avgDealSize: "$24K"
    },
    {
      industry: "Education",
      reach: "41.6K",
      engagement: "26.4%",
      leads: "98",
      avgDealSize: "$18K"
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">LinkedIn Video Content Performance</h2>
            <p className="text-gray-600">Professional video content engagement and B2B lead generation analytics</p>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {linkedinMetrics.map((metric, index) => (
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Content Categories Performance */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Content Categories Performance</h3>
                <p className="text-gray-500 text-sm">Video performance by content type on LinkedIn</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {contentCategories.map((category, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{category.category}</h4>
                        <span className="text-sm text-gray-600">{category.posts} posts</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm mb-2">
                        <div className="text-center">
                          <div className="font-semibold text-blue-600">{category.avgReach}</div>
                          <div className="text-xs text-gray-500">Avg Reach</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-600">{category.engagementRate}</div>
                          <div className="text-xs text-gray-500">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-purple-600">{category.leadConversion}</div>
                          <div className="text-xs text-gray-500">Lead Rate</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        Best Time: {category.bestTime}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Audience Breakdown */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Professional Audience Breakdown</h3>
                <p className="text-gray-500 text-sm">Video engagement by professional roles</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {audienceBreakdown.map((audience, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{audience.role}</h4>
                        <span className="text-sm font-semibold text-blue-600">{audience.percentage}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-green-600">{audience.engagement}</div>
                          <div className="text-xs text-gray-500">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-purple-600">{audience.leads}</div>
                          <div className="text-xs text-gray-500">Leads</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-orange-600">{audience.avgOrderValue}</div>
                          <div className="text-xs text-gray-500">Avg Deal</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Performing Videos */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Top Performing Videos</h3>
              <p className="text-gray-500 text-sm">Videos driving highest professional engagement</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topPerformingVideos.map((video, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-medium text-gray-900 flex-1">{video.title}</h4>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">
                        {video.industry}
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-3 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-blue-600">{video.views}</div>
                        <div className="text-xs text-gray-500">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-green-600">{video.engagement}</div>
                        <div className="text-xs text-gray-500">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-purple-600">{video.shares}</div>
                        <div className="text-xs text-gray-500">Shares</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-orange-600">{video.leads}</div>
                        <div className="text-xs text-gray-500">Leads</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industry Performance */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Industry Performance</h3>
              <p className="text-gray-500 text-sm">Video content performance across different industries</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industryPerformance.map((industry, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <Briefcase size={16} className="mr-2 text-blue-600" />
                      {industry.industry}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Reach</span>
                        <span className="font-medium text-blue-600">{industry.reach}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Engagement</span>
                        <span className="font-medium text-green-600">{industry.engagement}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Leads</span>
                        <span className="font-medium text-purple-600">{industry.leads}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Avg Deal</span>
                        <span className="font-medium text-orange-600">{industry.avgDealSize}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategy Recommendations */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">LinkedIn Video Strategy</h3>
              <p className="text-gray-500 text-sm">Best practices for professional video content on LinkedIn</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Briefcase size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Professional Focus</h4>
                  <p className="text-sm text-gray-600">Create content that addresses business challenges and industry trends</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award size={24} className="text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Thought Leadership</h4>
                  <p className="text-sm text-gray-600">Executive-led content generates 40% higher engagement rates</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Optimal Timing</h4>
                  <p className="text-sm text-gray-600">Tuesday-Thursday 9-11 AM shows highest B2B engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInAnalytics;