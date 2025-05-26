import React from 'react';
import {
  Mail,
  Play,
  TrendingUp,
  Users,
  Clock,
  MousePointer,
  Eye,
  Share2,
  Target,
  BarChart3,
  Calendar,
  Zap
} from 'lucide-react';

interface EDMAnalyticsProps {
  onNavigate: (page: string) => void;
}

const EDMAnalytics: React.FC<EDMAnalyticsProps> = ({ onNavigate }) => {
  const edmMetrics = [
    {
      title: "Video Email Open Rate",
      value: "78.4%",
      change: "+18.7%",
      description: "Emails containing video thumbnails opened",
      icon: <Mail size={20} className="text-blue-600" />
    },
    {
      title: "Video Click-Through Rate",
      value: "24.8%",
      change: "+32.4%",
      description: "Recipients who clicked video content",
      icon: <MousePointer size={20} className="text-green-600" />
    },
    {
      title: "Video Completion Rate",
      value: "62.3%",
      change: "+15.2%",
      description: "Videos watched to completion",
      icon: <Play size={20} className="text-purple-600" />
    },
    {
      title: "Email-to-Purchase Rate",
      value: "8.9%",
      change: "+28.6%",
      description: "Email recipients who made a purchase",
      icon: <Target size={20} className="text-orange-600" />
    }
  ];

  const emailCampaigns = [
    {
      campaign: "Weekly Product Showcase",
      sent: "45,200",
      opened: "35,456",
      videoClicks: "8,790",
      conversions: "1,234",
      revenue: "$87,600"
    },
    {
      campaign: "Customer Success Stories",
      sent: "32,100",
      opened: "25,198",
      videoClicks: "7,456",
      conversions: "1,067",
      revenue: "$72,400"
    },
    {
      campaign: "Flash Sale Announcement",
      sent: "28,900",
      opened: "22,678",
      videoClicks: "6,234",
      conversions: "892",
      revenue: "$64,200"
    },
    {
      campaign: "Tutorial Series",
      sent: "18,400",
      opened: "14,512",
      videoClicks: "4,123",
      conversions: "567",
      revenue: "$38,900"
    }
  ];

  const videoPlacement = [
    {
      position: "Header Hero Video",
      usage: "42%",
      clickRate: "28.4%",
      conversionRate: "12.7%",
      bestFor: "Product announcements"
    },
    {
      position: "Inline Product Demo",
      usage: "35%",
      clickRate: "24.8%",
      conversionRate: "15.3%",
      bestFor: "Educational content"
    },
    {
      position: "Testimonial Section",
      usage: "15%",
      clickRate: "31.2%",
      conversionRate: "18.9%",
      bestFor: "Social proof"
    },
    {
      position: "Footer CTA Video",
      usage: "8%",
      clickRate: "19.6%",
      conversionRate: "9.4%",
      bestFor: "Call-to-action"
    }
  ];

  const audienceSegmentation = [
    {
      segment: "High Value Customers",
      subscribers: "8,240",
      openRate: "84.2%",
      videoClickRate: "32.8%",
      avgOrderValue: "$189"
    },
    {
      segment: "Regular Buyers", 
      subscribers: "24,680",
      openRate: "76.9%",
      videoClickRate: "26.4%",
      avgOrderValue: "$124"
    },
    {
      segment: "Prospects",
      subscribers: "42,190",
      openRate: "72.3%",
      videoClickRate: "21.7%",
      avgOrderValue: "$87"
    },
    {
      segment: "Win-back",
      subscribers: "15,670",
      openRate: "68.1%",
      videoClickRate: "18.9%",
      avgOrderValue: "$156"
    }
  ];

  const performanceByTime = [
    { day: "Monday", openRate: "74.2%", clickRate: "22.8%" },
    { day: "Tuesday", openRate: "78.6%", clickRate: "25.4%" },
    { day: "Wednesday", openRate: "81.3%", clickRate: "27.9%" },
    { day: "Thursday", openRate: "79.8%", clickRate: "26.2%" },
    { day: "Friday", openRate: "75.4%", clickRate: "23.1%" },
    { day: "Saturday", openRate: "69.7%", clickRate: "19.8%" },
    { day: "Sunday", openRate: "71.2%", clickRate: "21.3%" }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">EDM Video Content Performance</h2>
            <p className="text-gray-600">Email marketing video content engagement and conversion analytics</p>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {edmMetrics.map((metric, index) => (
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
            {/* Email Campaign Performance */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Email Campaign Performance</h3>
                <p className="text-gray-500 text-sm">Video-enhanced email campaign results</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {emailCampaigns.map((campaign, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">{campaign.campaign}</h4>
                      <div className="grid grid-cols-5 gap-2 text-sm">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">{campaign.sent}</div>
                          <div className="text-xs text-gray-500">Sent</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-blue-600">{campaign.opened}</div>
                          <div className="text-xs text-gray-500">Opened</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-green-600">{campaign.videoClicks}</div>
                          <div className="text-xs text-gray-500">Video Clicks</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-purple-600">{campaign.conversions}</div>
                          <div className="text-xs text-gray-500">Conversions</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-orange-600">{campaign.revenue}</div>
                          <div className="text-xs text-gray-500">Revenue</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Placement Analysis */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Video Placement Performance</h3>
                <p className="text-gray-500 text-sm">Performance by video position in emails</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {videoPlacement.map((placement, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{placement.position}</h4>
                        <span className="text-sm font-semibold text-blue-600">{placement.usage}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                        <div>
                          <span className="text-gray-500">Click Rate</span>
                          <div className="font-medium text-green-600">{placement.clickRate}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Conversion</span>
                          <div className="font-medium text-purple-600">{placement.conversionRate}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        Best for: {placement.bestFor}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Audience Segmentation */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Audience Segment Performance</h3>
                <p className="text-gray-500 text-sm">Video engagement by customer segments</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {audienceSegmentation.map((segment, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{segment.segment}</h4>
                        <span className="text-sm text-gray-600">{segment.subscribers} subscribers</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-blue-600">{segment.openRate}</div>
                          <div className="text-xs text-gray-500">Open Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-600">{segment.videoClickRate}</div>
                          <div className="text-xs text-gray-500">Video CTR</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-purple-600">{segment.avgOrderValue}</div>
                          <div className="text-xs text-gray-500">Avg Order</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance by Time */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Performance by Day</h3>
                <p className="text-gray-500 text-sm">Video email performance throughout the week</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {performanceByTime.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900">{day.day}</div>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-blue-600">{day.openRate}</div>
                          <div className="text-xs text-gray-500">Open Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-600">{day.clickRate}</div>
                          <div className="text-xs text-gray-500">Click Rate</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Strategy Recommendations */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">EDM Video Strategy</h3>
              <p className="text-gray-500 text-sm">Optimize video content for email marketing campaigns</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Play size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Thumbnail Optimization</h4>
                  <p className="text-sm text-gray-600">Use compelling video thumbnails to increase email open rates by 30%</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Calendar size={24} className="text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Send Time Optimization</h4>
                  <p className="text-sm text-gray-600">Wednesday shows highest engagement rates for video emails</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Personalization</h4>
                  <p className="text-sm text-gray-600">Personalized video content increases conversion rates by 25%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EDMAnalytics;