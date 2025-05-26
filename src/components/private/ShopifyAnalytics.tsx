import React from 'react';
import {
  ShoppingCart,
  TrendingUp,
  Users,
  Play,
  Heart,
  Share2,
  Eye,
  MessageCircle,
  DollarSign,
  Target,
  Clock,
  Star
} from 'lucide-react';

interface ShopifyAnalyticsProps {
  onNavigate: (page: string) => void;
}

const ShopifyAnalytics: React.FC<ShopifyAnalyticsProps> = ({ onNavigate }) => {
  const performanceMetrics = [
    {
      title: "Video Content Performance",
      value: "87.2%",
      change: "+12.4%",
      description: "Conversion Rate from Video to Purchase",
      icon: <Play size={20} className="text-blue-600" />
    },
    {
      title: "Product Video Views",
      value: "2.4M",
      change: "+28.7%",
      description: "Total views on product demonstration videos",
      icon: <Eye size={20} className="text-green-600" />
    },
    {
      title: "Video-Driven Revenue",
      value: "$485K",
      change: "+35.2%",
      description: "Revenue attributed to video content",
      icon: <DollarSign size={20} className="text-purple-600" />
    },
    {
      title: "Average Watch Time",
      value: "2:34",
      change: "+18.3%",
      description: "Average video watch duration",
      icon: <Clock size={20} className="text-orange-600" />
    }
  ];

  const topPerformingVideos = [
    {
      title: "Robot Vacuum Omni E28 Product Demo",
      views: "456K",
      conversions: "12.8%",
      revenue: "$87K",
      engagement: "94.2%"
    },
    {
      title: "Pet Hair Cleaning Challenge",
      views: "321K",
      conversions: "9.5%",
      revenue: "$62K",
      engagement: "88.7%"
    },
    {
      title: "Before/After Comparison",
      views: "298K",
      conversions: "11.2%",
      revenue: "$58K",
      engagement: "91.3%"
    }
  ];

  const channelPerformance = [
    {
      channel: "Product Pages",
      videos: 24,
      avgConversion: "15.3%",
      revenue: "$198K"
    },
    {
      channel: "Landing Pages",
      videos: 18,
      avgConversion: "12.7%",
      revenue: "$156K"
    },
    {
      channel: "Email Campaigns",
      videos: 12,
      avgConversion: "8.9%",
      revenue: "$89K"
    },
    {
      channel: "Social Media Ads",
      videos: 15,
      avgConversion: "6.4%",
      revenue: "$72K"
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Shopify Video Content Performance</h2>
            <p className="text-gray-600">How video content drives sales and engagement on Shopify platform</p>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {performanceMetrics.map((metric, index) => (
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
            {/* Top Performing Videos */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Top Performing Videos</h3>
                <p className="text-gray-500 text-sm">Videos driving highest conversions</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {topPerformingVideos.map((video, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{video.title}</h4>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Eye size={14} className="mr-1" />
                            {video.views}
                          </span>
                          <span className="flex items-center">
                            <Target size={14} className="mr-1" />
                            {video.conversions}
                          </span>
                          <span className="flex items-center">
                            <DollarSign size={14} className="mr-1" />
                            {video.revenue}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-green-600">{video.engagement}</div>
                        <div className="text-xs text-gray-500">Engagement</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Channel Performance */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Channel Performance</h3>
                <p className="text-gray-500 text-sm">Video performance across different Shopify channels</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {channelPerformance.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{channel.channel}</h4>
                        <p className="text-sm text-gray-600">{channel.videos} videos deployed</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{channel.avgConversion}</div>
                        <div className="text-sm text-gray-600">{channel.revenue}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video Content Strategy Insights */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Video Content Strategy Insights</h3>
              <p className="text-gray-500 text-sm">Recommendations for optimizing video content on Shopify</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Play size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Product Demonstrations</h4>
                  <p className="text-sm text-gray-600">Short product demo videos show 23% higher conversion rates</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users size={24} className="text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">User Generated Content</h4>
                  <p className="text-sm text-gray-600">Customer testimonial videos drive 31% more trust and engagement</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">A/B Testing</h4>
                  <p className="text-sm text-gray-600">Testing different video lengths shows optimal duration is 45-90 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopifyAnalytics;