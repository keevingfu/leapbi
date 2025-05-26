import React from 'react';
import {
  Crosshair,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  Eye,
  MousePointer,
  Clock,
  MapPin,
  PlayCircle,
  Image,
  Play,
  Zap,
  Award,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

interface AdDistributionStrategyProps {
  onNavigate: (page: string) => void;
}

const AdDistributionStrategy: React.FC<AdDistributionStrategyProps> = ({ onNavigate }) => {
  const platformPerformance = [
    {
      platform: "YouTube",
      reach: "2.8M",
      ctr: "4.2%",
      cpc: "$0.85",
      conversion: "3.4%",
      roi: "285%",
      userBehavior: "Prefers long-form content, higher engagement with detailed product reviews",
      trend: "up"
    },
    {
      platform: "Instagram",
      reach: "1.9M",
      ctr: "5.8%",
      cpc: "$1.12",
      conversion: "4.1%",
      roi: "312%",
      userBehavior: "Visual-first audience, responds well to lifestyle integration",
      trend: "up"
    },
    {
      platform: "TikTok",
      reach: "3.4M",
      ctr: "6.3%",
      cpc: "$0.68",
      conversion: "2.9%",
      roi: "245%",
      userBehavior: "Young demographic, prefers authentic and entertaining content",
      trend: "up"
    },
    {
      platform: "Amazon",
      reach: "890K",
      ctr: "8.1%",
      cpc: "$1.45",
      conversion: "7.2%",
      roi: "420%",
      userBehavior: "High purchase intent, conversion-focused audience",
      trend: "up"
    }
  ];

  const audienceSegments = [
    {
      segment: "Tech Enthusiasts",
      ageRange: "25-40",
      interests: ["Technology", "Gadgets", "Reviews"],
      geo: "North America (45%), Europe (35%)",
      behavior: "Long-form video preference",
      conversionRate: "6.8%"
    },
    {
      segment: "Home & Garden",
      ageRange: "30-50",
      interests: ["Home Improvement", "Smart Devices", "DIY"],
      geo: "North America (52%), Europe (28%)",
      behavior: "Comparison shopping behavior",
      conversionRate: "5.9%"
    },
    {
      segment: "Pet Owners",
      ageRange: "25-45",
      interests: ["Pet Care", "Home Cleaning", "Lifestyle"],
      geo: "Global distribution",
      behavior: "Emotional decision making",
      conversionRate: "7.4%"
    },
    {
      segment: "Busy Professionals",
      ageRange: "28-42",
      interests: ["Productivity", "Tech", "Time Management"],
      geo: "Urban centers globally",
      behavior: "Quick decision makers",
      conversionRate: "5.2%"
    }
  ];

  const adFormats = [
    {
      format: "Short-Form Video",
      platforms: ["TikTok", "Instagram Reels", "YouTube Shorts"],
      performance: {
        ctr: "7.2%",
        engagement: "12.4%",
        completion: "78%"
      },
      bestPractices: [
        "Hook within first 3 seconds",
        "Clear value proposition",
        "Strong visual appeal",
        "Mobile-first design"
      ]
    },
    {
      format: "Carousel Ads",
      platforms: ["Instagram", "Facebook"],
      performance: {
        ctr: "4.8%",
        engagement: "8.9%",
        completion: "N/A"
      },
      bestPractices: [
        "Product comparison showcase",
        "Step-by-step demonstrations",
        "Before/after imagery",
        "Clear CTA on each card"
      ]
    },
    {
      format: "Long-Form Video",
      platforms: ["YouTube", "Facebook"],
      performance: {
        ctr: "3.9%",
        engagement: "15.2%",
        completion: "65%"
      },
      bestPractices: [
        "Detailed product features",
        "Expert testimonials",
        "In-depth demonstrations",
        "Educational content"
      ]
    },
    {
      format: "Live Shopping",
      platforms: ["Instagram", "TikTok", "Amazon"],
      performance: {
        ctr: "9.1%",
        engagement: "18.7%",
        completion: "58%"
      },
      bestPractices: [
        "Real-time interaction",
        "Limited-time offers",
        "Product demonstrations",
        "Q&A sessions"
      ]
    }
  ];

  const budgetAllocation = [
    {
      platform: "YouTube",
      budget: "$45,000",
      percentage: "30%",
      roi: "285%",
      recommendation: "Increase budget by 15%",
      reason: "Strong ROI and growing audience engagement"
    },
    {
      platform: "Instagram",
      budget: "$38,000",
      percentage: "25%",
      roi: "312%",
      recommendation: "Maintain current budget",
      reason: "Optimal performance at current spend level"
    },
    {
      platform: "TikTok",
      budget: "$42,000",
      percentage: "28%",
      roi: "245%",
      recommendation: "Test increased budget",
      reason: "High reach potential, improving conversion rates"
    },
    {
      platform: "Amazon",
      budget: "$25,000",
      percentage: "17%",
      roi: "420%",
      recommendation: "Significantly increase budget",
      reason: "Highest ROI, untapped scaling potential"
    }
  ];

  const abTestResults = [
    {
      testName: "Video Length Optimization",
      variant: "15s vs 30s vs 60s",
      winner: "30s format",
      improvement: "+23% CTR",
      insight: "30-second videos balance message delivery with attention span"
    },
    {
      testName: "CTA Placement",
      variant: "Early vs Mid vs End placement",
      winner: "Mid-video CTA",
      improvement: "+18% conversion",
      insight: "CTA at 15-second mark captures peak engagement"
    },
    {
      testName: "Thumbnail Strategy",
      variant: "Product focus vs Lifestyle vs Before/After",
      winner: "Before/After",
      improvement: "+31% CTR",
      insight: "Transformation visuals create stronger curiosity gap"
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Ad Distribution Strategy</h2>
            <p className="text-gray-600">Evaluate content distribution effectiveness across ad channels and optimize placement strategies</p>
          </div>

          {/* Platform Performance Comparison */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Platform Performance Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Platform</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Reach</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">CTR</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">CPC</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Conversion</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">ROI</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">User Behavior</th>
                  </tr>
                </thead>
                <tbody>
                  {platformPerformance.map((platform, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            platform.platform === 'YouTube' ? 'bg-red-100' :
                            platform.platform === 'Instagram' ? 'bg-pink-100' :
                            platform.platform === 'TikTok' ? 'bg-black bg-opacity-10' :
                            'bg-orange-100'
                          }`}>
                            <PlayCircle size={16} className={
                              platform.platform === 'YouTube' ? 'text-red-600' :
                              platform.platform === 'Instagram' ? 'text-pink-600' :
                              platform.platform === 'TikTok' ? 'text-black' :
                              'text-orange-600'
                            } />
                          </div>
                          <span className="font-medium text-gray-900">{platform.platform}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium">{platform.reach}</td>
                      <td className="py-4 px-4">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                          {platform.ctr}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-medium">{platform.cpc}</td>
                      <td className="py-4 px-4">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-medium">
                          {platform.conversion}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-green-600">{platform.roi}</span>
                          {platform.trend === 'up' && <ArrowUpRight size={16} className="text-green-500" />}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 max-w-xs">{platform.userBehavior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Target Audience Analysis */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Users className="text-purple-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Target Audience Analysis</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {audienceSegments.map((segment, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{segment.segment}</h4>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                      {segment.conversionRate}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Age Range: </span>
                      <span className="font-medium text-gray-900">{segment.ageRange}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Interests: </span>
                      <span className="text-gray-900">{segment.interests.join(", ")}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Geography: </span>
                      <span className="text-gray-900">{segment.geo}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Behavior: </span>
                      <span className="text-gray-900 italic">{segment.behavior}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Format Optimization */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Image className="text-orange-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Ad Format Optimization</h3>
            </div>
            <div className="space-y-6">
              {adFormats.map((format, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{format.format}</h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {format.platforms.map((platform, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div>
                            <div className="text-xs text-gray-600">CTR</div>
                            <div className="font-bold text-orange-600">{format.performance.ctr}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-600">Engagement</div>
                            <div className="font-bold text-orange-600">{format.performance.engagement}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-600">Completion</div>
                            <div className="font-bold text-orange-600">{format.performance.completion}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Best Practices:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {format.bestPractices.map((practice, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span>{practice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Allocation & A/B Test Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Budget Allocation */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <DollarSign className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Budget Allocation Strategy</h3>
              </div>
              <div className="space-y-4">
                {budgetAllocation.map((allocation, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{allocation.platform}</span>
                        <span className="text-sm text-gray-600">({allocation.percentage})</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">{allocation.budget}</div>
                        <div className="text-xs text-gray-500">ROI: {allocation.roi}</div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className={`text-sm px-2 py-1 rounded-full font-medium ${
                        allocation.recommendation.includes('Increase') ? 'bg-green-100 text-green-700' :
                        allocation.recommendation.includes('Test') ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {allocation.recommendation}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">{allocation.reason}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* A/B Test Results */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="text-yellow-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">A/B Test Results</h3>
              </div>
              <div className="space-y-4">
                {abTestResults.map((test, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{test.testName}</h4>
                        <div className="text-sm text-gray-600 mb-1">{test.variant}</div>
                      </div>
                      <div className="text-right">
                        <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium mb-1">
                          {test.improvement}
                        </div>
                        <div className="text-xs text-gray-600">Winner: {test.winner}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-700 italic">
                      <Award size={14} className="inline mr-1 text-yellow-600" />
                      {test.insight}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDistributionStrategy;