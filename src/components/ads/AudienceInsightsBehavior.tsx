import React from 'react';
import {
  Users,
  MapPin,
  Heart,
  Clock,
  TrendingUp,
  Eye,
  MessageCircle,
  Share2,
  Target,
  BarChart3,
  Zap,
  Search,
  Tag,
  ArrowRight
} from 'lucide-react';

interface AudienceInsightsBehaviorProps {
  onNavigate: (page: string) => void;
}

const AudienceInsightsBehavior: React.FC<AudienceInsightsBehaviorProps> = ({ onNavigate }) => {
  const audienceProfiles = [
    {
      segment: "Tech-Savvy Pet Owners",
      percentage: "28%",
      ageDistribution: "25-40",
      geography: "North America (52%), Europe (31%)",
      interests: ["Smart Home", "Pet Care", "Technology", "Reviews"],
      avgSessionTime: "4:32",
      conversionRate: "7.8%",
      characteristics: {
        behavior: "Research-focused, comparison shopping",
        preferences: "Detailed reviews, technical specifications",
        painPoints: "Time-consuming pet hair cleanup"
      }
    },
    {
      segment: "Busy Urban Professionals",
      percentage: "24%",
      ageDistribution: "28-45",
      geography: "Urban centers globally",
      interests: ["Productivity", "Home Automation", "Lifestyle"],
      avgSessionTime: "2:48",
      conversionRate: "6.2%",
      characteristics: {
        behavior: "Quick decision making, convenience-focused",
        preferences: "Time-saving solutions, efficiency",
        painPoints: "Limited time for household maintenance"
      }
    },
    {
      segment: "Home & Garden Enthusiasts",
      percentage: "22%",
      ageDistribution: "35-55",
      geography: "Suburban areas, North America & Europe",
      interests: ["Home Improvement", "Cleaning", "Organization"],
      avgSessionTime: "5:15",
      conversionRate: "5.9%",
      characteristics: {
        behavior: "Thorough research, value-conscious",
        preferences: "Performance comparisons, durability",
        painPoints: "Maintaining clean home environments"
      }
    },
    {
      segment: "Early Tech Adopters",
      percentage: "26%",
      ageDistribution: "22-35",
      geography: "Global, tech hubs concentrated",
      interests: ["Innovation", "Gadgets", "Smart Technology"],
      avgSessionTime: "3:42",
      conversionRate: "8.4%",
      characteristics: {
        behavior: "Innovation-driven, social sharing",
        preferences: "Latest features, tech integration",
        painPoints: "Finding cutting-edge home solutions"
      }
    }
  ];

  const userJourneyPath = [
    {
      stage: "Awareness",
      touchpoint: "Social Media Ad",
      userActions: ["See video advertisement", "Initial product awareness"],
      dropoffRate: "15%",
      avgTime: "0:08",
      optimizations: ["Improve hook effectiveness", "Better thumbnail design"]
    },
    {
      stage: "Interest",
      touchpoint: "Click to Website",
      userActions: ["Click on advertisement", "Land on product page"],
      dropoffRate: "25%",
      avgTime: "0:45",
      optimizations: ["Optimize landing page load time", "Clearer value proposition"]
    },
    {
      stage: "Consideration",
      touchpoint: "Product Research",
      userActions: ["View product details", "Compare features", "Read reviews"],
      dropoffRate: "35%",
      avgTime: "3:20",
      optimizations: ["Add comparison tools", "Highlight key differentiators"]
    },
    {
      stage: "Intent",
      touchpoint: "Add to Cart",
      userActions: ["Add product to cart", "Review pricing"],
      dropoffRate: "20%",
      avgTime: "1:15",
      optimizations: ["Simplify checkout process", "Add trust signals"]
    },
    {
      stage: "Purchase",
      touchpoint: "Complete Transaction",
      userActions: ["Enter payment info", "Complete purchase"],
      dropoffRate: "8%",
      avgTime: "2:30",
      optimizations: ["Streamline payment options", "Add security badges"]
    }
  ];

  const engagementMetrics = [
    {
      contentType: "Product Demo Videos",
      avgWatchTime: "4:32",
      completionRate: "74%",
      engagementRate: "12.8%",
      shareRate: "3.2%",
      conversionImpact: "+45%"
    },
    {
      contentType: "User Testimonials",
      avgWatchTime: "2:18",
      completionRate: "86%",
      engagementRate: "9.4%",
      shareRate: "4.8%",
      conversionImpact: "+38%"
    },
    {
      contentType: "Before/After Comparisons",
      avgWatchTime: "3:45",
      completionRate: "81%",
      engagementRate: "15.2%",
      shareRate: "6.1%",
      conversionImpact: "+52%"
    },
    {
      contentType: "Expert Reviews",
      avgWatchTime: "6:12",
      completionRate: "68%",
      engagementRate: "11.5%",
      shareRate: "2.9%",
      conversionImpact: "+31%"
    }
  ];

  const keywordOptimization = [
    {
      keyword: "robot vacuum pet hair",
      searchVolume: "45K/month",
      competition: "High",
      currentRank: "#3",
      ctr: "8.2%",
      conversionRate: "6.7%"
    },
    {
      keyword: "smart home cleaning",
      searchVolume: "32K/month",
      competition: "Medium",
      currentRank: "#2",
      ctr: "9.1%",
      conversionRate: "5.4%"
    },
    {
      keyword: "automatic vacuum cleaner",
      searchVolume: "67K/month",
      competition: "High",
      currentRank: "#5",
      ctr: "6.8%",
      conversionRate: "4.9%"
    },
    {
      keyword: "long battery robot vacuum",
      searchVolume: "12K/month",
      competition: "Low",
      currentRank: "#1",
      ctr: "12.4%",
      conversionRate: "8.1%"
    }
  ];

  const interactionTrends = [
    {
      metric: "Likes",
      currentMonth: 45600,
      previousMonth: 38900,
      trend: "+17.2%",
      impact: "Increased brand affinity"
    },
    {
      metric: "Comments",
      currentMonth: 8920,
      previousMonth: 7340,
      trend: "+21.5%",
      impact: "Higher engagement quality"
    },
    {
      metric: "Shares",
      currentMonth: 12800,
      previousMonth: 9650,
      trend: "+32.6%",
      impact: "Expanded organic reach"
    },
    {
      metric: "Saves",
      currentMonth: 6750,
      previousMonth: 5200,
      trend: "+29.8%",
      impact: "Strong purchase intent signal"
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Audience Insights & Behavior</h2>
            <p className="text-gray-600">Identify high-converting user segments and optimize ad targeting strategies</p>
          </div>

          {/* Audience Profile Analysis */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Users className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Audience Profile Analysis</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {audienceProfiles.map((profile, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{profile.segment}</h4>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{profile.percentage}</div>
                      <div className="text-xs text-gray-500">of audience</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm mb-4">
                    <div>
                      <span className="text-gray-600">Age: </span>
                      <span className="font-medium text-gray-900">{profile.ageDistribution}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Geography: </span>
                      <span className="text-gray-900">{profile.geography}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Interests: </span>
                      <span className="text-gray-900">{profile.interests.join(", ")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Session: {profile.avgSessionTime}</span>
                      <span className="font-bold text-green-600">CVR: {profile.conversionRate}</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-medium text-gray-700">Behavior: </span>
                      <span className="text-gray-600">{profile.characteristics.behavior}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Preferences: </span>
                      <span className="text-gray-600">{profile.characteristics.preferences}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Pain Points: </span>
                      <span className="text-gray-600">{profile.characteristics.painPoints}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Behavior Journey Path */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <ArrowRight className="text-purple-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">User Behavior Journey Path</h3>
            </div>
            <div className="space-y-4">
              {userJourneyPath.map((stage, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1 bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{stage.stage}</h4>
                        <p className="text-sm text-gray-600">{stage.touchpoint}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-red-600">-{stage.dropoffRate}</div>
                        <div className="text-xs text-gray-500">{stage.avgTime}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Actions: </span>
                        <span className="text-gray-600">{stage.userActions.join(", ")}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Optimizations: </span>
                        <span className="text-gray-600">{stage.optimizations.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                  {index < userJourneyPath.length - 1 && (
                    <ArrowRight size={16} className="text-gray-400 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content Engagement & Keyword Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* User Engagement with Content */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Eye className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Content Engagement Analysis</h3>
              </div>
              <div className="space-y-4">
                {engagementMetrics.map((content, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{content.contentType}</h4>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                        {content.conversionImpact}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Watch Time: </span>
                        <span className="font-medium">{content.avgWatchTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Completion: </span>
                        <span className="font-medium">{content.completionRate}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Engagement: </span>
                        <span className="font-medium">{content.engagementRate}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Share Rate: </span>
                        <span className="font-medium">{content.shareRate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keyword Performance */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Search className="text-orange-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Keyword Optimization</h3>
              </div>
              <div className="space-y-4">
                {keywordOptimization.map((keyword, index) => (
                  <div key={index} className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{keyword.keyword}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        keyword.currentRank.includes('#1') || keyword.currentRank.includes('#2') 
                          ? 'bg-green-100 text-green-700'
                          : keyword.currentRank.includes('#3')
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        Rank {keyword.currentRank}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Volume: </span>
                        <span className="font-medium">{keyword.searchVolume}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Competition: </span>
                        <span className="font-medium">{keyword.competition}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">CTR: </span>
                        <span className="font-medium text-blue-600">{keyword.ctr}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">CVR: </span>
                        <span className="font-medium text-green-600">{keyword.conversionRate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interaction Data Analysis */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-indigo-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Interaction Data Analysis</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {interactionTrends.map((trend, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {trend.metric === 'Likes' && <Heart size={16} className="text-red-500" />}
                      {trend.metric === 'Comments' && <MessageCircle size={16} className="text-blue-500" />}
                      {trend.metric === 'Shares' && <Share2 size={16} className="text-green-500" />}
                      {trend.metric === 'Saves' && <Target size={16} className="text-purple-500" />}
                      <span className="font-medium text-gray-900">{trend.metric}</span>
                    </div>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      {trend.trend}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {trend.currentMonth.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    Previous: {trend.previousMonth.toLocaleString()}
                  </div>
                  <div className="text-sm text-indigo-700 font-medium">
                    {trend.impact}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
              <h4 className="font-semibold text-gray-900 mb-2">Key Optimization Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">High Engagement Drivers: </span>
                  <span className="text-gray-600">Before/after content, user testimonials, interactive polls</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Conversion Triggers: </span>
                  <span className="text-gray-600">Product demonstrations, expert reviews, limited-time offers</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Share Catalysts: </span>
                  <span className="text-gray-600">Surprising results, emotional stories, practical tips</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Save Motivators: </span>
                  <span className="text-gray-600">Detailed comparisons, buying guides, seasonal promotions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceInsightsBehavior;