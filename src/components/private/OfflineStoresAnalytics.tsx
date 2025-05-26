import React from 'react';
import {
  Store,
  Users,
  Clock,
  TrendingUp,
  MapPin,
  Smartphone,
  QrCode,
  Zap,
  Target,
  Eye,
  Play,
  BarChart3
} from 'lucide-react';

interface OfflineStoresAnalyticsProps {
  onNavigate: (page: string) => void;
}

const OfflineStoresAnalytics: React.FC<OfflineStoresAnalyticsProps> = ({ onNavigate }) => {
  const storeMetrics = [
    {
      title: "QR Code Scans",
      value: "15.2K",
      change: "+42.8%",
      description: "Video content accessed via QR codes in stores",
      icon: <QrCode size={20} className="text-blue-600" />
    },
    {
      title: "In-Store Video Views",
      value: "8.7K", 
      change: "+28.3%",
      description: "Videos watched on store displays",
      icon: <Play size={20} className="text-green-600" />
    },
    {
      title: "Digital-to-Purchase Rate",
      value: "23.4%",
      change: "+15.7%",
      description: "Customers who viewed video content and made purchase",
      icon: <Target size={20} className="text-purple-600" />
    },
    {
      title: "Average Dwell Time",
      value: "4:12",
      change: "+19.2%",
      description: "Time customers spend at video displays",
      icon: <Clock size={20} className="text-orange-600" />
    }
  ];

  const storeLocations = [
    {
      location: "Manhattan Flagship Store",
      qrScans: "3,240",
      videoViews: "2,180",
      conversionRate: "28.7%",
      topVideo: "Smart Home Demo"
    },
    {
      location: "Los Angeles Showroom", 
      qrScans: "2,890",
      videoViews: "1,950",
      conversionRate: "24.3%",
      topVideo: "Product Comparison"
    },
    {
      location: "Chicago Store",
      qrScans: "2,156",
      videoViews: "1,420",
      conversionRate: "21.8%",
      topVideo: "Customer Testimonials"
    },
    {
      location: "Miami Pop-up",
      qrScans: "1,890",
      videoViews: "1,230",
      conversionRate: "19.5%",
      topVideo: "Lifestyle Integration"
    }
  ];

  const videoContentTypes = [
    {
      type: "Product Demonstrations",
      usage: "45%",
      effectiveness: "High",
      avgViewTime: "3:24",
      conversionImpact: "+32%"
    },
    {
      type: "Customer Testimonials",
      usage: "25%", 
      effectiveness: "Very High",
      avgViewTime: "2:18",
      conversionImpact: "+28%"
    },
    {
      type: "Brand Story Videos",
      usage: "20%",
      effectiveness: "Medium",
      avgViewTime: "1:45",
      conversionImpact: "+15%"
    },
    {
      type: "Interactive Tutorials",
      usage: "10%",
      effectiveness: "High",
      avgViewTime: "4:56",
      conversionImpact: "+24%"
    }
  ];

  const interactionMethods = [
    {
      method: "QR Code Scanning",
      percentage: "68%",
      description: "Customers scan QR codes to access video content"
    },
    {
      method: "Touch Screen Displays",
      percentage: "22%", 
      description: "Direct interaction with in-store displays"
    },
    {
      method: "NFC Tap",
      percentage: "7%",
      description: "Near-field communication for instant access"
    },
    {
      method: "Staff Demonstration",
      percentage: "3%",
      description: "Staff-initiated video presentations"
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Offline Store Video Performance</h2>
            <p className="text-gray-600">Video content performance and customer engagement in physical retail locations</p>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {storeMetrics.map((metric, index) => (
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
            {/* Store Location Performance */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Store Location Performance</h3>
                <p className="text-gray-500 text-sm">Video engagement across different retail locations</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {storeLocations.map((store, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900 flex items-center">
                          <MapPin size={16} className="mr-2 text-gray-500" />
                          {store.location}
                        </h4>
                        <span className="text-sm font-semibold text-green-600">{store.conversionRate}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">QR Scans</span>
                          <div className="font-medium">{store.qrScans}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Video Views</span>
                          <div className="font-medium">{store.videoViews}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Top Video</span>
                          <div className="font-medium">{store.topVideo}</div>
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
                  {videoContentTypes.map((content, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{content.type}</h4>
                        <span className="text-sm font-semibold text-blue-600">{content.usage}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Effectiveness</span>
                          <div className="font-medium">{content.effectiveness}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Avg View Time</span>
                          <div className="font-medium">{content.avgViewTime}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Impact</span>
                          <div className="font-medium text-green-600">{content.conversionImpact}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interaction Methods */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Customer Interaction Methods</h3>
              <p className="text-gray-500 text-sm">How customers access video content in offline stores</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {interactionMethods.map((method, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-600">{method.percentage}</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">{method.method}</h4>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategy Recommendations */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Offline Store Strategy Recommendations</h3>
              <p className="text-gray-500 text-sm">Optimize video content for physical retail environments</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <QrCode size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Strategic QR Placement</h4>
                  <p className="text-sm text-gray-600">Position QR codes at eye level near product displays for maximum scans</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone size={24} className="text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Mobile Optimization</h4>
                  <p className="text-sm text-gray-600">Ensure all videos are mobile-optimized for seamless in-store viewing</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Interactive Elements</h4>
                  <p className="text-sm text-gray-600">Add interactive features to increase engagement and dwell time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflineStoresAnalytics;