import React from 'react';
import {
  MessageCircle,
  Send,
  Users,
  Clock,
  TrendingUp,
  Play,
  Share2,
  Heart,
  Eye,
  Download,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface WhatsAppAnalyticsProps {
  onNavigate: (page: string) => void;
}

const WhatsAppAnalytics: React.FC<WhatsAppAnalyticsProps> = ({ onNavigate }) => {
  const whatsappMetrics = [
    {
      title: "Video Message Opens",
      value: "94.6%",
      change: "+8.2%",
      description: "Video messages opened by recipients",
      icon: <Play size={20} className="text-green-600" />
    },
    {
      title: "Forward Rate",
      value: "67.3%",
      change: "+23.4%",
      description: "Videos shared to other contacts/groups",
      icon: <Share2 size={20} className="text-blue-600" />
    },
    {
      title: "Response Rate", 
      value: "42.8%",
      change: "+15.7%",
      description: "Recipients who responded after viewing video",
      icon: <MessageCircle size={20} className="text-purple-600" />
    },
    {
      title: "Conversion Rate",
      value: "18.4%",
      change: "+12.3%",
      description: "Video viewers who made a purchase inquiry",
      icon: <TrendingUp size={20} className="text-orange-600" />
    }
  ];

  const campaignPerformance = [
    {
      campaign: "Product Launch Announcement",
      sent: "15,240",
      opened: "14,420",
      forwarded: "9,680",
      responses: "6,125",
      conversions: "2,847"
    },
    {
      campaign: "Flash Sale Promotion",
      sent: "12,890",
      opened: "12,156",
      forwarded: "8,234",
      responses: "5,456",
      conversions: "2,134"
    },
    {
      campaign: "Customer Success Stories",
      sent: "8,760",
      opened: "8,290",
      forwarded: "5,890",
      responses: "3,456",
      conversions: "1,567"
    },
    {
      campaign: "Tutorial Series",
      sent: "6,540",
      opened: "6,180",
      forwarded: "4,123",
      responses: "2,890",
      conversions: "1,234"
    }
  ];

  const videoTypes = [
    {
      type: "Product Demonstrations",
      usage: "38%",
      avgOpenRate: "96.2%",
      avgForwardRate: "72.4%",
      bestPerformingTime: "7-9 PM"
    },
    {
      type: "Customer Testimonials",
      usage: "28%",
      avgOpenRate: "94.8%",
      avgForwardRate: "68.9%",
      bestPerformingTime: "12-2 PM"
    },
    {
      type: "Behind the Scenes",
      usage: "18%",
      avgOpenRate: "92.1%",
      avgForwardRate: "78.3%",
      bestPerformingTime: "6-8 PM"
    },
    {
      type: "Educational Content",
      usage: "16%",
      avgOpenRate: "89.7%",
      avgForwardRate: "65.2%",
      bestPerformingTime: "10-11 AM"
    }
  ];

  const audienceSegments = [
    {
      segment: "VIP Customers",
      size: "2,340",
      openRate: "98.4%",
      responseRate: "56.7%",
      conversionRate: "32.4%"
    },
    {
      segment: "Regular Customers",
      size: "8,760",
      openRate: "94.2%",
      responseRate: "41.3%",
      conversionRate: "18.7%"
    },
    {
      segment: "New Prospects",
      size: "14,560",
      openRate: "91.8%",
      responseRate: "38.9%",
      conversionRate: "12.4%"
    },
    {
      segment: "Inactive Users",
      size: "5,240",
      openRate: "87.3%",
      responseRate: "24.6%",
      conversionRate: "8.9%"
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">WhatsApp Video Content Performance</h2>
            <p className="text-gray-600">Video content engagement and conversion metrics on WhatsApp Business</p>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {whatsappMetrics.map((metric, index) => (
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
            {/* Campaign Performance */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Campaign Performance</h3>
                <p className="text-gray-500 text-sm">Video campaign results across WhatsApp channels</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {campaignPerformance.map((campaign, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">{campaign.campaign}</h4>
                      <div className="grid grid-cols-5 gap-2 text-sm">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">{campaign.sent}</div>
                          <div className="text-xs text-gray-500">Sent</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-green-600">{campaign.opened}</div>
                          <div className="text-xs text-gray-500">Opened</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-blue-600">{campaign.forwarded}</div>
                          <div className="text-xs text-gray-500">Forwarded</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-purple-600">{campaign.responses}</div>
                          <div className="text-xs text-gray-500">Responses</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-orange-600">{campaign.conversions}</div>
                          <div className="text-xs text-gray-500">Conversions</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Content Types */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Video Content Types</h3>
                <p className="text-gray-500 text-sm">Performance by video content category</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {videoTypes.map((video, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{video.type}</h4>
                        <span className="text-sm font-semibold text-blue-600">{video.usage}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Open Rate</span>
                          <div className="font-medium text-green-600">{video.avgOpenRate}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Forward Rate</span>
                          <div className="font-medium text-blue-600">{video.avgForwardRate}</div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Best Time: {video.bestPerformingTime}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Audience Segments */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Audience Segment Performance</h3>
              <p className="text-gray-500 text-sm">Video engagement across different customer segments</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {audienceSegments.map((segment, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">{segment.segment}</h4>
                    <div className="text-sm text-gray-600 mb-3">{segment.size} contacts</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Open Rate</span>
                        <span className="font-medium text-green-600">{segment.openRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Response Rate</span>
                        <span className="font-medium text-blue-600">{segment.responseRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Conversion</span>
                        <span className="font-medium text-purple-600">{segment.conversionRate}</span>
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
              <h3 className="text-lg font-medium text-gray-900">WhatsApp Video Strategy</h3>
              <p className="text-gray-500 text-sm">Best practices for video content on WhatsApp Business</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MessageCircle size={24} className="text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Personal Messaging</h4>
                  <p className="text-sm text-gray-600">Keep videos under 30 seconds for better engagement and sharing</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Timing Optimization</h4>
                  <p className="text-sm text-gray-600">Send videos during evening hours for maximum open rates</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Share2 size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Viral Content</h4>
                  <p className="text-sm text-gray-600">Create shareable content to leverage WhatsApp's viral potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppAnalytics;