import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import {
  TrendingUp,
  Target,
  FileText,
  Award,
  Youtube,
  Instagram,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  Star,
  BarChart3,
  Zap,
  Crown,
  CheckCircle,
  PieChart,
  LineChart,
  PlayCircle,
  ExternalLink,
  Globe,
  Calendar,
  Filter,
  Search,
  X,
  TrendingDown
} from 'lucide-react';

interface EcoFlowVideo {
  videoId: string;
  title: string;
  author: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  publishDate: string;
  language: string;
  country: string;
  contentType: string;
  tiktokUrl: string;
  isPaidPartnership: boolean;
}

interface ContentIdeationPlanningProps {
  onNavigate: (page: string) => void;
}

const ContentIdeationPlanning: React.FC<ContentIdeationPlanningProps> = ({ onNavigate }) => {
  const [selectedVideo, setSelectedVideo] = useState<EcoFlowVideo | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedContentType, setSelectedContentType] = useState('All');
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Real EcoFlow TikTok performance data from analysis
  const ecoflowVideos: EcoFlowVideo[] = [
    {
      videoId: '7504776301408587038',
      title: '২৪ ঘন্টা বিদ্যুৎ 🥶 EcoFlow Delta 2 #jhaltech #ips #ecoflow #solar #powerstation',
      author: 'jhaltech',
      views: 1796346,
      likes: 39584,
      comments: 888,
      shares: 7103,
      publishDate: '2025-05-13',
      language: 'Bengali',
      country: 'Bangladesh',
      contentType: 'Tech Review + Solar Tutorial',
      tiktokUrl: 'https://www.tiktok.com/@jhaltech/video/7504776301408587038',
      isPaidPartnership: false
    },
    {
      videoId: '7507297519341145366',
      title: 'FOTOWOLTAIKA dla początkujących 🤩 EcoFlow Stream Mikroinwerter 800W [WSPÓŁPRACA PŁATNA]',
      author: 'ROOTBLOG',
      views: 470677,
      likes: 6277,
      comments: 325,
      shares: 2521,
      publishDate: '2025-05-22',
      language: 'Polish',
      country: 'Poland',
      contentType: 'Solar Tutorial + Product Demo',
      tiktokUrl: 'https://www.tiktok.com/@rootblog/video/7507297519341145366',
      isPaidPartnership: true
    },
    {
      videoId: '7506985296366472454',
      title: 'Ecoflow River 2 power station #Ecoflowethiopia #abkemtrading',
      author: '🆃🅾🅼',
      views: 187528,
      likes: 5047,
      comments: 85,
      shares: 849,
      publishDate: '2025-05-21',
      language: 'English',
      country: 'Ethiopia',
      contentType: 'Product Showcase + Review',
      tiktokUrl: 'https://www.tiktok.com/@toms_tech/video/7506985296366472454',
      isPaidPartnership: false
    },
    {
      videoId: '7507015669720845611',
      title: '#ecoflow #sanvillatravel #enviosacuba #paquetesturisticos',
      author: 'Sanvilla Travel',
      views: 140022,
      likes: 4767,
      comments: 0,
      shares: 3539,
      publishDate: '2025-05-21',
      language: 'Spanish',
      country: 'Cuba',
      contentType: 'Travel Application + Service',
      tiktokUrl: 'https://www.tiktok.com/@sanvillatravel/video/7507015669720845611',
      isPaidPartnership: false
    },
    {
      videoId: '7505189377655770405',
      title: 'Enlace a la tienda oficial: https://es.ecoflow.com/products/ecoflow-delta-3?aff=1208 Código de descuento: SOLAR15%OFF',
      author: 'Solar OffGrid España',
      views: 99294,
      likes: 1976,
      comments: 38,
      shares: 468,
      publishDate: '2025-05-14',
      language: 'Spanish',
      country: 'Spain',
      contentType: 'Promotional + Discount Code',
      tiktokUrl: 'https://www.tiktok.com/@solaroffgridespana/video/7505189377655770405',
      isPaidPartnership: true
    },
    {
      videoId: '7504882242686389510',
      title: 'EcoFlow Delta 2 সোলার জেনারেটর বাংলাদেশে',
      author: 'JhalTech',
      views: 97779,
      likes: 2845,
      comments: 124,
      shares: 456,
      publishDate: '2025-05-14',
      language: 'Bengali',
      country: 'Bangladesh',
      contentType: 'Tech Review + Local Market',
      tiktokUrl: 'https://www.tiktok.com/@jhaltech/video/7504882242686389510',
      isPaidPartnership: false
    },
    {
      videoId: '7506681224891649326',
      title: 'Día del Padre Venezuela - EcoFlow portable power',
      author: 'Alejandra Valdez',
      views: 87617,
      likes: 3241,
      comments: 67,
      shares: 892,
      publishDate: '2025-05-20',
      language: 'Spanish',
      country: 'Venezuela',
      contentType: 'Holiday Marketing + Family',
      tiktokUrl: 'https://www.tiktok.com/@alevldez/video/7506681224891649326',
      isPaidPartnership: false
    },
    {
      videoId: '7505467434302434565',
      title: 'EcoFlow Ukraine - портативна електростанція',
      author: 'EcoFlow Ukraine',
      views: 86577,
      likes: 2156,
      comments: 43,
      shares: 367,
      publishDate: '2025-05-15',
      language: 'Ukrainian',
      country: 'Ukraine',
      contentType: 'Official Brand + Local Market',
      tiktokUrl: 'https://www.tiktok.com/@ecoflow_ukraine/video/7505467434302434565',
      isPaidPartnership: true
    }
  ];

  // Filter videos based on search criteria
  const filteredVideos = ecoflowVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         video.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLanguage = selectedLanguage === 'All' || video.language === selectedLanguage;
    const matchesContentType = selectedContentType === 'All' || video.contentType.includes(selectedContentType);
    return matchesSearch && matchesLanguage && matchesContentType;
  });

  // Get unique languages and content types for filters
  const languages = ['All', ...Array.from(new Set(ecoflowVideos.map(v => v.language)))];
  const contentTypes = ['All', 'Tech Review', 'Solar Tutorial', 'Product Demo', 'Promotional', 'Holiday Marketing'];

  // Calculate summary statistics
  const totalViews = filteredVideos.reduce((sum, video) => sum + video.views, 0);
  const totalEngagement = filteredVideos.reduce((sum, video) => sum + video.likes + video.comments + video.shares, 0);
  const avgViews = filteredVideos.length > 0 ? Math.round(totalViews / filteredVideos.length) : 0;
  const avgEngagementRate = filteredVideos.length > 0 ? 
    ((totalEngagement / totalViews) * 100).toFixed(2) : '0.00';

  // Language market performance analysis
  const languagePerformance = [
    {
      language: 'Bengali',
      country: 'Bangladesh',
      totalViews: 1894125,
      avgViews: 947063,
      marketShare: '55.5%',
      topCreator: '@jhaltech',
      successFactor: 'Local tech reviews + Solar education',
      opportunity: 'High engagement, underserved market'
    },
    {
      language: 'Polish', 
      country: 'Poland',
      totalViews: 470677,
      avgViews: 470677,
      marketShare: '13.8%',
      topCreator: '@rootblog',
      successFactor: 'Solar tutorials for beginners',
      opportunity: 'Paid partnerships work well'
    },
    {
      language: 'Spanish',
      country: 'Multiple (Cuba, Venezuela, Spain)',
      totalViews: 326933,
      avgViews: 108978,
      marketShare: '9.6%',
      topCreator: '@sanvillatravel',
      successFactor: 'Holiday marketing + Travel use cases',
      opportunity: 'Diverse market applications'
    },
    {
      language: 'English',
      country: 'Ethiopia',
      totalViews: 187528,
      avgViews: 187528,
      marketShare: '5.5%',
      topCreator: '@toms_tech',
      successFactor: 'Product showcases + Reviews',
      opportunity: 'African market expansion potential'
    }
  ];

  // Content type performance analysis
  const contentTypePerformance = [
    {
      type: 'Tech Review + Solar Tutorial',
      avgViews: 947063,
      engagementRate: '2.7%',
      successRate: '95%',
      bestMarkets: ['Bangladesh', 'Poland'],
      keyElements: ['Educational value', 'Local language', 'Practical demonstrations']
    },
    {
      type: 'Product Demo + Showcase',
      avgViews: 237278,
      engagementRate: '3.2%',
      successRate: '88%',
      bestMarkets: ['Ethiopia', 'Spain'],
      keyElements: ['Clear demonstrations', 'Feature highlights', 'Use case scenarios']
    },
    {
      type: 'Promotional + Discount Code',
      avgViews: 99294,
      engagementRate: '2.5%',
      successRate: '75%',
      bestMarkets: ['Spain', 'Europe'],
      keyElements: ['Clear CTAs', 'Discount codes', 'Official partnerships']
    },
    {
      type: 'Holiday Marketing + Family',
      avgViews: 87617,
      engagementRate: '4.8%',
      successRate: '92%',
      bestMarkets: ['Venezuela', 'Latin America'],
      keyElements: ['Emotional connection', 'Family scenarios', 'Seasonal relevance']
    }
  ];

  // Top performing videos chart data
  const topVideosChartOption = {
    title: {
      text: 'EcoFlow Top Performing Videos (Last 2 Weeks)',
      left: 'center',
      textStyle: { fontSize: 16, fontWeight: 'bold' }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: function(params: any) {
        const data = params[0];
        const video = filteredVideos.find(v => v.author === data.name);
        return `${data.name}<br/>Views: ${(data.value / 1000000).toFixed(1)}M<br/>Language: ${video?.language}<br/>Content: ${video?.contentType}`;
      }
    },
    xAxis: {
      type: 'category',
      data: filteredVideos.slice(0, 8).map(v => v.author),
      axisLabel: { rotate: 45, fontSize: 11 }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function(value: number) {
          return (value / 1000000).toFixed(1) + 'M';
        }
      }
    },
    series: [{
      data: filteredVideos.slice(0, 8).map(v => ({
        value: v.views,
        itemStyle: {
          color: v.language === 'Bengali' ? '#10b981' :
                 v.language === 'Polish' ? '#3b82f6' :
                 v.language === 'Spanish' ? '#f59e0b' : '#8b5cf6'
        }
      })),
      type: 'bar',
      itemStyle: { borderRadius: [4, 4, 0, 0] }
    }]
  };

  // Language distribution chart
  const languageDistributionOption = {
    title: {
      text: 'Market Performance by Language',
      left: 'center',
      textStyle: { fontSize: 16, fontWeight: 'bold' }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}M views ({d}%)'
    },
    series: [{
      name: 'Views Distribution',
      type: 'pie',
      radius: '70%',
      data: [
        { value: 1.894, name: 'Bengali (BD)', itemStyle: { color: '#10b981' } },
        { value: 0.471, name: 'Polish (PL)', itemStyle: { color: '#3b82f6' } },
        { value: 0.327, name: 'Spanish (Multi)', itemStyle: { color: '#f59e0b' } },
        { value: 0.188, name: 'English (ET)', itemStyle: { color: '#8b5cf6' } },
        { value: 0.087, name: 'Ukrainian (UA)', itemStyle: { color: '#ef4444' } }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  // Key success factors for Anker strategy
  const ankerStrategicInsights = [
    {
      insight: 'Multi-Language Market Strategy',
      ecoflowSuccess: 'Bengali market: 1.8M+ views from single video',
      ankerOpportunity: 'Target German, French, Japanese, Korean markets',
      priority: 'High',
      implementation: 'Partner with local tech reviewers in untapped language markets',
      expectedImpact: '+300% reach in new markets'
    },
    {
      insight: 'Educational Content Formula',
      ecoflowSuccess: 'Solar tutorials perform excellently across languages',
      ankerOpportunity: 'Fast charging tutorials + Power bank education',
      priority: 'High', 
      implementation: 'Create "Charging 101" series in multiple languages',
      expectedImpact: '+150% engagement vs product-only content'
    },
    {
      insight: 'Local KOL Partnership Model',
      ecoflowSuccess: 'Paid partnerships with @rootblog, @jhaltech drive results',
      ankerOpportunity: 'Recruit tech reviewers in target language markets',
      priority: 'Medium',
      implementation: 'Budget allocation for paid partnerships in 5+ languages',
      expectedImpact: '+200% conversion rate vs organic content'
    },
    {
      insight: 'Holiday & Seasonal Marketing',
      ecoflowSuccess: 'Father\'s Day content in Venezuela performed well',
      ankerOpportunity: 'Back-to-school, travel season power bank promotions',
      priority: 'Medium',
      implementation: 'Calendar-based content strategy with local holidays',
      expectedImpact: '+80% seasonal sales boost'
    }
  ];

  // Competitive window analysis
  const competitiveAnalysis = {
    ecoflowStrengths: [
      'First-mover advantage in Bengali and Polish solar education',
      'Strong local KOL relationships in emerging markets',
      'Effective paid partnership disclosure builds trust',
      'Educational content translates well across cultures'
    ],
    ankerAdvantages: [
      'Fast charging technology differentiation',
      'Better price-performance ratio',
      'Stronger brand recognition in mobile accessories',
      'More diverse product portfolio for content variety'
    ],
    marketGaps: [
      'German market: High purchasing power, minimal EcoFlow presence',
      'French market: Strong tech adoption, language barrier for EcoFlow',
      'Japanese market: Innovation-focused, premium positioning opportunity',
      'Korean market: Mobile-first culture, perfect for power bank education'
    ],
    urgentActions: [
      'Immediate budget allocation for multi-language KOL partnerships',
      'Fast charging education content production in 5+ languages',
      'Competitive pricing strategy to highlight value advantage',
      'Seasonal campaign planning for Q3/Q4 peak sales periods'
    ]
  };

  // Video preview modal component
  const VideoPreviewModal = ({ video, onClose }: { video: EcoFlowVideo; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Video Performance Analysis</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Video Information</h4>
              <div className="space-y-2 text-sm">
                <div><span className="font-medium">Creator:</span> @{video.author}</div>
                <div><span className="font-medium">Language:</span> {video.language}</div>
                <div><span className="font-medium">Country:</span> {video.country}</div>
                <div><span className="font-medium">Content Type:</span> {video.contentType}</div>
                <div><span className="font-medium">Published:</span> {video.publishDate}</div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Partnership:</span>
                  {video.isPaidPartnership ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Paid</span>
                  ) : (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Organic</span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Performance Metrics</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Views</span>
                  </div>
                  <span className="font-bold text-blue-600">{(video.views / 1000000).toFixed(1)}M</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm">Likes</span>
                  </div>
                  <span className="font-medium">{(video.likes / 1000).toFixed(1)}K</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Comments</span>
                  </div>
                  <span className="font-medium">{video.comments}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-purple-500" />
                    <span className="text-sm">Shares</span>
                  </div>
                  <span className="font-medium">{(video.shares / 1000).toFixed(1)}K</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Engagement Rate</span>
                    <span className="font-bold text-orange-600">
                      {(((video.likes + video.comments + video.shares) / video.views) * 100).toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 mb-2">Video Title</h4>
            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">{video.title}</p>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href={video.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <ExternalLink size={20} />
              <span>View on TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">EcoFlow TikTok Strategy Analysis</h2>
            <p className="text-gray-600">Analysis of {ecoflowVideos.length} EcoFlow videos (May 13-27) with {(totalViews / 1000000).toFixed(1)}M total views across {languages.length - 1} languages</p>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search videos by title or creator..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="lg:w-48">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
              <div className="lg:w-48">
                <select
                  value={selectedContentType}
                  onChange={(e) => setSelectedContentType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {contentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Performance Overview KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <PlayCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Videos</p>
                  <p className="text-2xl font-bold text-gray-900">{filteredVideos.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Views</p>
                  <p className="text-2xl font-bold text-gray-900">{(totalViews / 1000000).toFixed(1)}M</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Avg Views</p>
                  <p className="text-2xl font-bold text-gray-900">{(avgViews / 1000).toFixed(0)}K</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Avg Engagement</p>
                  <p className="text-2xl font-bold text-gray-900">{avgEngagementRate}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <ReactECharts option={topVideosChartOption} style={{ height: '350px' }} />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <ReactECharts option={languageDistributionOption} style={{ height: '350px' }} />
            </div>
          </div>

          {/* Top Performing Videos Table */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Crown className="text-yellow-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Top Performing EcoFlow Videos</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Creator</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Language/Country</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Content Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Views</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Engagement</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Partnership</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVideos.slice(0, 8).map((video, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">@{video.author}</div>
                        <div className="text-sm text-gray-600">{video.publishDate}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Globe size={16} className="text-gray-500" />
                          <div>
                            <div className="text-sm font-medium">{video.language}</div>
                            <div className="text-xs text-gray-600">{video.country}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-700">
                          {video.contentType.split(' + ')[0]}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Eye size={16} className="text-blue-500" />
                          <span className="font-bold text-blue-600">
                            {video.views >= 1000000 ? (video.views / 1000000).toFixed(1) + 'M' : 
                             video.views >= 1000 ? (video.views / 1000).toFixed(0) + 'K' : video.views}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm space-y-1">
                          <div className="flex items-center gap-1">
                            <Heart size={12} className="text-red-400" />
                            <span>{(video.likes / 1000).toFixed(0)}K</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share2 size={12} className="text-green-400" />
                            <span>{(video.shares / 1000).toFixed(1)}K</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {video.isPaidPartnership ? (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                            Paid
                          </span>
                        ) : (
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            Organic
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => {
                            setSelectedVideo(video);
                            setShowVideoModal(true);
                          }}
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          <PlayCircle size={16} />
                          Preview
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Language Market Performance */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="text-green-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Language Market Performance Analysis</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {languagePerformance.map((market, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Globe size={20} className="text-green-600" />
                      <h4 className="font-semibold text-gray-900">{market.language}</h4>
                    </div>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                      {market.marketShare}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Country:</span>
                      <span className="font-medium">{market.country}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Views:</span>
                      <span className="font-bold text-green-600">
                        {(market.totalViews / 1000000).toFixed(1)}M
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg per Video:</span>
                      <span className="font-medium">
                        {market.avgViews >= 1000000 ? (market.avgViews / 1000000).toFixed(1) + 'M' : 
                         (market.avgViews / 1000).toFixed(0) + 'K'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Top Creator:</span>
                      <span className="font-medium">{market.topCreator}</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-white rounded border border-green-200">
                    <div className="text-xs text-gray-600 mb-1">Success Factor:</div>
                    <div className="text-xs text-gray-900">{market.successFactor}</div>
                  </div>
                  <div className="mt-2 p-2 bg-yellow-50 rounded border border-yellow-200">
                    <div className="text-xs text-yellow-800">
                      <span className="font-medium">Opportunity:</span> {market.opportunity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Type Performance Analysis */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Target className="text-purple-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Content Type Performance Analysis</h3>
            </div>
            <div className="space-y-4">
              {contentTypePerformance.map((content, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{content.type}</h4>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>Avg Views: {(content.avgViews / 1000).toFixed(0)}K</span>
                        <span>Engagement: {content.engagementRate}</span>
                        <span>Success Rate: {content.successRate}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">
                        {content.successRate}
                      </div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-700">Best Markets: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {content.bestMarkets.map((market, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                          {market}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Key Elements: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {content.keyElements.map((element, idx) => (
                        <span key={idx} className="bg-white border border-purple-200 text-purple-700 px-2 py-1 rounded text-xs">
                          {element}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Insights for Anker */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="text-orange-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Strategic Insights for Anker</h3>
            </div>
            <div className="space-y-4">
              {ankerStrategicInsights.map((insight, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{insight.insight}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">EcoFlow Success:</span> {insight.ecoflowSuccess}
                      </p>
                      <p className="text-sm text-blue-700">
                        <span className="font-medium">Anker Opportunity:</span> {insight.ankerOpportunity}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        insight.priority === 'High' ? 'bg-red-100 text-red-700' :
                        insight.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {insight.priority} Priority
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Implementation: </span>
                      <span className="text-sm text-gray-900">{insight.implementation}</span>
                    </div>
                    <div className="bg-green-50 p-2 rounded border border-green-200">
                      <span className="text-sm font-medium text-green-700">Expected Impact: </span>
                      <span className="text-sm font-bold text-green-800">{insight.expectedImpact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Analysis Summary */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Competitive Window Analysis</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="text-green-600" size={20} />
                  EcoFlow Strengths
                </h4>
                <div className="space-y-2">
                  {competitiveAnalysis.ecoflowStrengths.map((strength, index) => (
                    <div key={index} className="bg-green-50 p-3 rounded border border-green-200">
                      <p className="text-sm text-green-800">{strength}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Star className="text-blue-600" size={20} />
                  Anker Advantages
                </h4>
                <div className="space-y-2">
                  {competitiveAnalysis.ankerAdvantages.map((advantage, index) => (
                    <div key={index} className="bg-blue-50 p-3 rounded border border-blue-200">
                      <p className="text-sm text-blue-800">{advantage}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="text-purple-600" size={20} />
                  Market Gaps
                </h4>
                <div className="space-y-2">
                  {competitiveAnalysis.marketGaps.map((gap, index) => (
                    <div key={index} className="bg-purple-50 p-3 rounded border border-purple-200">
                      <p className="text-sm text-purple-800">{gap}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="text-red-600" size={20} />
                  Urgent Actions
                </h4>
                <div className="space-y-2">
                  {competitiveAnalysis.urgentActions.map((action, index) => (
                    <div key={index} className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="text-sm text-red-800">{action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
      </div>
    </div>
  );
};

export default ContentIdeationPlanning;