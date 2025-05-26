import React from 'react';
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
  LineChart
} from 'lucide-react';

interface ContentIdeationPlanningProps {
  onNavigate: (page: string) => void;
}

const ContentIdeationPlanning: React.FC<ContentIdeationPlanningProps> = ({ onNavigate }) => {
  const trendingTopics = [
    {
      topic: "Unboxing Challenge",
      growth: "+45%",
      platforms: ["TikTok", "Instagram", "YouTube"],
      engagement: "12.4%",
      suitability: { kol: 95, ads: 87 }
    },
    {
      topic: "Before vs After",
      growth: "+38%",
      platforms: ["TikTok", "Instagram"],
      engagement: "9.8%",
      suitability: { kol: 92, ads: 94 }
    },
    {
      topic: "Pet Content Integration",
      growth: "+32%",
      platforms: ["TikTok", "YouTube"],
      engagement: "15.6%",
      suitability: { kol: 88, ads: 82 }
    },
    {
      topic: "Tech Reviews",
      growth: "+28%",
      platforms: ["YouTube", "Instagram"],
      engagement: "11.2%",
      suitability: { kol: 94, ads: 76 }
    }
  ];

  const contentCategories = [
    {
      category: "Product Demonstration",
      kolSuitability: 94,
      adSuitability: 91,
      avgEngagement: "8.7%",
      conversionRate: "4.2%",
      examples: ["Unboxing", "Feature showcase", "Comparison tests"]
    },
    {
      category: "Lifestyle Integration",
      kolSuitability: 89,
      adSuitability: 85,
      avgEngagement: "12.3%",
      conversionRate: "3.8%",
      examples: ["Daily routine", "Home setup", "User stories"]
    },
    {
      category: "Challenge Content",
      kolSuitability: 87,
      adSuitability: 78,
      avgEngagement: "15.2%",
      conversionRate: "2.9%",
      examples: ["Cleaning challenges", "Speed tests", "Extreme scenarios"]
    },
    {
      category: "Educational Content",
      kolSuitability: 82,
      adSuitability: 88,
      avgEngagement: "6.4%",
      conversionRate: "5.1%",
      examples: ["How-to guides", "Tips & tricks", "Problem solving"]
    }
  ];

  const scriptQualityMetrics = [
    {
      script: "Pet Hair Cleaning Challenge",
      qualityScore: 92,
      brandIntegration: 88,
      engagementPotential: 94,
      conversionPotential: 87
    },
    {
      script: "45-Day Battery Life Test",
      qualityScore: 89,
      brandIntegration: 95,
      engagementPotential: 82,
      conversionPotential: 91
    },
    {
      script: "Smart Home Integration Demo",
      qualityScore: 85,
      brandIntegration: 91,
      engagementPotential: 78,
      conversionPotential: 85
    }
  ];

  const brandIntegrationStrategies = [
    {
      strategy: "Natural Product Placement",
      effectiveness: 94,
      description: "Seamlessly integrate product into daily scenarios",
      examples: ["Morning routine cleanup", "Post-party cleaning", "Pet play aftermath"]
    },
    {
      strategy: "Problem-Solution Narrative",
      effectiveness: 91,
      description: "Present real problems and demonstrate product as solution",
      examples: ["Messy kitchen rescue", "Pet hair disaster fix", "Time-saving automation"]
    },
    {
      strategy: "Feature Highlight Integration",
      effectiveness: 87,
      description: "Naturally showcase key features during content",
      examples: ["Auto-empty demonstration", "Smart navigation showcase", "Voice control demo"]
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Content Ideation & Planning</h2>
            <p className="text-gray-600">Design high-quality short video content suitable for KOL partnerships and advertising campaigns</p>
          </div>

          {/* Trending Topics Performance Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <LineChart className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Content Trend Growth Analysis</h3>
            </div>

            {/* Trend Growth Chart */}
            <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4">Topic Growth Trends (Last 30 Days)</h4>
              <div className="relative h-40">
                <div className="absolute inset-0 flex items-end justify-between">
                  {[25, 32, 28, 38, 35, 42, 45].map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-xs mb-1 font-semibold text-blue-600">+{value}%</div>
                      <div 
                        className="w-8 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                        style={{ height: `${(value / 45) * 100}%` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-2">
                        {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'][index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform Distribution */}
            <div className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                <PieChart className="w-4 h-4" />
                Platform Content Distribution
              </h4>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-8 border-transparent"
                       style={{
                         background: `conic-gradient(from 0deg, #ef4444 0deg 150deg, #8b5cf6 150deg 240deg, #6b7280 240deg 360deg)`
                       }}>
                  </div>
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">12</div>
                      <div className="text-xs text-gray-600">Topics</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>TikTok (42%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Instagram (33%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span>YouTube (25%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Market Trend Analysis */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Market Trend Analysis</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trendingTopics.map((trend, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{trend.topic}</h4>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                      {trend.growth}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Platforms:</span>
                      <div className="flex gap-1">
                        {trend.platforms.map((platform, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Engagement: {trend.engagement}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">KOL Suitable: {trend.suitability.kol}%</span>
                      <span className="text-gray-600">Ad Suitable: {trend.suitability.ads}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Category Performance */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Target className="text-green-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Content Category Performance</h3>
            </div>
            <div className="space-y-4">
              {contentCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{category.category}</h4>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>Engagement: {category.avgEngagement}</span>
                        <span>Conversion: {category.conversionRate}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-2 mb-1">
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                          KOL: {category.kolSuitability}%
                        </span>
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">
                          Ads: {category.adSuitability}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Examples: </span>
                    <span className="text-sm text-gray-900">{category.examples.join(", ")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Script Quality Scoring */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="text-purple-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Script Quality Scoring</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Script</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Quality Score</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Brand Integration</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Engagement Potential</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Conversion Potential</th>
                  </tr>
                </thead>
                <tbody>
                  {scriptQualityMetrics.map((script, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">{script.script}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-bold">{script.qualityScore}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${script.brandIntegration}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">{script.brandIntegration}%</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full" 
                            style={{ width: `${script.engagementPotential}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">{script.engagementPotential}%</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-orange-500 h-2 rounded-full" 
                            style={{ width: `${script.conversionPotential}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">{script.conversionPotential}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Brand Integration Strategy */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-orange-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Brand Integration Strategy</h3>
            </div>
            <div className="space-y-4">
              {brandIntegrationStrategies.map((strategy, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{strategy.strategy}</h4>
                      <p className="text-sm text-gray-600 mb-2">{strategy.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Crown size={16} className="text-orange-600" />
                        <span className="text-lg font-bold text-orange-600">{strategy.effectiveness}%</span>
                      </div>
                      <span className="text-xs text-gray-500">Effectiveness</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Examples: </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {strategy.examples.map((example, idx) => (
                        <span key={idx} className="bg-white border border-orange-200 text-orange-700 px-2 py-1 rounded text-xs">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentIdeationPlanning;