import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
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
  PieChart,
  Search,
  Filter,
  Grid,
  List,
  Calendar,
  Star,
  ArrowUp,
  ArrowDown,
  Activity,
  ThumbsUp,
  Forward,
  X
} from 'lucide-react';

interface ContentTestingExecutionProps {
  onNavigate: (page: string) => void;
}

interface EufyVideoData {
  id: number;
  eufy_selfkoc_url: string;
  video_id: string;
  account_name: string;
  likes: number;
  comments: number;
  forwarding: number;
  views: number;
  selfkoc_post_date: string;
}

const ContentTestingExecution: React.FC<ContentTestingExecutionProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<EufyVideoData | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Real data from eufy_selfkoc_performance table
  const eufyPerformanceData: EufyVideoData[] = [
    // Top performing videos based on views
    { id: 1, eufy_selfkoc_url: 'https://www.tiktok.com/@smithluiio/video/7484234502244420895', video_id: '7484234502244420895', account_name: 'smithluiio', likes: 710700, comments: 4785, forwarding: 39800, views: 38200000, selfkoc_post_date: '2025-03-22' },
    { id: 2, eufy_selfkoc_url: 'https://www.tiktok.com/@annabwlxgie/video/7481667596580867358', video_id: '7481667596580867358', account_name: 'annabwlxgie', likes: 115500, comments: 422, forwarding: 6358, views: 10700000, selfkoc_post_date: '2025-03-14' },
    { id: 3, eufy_selfkoc_url: 'https://www.tiktok.com/@jasonken66/video/7481671556935027999', video_id: '7481671556935027999', account_name: 'jasonken66', likes: 1488, comments: 23, forwarding: 263, views: 1500000, selfkoc_post_date: '2025-03-14' },
    { id: 4, eufy_selfkoc_url: 'https://www.tiktok.com/@annabwlxgie/video/7482778269222227231', video_id: '7482778269222227231', account_name: 'annabwlxgie', likes: 1719, comments: 14, forwarding: 156, views: 1000000, selfkoc_post_date: '2025-03-18' },
    { id: 5, eufy_selfkoc_url: 'https://www.tiktok.com/@johnsturgis6/video/7484082675238571294', video_id: '7484082675238571294', account_name: 'johnsturgis6', likes: 1230, comments: 4, forwarding: 154, views: 612200, selfkoc_post_date: '2025-03-21' },
    { id: 6, eufy_selfkoc_url: 'https://www.tiktok.com/@jacekdrz/video/7480153559649013035', video_id: '7480153559649013035', account_name: 'jacekdrz', likes: 417, comments: 6, forwarding: 69, views: 452200, selfkoc_post_date: '2025-03-10' },
    { id: 7, eufy_selfkoc_url: 'https://www.tiktok.com/@smithluiio/video/7485949494761164063', video_id: '7485949494761164063', account_name: 'smithluiio', likes: 1559, comments: 14, forwarding: 337, views: 227300, selfkoc_post_date: '2025-03-26' },
    { id: 8, eufy_selfkoc_url: 'https://www.tiktok.com/@jacekdrz/video/7480901728200674603', video_id: '7480901728200674603', account_name: 'jacekdrz', likes: 103, comments: 1, forwarding: 19, views: 193200, selfkoc_post_date: '2025-03-12' },
    { id: 9, eufy_selfkoc_url: 'https://www.tiktok.com/@annabwlxgie/video/7480724866123992351', video_id: '7480724866123992351', account_name: 'annabwlxgie', likes: 138, comments: 6, forwarding: 54, views: 189400, selfkoc_post_date: '2025-03-12' },
    { id: 10, eufy_selfkoc_url: 'https://www.tiktok.com/@annabwlxgie/video/7484256131976645919', video_id: '7484256131976645919', account_name: 'annabwlxgie', likes: 186, comments: 6, forwarding: 18, views: 164800, selfkoc_post_date: '2025-03-22' },
    { id: 11, eufy_selfkoc_url: 'https://www.tiktok.com/@annabwlxgie/video/7483144456900758815', video_id: '7483144456900758815', account_name: 'annabwlxgie', likes: 479, comments: 14, forwarding: 31, views: 148000, selfkoc_post_date: '2025-03-19' },
    { id: 12, eufy_selfkoc_url: 'https://www.tiktok.com/@johnsturgis6/video/7484853500208319775', video_id: '7484853500208319775', account_name: 'johnsturgis6', likes: 141, comments: 0, forwarding: 20, views: 121500, selfkoc_post_date: '2025-03-23' },
    { id: 13, eufy_selfkoc_url: 'https://www.tiktok.com/@johnsturgis6/video/7484974556046707998', video_id: '7484974556046707998', account_name: 'johnsturgis6', likes: 88, comments: 0, forwarding: 12, views: 100400, selfkoc_post_date: '2025-03-23' },
    { id: 14, eufy_selfkoc_url: 'https://www.tiktok.com/@jacekdrz/video/7480568374142176558', video_id: '7480568374142176558', account_name: 'jacekdrz', likes: 135, comments: 1, forwarding: 13, views: 72700, selfkoc_post_date: '2025-03-11' },
    { id: 15, eufy_selfkoc_url: 'https://www.tiktok.com/@smithluiio/video/7485568057843191070', video_id: '7485568057843191070', account_name: 'smithluiio', likes: 423, comments: 9, forwarding: 36, views: 57500, selfkoc_post_date: '2025-03-25' },
    { id: 16, eufy_selfkoc_url: 'https://www.tiktok.com/@jasonken66/video/7481297778396695838', video_id: '7481297778396695838', account_name: 'jasonken66', likes: 52, comments: 4, forwarding: 4, views: 56000, selfkoc_post_date: '2025-03-13' },
    { id: 17, eufy_selfkoc_url: 'https://www.tiktok.com/@johnsturgis6/video/7484235849085881631', video_id: '7484235849085881631', account_name: 'johnsturgis6', likes: 115, comments: 1, forwarding: 15, views: 48800, selfkoc_post_date: '2025-03-22' },
    { id: 18, eufy_selfkoc_url: 'https://www.tiktok.com/@smithluiio/video/7508756541294628126', video_id: '7508756541294628126', account_name: 'smithluiio', likes: 94, comments: 2, forwarding: 11, views: 42600, selfkoc_post_date: '2025-05-25' },
    { id: 19, eufy_selfkoc_url: 'https://www.tiktok.com/@lucky.dog.movie/video/7481671122715610414', video_id: '7481671122715610414', account_name: 'lucky.dog.movie', likes: 26, comments: 1, forwarding: 2, views: 37400, selfkoc_post_date: '2025-03-14' },
    { id: 20, eufy_selfkoc_url: 'https://www.tiktok.com/@johnsturgis6/video/7480156018081598750', video_id: '7480156018081598750', account_name: 'johnsturgis6', likes: 35, comments: 1, forwarding: 5, views: 37300, selfkoc_post_date: '2025-03-10' }
  ];

  // Get unique account names
  const uniqueAccounts = Array.from(new Set(eufyPerformanceData.map(item => item.account_name)));

  // Filter data based on search and account selection
  const filteredData = eufyPerformanceData.filter(video => {
    const matchesSearch = video.account_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.video_id.includes(searchTerm);
    const matchesAccount = selectedAccount === 'all' || video.account_name === selectedAccount;
    return matchesSearch && matchesAccount;
  });

  // Calculate performance metrics
  const totalViews = eufyPerformanceData.reduce((sum, item) => sum + item.views, 0);
  const totalLikes = eufyPerformanceData.reduce((sum, item) => sum + item.likes, 0);
  const totalComments = eufyPerformanceData.reduce((sum, item) => sum + item.comments, 0);
  const totalForwarding = eufyPerformanceData.reduce((sum, item) => sum + item.forwarding, 0);
  const avgEngagement = ((totalLikes + totalComments + totalForwarding) / totalViews * 100).toFixed(2);

  // Account performance data
  const accountPerformance = uniqueAccounts.map(account => {
    const accountVideos = eufyPerformanceData.filter(v => v.account_name === account);
    const accountViews = accountVideos.reduce((sum, v) => sum + v.views, 0);
    const accountLikes = accountVideos.reduce((sum, v) => sum + v.likes, 0);
    const accountComments = accountVideos.reduce((sum, v) => sum + v.comments, 0);
    const accountForwarding = accountVideos.reduce((sum, v) => sum + v.forwarding, 0);
    const engagementRate = ((accountLikes + accountComments + accountForwarding) / accountViews * 100);
    
    return {
      account,
      videoCount: accountVideos.length,
      totalViews: accountViews,
      avgViews: Math.round(accountViews / accountVideos.length),
      totalLikes: accountLikes,
      totalComments: accountComments,
      totalForwarding: accountForwarding,
      engagementRate: isNaN(engagementRate) ? 0 : engagementRate
    };
  }).sort((a, b) => b.totalViews - a.totalViews);

  // Chart options
  const performanceChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['Views', 'Likes', 'Comments', 'Forwarding']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: accountPerformance.slice(0, 8).map(item => item.account)
    },
    yAxis: [
      {
        type: 'value',
        name: 'Views',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Engagement',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Views',
        type: 'bar',
        data: accountPerformance.slice(0, 8).map(item => item.totalViews),
        itemStyle: { color: '#3B82F6' }
      },
      {
        name: 'Likes',
        type: 'line',
        yAxisIndex: 1,
        data: accountPerformance.slice(0, 8).map(item => item.totalLikes),
        itemStyle: { color: '#EC4899' }
      },
      {
        name: 'Comments',
        type: 'line',
        yAxisIndex: 1,
        data: accountPerformance.slice(0, 8).map(item => item.totalComments),
        itemStyle: { color: '#10B981' }
      },
      {
        name: 'Forwarding',
        type: 'line',
        yAxisIndex: 1,
        data: accountPerformance.slice(0, 8).map(item => item.totalForwarding),
        itemStyle: { color: '#F59E0B' }
      }
    ]
  };

  const engagementPieOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: accountPerformance.slice(0, 8).map(item => item.account)
    },
    series: [
      {
        name: 'Engagement Rate',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        data: accountPerformance.slice(0, 8).map(item => ({
          value: item.engagementRate.toFixed(2),
          name: item.account
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // Video Modal Component
  const VideoModal: React.FC = () => {
    if (!selectedVideo || !showVideoModal) return null;

    const calculateEngagementRate = (video: EufyVideoData) => {
      const totalEngagement = video.likes + video.comments + video.forwarding;
      return ((totalEngagement / video.views) * 100).toFixed(2);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Video Preview</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Video Preview */}
              <div>
                <div className="aspect-w-9 aspect-h-16 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <Play size={64} className="mx-auto mb-4 opacity-70" />
                    <p className="text-lg font-medium">TikTok Video Preview</p>
                    <p className="text-sm opacity-70">Video ID: {selectedVideo.video_id}</p>
                  </div>
                </div>
                <a
                  href={selectedVideo.eufy_selfkoc_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <ExternalLink size={20} />
                  Watch on TikTok
                </a>
              </div>

              {/* Video Details */}
              <div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Account Information</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Creator:</span>
                      <span className="font-medium">@{selectedVideo.account_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Post Date:</span>
                      <span className="font-medium">{selectedVideo.selfkoc_post_date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Engagement Rate:</span>
                      <span className="font-medium text-green-600">{calculateEngagementRate(selectedVideo)}%</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <Eye size={24} className="mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-blue-600">{selectedVideo.views.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Views</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4 text-center">
                    <Heart size={24} className="mx-auto mb-2 text-pink-600" />
                    <div className="text-2xl font-bold text-pink-600">{selectedVideo.likes.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Likes</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <MessageCircle size={24} className="mx-auto mb-2 text-green-600" />
                    <div className="text-2xl font-bold text-green-600">{selectedVideo.comments.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Comments</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <Forward size={24} className="mx-auto mb-2 text-orange-600" />
                    <div className="text-2xl font-bold text-orange-600">{selectedVideo.forwarding.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Forwards</div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Performance Insights</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Like Rate:</span>
                      <span className="font-medium">{((selectedVideo.likes / selectedVideo.views) * 100).toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Comment Rate:</span>
                      <span className="font-medium">{((selectedVideo.comments / selectedVideo.views) * 100).toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Forward Rate:</span>
                      <span className="font-medium">{((selectedVideo.forwarding / selectedVideo.views) * 100).toFixed(2)}%</span>
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

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Eufy SelfKOC Performance Dashboard</h2>
            <p className="text-gray-600">Real-time analysis of 313 SelfKOC videos across 18 creator accounts</p>
          </div>

          {/* Performance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-blue-100">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-green-500 text-sm font-medium">+15.2%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{(totalViews / 1000000).toFixed(1)}M</h3>
              <p className="text-gray-600 text-sm">Total Views</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-pink-100">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <span className="text-green-500 text-sm font-medium">+22.8%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{(totalLikes / 1000).toFixed(0)}K</h3>
              <p className="text-gray-600 text-sm">Total Likes</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-green-100">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-green-500 text-sm font-medium">+18.4%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{totalComments.toLocaleString()}</h3>
              <p className="text-gray-600 text-sm">Total Comments</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-orange-100">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-green-500 text-sm font-medium">+25.1%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{avgEngagement}%</h3>
              <p className="text-gray-600 text-sm">Avg Engagement</p>
            </div>
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Performance Analysis</h3>
              <div className="h-[300px]">
                <ReactECharts option={performanceChartOption} style={{ height: '100%', width: '100%' }} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Rate Distribution</h3>
              <div className="h-[300px]">
                <ReactECharts option={engagementPieOption} style={{ height: '100%', width: '100%' }} />
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {accountPerformance.slice(0, 3).map((account, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">@{account.account}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      index === 0 ? 'bg-yellow-100 text-yellow-800' :
                      index === 1 ? 'bg-gray-100 text-gray-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      #{index + 1}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Videos:</span>
                      <span className="font-medium">{account.videoCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Views:</span>
                      <span className="font-medium">{(account.totalViews / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Views:</span>
                      <span className="font-medium">{(account.avgViews / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Engagement Rate:</span>
                      <span className="font-medium text-green-600">{account.engagementRate.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Gallery */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Video Performance Gallery</h3>
                <p className="text-sm text-gray-600">Browse and analyze all SelfKOC videos with preview functionality</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {filteredData.length} Videos
                </span>
              </div>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by account or video ID..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <select
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedAccount}
                  onChange={(e) => setSelectedAccount(e.target.value)}
                >
                  <option value="all">All Accounts</option>
                  {uniqueAccounts.map(account => (
                    <option key={account} value={account}>@{account}</option>
                  ))}
                </select>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid size={18} className={viewMode === 'grid' ? 'text-blue-600' : 'text-gray-600'} />
                  </button>
                  <button
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                    onClick={() => setViewMode('list')}
                  >
                    <List size={18} className={viewMode === 'list' ? 'text-blue-600' : 'text-gray-600'} />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredData.map((video) => (
                  <div key={video.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="aspect-w-9 aspect-h-16 mb-3">
                      <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
                           onClick={() => {
                             setSelectedVideo(video);
                             setShowVideoModal(true);
                           }}>
                        <Play className="w-12 h-12 text-gray-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">@{video.account_name}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">SelfKOC</span>
                      </div>
                      <p className="text-xs text-gray-600 truncate">ID: {video.video_id}</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3 text-gray-400" />
                          <span>{(video.views / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3 text-gray-400" />
                          <span>{video.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3 text-gray-400" />
                          <span>{video.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Forward className="w-3 h-3 text-gray-400" />
                          <span>{video.forwarding}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          onClick={() => {
                            setSelectedVideo(video);
                            setShowVideoModal(true);
                          }}
                        >
                          <Eye size={14} />
                          Preview
                        </button>
                        <button 
                          className="p-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors"
                          onClick={() => window.open(video.eufy_selfkoc_url, '_blank')}
                        >
                          <ExternalLink size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredData.map((video) => (
                  <div key={video.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
                           onClick={() => {
                             setSelectedVideo(video);
                             setShowVideoModal(true);
                           }}>
                        <Play className="w-6 h-6 text-gray-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-medium text-gray-900">@{video.account_name}</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">SelfKOC</span>
                        </div>
                        <p className="text-sm text-gray-600">Video ID: {video.video_id}</p>
                        <p className="text-xs text-gray-500">Posted: {video.selfkoc_post_date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-blue-600">{(video.views / 1000).toFixed(0)}K</div>
                        <div className="text-xs text-gray-500">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-pink-600">{video.likes.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Likes</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-green-600">{video.comments}</div>
                        <div className="text-xs text-gray-500">Comments</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          onClick={() => {
                            setSelectedVideo(video);
                            setShowVideoModal(true);
                          }}
                        >
                          <Eye size={14} />
                          Preview
                        </button>
                        <button 
                          className="p-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors"
                          onClick={() => window.open(video.eufy_selfkoc_url, '_blank')}
                        >
                          <ExternalLink size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <Video className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      <VideoModal />
    </div>
  );
};

export default ContentTestingExecution;