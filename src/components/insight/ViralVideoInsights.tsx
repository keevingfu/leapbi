import React, { useState, useEffect } from 'react';
import { Play, Heart, MessageCircle, Share, Eye, TrendingUp, BarChart3, Users, Trophy, Video, Search, Calendar, ExternalLink, Filter, Star, Timer, Hash, X, Maximize2, Minimize2 } from 'lucide-react';

interface ViralVideoInsightsProps {
  onNavigate?: (tab: string) => void;
}

interface DatabaseVideoData {
  id: number;
  kol_video_id: string;
  kol_title: string;
  kol_views: number;
  kol_likes: number;
  kol_comments: number;
  kol_video_url: string;
  engagement_rate: number;
  virality_score: number;
  content_category: string;
  brand_mentions: string;
  hashtag_count: number;
  created_date: string;
}

interface TikTokVideoData {
  id: number;
  video_url: string;
  video_description: string;
  creator_name: string;
  creator_username: string;
  like_count: number;
  view_count: number;
  comment_count: number;
  share_count: number;
  category: string;
  publish_time: string;
  product_title?: string;
  product_price?: number;
}

interface SearchFilters {
  category: string;
  minViews: string;
  sortBy: string;
  timeRange: string;
}

const ViralVideoInsights: React.FC<ViralVideoInsightsProps> = ({ onNavigate }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [kolVideos, setKolVideos] = useState<DatabaseVideoData[]>([]);
  const [tiktokVideos, setTiktokVideos] = useState<TikTokVideoData[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<DatabaseVideoData[]>([]);
  const [expandedVideoId, setExpandedVideoId] = useState<number | null>(null);
  
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'all',
    minViews: '1000',
    sortBy: 'views',
    timeRange: 'all'
  });

  // Mock database API calls - replace with actual API endpoints
  const fetchKolVideos = async (): Promise<DatabaseVideoData[]> => {
    // Simulate API call to fetch from insight_tk table
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            kol_video_id: "7461343279884340513",
            kol_title: "Going deep in search of black diamond at the depths of 3000 feet #blackdiamondmining",
            kol_views: 97049110,
            kol_likes: 2028651,
            kol_comments: 38817,
            kol_video_url: "https://www.tiktok.com/@BlackDiamond/video/7461343279884340513",
            engagement_rate: 2.13,
            virality_score: 95.5,
            content_category: "Entertainment",
            brand_mentions: "None",
            hashtag_count: 15,
            created_date: "2025-01-07"
          },
          {
            id: 2,
            kol_video_id: "7488807092678102302",
            kol_title: "World's Longest Phone Charger @ankerofficial #anker #ankermaggo #poweredbyanker",
            kol_views: 24085972,
            kol_likes: 368710,
            kol_comments: 1707,
            kol_video_url: "https://www.tiktok.com/@_tylerblanchard_/video/7488807092678102302",
            engagement_rate: 1.54,
            virality_score: 42.3,
            content_category: "Anker Products",
            brand_mentions: "Anker",
            hashtag_count: 6,
            created_date: "2025-02-15"
          },
          {
            id: 3,
            kol_video_id: "7481465224411761962",
            kol_title: "#ad Nada mejor que ganar tiempo dejando que algo más haga el trabajo por ti, por eso me encanta @eufy US !",
            kol_views: 18462328,
            kol_likes: 618821,
            kol_comments: 3639,
            kol_video_url: "https://www.tiktok.com/@Erika/video/7481465224411761962",
            engagement_rate: 3.37,
            virality_score: 38.9,
            content_category: "Home Appliances",
            brand_mentions: "Eufy",
            hashtag_count: 8,
            created_date: "2025-02-10"
          },
          {
            id: 4,
            kol_video_id: "7495728148957482271",
            kol_title: "#eufyvacuum #eufyomnic20 #eufy #eufyclean #eufyc20 #robotcleaner #mopvaccum #robot",
            kol_views: 8634180,
            kol_likes: 87271,
            kol_comments: 401,
            kol_video_url: "https://www.tiktok.com/@jackterry51/video/7495728148957482271",
            engagement_rate: 1.01,
            virality_score: 18.7,
            content_category: "Home Appliances",
            brand_mentions: "Eufy",
            hashtag_count: 12,
            created_date: "2025-02-20"
          },
          {
            id: 5,
            kol_video_id: "7502114650973162782",
            kol_title: "Robot vacuum cleaning hack - Best robo vacuum for pet hair #robotvacuum #cleaning",
            kol_views: 15632847,
            kol_likes: 294785,
            kol_comments: 2156,
            kol_video_url: "https://www.tiktok.com/@cleaninghacks/video/7502114650973162782",
            engagement_rate: 1.91,
            virality_score: 32.1,
            content_category: "Home Appliances",
            brand_mentions: "Eufy",
            hashtag_count: 18,
            created_date: "2025-02-12"
          },
          {
            id: 6,
            kol_video_id: "7498765432109876543",
            kol_title: "Anker PowerCore 10000 - Best portable charger review #anker #powerbank #tech",
            kol_views: 12847293,
            kol_likes: 187456,
            kol_comments: 1324,
            kol_video_url: "https://www.tiktok.com/@techreviews/video/7498765432109876543",
            engagement_rate: 1.47,
            virality_score: 28.3,
            content_category: "Anker Products",
            brand_mentions: "Anker",
            hashtag_count: 12,
            created_date: "2025-02-18"
          },
          {
            id: 7,
            kol_video_id: "7494567890123456789",
            kol_title: "Gaming setup with Anker charging station - Ultimate desk organization #gaming #anker",
            kol_views: 9876543,
            kol_likes: 142389,
            kol_comments: 987,
            kol_video_url: "https://www.tiktok.com/@gamingsetup/video/7494567890123456789",
            engagement_rate: 1.45,
            virality_score: 22.7,
            content_category: "Anker Products",
            brand_mentions: "Anker",
            hashtag_count: 8,
            created_date: "2025-02-14"
          },
          {
            id: 8,
            kol_video_id: "7491234567890123456",
            kol_title: "Eufy robot vacuum vs pet hair - Real test results #eufy #pets #cleaning",
            kol_views: 8347291,
            kol_likes: 156789,
            kol_comments: 2341,
            kol_video_url: "https://www.tiktok.com/@petowners/video/7491234567890123456",
            engagement_rate: 1.91,
            virality_score: 19.8,
            content_category: "Home Appliances",
            brand_mentions: "Eufy",
            hashtag_count: 14,
            created_date: "2025-02-16"
          },
          {
            id: 9,
            kol_video_id: "7487654321098765432",
            kol_title: "Wireless charging pad setup - Anker PowerWave review #wireless #charging #anker",
            kol_views: 7234567,
            kol_likes: 98765,
            kol_comments: 543,
            kol_video_url: "https://www.tiktok.com/@wirelesstech/video/7487654321098765432",
            engagement_rate: 1.37,
            virality_score: 17.2,
            content_category: "Anker Products",
            brand_mentions: "Anker",
            hashtag_count: 9,
            created_date: "2025-02-11"
          },
          {
            id: 10,
            kol_video_id: "7484321098765432109",
            kol_title: "Smart home automation with Eufy security camera #smarthome #security #eufy",
            kol_views: 6789012,
            kol_likes: 123456,
            kol_comments: 789,
            kol_video_url: "https://www.tiktok.com/@smarthome/video/7484321098765432109",
            engagement_rate: 1.83,
            virality_score: 16.1,
            content_category: "Home Appliances",
            brand_mentions: "Eufy",
            hashtag_count: 11,
            created_date: "2025-02-13"
          },
          {
            id: 11,
            kol_video_id: "7480987654321098765",
            kol_title: "Travel essentials - Anker portable charger collection #travel #anker #essentials",
            kol_views: 5432109,
            kol_likes: 87654,
            kol_comments: 432,
            kol_video_url: "https://www.tiktok.com/@traveltech/video/7480987654321098765",
            engagement_rate: 1.62,
            virality_score: 13.8,
            content_category: "Anker Products",
            brand_mentions: "Anker",
            hashtag_count: 7,
            created_date: "2025-02-09"
          },
          {
            id: 12,
            kol_video_id: "7477654321098765432",
            kol_title: "Office productivity with Eufy vacuum automation #office #productivity #eufy",
            kol_views: 4987654,
            kol_likes: 76543,
            kol_comments: 321,
            kol_video_url: "https://www.tiktok.com/@officetech/video/7477654321098765432",
            engagement_rate: 1.54,
            virality_score: 12.3,
            content_category: "Home Appliances",
            brand_mentions: "Eufy",
            hashtag_count: 6,
            created_date: "2025-02-08"
          },
          {
            id: 13,
            kol_video_id: "7474321098765432109",
            kol_title: "Tech haul - Latest Anker accessories review #techhaul #anker #accessories",
            kol_views: 4321098,
            kol_likes: 65432,
            kol_comments: 234,
            kol_video_url: "https://www.tiktok.com/@techhaul/video/7474321098765432109",
            engagement_rate: 1.52,
            virality_score: 11.7,
            content_category: "Anker Products",
            brand_mentions: "Anker",
            hashtag_count: 5,
            created_date: "2025-02-06"
          },
          {
            id: 14,
            kol_video_id: "7470987654321098765",
            kol_title: "Home cleaning routine with robot vacuum #cleaning #routine #eufy",
            kol_views: 3876543,
            kol_likes: 54321,
            kol_comments: 187,
            kol_video_url: "https://www.tiktok.com/@cleaninglife/video/7470987654321098765",
            engagement_rate: 1.41,
            virality_score: 10.9,
            content_category: "Home Appliances",
            brand_mentions: "Eufy",
            hashtag_count: 8,
            created_date: "2025-02-04"
          },
          {
            id: 15,
            kol_video_id: "7467654321098765432",
            kol_title: "Car accessories - Anker car charger review #car #accessories #anker",
            kol_views: 3432109,
            kol_likes: 43210,
            kol_comments: 156,
            kol_video_url: "https://www.tiktok.com/@caraccessories/video/7467654321098765432",
            engagement_rate: 1.26,
            virality_score: 9.8,
            content_category: "Anker Products",
            brand_mentions: "Anker",
            hashtag_count: 4,
            created_date: "2025-02-02"
          },
          {
            id: 16,
            kol_video_id: "7464321098765432109",
            kol_title: "Student tech essentials - Budget Anker gear #student #budget #anker",
            kol_views: 2987654,
            kol_likes: 39876,
            kol_comments: 123,
            kol_video_url: "https://www.tiktok.com/@studenttech/video/7464321098765432109",
            engagement_rate: 1.34,
            virality_score: 8.7,
            content_category: "Anker Products",
            brand_mentions: "Anker",
            hashtag_count: 6,
            created_date: "2025-01-31"
          },
          {
            id: 17,
            kol_video_id: "7460987654321098765",
            kol_title: "Pet-friendly home automation with Eufy #pets #automation #eufy",
            kol_views: 2543210,
            kol_likes: 32109,
            kol_comments: 98,
            kol_video_url: "https://www.tiktok.com/@pettech/video/7460987654321098765",
            engagement_rate: 1.27,
            virality_score: 7.6,
            content_category: "Home Appliances",
            brand_mentions: "Eufy",
            hashtag_count: 7,
            created_date: "2025-01-29"
          },
          {
            id: 18,
            kol_video_id: "7457654321098765432",
            kol_title: "Minimalist desk setup - Anker charging solutions #minimalist #desk #anker",
            kol_views: 2198765,
            kol_likes: 28765,
            kol_comments: 87,
            kol_video_url: "https://www.tiktok.com/@minimalisttech/video/7457654321098765432",
            engagement_rate: 1.31,
            virality_score: 6.9,
            content_category: "Anker Products",
            brand_mentions: "Anker",
            hashtag_count: 5,
            created_date: "2025-01-27"
          },
          {
            id: 19,
            kol_video_id: "7454321098765432109",
            kol_title: "Weekend cleaning with robot vacuum automation #weekend #cleaning #eufy",
            kol_views: 1876543,
            kol_likes: 23456,
            kol_comments: 65,
            kol_video_url: "https://www.tiktok.com/@weekendvibes/video/7454321098765432109",
            engagement_rate: 1.25,
            virality_score: 5.8,
            content_category: "Home Appliances",
            brand_mentions: "Eufy",
            hashtag_count: 6,
            created_date: "2025-01-25"
          },
          {
            id: 20,
            kol_video_id: "7450987654321098765",
            kol_title: "Tech gift guide - Best Anker products for 2025 #gifts #tech #anker",
            kol_views: 1543210,
            kol_likes: 19876,
            kol_comments: 54,
            kol_video_url: "https://www.tiktok.com/@techgifts/video/7450987654321098765",
            engagement_rate: 1.29,
            virality_score: 4.7,
            content_category: "Anker Products",
            brand_mentions: "Anker",
            hashtag_count: 4,
            created_date: "2025-01-23"
          }
        ]);
      }, 1000);
    });
  };

  const fetchTikTokVideos = async (): Promise<TikTokVideoData[]> => {
    // Simulate API call to fetch from tiktok_videos table
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            video_url: "https://www.tiktok.com/@smithluiio/video/7502114650973162782",
            video_description: "robotic vacuum, robo vacuum, robot vacuum #robotcleaner #mopvaccum",
            creator_name: "jackterry51",
            creator_username: "smithluiio",
            like_count: 8782,
            view_count: 610717,
            comment_count: 88,
            share_count: 645,
            category: "Household Appliances",
            publish_time: "2025-05-09 00:36:37",
            product_title: "eufy Robot Vacuum Omni C20",
            product_price: 479.99
          }
        ]);
      }, 800);
    });
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [kolData, tiktokData] = await Promise.all([
          fetchKolVideos(),
          fetchTikTokVideos()
        ]);
        setKolVideos(kolData);
        setTiktokVideos(tiktokData);
        // Default display: Top 20 highest-view videos
        const top20Videos = kolData
          .sort((a, b) => b.kol_views - a.kol_views)
          .slice(0, 20);
        setFilteredVideos(top20Videos);
      } catch (error) {
        console.error('Error loading video data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSearch = () => {
    if (!searchKeyword.trim() && filters.category === 'all') {
      // Reset to top 20 highest-view videos
      const top20Videos = kolVideos
        .sort((a, b) => b.kol_views - a.kol_views)
        .slice(0, 20);
      setFilteredVideos(top20Videos);
      return;
    }

    const filtered = kolVideos.filter(video => {
      const matchesKeyword = !searchKeyword.trim() || 
        video.kol_title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        video.brand_mentions.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        video.content_category.toLowerCase().includes(searchKeyword.toLowerCase());

      const matchesCategory = filters.category === 'all' || 
        video.content_category === filters.category;

      const matchesViews = video.kol_views >= parseInt(filters.minViews);

      return matchesKeyword && matchesCategory && matchesViews;
    });

    // Sort results
    const sorted = filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'views':
          return b.kol_views - a.kol_views;
        case 'engagement':
          return b.engagement_rate - a.engagement_rate;
        case 'virality':
          return b.virality_score - a.virality_score;
        case 'recent':
          return new Date(b.created_date).getTime() - new Date(a.created_date).getTime();
        default:
          return b.kol_views - a.kol_views;
      }
    });

    setFilteredVideos(sorted);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getEngagementColor = (rate: number): string => {
    if (rate >= 5) return 'text-green-600';
    if (rate >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getViralityColor = (score: number): string => {
    if (score >= 50) return 'bg-red-500';
    if (score >= 25) return 'bg-orange-500';
    if (score >= 10) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  const VideoCard: React.FC<{ video: DatabaseVideoData }> = ({ video }) => {
    const isExpanded = expandedVideoId === video.id;
    
    return (
    <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 ${isExpanded ? 'col-span-full max-w-none' : ''}`}>
      <div className="relative">
        <div className={`w-full ${isExpanded ? 'h-96' : 'h-40'} bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center relative overflow-hidden cursor-pointer transition-all duration-300`}
             onClick={() => {
               setExpandedVideoId(isExpanded ? null : video.id);
             }}>
          
          {/* Video Preview - Embedded when expanded */}
          {isExpanded ? (
            <div className="w-full h-full relative">
              {/* TikTok Embed Iframe */}
              <iframe
                src={`https://www.tiktok.com/embed/v2/${video.kol_video_id}?autoplay=0`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-t-lg"
                title={`TikTok video ${video.kol_video_id}`}
                style={{ background: 'black' }}
              ></iframe>
              
              {/* Close button overlay */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedVideoId(null);
                }}
                className="absolute top-3 right-3 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all z-30"
              >
                <X className="w-4 h-4" />
              </button>
              
              {/* Loading fallback */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center pointer-events-none">
                <div className="text-white text-center animate-pulse">
                  <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <div className="text-sm">Loading TikTok Video...</div>
                </div>
              </div>
            </div>
          ) : (
            /* Thumbnail View */
            <>
              <Play className="w-12 h-12 text-white opacity-80 transition-all duration-300 z-20" />
              
              {/* Video thumbnail background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              {/* Click to play indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 rounded-full p-3 z-30">
                <div className="text-white text-xs font-medium flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Click to Play Video
                </div>
              </div>
            </>
          )}
          
          {/* Badges - Always visible */}
          <div className={`absolute top-3 left-3 px-3 py-1 ${isExpanded ? 'text-sm' : 'text-xs'} rounded-full text-white font-bold ${getViralityColor(video.virality_score)} transition-all duration-300 z-20`}>
            🔥 {video.virality_score.toFixed(1)}
          </div>
          
          <div className={`absolute top-3 right-3 px-3 py-1 ${isExpanded ? 'text-sm' : 'text-xs'} rounded bg-black bg-opacity-70 text-white transition-all duration-300 z-20`}>
            {video.content_category}
          </div>
          
          {video.brand_mentions !== 'None' && (
            <div className={`absolute bottom-3 left-3 px-3 py-1 ${isExpanded ? 'text-sm' : 'text-xs'} rounded bg-blue-600 text-white transition-all duration-300 z-20`}>
              {video.brand_mentions}
            </div>
          )}
          
          <div className={`absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1 ${isExpanded ? 'text-sm' : 'text-xs'} rounded bg-gray-800 bg-opacity-70 text-white transition-all duration-300 z-20`}>
            <Hash className={`${isExpanded ? 'w-4 h-4' : 'w-3 h-3'} transition-all duration-300`} />
            {video.hashtag_count}
          </div>
        </div>
      </div>
      
      {/* Expanded Video Details */}
      {isExpanded && (
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Video Information */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Video Analysis</h4>
                <p className="text-gray-700 leading-relaxed">{video.kol_title}</p>
              </div>
              
              {/* Performance Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 rounded-lg p-3 text-center">
                  <Eye className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-blue-600">{formatNumber(video.kol_views)}</div>
                  <div className="text-xs text-gray-600">Views</div>
                </div>
                <div className="bg-red-100 rounded-lg p-3 text-center">
                  <Heart className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-red-600">{formatNumber(video.kol_likes)}</div>
                  <div className="text-xs text-gray-600">Likes</div>
                </div>
                <div className="bg-green-100 rounded-lg p-3 text-center">
                  <MessageCircle className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-green-600">{formatNumber(video.kol_comments)}</div>
                  <div className="text-xs text-gray-600">Comments</div>
                </div>
                <div className="bg-purple-100 rounded-lg p-3 text-center">
                  <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                  <div className={`text-lg font-bold ${getEngagementColor(video.engagement_rate)}`}>
                    {video.engagement_rate.toFixed(1)}%
                  </div>
                  <div className="text-xs text-gray-600">Engagement</div>
                </div>
              </div>
            </div>
            
            {/* Content Metrics */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h5 className="font-medium text-gray-900 mb-3">Content Metrics</h5>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      Virality Score:
                    </span>
                    <span className="font-semibold text-orange-600">{video.virality_score.toFixed(1)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Star className="w-4 h-4 text-blue-500" />
                      Brand Mentions:
                    </span>
                    <span className="font-semibold text-blue-600">{video.brand_mentions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Hash className="w-4 h-4 text-pink-500" />
                      Hashtag Count:
                    </span>
                    <span className="font-semibold text-pink-600">{video.hashtag_count}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      Published:
                    </span>
                    <span className="font-semibold text-gray-700">
                      {new Date(video.created_date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={video.kol_video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white py-2 px-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open TikTok
                </a>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedVideoId(null);
                  }}
                  className="bg-gray-600 text-white py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Minimize2 className="w-4 h-4" />
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="p-4">
        <h4 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 min-h-[40px]">
          {video.kol_title}
        </h4>
        
        <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3 text-blue-500" />
            <span className="font-semibold">{formatNumber(video.kol_views)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-3 h-3 text-red-500" />
            <span className="font-semibold">{formatNumber(video.kol_likes)}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3 h-3 text-green-500" />
            <span className="font-semibold">{formatNumber(video.kol_comments)}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-purple-500" />
            <span className={`font-semibold ${getEngagementColor(video.engagement_rate)}`}>
              {video.engagement_rate.toFixed(1)}%
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {new Date(video.created_date).toLocaleDateString()}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpandedVideoId(isExpanded ? null : video.id);
              }}
              className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                isExpanded 
                  ? 'text-red-600 hover:text-red-700' 
                  : 'text-green-600 hover:text-green-700'
              }`}
            >
              {isExpanded ? (
                <>
                  <Minimize2 className="w-3 h-3" />
                  Close
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  Play Video
                </>
              )}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(video.kol_video_url, '_blank');
              }}
              className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium"
            >
              <ExternalLink className="w-3 h-3" />
              TikTok
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  };

  // Calculate overall statistics
  const totalViews = kolVideos.reduce((sum, video) => sum + video.kol_views, 0);
  const totalLikes = kolVideos.reduce((sum, video) => sum + video.kol_likes, 0);
  const totalComments = kolVideos.reduce((sum, video) => sum + video.kol_comments, 0);
  const avgEngagement = kolVideos.length > 0 ? 
    kolVideos.reduce((sum, video) => sum + video.engagement_rate, 0) / kolVideos.length : 0;

  return (
    <div className="p-6 space-y-6">
      {/* Overall Statistics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Viral Video Analytics Dashboard</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 text-center">
            <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">{formatNumber(totalViews)}</div>
            <div className="text-sm text-gray-600">Total Views</div>
            <div className="text-xs text-green-600 mt-1">KOL Video Database</div>
          </div>
          <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-4 text-center">
            <Heart className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-pink-600">{formatNumber(totalLikes)}</div>
            <div className="text-sm text-gray-600">Total Likes</div>
            <div className="text-xs text-green-600 mt-1">{kolVideos.length} Videos Tracked</div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 text-center">
            <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{formatNumber(totalComments)}</div>
            <div className="text-sm text-gray-600">Total Comments</div>
            <div className="text-xs text-green-600 mt-1">Real-time Data</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-4 text-center">
            <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">{avgEngagement.toFixed(1)}%</div>
            <div className="text-sm text-gray-600">Avg Engagement</div>
            <div className="text-xs text-green-600 mt-1">Cross-platform</div>
          </div>
        </div>
      </div>

      {/* Advanced Search Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <Search className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Smart Video Search & Analytics</h3>
        </div>

        {/* Search Controls */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title, brand, or category (e.g., eufy, anker, robot vacuum)"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
            </div>
            
            <button
              onClick={handleSearch}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          </div>

          {/* Advanced Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filters.category}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Anker Products">Anker Products</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Partner Brands">Partner Brands</option>
                <option value="Mobile Tech">Mobile Tech</option>
                <option value="Audio Electronics">Audio Electronics</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gray-400" />
              <select
                value={filters.minViews}
                onChange={(e) => setFilters(prev => ({ ...prev, minViews: e.target.value }))}
                className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="1000">1K+ Views</option>
                <option value="10000">10K+ Views</option>
                <option value="100000">100K+ Views</option>
                <option value="1000000">1M+ Views</option>
                <option value="10000000">10M+ Views</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-gray-400" />
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="views">Sort by Views</option>
                <option value="engagement">Sort by Engagement</option>
                <option value="virality">Sort by Virality Score</option>
                <option value="recent">Sort by Recent</option>
              </select>
            </div>
          </div>
        </div>

        {/* Default Display: Top 20 Videos Header */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-5 h-5 text-red-600" />
            <h4 className="font-semibold text-red-900">
              {searchKeyword || filters.category !== 'all' ? 
                `Search Results ${searchKeyword ? `for "${searchKeyword}"` : ''}` : 
                'Top 20 Highest-View Viral Videos'
              }
            </h4>
          </div>
          <p className="text-sm text-red-700">
            {searchKeyword || filters.category !== 'all' ? 
              `Found ${filteredVideos.length} videos sorted by ${filters.sortBy}` :
              `Displaying the top ${filteredVideos.length} most viral videos by view count`
            }
          </p>
        </div>
      </div>

      {/* Video Results Grid */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No Results Found</h4>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViralVideoInsights;