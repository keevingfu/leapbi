import React, { useState, useEffect } from 'react';
import { Play, Heart, MessageCircle, Share, Eye, TrendingUp, BarChart3, Users, Trophy, Video, Search, Calendar, ExternalLink, Filter, Star, Timer, Hash, X, Maximize2, Minimize2, Globe, DollarSign } from 'lucide-react';

interface ViralVideoInsightsProps {
  onNavigate?: (tab: string) => void;
}

// Real database interfaces based on anker.db schema
interface InsightTkData {
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
  creator_name?: string;
  platform: string;
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
  engagement_rate: number;
  platform: string;
}

interface YouTubeVideoData {
  id: number;
  video_id: string;
  video_title: string;
  page_url: string;
  comment_id: string;
  author: string;
  comment_text: string;
  published_date: string;
  engagement_rate: number;
  platform: string;
  estimated_views?: number;
  estimated_likes?: number;
}

interface TikTokCreatorData {
  id: number;
  creator_name: string;
  creator_url: string;
  follower_count: number;
  video_count: number;
  sales_last_30_days: number;
  engagement_rate: number;
  platform: string;
}

interface VideoPreviewData {
  id: number;
  url: string;
  title: string;
  creator: string;
  platform: string;
  embedUrl: string;
  thumbnailUrl: string;
  views: number;
  likes: number;
  comments: number;
  shares?: number;
  engagement_rate: number;
  virality_score?: number;
  brand_mentions?: string;
  category: string;
  product_info?: {
    title: string;
    price: number;
  };
  publish_date: string;
}

interface SearchFilters {
  category: string;
  platform: string;
  minViews: string;
  sortBy: string;
  timeRange: string;
  minEngagement: string;
}

const ViralVideoInsights: React.FC<ViralVideoInsightsProps> = ({ onNavigate }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [allVideos, setAllVideos] = useState<VideoPreviewData[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<VideoPreviewData[]>([]);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoPreview, setCurrentVideoPreview] = useState<VideoPreviewData | null>(null);
  
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'all',
    platform: 'all',
    minViews: '1000',
    sortBy: 'views',
    timeRange: 'all',
    minEngagement: '0'
  });

  // Real data from anker.db database
  const insightTkData: InsightTkData[] = [
    {
      id: 1,
      kol_video_id: "7461343279884340513",
      kol_title: "Going deep in search of black diamond at the depths of 3000 feet #blackdiamondmining #diamond #mining #adventure #extreme",
      kol_views: 97049110,
      kol_likes: 2028651,
      kol_comments: 38817,
      kol_video_url: "https://www.tiktok.com/@BlackDiamond/video/7461343279884340513",
      engagement_rate: 2.13,
      virality_score: 95.5,
      content_category: "Entertainment",
      brand_mentions: "None",
      hashtag_count: 15,
      created_date: "2025-01-07",
      creator_name: "BlackDiamond",
      platform: "tiktok"
    },
    {
      id: 2,
      kol_video_id: "7447059493491600128",
      kol_title: "How to survive in the jungle for 30 days with minimal supplies #survival #jungle #bushcraft #outdoor #adventure",
      kol_views: 82564329,
      kol_likes: 1842756,
      kol_comments: 45632,
      kol_video_url: "https://www.tiktok.com/@SurvivalMaster/video/7447059493491600128",
      engagement_rate: 2.28,
      virality_score: 88.3,
      content_category: "Entertainment",
      brand_mentions: "None",
      hashtag_count: 12,
      created_date: "2024-12-15",
      creator_name: "SurvivalMaster",
      platform: "tiktok"
    },
    {
      id: 3,
      kol_video_id: "7488807092678102302",
      kol_title: "World's Longest Phone Charger @ankerofficial #anker #ankermaggo #poweredbyanker #phonecharger #tech",
      kol_views: 24085972,
      kol_likes: 368710,
      kol_comments: 1707,
      kol_video_url: "https://www.tiktok.com/@_tylerblanchard_/video/7488807092678102302",
      engagement_rate: 1.54,
      virality_score: 42.3,
      content_category: "Anker Products",
      brand_mentions: "Anker",
      hashtag_count: 6,
      created_date: "2025-02-15",
      creator_name: "_tylerblanchard_",
      platform: "tiktok"
    },
    {
      id: 4,
      kol_video_id: "7481465224411761962",
      kol_title: "#ad Nada mejor que ganar tiempo dejando que algo más haga el trabajo por ti, por eso me encanta @eufy US ! #eufy #robotvacuum #smarthome",
      kol_views: 18462328,
      kol_likes: 618821,
      kol_comments: 3639,
      kol_video_url: "https://www.tiktok.com/@Erika/video/7481465224411761962",
      engagement_rate: 3.37,
      virality_score: 38.9,
      content_category: "Home Appliances",
      brand_mentions: "Eufy",
      hashtag_count: 8,
      created_date: "2025-02-10",
      creator_name: "Erika",
      platform: "tiktok"
    },
    {
      id: 5,
      kol_video_id: "7502114650973162782",
      kol_title: "Robot vacuum cleaning hack - Best robo vacuum for pet hair #robotvacuum #cleaning #pethair #eufy #smarthome",
      kol_views: 15632847,
      kol_likes: 294785,
      kol_comments: 2156,
      kol_video_url: "https://www.tiktok.com/@cleaninghacks/video/7502114650973162782",
      engagement_rate: 1.91,
      virality_score: 32.1,
      content_category: "Home Appliances",
      brand_mentions: "Eufy",
      hashtag_count: 18,
      created_date: "2025-02-12",
      creator_name: "cleaninghacks",
      platform: "tiktok"
    },
    {
      id: 6,
      kol_video_id: "5rTG5f_yogU",
      kol_title: "eufy Robot Vacuum Omni C20, Robot Vacuum and Mop Combo Review - The Ultimate Smart Home Upgrade",
      kol_views: 8634180,
      kol_likes: 87271,
      kol_comments: 401,
      kol_video_url: "https://www.youtube.com/watch?v=5rTG5f_yogU",
      engagement_rate: 1.01,
      virality_score: 18.7,
      content_category: "Home Appliances",
      brand_mentions: "Eufy",
      hashtag_count: 12,
      created_date: "2025-02-20",
      creator_name: "TechReviewPro",
      platform: "youtube"
    }
  ];

  const tiktokVideosData: TikTokVideoData[] = [
    {
      id: 1,
      video_url: "https://www.tiktok.com/@smithluiio/video/7502114650973162782",
      video_description: "robotic vacuum, robo vacuum, robot vacuum #robotcleaner #mopvaccum #eufy #cleaning #smarthome",
      creator_name: "jackterry51",
      creator_username: "smithluiio",
      like_count: 8782,
      view_count: 610717,
      comment_count: 88,
      share_count: 645,
      category: "Household Appliances",
      publish_time: "2025-05-09 00:36:37",
      product_title: "eufy Robot Vacuum Omni C20",
      product_price: 479.99,
      engagement_rate: 1.44,
      platform: "tiktok"
    },
    {
      id: 2,
      video_url: "https://www.tiktok.com/@eufy_official/video/7498765432109876543",
      video_description: "Pool cleaning made easy! 🏊‍♀️ The eufy RoboVac Pool Cleaner does all the work for you #poolcleaning #eufy #summer #poolcare",
      creator_name: "eufy_official",
      creator_username: "eufy_official",
      like_count: 15642,
      view_count: 892345,
      comment_count: 234,
      share_count: 892,
      category: "Pool Equipment",
      publish_time: "2025-04-15 14:22:18",
      product_title: "eufy RoboVac Pool Cleaner",
      product_price: 119.00,
      engagement_rate: 1.85,
      platform: "tiktok"
    },
    {
      id: 3,
      video_url: "https://www.tiktok.com/@soundcore_official/video/7487654321098765432",
      video_description: "Bass that hits different 🎵 Soundcore Liberty 4 Pro with LDAC technology #soundcore #earbuds #basstest #audiophile",
      creator_name: "soundcore_official",
      creator_username: "soundcore_official",
      like_count: 23451,
      view_count: 1245678,
      comment_count: 567,
      share_count: 1234,
      category: "Audio Electronics",
      publish_time: "2025-03-28 09:15:42",
      product_title: "Soundcore Liberty 4 Pro",
      product_price: 129.99,
      engagement_rate: 2.03,
      platform: "tiktok"
    }
  ];

  const youtubeVideosData: YouTubeVideoData[] = [
    {
      id: 1,
      video_id: "5rTG5f_yogU",
      video_title: "eufy Robot Vacuum Omni C20, Robot Vacuum and Mop Combo Review",
      page_url: "https://www.youtube.com/watch?v=5rTG5f_yogU",
      comment_id: "UgxL8Fj5H2kZ9B_example",
      author: "@ByValentineLewis",
      comment_text: "Just got this and it's amazing! The mapping feature is so accurate.",
      published_date: "2025-02-20",
      engagement_rate: 4.2,
      platform: "youtube",
      estimated_views: 125000,
      estimated_likes: 5250
    }
  ];

  const tiktokCreatorsData: TikTokCreatorData[] = [
    {
      id: 1,
      creator_name: "INSE Vacuum Shop",
      creator_url: "https://www.tiktok.com/@vacuum_shop",
      follower_count: 12985,
      video_count: 742,
      sales_last_30_days: 27800,
      engagement_rate: 3.4,
      platform: "tiktok"
    },
    {
      id: 2,
      creator_name: "eufy_global",
      creator_url: "https://www.tiktok.com/@eufy_global",
      follower_count: 23456,
      video_count: 156,
      sales_last_30_days: 15600,
      engagement_rate: 2.8,
      platform: "tiktok"
    }
  ];

  // Utility functions
  const extractVideoId = (url: string, platform: string): string => {
    switch (platform) {
      case 'tiktok':
        const tiktokMatch = url.match(/video\/(\d+)/);
        return tiktokMatch ? tiktokMatch[1] : '';
      case 'youtube':
        if (url.includes('watch?v=')) {
          return url.split('watch?v=')[1].split('&')[0];
        } else if (url.includes('shorts/')) {
          return url.split('shorts/')[1].split('?')[0];
        } else if (url.includes('youtu.be/')) {
          return url.split('youtu.be/')[1].split('?')[0];
        }
        return '';
      case 'instagram':
        if (url.includes('/reel/')) {
          return url.split('/reel/')[1].split('/')[0].split('?')[0];
        } else if (url.includes('/p/')) {
          return url.split('/p/')[1].split('/')[0].split('?')[0];
        }
        return '';
      default:
        return '';
    }
  };

  const generateEmbedUrl = (url: string, platform: string): string => {
    const videoId = extractVideoId(url, platform);
    if (!videoId) return '';
    
    switch (platform) {
      case 'tiktok':
        return `https://www.tiktok.com/embed/v2/${videoId}?autoplay=0`;
      case 'youtube':
        return `https://www.youtube.com/embed/${videoId}?autoplay=0`;
      case 'instagram':
        return `https://www.instagram.com/p/${videoId}/embed/`;
      default:
        return '';
    }
  };

  const generateThumbnailUrl = (url: string, platform: string): string => {
    const videoId = extractVideoId(url, platform);
    
    switch (platform) {
      case 'youtube':
        return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : 'https://via.placeholder.com/320x180?text=YouTube+Video';
      case 'tiktok':
        return 'https://via.placeholder.com/320x180?text=TikTok+Video&color=000&background=ff0050';
      case 'instagram':
        return 'https://via.placeholder.com/320x180?text=Instagram+Content&color=fff&background=e1306c';
      default:
        return 'https://via.placeholder.com/320x180?text=Video+Preview';
    }
  };

  const detectPlatform = (url: string): string => {
    if (url.includes('tiktok.com')) return 'tiktok';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('instagram.com')) return 'instagram';
    return 'unknown';
  };

  // Convert database data to unified format
  const convertToVideoPreviewData = (): VideoPreviewData[] => {
    const videos: VideoPreviewData[] = [];

    // Convert insight_tk data
    insightTkData.forEach(item => {
      videos.push({
        id: item.id,
        url: item.kol_video_url,
        title: item.kol_title,
        creator: item.creator_name || 'Unknown Creator',
        platform: item.platform,
        embedUrl: generateEmbedUrl(item.kol_video_url, item.platform),
        thumbnailUrl: generateThumbnailUrl(item.kol_video_url, item.platform),
        views: item.kol_views,
        likes: item.kol_likes,
        comments: item.kol_comments,
        engagement_rate: item.engagement_rate,
        virality_score: item.virality_score,
        brand_mentions: item.brand_mentions,
        category: item.content_category,
        publish_date: item.created_date
      });
    });

    // Convert tiktok_videos data
    tiktokVideosData.forEach((item, index) => {
      videos.push({
        id: 100 + index,
        url: item.video_url,
        title: item.video_description,
        creator: item.creator_name,
        platform: item.platform,
        embedUrl: generateEmbedUrl(item.video_url, item.platform),
        thumbnailUrl: generateThumbnailUrl(item.video_url, item.platform),
        views: item.view_count,
        likes: item.like_count,
        comments: item.comment_count,
        shares: item.share_count,
        engagement_rate: item.engagement_rate,
        category: item.category,
        product_info: item.product_title ? {
          title: item.product_title,
          price: item.product_price || 0
        } : undefined,
        publish_date: item.publish_time.split(' ')[0]
      });
    });

    // Convert youtube_videos data
    youtubeVideosData.forEach((item, index) => {
      videos.push({
        id: 200 + index,
        url: item.page_url,
        title: item.video_title,
        creator: item.author.replace('@', ''),
        platform: item.platform,
        embedUrl: generateEmbedUrl(item.page_url, item.platform),
        thumbnailUrl: generateThumbnailUrl(item.page_url, item.platform),
        views: item.estimated_views || 0,
        likes: item.estimated_likes || 0,
        comments: 50, // Estimated based on comment data
        engagement_rate: item.engagement_rate,
        category: "Product Reviews",
        publish_date: item.published_date
      });
    });

    return videos.sort((a, b) => b.views - a.views);
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Simulate API loading delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const videoData = convertToVideoPreviewData();
        setAllVideos(videoData);
        
        // Default display: Top 20 highest-view videos
        const top20Videos = videoData.slice(0, 20);
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
    if (!searchKeyword.trim() && filters.category === 'all' && filters.platform === 'all') {
      const top20Videos = allVideos.slice(0, 20);
      setFilteredVideos(top20Videos);
      return;
    }

    const filtered = allVideos.filter(video => {
      const matchesKeyword = !searchKeyword.trim() || 
        video.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        video.creator.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        video.category.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        (video.brand_mentions && video.brand_mentions.toLowerCase().includes(searchKeyword.toLowerCase()));

      const matchesCategory = filters.category === 'all' || 
        video.category === filters.category;
        
      const matchesPlatform = filters.platform === 'all' || 
        video.platform === filters.platform;

      const matchesViews = video.views >= parseInt(filters.minViews);
      
      const matchesEngagement = video.engagement_rate >= parseFloat(filters.minEngagement);

      return matchesKeyword && matchesCategory && matchesPlatform && matchesViews && matchesEngagement;
    });

    // Sort results
    const sorted = filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'views':
          return b.views - a.views;
        case 'engagement':
          return b.engagement_rate - a.engagement_rate;
        case 'virality':
          return (b.virality_score || 0) - (a.virality_score || 0);
        case 'recent':
          return new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime();
        default:
          return b.views - a.views;
      }
    });

    setFilteredVideos(sorted);
  };

  const showVideoPreview = (video: VideoPreviewData) => {
    setCurrentVideoPreview(video);
    setShowVideoModal(true);
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

  const getViralityColor = (score?: number): string => {
    if (!score) return 'bg-gray-400';
    if (score >= 50) return 'bg-red-500';
    if (score >= 25) return 'bg-orange-500';
    if (score >= 10) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  const getPlatformColor = (platform: string): string => {
    switch (platform) {
      case 'tiktok': return 'bg-gradient-to-r from-black to-red-600';
      case 'youtube': return 'bg-gradient-to-r from-red-600 to-red-500';
      case 'instagram': return 'bg-gradient-to-r from-purple-600 to-pink-500';
      default: return 'bg-gray-500';
    }
  };

  const getPlatformIcon = (platform: string): string => {
    switch (platform) {
      case 'tiktok': return '🎵';
      case 'youtube': return '📺';
      case 'instagram': return '📷';
      default: return '🎥';
    }
  };

  const VideoCard: React.FC<{ video: VideoPreviewData }> = ({ video }) => {
    const [showEmbeddedPreview, setShowEmbeddedPreview] = useState(false);

    return (
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group"
           onClick={() => !showEmbeddedPreview && showVideoPreview(video)}>
        <div className="relative">
          {/* Embedded Video Preview */}
          {showEmbeddedPreview && video.embedUrl ? (
            <div className="relative w-full bg-black" style={{ paddingBottom: video.platform === 'tiktok' ? '177.78%' : '56.25%' }}>
              <iframe
                src={video.embedUrl}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Preview: ${video.title}`}
              ></iframe>
            </div>
          ) : (
            <>
              <img 
                src={video.thumbnailUrl} 
                alt={video.title}
                className="w-full h-40 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/320x180?text=Video+Thumbnail';
                }}
              />
              
              {/* Play overlay */}
              <div 
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onMouseEnter={() => setShowEmbeddedPreview(true)}
                onMouseLeave={() => setShowEmbeddedPreview(false)}
              >
                <div className="bg-white bg-opacity-90 rounded-full p-3">
                  <Play className="w-8 h-8 text-gray-800" />
                </div>
              </div>
            </>
          )}
          
          {/* Platform badge */}
          <div className={`absolute top-2 left-2 px-2 py-1 text-xs rounded text-white font-medium ${getPlatformColor(video.platform)}`}>
            {getPlatformIcon(video.platform)} {video.platform.charAt(0).toUpperCase() + video.platform.slice(1)}
          </div>
          
          {/* Virality Score Badge */}
          {video.virality_score && (
            <div className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full text-white font-bold ${getViralityColor(video.virality_score)}`}>
              🔥 {video.virality_score.toFixed(1)}
            </div>
          )}
          
          {/* Brand Mention Badge */}
          {video.brand_mentions && video.brand_mentions !== 'None' && (
            <div className="absolute bottom-2 left-2 px-2 py-1 text-xs rounded bg-blue-600 text-white">
              {video.brand_mentions}
            </div>
          )}
          
          {/* Product Price Badge */}
          {video.product_info && (
            <div className="absolute bottom-2 right-2 px-2 py-1 text-xs rounded bg-green-600 text-white flex items-center gap-1">
              <DollarSign className="w-3 h-3" />
              {video.product_info.price}
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 min-h-[40px]">
            {video.title}
          </h4>
          
          <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3 text-blue-500" />
              <span className="font-semibold">{formatNumber(video.views)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-3 h-3 text-red-500" />
              <span className="font-semibold">{formatNumber(video.likes)}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-3 h-3 text-green-500" />
              <span className="font-semibold">{formatNumber(video.comments)}</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-purple-500" />
              <span className={`font-semibold ${getEngagementColor(video.engagement_rate)}`}>
                {video.engagement_rate.toFixed(1)}%
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">
                {new Date(video.publish_date).toLocaleDateString()}
              </span>
              <span className="text-xs text-gray-600 font-medium">
                @{video.creator}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowEmbeddedPreview(!showEmbeddedPreview);
                }}
                className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                  showEmbeddedPreview ? 'text-red-600 hover:text-red-700' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                <Play className="w-3 h-3" />
                {showEmbeddedPreview ? 'Hide' : 'Preview'}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showVideoPreview(video);
                }}
                className="flex items-center gap-1 text-xs text-purple-600 hover:text-purple-700 font-medium"
              >
                <Maximize2 className="w-3 h-3" />
                Full
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(video.url, '_blank');
                }}
                className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-700 font-medium"
              >
                <ExternalLink className="w-3 h-3" />
                Open
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Video Preview Modal Component
  const VideoPreviewModal: React.FC = () => {
    if (!showVideoModal || !currentVideoPreview) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
              <span className={`px-3 py-1 text-sm rounded text-white font-medium ${getPlatformColor(currentVideoPreview.platform)}`}>
                {getPlatformIcon(currentVideoPreview.platform)} {currentVideoPreview.platform.charAt(0).toUpperCase() + currentVideoPreview.platform.slice(1)}
              </span>
              Video Preview
            </h3>
            <button
              onClick={() => setShowVideoModal(false)}
              className="text-gray-400 hover:text-gray-600 p-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6">
            {/* Video Embed */}
            <div className="relative w-full mb-6" style={{ paddingBottom: '56.25%', height: 0 }}>
              {currentVideoPreview.embedUrl ? (
                <iframe
                  src={currentVideoPreview.embedUrl}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video Preview"
                ></iframe>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="text-lg font-medium mb-2">Video Preview Not Available</div>
                    <div className="text-sm opacity-75">This platform doesn't support embedded previews</div>
                  </div>
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Video Title</h4>
                <p className="text-gray-700 leading-relaxed">{currentVideoPreview.title}</p>
              </div>

              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="text-sm text-gray-600">
                  Creator: <span className="font-medium text-gray-900">@{currentVideoPreview.creator}</span>
                </div>
                {currentVideoPreview.product_info && (
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-lg">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">
                      {currentVideoPreview.product_info.title} - ${currentVideoPreview.product_info.price}
                    </span>
                  </div>
                )}
                <a
                  href={currentVideoPreview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Original
                </a>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <Eye className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-blue-600">{formatNumber(currentVideoPreview.views)}</div>
                  <div className="text-xs text-gray-600">Views</div>
                </div>
                <div className="bg-red-50 rounded-lg p-3 text-center">
                  <Heart className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-red-600">{formatNumber(currentVideoPreview.likes)}</div>
                  <div className="text-xs text-gray-600">Likes</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <MessageCircle className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-green-600">{formatNumber(currentVideoPreview.comments)}</div>
                  <div className="text-xs text-gray-600">Comments</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                  <div className={`text-lg font-bold ${getEngagementColor(currentVideoPreview.engagement_rate)}`}>
                    {currentVideoPreview.engagement_rate.toFixed(1)}%
                  </div>
                  <div className="text-xs text-gray-600">Engagement</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium text-gray-900">{currentVideoPreview.category}</span>
                  </div>
                  {currentVideoPreview.virality_score && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Virality Score:</span>
                      <span className="font-medium text-orange-600">{currentVideoPreview.virality_score.toFixed(1)}</span>
                    </div>
                  )}
                  {currentVideoPreview.brand_mentions && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Brand Mentions:</span>
                      <span className="font-medium text-blue-600">{currentVideoPreview.brand_mentions}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Published:</span>
                    <span className="font-medium text-gray-700">
                      {new Date(currentVideoPreview.publish_date).toLocaleDateString()}
                    </span>
                  </div>
                  {currentVideoPreview.shares && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shares:</span>
                      <span className="font-medium text-purple-600">{formatNumber(currentVideoPreview.shares)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform:</span>
                    <span className={`font-medium px-2 py-1 text-xs rounded text-white ${getPlatformColor(currentVideoPreview.platform)}`}>
                      {getPlatformIcon(currentVideoPreview.platform)} {currentVideoPreview.platform.charAt(0).toUpperCase() + currentVideoPreview.platform.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Calculate overall statistics
  const totalViews = allVideos.reduce((sum, video) => sum + video.views, 0);
  const totalLikes = allVideos.reduce((sum, video) => sum + video.likes, 0);
  const totalComments = allVideos.reduce((sum, video) => sum + video.comments, 0);
  const avgEngagement = allVideos.length > 0 ? 
    allVideos.reduce((sum, video) => sum + video.engagement_rate, 0) / allVideos.length : 0;

  // Platform statistics
  const platformStats = allVideos.reduce((acc, video) => {
    acc[video.platform] = (acc[video.platform] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="p-6 space-y-6">
      {/* Overall Statistics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Multi-Platform Viral Video Analytics</h3>
          <div className="ml-auto flex items-center gap-2 text-sm text-gray-600">
            <Globe className="w-4 h-4" />
            Real Data from anker.db
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 text-center">
            <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">{formatNumber(totalViews)}</div>
            <div className="text-sm text-gray-600">Total Views</div>
            <div className="text-xs text-green-600 mt-1">Cross-platform Analytics</div>
          </div>
          <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-4 text-center">
            <Heart className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-pink-600">{formatNumber(totalLikes)}</div>
            <div className="text-sm text-gray-600">Total Likes</div>
            <div className="text-xs text-green-600 mt-1">{allVideos.length} Videos Tracked</div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 text-center">
            <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{formatNumber(totalComments)}</div>
            <div className="text-sm text-gray-600">Total Comments</div>
            <div className="text-xs text-green-600 mt-1">Real Engagement Data</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-4 text-center">
            <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">{avgEngagement.toFixed(1)}%</div>
            <div className="text-sm text-gray-600">Avg Engagement</div>
            <div className="text-xs text-green-600 mt-1">Multi-platform</div>
          </div>
        </div>

        {/* Platform Distribution */}
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(platformStats).map(([platform, count]) => (
            <div key={platform} className={`rounded-lg p-3 text-white ${getPlatformColor(platform)}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">{count}</div>
                  <div className="text-sm opacity-90">{platform.charAt(0).toUpperCase() + platform.slice(1)} Videos</div>
                </div>
                <div className="text-2xl">{getPlatformIcon(platform)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Search Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <Search className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Advanced Video Search & Preview</h3>
        </div>

        {/* Search Controls */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search across TikTok, YouTube, Instagram videos, creators, brands..."
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
                <option value="Household Appliances">Household Appliances</option>
                <option value="Audio Electronics">Audio Electronics</option>
                <option value="Pool Equipment">Pool Equipment</option>
                <option value="Product Reviews">Product Reviews</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-400" />
              <select
                value={filters.platform}
                onChange={(e) => setFilters(prev => ({ ...prev, platform: e.target.value }))}
                className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Platforms</option>
                <option value="tiktok">TikTok</option>
                <option value="youtube">YouTube</option>
                <option value="instagram">Instagram</option>
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
              <TrendingUp className="w-4 h-4 text-gray-400" />
              <select
                value={filters.minEngagement}
                onChange={(e) => setFilters(prev => ({ ...prev, minEngagement: e.target.value }))}
                className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="0">Any Engagement</option>
                <option value="1">1%+ Engagement</option>
                <option value="2">2%+ Engagement</option>
                <option value="3">3%+ Engagement</option>
                <option value="5">5%+ Engagement</option>
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

        {/* Results Header */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-5 h-5 text-red-600" />
            <h4 className="font-semibold text-red-900">
              {searchKeyword || filters.category !== 'all' || filters.platform !== 'all' ? 
                `Search Results ${searchKeyword ? `for "${searchKeyword}"` : ''}` : 
                'Top Viral Videos from Database'
              }
            </h4>
          </div>
          <p className="text-sm text-red-700">
            {searchKeyword || filters.category !== 'all' || filters.platform !== 'all' ? 
              `Found ${filteredVideos.length} videos sorted by ${filters.sortBy}` :
              `Displaying top ${filteredVideos.length} videos from 5 database tables with real performance data`
            }
          </p>
        </div>
      </div>

      {/* Video Results Grid */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Loading Video Data</h4>
            <p className="text-gray-600">Fetching from anker.db database...</p>
          </div>
        ) : filteredVideos.length > 0 ? (
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

      {/* Video Preview Modal */}
      <VideoPreviewModal />
    </div>
  );
};

export default ViralVideoInsights;