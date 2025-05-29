import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import {
  Lightbulb,
  Play,
  BarChart3,
  RefreshCw,
  TrendingUp,
  Users,
  Video,
  Activity,
  ExternalLink,
  Search,
  Filter,
  Grid,
  List,
  Eye,
  X
} from 'lucide-react';

import ContentIdeationPlanning from './ContentIdeationPlanning';
import ContentTestingExecution from './ContentTestingExecution';
import PerformanceAnalysisOptimization from './PerformanceAnalysisOptimization';
import ContentRefinementIteration from './ContentRefinementIteration';

interface ContentTestProps {
  onNavigate: (page: string) => void;
}

const ContentTest: React.FC<ContentTestProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('ideation');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // E28 Product KOL Collaboration Data
  const e28CollaborationData = [
    { account: '@ovoo2112', videos: 18, product: 'E28' },
    { account: '@koily121', videos: 17, product: 'E28' },
    { account: '@suuuuupoido', videos: 17, product: 'E28' },
    { account: '@balledjyoj9', videos: 16, product: 'E28' },
    { account: '@yummyslifeee', videos: 16, product: 'E28' },
    { account: '@winds1255', videos: 14, product: 'E28' },
    { account: '@tears0093', videos: 6, product: 'E28' },
    { account: '@suuupoido', videos: 3, product: 'E28' },
    { account: '@smithluiio', videos: 2, product: 'E28' }
  ];

  // Complete E28 Video Data from the provided table
  const e28VideoData = [
    { url: 'https://www.tiktok.com/@ovoo2112/video/7505032291589115166', videoId: '7505032291589115166', account: '@ovoo2112', product: 'E28' },
    { url: 'https://www.tiktok.com/@koily121/video/7502809365439647006', videoId: '7502809365439647006', account: '@koily121', product: 'E28' },
    { url: 'https://www.tiktok.com/@balledjyoj9/video/7503933032114588974', videoId: '7503933032114588974', account: '@balledjyoj9', product: 'E28' },
    { url: 'https://www.tiktok.com/@yummyslifeee/video/7502490252083350815', videoId: '7502490252083350815', account: '@yummyslifeee', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuuuupoido/video/7505431552076107050', videoId: '7505431552076107050', account: '@suuuuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuuuupoido/video/7503761339425262891', videoId: '7503761339425262891', account: '@suuuuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuuuupoido/video/7503944164921593134', videoId: '7503944164921593134', account: '@suuuuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@koily121/video/7503148538067520798', videoId: '7503148538067520798', account: '@koily121', product: 'E28' },
    { url: 'https://www.tiktok.com/@ovoo2112/video/7502810079255612702', videoId: '7502810079255612702', account: '@ovoo2112', product: 'E28' },
    { url: 'https://www.tiktok.com/@ovoo2112/video/7504678967870360862', videoId: '7504678967870360862', account: '@ovoo2112', product: 'E28' },
    { url: 'https://www.tiktok.com/@koily121/video/7503933019477134623', videoId: '7503933019477134623', account: '@koily121', product: 'E28' },
    { url: 'https://www.tiktok.com/@koily121/video/7504301961932557598', videoId: '7504301961932557598', account: '@koily121', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuuuupoido/video/7502403522948762922', videoId: '7502403522948762922', account: '@suuuuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuuuupoido/video/7503206152088358187', videoId: '7503206152088358187', account: '@suuuuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@koily121/video/7504676462251871518', videoId: '7504676462251871518', account: '@koily121', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuuuupoido/video/7504642237066661162', videoId: '7504642237066661162', account: '@suuuuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@balledjyoj9/video/7505032293719969070', videoId: '7505032293719969070', account: '@balledjyoj9', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuuuupoido/video/7504128610941275438', videoId: '7504128610941275438', account: '@suuuuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuuuupoido/video/7505808736460590382', videoId: '7505808736460590382', account: '@suuuuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@ovoo2112/video/7505787339751296286', videoId: '7505787339751296286', account: '@ovoo2112', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuuuupoido/video/7503515805267610926', videoId: '7503515805267610926', account: '@suuuuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@koily121/video/7503747019077438750', videoId: '7503747019077438750', account: '@koily121', product: 'E28' },
    { url: 'https://www.tiktok.com/@yummyslifeee/video/7503236551694896414', videoId: '7503236551694896414', account: '@yummyslifeee', product: 'E28' },
    { url: 'https://www.tiktok.com/@ovoo2112/video/7503148637548006686', videoId: '7503148637548006686', account: '@ovoo2112', product: 'E28' },
    { url: 'https://www.tiktok.com/@ovoo2112/video/7503746230615330079', videoId: '7503746230615330079', account: '@ovoo2112', product: 'E28' },
    { url: 'https://www.tiktok.com/@balledjyoj9/video/7504676963831958830', videoId: '7504676963831958830', account: '@balledjyoj9', product: 'E28' },
    { url: 'https://www.tiktok.com/@balledjyoj9/video/7504302031373651246', videoId: '7504302031373651246', account: '@balledjyoj9', product: 'E28' },
    { url: 'https://www.tiktok.com/@koily121/video/7505788323659566367', videoId: '7505788323659566367', account: '@koily121', product: 'E28' },
    { url: 'https://www.tiktok.com/@winds1255/video/7503230504372686126', videoId: '7503230504372686126', account: '@winds1255', product: 'E28' },
    { url: 'https://www.tiktok.com/@winds1255/video/7503562461396651307', videoId: '7503562461396651307', account: '@winds1255', product: 'E28' },
    { url: 'https://www.tiktok.com/@ovoo2112/video/7504306065496919326', videoId: '7504306065496919326', account: '@ovoo2112', product: 'E28' },
    { url: 'https://www.tiktok.com/@ovoo2112/video/7503558695029198111', videoId: '7503558695029198111', account: '@ovoo2112', product: 'E28' },
    { url: 'https://www.tiktok.com/@yummyslifeee/video/7503950157222825246', videoId: '7503950157222825246', account: '@yummyslifeee', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuuuupoido/video/7506145307231669550', videoId: '7506145307231669550', account: '@suuuuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@balledjyoj9/video/7503558879113039150', videoId: '7503558879113039150', account: '@balledjyoj9', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuuuupoido/video/7504498356773850411', videoId: '7504498356773850411', account: '@suuuuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@yummyslifeee/video/7503563694165560606', videoId: '7503563694165560606', account: '@yummyslifeee', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuupoido/video/7503760401306307870', videoId: '7503760401306307870', account: '@suuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@koily121/video/7503558672723774750', videoId: '7503558672723774750', account: '@koily121', product: 'E28' },
    { url: 'https://www.tiktok.com/@suuupoido/video/7503517643874307359', videoId: '7503517643874307359', account: '@suuupoido', product: 'E28' },
    { url: 'https://www.tiktok.com/@winds1255/video/7500994416962768174', videoId: '7500994416962768174', account: '@winds1255', product: 'E28' },
    { url: 'https://www.tiktok.com/@yummyslifeee/video/7501000317496986911', videoId: '7501000317496986911', account: '@yummyslifeee', product: 'E28' },
    { url: 'https://www.tiktok.com/@tears0093/video/7495746395622755615', videoId: '7495746395622755615', account: '@tears0093', product: 'E28' },
    { url: 'https://www.tiktok.com/@smithluiio/video/7495410531445116191', videoId: '7495410531445116191', account: '@smithluiio', product: 'E28' }
  ];

  // Remove duplicates and get unique videos
  const uniqueVideos = e28VideoData.filter((video, index, self) => 
    index === self.findIndex(v => v.videoId === video.videoId)
  );

  // Filter videos based on search and account selection
  const filteredVideos = uniqueVideos.filter(video => {
    const matchesSearch = video.account.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.videoId.includes(searchTerm);
    const matchesAccount = selectedAccount === 'all' || video.account === selectedAccount;
    return matchesSearch && matchesAccount;
  });

  // Calculate total videos and unique accounts
  const totalVideos = e28CollaborationData.reduce((sum, item) => sum + item.videos, 0);
  const uniqueAccounts = e28CollaborationData.length;
  const avgVideosPerAccount = (totalVideos / uniqueAccounts).toFixed(1);

  // KOL Distribution Chart Options
  const kolDistributionOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: 'Number of Videos',
      axisLabel: {
        formatter: '{value}'
      }
    },
    yAxis: {
      type: 'category',
      data: e28CollaborationData.map(item => item.account).reverse(),
      axisLabel: {
        interval: 0,
        rotate: 0
      }
    },
    series: [
      {
        name: 'E28 Videos',
        type: 'bar',
        data: e28CollaborationData.map(item => item.videos).reverse(),
        itemStyle: {
          color: '#3B82F6',
          borderRadius: [0, 4, 4, 0]
        },
        label: {
          show: true,
          position: 'right',
          formatter: '{c} videos'
        }
      }
    ]
  };

  // Account Performance Pie Chart
  const accountPerformancePieOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} videos ({d}%)'
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      data: e28CollaborationData.map(item => item.account)
    },
    series: [
      {
        name: 'Video Distribution',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: e28CollaborationData.map((item, index) => ({
          value: item.videos,
          name: item.account,
          itemStyle: {
            color: [
              '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981',
              '#06B6D4', '#F97316', '#6366F1', '#84CC16'
            ][index]
          }
        }))
      }
    ]
  };

  // Video Production Timeline (Mock data for demonstration)
  const videoTimelineOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6b7280'
        }
      }
    },
    legend: {
      data: ['Daily Videos', 'Cumulative Videos'],
      top: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
    },
    yAxis: [
      {
        type: 'value',
        name: 'Daily Videos',
        position: 'left'
      },
      {
        type: 'value',
        name: 'Cumulative',
        position: 'right'
      }
    ],
    series: [
      {
        name: 'Daily Videos',
        type: 'line',
        smooth: true,
        data: [15, 22, 18, 25, 20, 19],
        itemStyle: {
          color: '#3B82F6'
        },
        areaStyle: {
          opacity: 0.2
        }
      },
      {
        name: 'Cumulative Videos',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: [15, 37, 55, 80, 100, 119],
        itemStyle: {
          color: '#10B981'
        }
      }
    ]
  };

  const tabs = [
    {
      id: 'ideation',
      label: 'Content Ideation & Planning',
      icon: <Lightbulb size={16} />,
      component: <ContentIdeationPlanning onNavigate={onNavigate} />
    },
    {
      id: 'execution',
      label: 'Content Testing Execution',
      icon: <Play size={16} />,
      component: <ContentTestingExecution onNavigate={onNavigate} />
    },
    {
      id: 'analysis',
      label: 'Performance Analysis & Optimization',
      icon: <BarChart3 size={16} />,
      component: <PerformanceAnalysisOptimization onNavigate={onNavigate} />
    },
    {
      id: 'refinement',
      label: 'Content Refinement & Iteration',
      icon: <RefreshCw size={16} />,
      component: <ContentRefinementIteration onNavigate={onNavigate} />
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  // Extract video ID from TikTok URL
  const extractVideoId = (url: string) => {
    const match = url.match(/\/video\/(\d+)/);
    return match ? match[1] : '';
  };

  // Generate TikTok embed URL
  const getTikTokEmbedUrl = (videoId: string) => {
    return `https://www.tiktok.com/embed/v2/${videoId}`;
  };

  // Video Preview Modal Component
  const VideoPreviewModal = ({ video, onClose }: { video: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">TikTok Video Preview</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Video Information</h4>
              <div className="space-y-2 text-sm">
                <div><span className="font-medium">Creator:</span> {video.account}</div>
                <div><span className="font-medium">Product:</span> {video.product}</div>
                <div><span className="font-medium">Video ID:</span> {video.videoId}</div>
                <div><span className="font-medium">Platform:</span> TikTok</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Quick Actions</h4>
              <div className="space-y-3">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
                >
                  <ExternalLink size={16} />
                  <span>Open in TikTok</span>
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(video.url)}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors w-full justify-center"
                >
                  <Video size={16} />
                  <span>Copy Video URL</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 mb-3">Video Preview</h4>
            <div className="aspect-w-9 aspect-h-16 bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src={getTikTokEmbedUrl(video.videoId)}
                className="w-full h-96 border-0"
                allow="encrypted-media"
                allowFullScreen
                title={`TikTok video by ${video.account}`}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              If the video doesn't load, click "Open in TikTok" to view it directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // E28 Collaboration Summary Component
  const E28CollaborationSummary = () => (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">E28 Product KOL Collaboration Analysis</h3>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Live Data</span>
      </div>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Videos</p>
              <p className="text-2xl font-bold text-gray-900">{totalVideos}</p>
            </div>
            <Video className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">KOL Accounts</p>
              <p className="text-2xl font-bold text-gray-900">{uniqueAccounts}</p>
            </div>
            <Users className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Videos/KOL</p>
              <p className="text-2xl font-bold text-gray-900">{avgVideosPerAccount}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Product Focus</p>
              <p className="text-2xl font-bold text-gray-900">E28</p>
            </div>
            <Activity className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* KOL Distribution Chart */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-md font-medium text-gray-900 mb-4">KOL Video Distribution</h4>
          <div className="h-[400px]">
            <ReactECharts option={kolDistributionOption} style={{ height: '100%', width: '100%' }} />
          </div>
        </div>

        {/* Account Performance Pie Chart */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-md font-medium text-gray-900 mb-4">Video Share by Account</h4>
          <div className="h-[400px]">
            <ReactECharts option={accountPerformancePieOption} style={{ height: '100%', width: '100%' }} />
          </div>
        </div>
      </div>

      {/* Timeline Chart */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h4 className="text-md font-medium text-gray-900 mb-4">E28 Video Production Timeline</h4>
        <div className="h-[300px]">
          <ReactECharts option={videoTimelineOption} style={{ height: '100%', width: '100%' }} />
        </div>
      </div>

      {/* Top Performers */}
      <div className="mt-6">
        <h4 className="text-md font-medium text-gray-900 mb-3">Top E28 Content Creators</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {e28CollaborationData.slice(0, 3).map((kol, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-gray-900">{kol.account}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  index === 0 ? 'bg-yellow-100 text-yellow-800' :
                  index === 1 ? 'bg-gray-100 text-gray-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  #{index + 1}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Videos</span>
                <span className="text-xl font-bold text-indigo-600">{kol.videos}</span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${(kol.videos / e28CollaborationData[0].videos) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Video Preview Component
  const VideoPreviewSection = () => (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">E28 Video Content Gallery</h3>
          <p className="text-sm text-gray-600">Browse and preview all E28 product collaboration videos</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            {filteredVideos.length} Videos
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
            {e28CollaborationData.map(item => (
              <option key={item.account} value={item.account}>{item.account}</option>
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
          {filteredVideos.map((video, index) => (
            <div key={video.videoId} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors shadow-sm">
              <div className="aspect-w-9 aspect-h-16 mb-3">
                <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden relative group cursor-pointer"
                     onClick={() => {
                       setSelectedVideo(video);
                       setShowVideoModal(true);
                     }}>
                  <iframe
                    src={getTikTokEmbedUrl(video.videoId)}
                    className="w-full h-full border-0 pointer-events-none"
                    allow="encrypted-media"
                    title={`TikTok preview by ${video.account}`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <Play className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{video.account}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{video.product}</span>
                </div>
                <p className="text-xs text-gray-600 truncate">ID: {video.videoId}</p>
                <div className="flex items-center gap-2">
                  <button
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    onClick={() => window.open(video.url, '_blank')}
                  >
                    <ExternalLink size={14} />
                    View on TikTok
                  </button>
                  <button 
                    className="p-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors"
                    onClick={() => {
                      setSelectedVideo(video);
                      setShowVideoModal(true);
                    }}
                  >
                    <Eye size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredVideos.map((video, index) => (
            <div key={video.videoId} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden relative group cursor-pointer"
                     onClick={() => {
                       setSelectedVideo(video);
                       setShowVideoModal(true);
                     }}>
                  <iframe
                    src={getTikTokEmbedUrl(video.videoId)}
                    className="w-full h-full border-0 pointer-events-none scale-150"
                    allow="encrypted-media"
                    title={`TikTok preview by ${video.account}`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-medium text-gray-900">{video.account}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{video.product}</span>
                  </div>
                  <p className="text-sm text-gray-600">Video ID: {video.videoId}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  onClick={() => window.open(video.url, '_blank')}
                >
                  <ExternalLink size={14} />
                  View on TikTok
                </button>
                <button 
                  className="p-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors"
                  onClick={() => {
                    setSelectedVideo(video);
                    setShowVideoModal(true);
                  }}
                >
                  <Eye size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <Video className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Video Statistics */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{uniqueVideos.length}</div>
          <div className="text-sm text-gray-600">Unique Videos</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">{new Set(uniqueVideos.map(v => v.account)).size}</div>
          <div className="text-sm text-gray-600">Active KOLs</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{Math.round(uniqueVideos.length / new Set(uniqueVideos.map(v => v.account)).size * 10) / 10}</div>
          <div className="text-sm text-gray-600">Avg Videos/KOL</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">100%</div>
          <div className="text-sm text-gray-600">E28 Focus</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full bg-gray-50">
      {/* E28 Collaboration Summary - Always visible at top */}
      <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <E28CollaborationSummary />
        <VideoPreviewSection />
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === tab.id
                  ? 'text-indigo-600 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 h-full">
        {activeTabData?.component}
      </div>

      {/* Video Preview Modal */}
      {showVideoModal && selectedVideo && (
        <VideoPreviewModal 
          video={selectedVideo} 
          onClose={() => {
            setShowVideoModal(false);
            setSelectedVideo(null);
          }}
        />
      )}
    </div>
  );
};

export default ContentTest;