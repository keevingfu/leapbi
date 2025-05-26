import React, { useState } from 'react';
import {
  Users,
  BarChart3,
  MessageCircle,
  Play,
  Eye,
  Heart,
  Share2,
  Target,
  Clock,
  Zap,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Settings,
  Video,
  ExternalLink,
  Trophy,
  PieChart
} from 'lucide-react';

interface ContentTestingExecutionProps {
  onNavigate: (page: string) => void;
}

interface HighExposureVideo {
  id: string;
  title: string;
  platform: 'YouTube' | 'Instagram' | 'TikTok';
  account: string;
  thumbnail: string;
  url: string;
  views: string;
  likes: string;
  comments: string;
  shares: string;
  followers?: string;
  engagement: string;
  publishDate: string;
  rank: number;
  exposureScore: number;
}

const ContentTestingExecution: React.FC<ContentTestingExecutionProps> = ({ onNavigate }) => {
  const [showAccountMatrix, setShowAccountMatrix] = useState(true);

  const testingAccounts = [
    {
      account: "@anker_test_001",
      platform: "TikTok",
      followers: "12.5K",
      status: "Active",
      currentTest: "Pet Hair Challenge A",
      performance: { views: 45600, engagement: "8.2%", completion: "72%" }
    },
    {
      account: "@anker_test_002",
      platform: "TikTok",
      followers: "8.9K",
      status: "Active",
      currentTest: "Pet Hair Challenge B",
      performance: { views: 32400, engagement: "9.7%", completion: "68%" }
    },
    {
      account: "@anker_ig_test_01",
      platform: "Instagram",
      followers: "15.2K",
      status: "Testing",
      currentTest: "Battery Life Demo",
      performance: { views: 28900, engagement: "11.4%", completion: "81%" }
    },
    {
      account: "@anker_yt_test_01",
      platform: "YouTube",
      followers: "3.8K",
      status: "Active",
      currentTest: "Smart Home Integration",
      performance: { views: 12300, engagement: "6.8%", completion: "89%" }
    }
  ];

  // Mock high-exposure video data for Account Matrix
  const highExposureVideos: HighExposureVideo[] = [
    // YouTube Top 5
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `yt-high-${i + 1}`,
      title: `Anker Pet Camera Test ${i + 1} - Breakthrough Results!`,
      platform: 'YouTube' as const,
      account: `@anker_yt_test_0${(i % 3) + 1}`,
      thumbnail: '/api/placeholder/320/180',
      url: `https://youtube.com/watch?v=test${i + 1}`,
      views: `${(4.8 - i * 0.3).toFixed(1)}M`,
      likes: `${(180 - i * 20)}K`,
      comments: `${(42 - i * 5).toFixed(1)}K`,
      shares: `${(28 - i * 3).toFixed(1)}K`,
      engagement: `${(12.8 - i * 0.8).toFixed(1)}%`,
      publishDate: '2024-01-15',
      rank: i + 1,
      exposureScore: 4800000 - i * 300000
    })),
    // Instagram Top 5
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `ig-high-${i + 1}`,
      title: `Smart Pet Tech Revolution #${i + 1} 🚀`,
      platform: 'Instagram' as const,
      account: `@anker_ig_test_0${(i % 2) + 1}`,
      thumbnail: '/api/placeholder/300/300',
      url: `https://instagram.com/p/test${i + 1}`,
      views: `${(3.2 - i * 0.2).toFixed(1)}M`,
      likes: `${(140 - i * 15)}K`,
      comments: `${(38 - i * 4).toFixed(1)}K`,
      shares: `${(22 - i * 2).toFixed(1)}K`,
      followers: `${(95 - i * 5)}K`,
      engagement: `${(15.2 - i * 0.6).toFixed(1)}%`,
      publishDate: '2024-01-12',
      rank: i + 1,
      exposureScore: 3200000 - i * 200000
    })),
    // TikTok Top 5
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `tt-high-${i + 1}`,
      title: `Mind-Blowing Pet Camera Hack #${i + 1} 🤯`,
      platform: 'TikTok' as const,
      account: `@anker_test_00${(i % 2) + 1}`,
      thumbnail: '/api/placeholder/300/400',
      url: `https://tiktok.com/@test/video/${i + 1}`,
      views: `${(6.1 - i * 0.4).toFixed(1)}M`,
      likes: `${(320 - i * 30)}K`,
      comments: `${(78 - i * 8).toFixed(1)}K`,
      shares: `${(45 - i * 5).toFixed(1)}K`,
      engagement: `${(18.7 - i * 1.2).toFixed(1)}%`,
      publishDate: '2024-01-10',
      rank: i + 1,
      exposureScore: 6100000 - i * 400000
    }))
  ];

  const getFilteredVideos = (platform: 'YouTube' | 'Instagram' | 'TikTok') => {
    return highExposureVideos
      .filter(video => video.platform === platform)
      .sort((a, b) => b.exposureScore - a.exposureScore)
      .slice(0, 5);
  };

  const VideoCard: React.FC<{ video: HighExposureVideo }> = ({ video }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
          <Play className="w-8 h-8 text-gray-400" />
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            #{video.rank}
          </div>
          <div className={`absolute top-2 right-2 px-2 py-1 text-xs rounded text-white ${
            video.platform === 'YouTube' ? 'bg-red-500' :
            video.platform === 'Instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
            'bg-black'
          }`}>
            {video.platform}
          </div>
          <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            {video.account}
          </div>
        </div>
      </div>
      
      <div className="p-3">
        <h4 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{video.title}</h4>
        
        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3 text-gray-400" />
            <span>{video.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-3 h-3 text-gray-400" />
            <span>{video.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3 h-3 text-gray-400" />
            <span>{video.comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Share2 className="w-3 h-3 text-gray-400" />
            <span>{video.shares}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-green-600 font-semibold">
            {video.engagement} engagement
          </span>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700"
          >
            <ExternalLink className="w-3 h-3" />
            Watch
          </a>
        </div>
      </div>
    </div>
  );

  const PlatformSection: React.FC<{ platform: 'YouTube' | 'Instagram' | 'TikTok' }> = ({ platform }) => {
    const videos = getFilteredVideos(platform);
    const platformColors = {
      YouTube: 'from-red-50 to-red-100',
      Instagram: 'from-purple-50 to-pink-50',
      TikTok: 'from-gray-50 to-gray-100'
    };

    const totalViews = videos.reduce((sum, video) => {
      const views = parseFloat(video.views.replace('M', '')) * 1000000;
      return sum + views;
    }, 0);

    return (
      <div className={`bg-gradient-to-br ${platformColors[platform]} rounded-lg p-4`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${
            platform === 'YouTube' ? 'bg-red-100' :
            platform === 'Instagram' ? 'bg-gradient-to-r from-purple-100 to-pink-100' :
            'bg-gray-100'
          }`}>
            <Video className={`w-5 h-5 ${
              platform === 'YouTube' ? 'text-red-600' :
              platform === 'Instagram' ? 'text-purple-600' :
              'text-gray-600'
            }`} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{platform} Top 5</h3>
          <div className="ml-auto text-sm text-gray-600">
            Total Views: {(totalViews / 1000000).toFixed(1)}M
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    );
  };

  const abTestResults = [
    {
      testName: "Pet Hair Challenge",
      variants: [
        { 
          version: "Version A - Direct Demo",
          views: 45600,
          engagement: "8.2%",
          ctr: "4.7%",
          completion: "72%",
          performance: "baseline"
        },
        {
          version: "Version B - Story Format",
          views: 32400,
          engagement: "9.7%",
          ctr: "5.3%",
          completion: "68%",
          performance: "winner"
        }
      ]
    },
    {
      testName: "Battery Life Showcase",
      variants: [
        {
          version: "Version A - Technical Focus",
          views: 28900,
          engagement: "6.1%",
          ctr: "3.2%",
          completion: "85%",
          performance: "baseline"
        },
        {
          version: "Version B - Lifestyle Focus",
          views: 31200,
          engagement: "8.9%",
          ctr: "4.8%",
          completion: "79%",
          performance: "winner"
        }
      ]
    }
  ];

  const engagementData = [
    {
      content: "Unboxing + First Impression",
      likes: 3420,
      comments: 186,
      shares: 94,
      saves: 267,
      totalEngagement: 3967,
      engagementRate: "8.7%"
    },
    {
      content: "Pet Hair Cleaning Demo",
      likes: 4280,
      comments: 312,
      shares: 156,
      saves: 398,
      totalEngagement: 5146,
      engagementRate: "11.3%"
    },
    {
      content: "45-Day Challenge Update",
      likes: 2890,
      comments: 124,
      shares: 67,
      saves: 189,
      totalEngagement: 3270,
      engagementRate: "7.2%"
    }
  ];

  const completionRates = [
    {
      content: "Quick Tips (15s)",
      totalViews: 45600,
      completed: 39216,
      completionRate: "86%",
      avgWatchTime: "13s"
    },
    {
      content: "Product Demo (30s)",
      totalViews: 32400,
      completed: 23328,
      completionRate: "72%",
      avgWatchTime: "22s"
    },
    {
      content: "Full Review (60s)",
      totalViews: 28900,
      completed: 17340,
      completionRate: "60%",
      avgWatchTime: "38s"
    },
    {
      content: "Challenge Video (45s)",
      totalViews: 38700,
      completed: 30960,
      completionRate: "80%",
      avgWatchTime: "36s"
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Content Testing Execution</h2>
            <p className="text-gray-600">Conduct A/B testing through matrix accounts to validate different content approaches</p>
          </div>

          {/* Testing Account Performance Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Account Performance Overview</h3>
            </div>

            {/* Mock Chart Using CSS Bars */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
              {testingAccounts.map((account, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-4">{account.account}</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Views</span>
                        <span className="font-semibold">{account.performance.views.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(account.performance.views / 50000) * 100}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Engagement</span>
                        <span className="font-semibold">{account.performance.engagement}</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: account.performance.engagement }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Completion</span>
                        <span className="font-semibold">{account.performance.completion}</span>
                      </div>
                      <div className="w-full bg-purple-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: account.performance.completion }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Platform Distribution Chart */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                <PieChart className="w-4 h-4" />
                Testing Platform Distribution
              </h4>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-8 border-transparent"
                       style={{
                         background: `conic-gradient(from 0deg, #ef4444 0deg 180deg, #8b5cf6 180deg 270deg, #6b7280 270deg 360deg)`
                       }}>
                  </div>
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">4</div>
                      <div className="text-xs text-gray-600">Accounts</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>TikTok (50%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Instagram (25%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span>YouTube (25%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Account Matrix High Exposure Videos */}
          {showAccountMatrix && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Account Matrix - High Exposure Videos</h3>
                <button
                  onClick={() => setShowAccountMatrix(!showAccountMatrix)}
                  className="ml-auto text-sm text-blue-600 hover:text-blue-700"
                >
                  {showAccountMatrix ? 'Hide' : 'Show'} Videos
                </button>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">
                    Top Performing Matrix Account Videos
                  </h4>
                </div>
                <p className="text-sm text-blue-700">
                  Displaying top 5 videos per platform based on exposure metrics. Total: 15 high-impact videos.
                </p>
              </div>

              <div className="space-y-6">
                {/* YouTube Results */}
                <PlatformSection platform="YouTube" />
                
                {/* Instagram Results */}
                <PlatformSection platform="Instagram" />
                
                {/* TikTok Results */}
                <PlatformSection platform="TikTok" />
              </div>

              {/* Exposure Summary */}
              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-4">Matrix Performance Summary</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">13.1M</div>
                    <div className="text-sm text-gray-600">Total Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">15.2%</div>
                    <div className="text-sm text-gray-600">Avg Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">638K</div>
                    <div className="text-sm text-gray-600">Total Interactions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">4.2x</div>
                    <div className="text-sm text-gray-600">ROI Multiplier</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Testing Account Matrix */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Users className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Testing Account Matrix</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testingAccounts.map((account, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{account.account}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          account.platform === 'TikTok' ? 'bg-red-100 text-red-700' :
                          account.platform === 'Instagram' ? 'bg-pink-100 text-pink-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {account.platform}
                        </span>
                        <span>{account.followers} followers</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      account.status === 'Active' ? 'bg-green-100 text-green-700' :
                      account.status === 'Testing' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {account.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600">Current Test: </span>
                      <span className="text-sm font-medium text-gray-900">{account.currentTest}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <div className="font-medium text-gray-900">{account.performance.views.toLocaleString()}</div>
                        <div className="text-gray-500">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-gray-900">{account.performance.engagement}</div>
                        <div className="text-gray-500">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-gray-900">{account.performance.completion}</div>
                        <div className="text-gray-500">Completion</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* A/B Test Results with Visualization */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="text-green-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">A/B Test Results</h3>
            </div>

            {/* A/B Test Comparison Chart */}
            <div className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4">Performance Comparison</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Views', 'Engagement', 'CTR', 'Completion'].map((metric) => (
                  <div key={metric} className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {metric === 'Views' ? '77K' : 
                       metric === 'Engagement' ? '9.0%' :
                       metric === 'CTR' ? '5.0%' : '70%'}
                    </div>
                    <div className="text-sm text-gray-600">{metric}</div>
                    <div className="text-xs text-green-600">+18% vs control</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {abTestResults.map((test, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-4">{test.testName}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {test.variants.map((variant, idx) => (
                      <div key={idx} className={`rounded-lg p-4 border-2 ${
                        variant.performance === 'winner' 
                          ? 'border-green-300 bg-green-50' 
                          : 'border-gray-200 bg-gray-50'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium text-gray-900">{variant.version}</h5>
                          {variant.performance === 'winner' && (
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                              <CheckCircle size={12} />
                              Winner
                            </span>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <div className="text-gray-600">Views</div>
                            <div className="font-medium">{variant.views.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-gray-600">Engagement</div>
                            <div className="font-medium">{variant.engagement}</div>
                          </div>
                          <div>
                            <div className="text-gray-600">CTR</div>
                            <div className="font-medium">{variant.ctr}</div>
                          </div>
                          <div>
                            <div className="text-gray-600">Completion</div>
                            <div className="font-medium">{variant.completion}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Interaction Analysis */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="text-purple-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">User Interaction Analysis</h3>
            </div>

            {/* Interaction Trends Chart */}
            <div className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4">Interaction Trends (Last 7 Days)</h4>
              <div className="relative h-32">
                <div className="absolute inset-0 flex items-end justify-between">
                  {[3.2, 4.1, 3.8, 5.1, 4.6, 5.8, 6.2].map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="w-6 bg-gradient-to-t from-purple-500 to-pink-400 rounded-t"
                        style={{ height: `${(value / 6.2) * 100}%` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Content</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Likes</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Comments</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Shares</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Saves</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Engagement Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {engagementData.map((data, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">{data.content}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Heart size={16} className="text-red-500" />
                          <span>{data.likes.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <MessageCircle size={16} className="text-blue-500" />
                          <span>{data.comments}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Share2 size={16} className="text-green-500" />
                          <span>{data.shares}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Target size={16} className="text-purple-500" />
                          <span>{data.saves}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                          parseFloat(data.engagementRate) > 10 ? 'bg-green-100 text-green-700' :
                          parseFloat(data.engagementRate) > 8 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {data.engagementRate}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Completion Rate Optimization */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <Play className="text-orange-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Completion Rate Optimization</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Video Length vs Completion Rate</h4>
                <div className="space-y-3">
                  {completionRates.map((video, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{video.content}</span>
                        <span className="text-sm font-bold text-green-600">{video.completionRate}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{video.totalViews.toLocaleString()} views</span>
                        <span>Avg watch: {video.avgWatchTime}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: video.completionRate }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Optimization Impact Chart</h4>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4">
                  <div className="relative h-40">
                    <div className="absolute inset-0 flex items-end justify-between">
                      {[72, 68, 85, 80].map((rate, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="text-xs mb-1 font-semibold text-orange-600">{rate}%</div>
                          <div 
                            className="w-8 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t"
                            style={{ height: `${rate}%` }}
                          ></div>
                          <div className="text-xs text-gray-500 mt-2">
                            {['15s', '30s', '45s', '60s'][index]}
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
      </div>
    </div>
  );
};

export default ContentTestingExecution;