import React from 'react';
import {
  BarChart3,
  TrendingUp,
  Target,
  DollarSign,
  MousePointer,
  Eye,
  ShoppingCart,
  Users,
  Zap,
  Award,
  ArrowUpRight,
  ArrowDownRight,
  Play,
  MessageCircle,
  Heart,
  Share2
} from 'lucide-react';

interface ContentPerformanceConversionProps {
  onNavigate: (page: string) => void;
}

const ContentPerformanceConversion: React.FC<ContentPerformanceConversionProps> = ({ onNavigate }) => {
  const coreMetrics = [
    {
      metric: "ROI (Return on Investment)",
      value: "324%",
      change: "+18%",
      description: "Revenue generated per dollar spent on ads",
      benchmark: "Industry: 280%",
      icon: <DollarSign size={20} className="text-green-600" />
    },
    {
      metric: "CTR (Click-Through Rate)",
      value: "6.8%",
      change: "+12%",
      description: "Percentage of users who click on ads",
      benchmark: "Industry: 4.2%",
      icon: <MousePointer size={20} className="text-blue-600" />
    },
    {
      metric: "CVR (Conversion Rate)",
      value: "4.7%",
      change: "+15%",
      description: "Percentage of clicks that result in purchases",
      benchmark: "Industry: 3.1%",
      icon: <Target size={20} className="text-purple-600" />
    },
    {
      metric: "CPA (Cost Per Acquisition)",
      value: "$24.50",
      change: "-8%",
      description: "Cost to acquire each new customer",
      benchmark: "Industry: $32.80",
      icon: <ShoppingCart size={20} className="text-orange-600" />
    }
  ];

  const contentTypeComparison = [
    {
      contentType: "Product Review",
      suitability: "High",
      ctr: "7.2%",
      cvr: "5.8%",
      engagement: "12.4%",
      gmvContribution: "$890K",
      characteristics: [
        "Expert credibility",
        "Detailed demonstrations",
        "Comparison focus",
        "Educational value"
      ]
    },
    {
      contentType: "Lifestyle Integration",
      suitability: "Medium-High", 
      ctr: "6.1%",
      cvr: "4.9%",
      engagement: "15.2%",
      gmvContribution: "$720K",
      characteristics: [
        "Emotional connection", 
        "Authentic usage",
        "Daily life scenarios",
        "Personal testimonials"
      ]
    },
    {
      contentType: "Dramatic Storytelling",
      suitability: "Medium",
      ctr: "8.9%",
      cvr: "3.2%",
      engagement: "18.7%",
      gmvContribution: "$420K",
      characteristics: [
        "Entertainment value",
        "Viral potential", 
        "Emotional hooks",
        "Memorable narratives"
      ]
    },
    {
      contentType: "Interactive Content",
      suitability: "High",
      ctr: "9.4%",
      cvr: "6.1%",
      engagement: "22.3%",
      gmvContribution: "$650K",
      characteristics: [
        "User participation",
        "Real-time engagement",
        "Social proof",
        "Community building"
      ]
    }
  ];

  const highPerformingContent = [
    {
      title: "Pet Hair Challenge - 30 Day Test",
      contentType: "Product Review",
      platform: "YouTube",
      views: "1.8M",
      ctr: "8.2%",
      cvr: "6.7%",
      gmv: "$420K",
      keyElements: [
        "Time-lapse demonstration",
        "Before/after comparison",
        "Real user testimonial",
        "Clear problem-solution fit"
      ]
    },
    {
      title: "Smart Home Morning Routine",
      contentType: "Lifestyle Integration",
      platform: "Instagram",
      views: "980K",
      ctr: "6.8%",
      cvr: "5.2%",
      gmv: "$280K",
      keyElements: [
        "Seamless integration",
        "Aspirational lifestyle",
        "Product naturalness",
        "Convenience emphasis"
      ]
    },
    {
      title: "Cleaning Robot vs Traditional Methods",
      contentType: "Interactive Content",
      platform: "TikTok",
      views: "2.4M",
      ctr: "9.1%",
      cvr: "4.8%",
      gmv: "$350K",
      keyElements: [
        "Live comparison test",
        "Audience voting",
        "Real-time results",
        "Entertainment factor"
      ]
    }
  ];

  const optimizationStrategies = [
    {
      category: "Low Interaction Content",
      currentPerformance: "2.1% CTR",
      targetImprovement: "+65%",
      strategies: [
        "Improve thumbnail design with before/after visuals",
        "Add emotional hooks in first 3 seconds", 
        "Include user-generated content elements",
        "Optimize call-to-action placement and timing"
      ],
      priority: "High"
    },
    {
      category: "High Conversion Content",
      currentPerformance: "6.8% CVR",
      targetImprovement: "+25%",
      strategies: [
        "Scale successful content formats across platforms",
        "Create variant tests with different messaging angles",
        "Extend reach through lookalike audience targeting",
        "Develop content series to build audience familiarity"
      ],
      priority: "Medium"
    }
  ];

  const gmvBreakdown = [
    { month: "Jan", revenue: 285000, ads: 180000, organic: 105000 },
    { month: "Feb", revenue: 320000, ads: 210000, organic: 110000 },
    { month: "Mar", revenue: 380000, ads: 250000, organic: 130000 },
    { month: "Apr", revenue: 420000, ads: 275000, organic: 145000 },
    { month: "May", revenue: 465000, ads: 305000, organic: 160000 },
    { month: "Jun", revenue: 520000, ads: 340000, organic: 180000 }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Content Performance & Conversion</h2>
            <p className="text-gray-600">Quantify content impact on ad performance to ensure efficient conversion optimization</p>
          </div>

          {/* Core Revenue Metrics */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Core Revenue Metrics</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    {metric.icon}
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      metric.change.startsWith('+') || metric.change.startsWith('-') && metric.metric.includes('CPA')
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                  <p className="text-sm text-gray-600 mb-2">{metric.metric}</p>
                  <p className="text-xs text-gray-500 mb-2">{metric.description}</p>
                  <p className="text-xs text-blue-600 font-medium">{metric.benchmark}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content Type Performance Impact */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Play className="text-purple-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Content Type Performance Impact</h3>
            </div>
            <div className="space-y-4">
              {contentTypeComparison.map((content, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{content.contentType}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        content.suitability === 'High' ? 'bg-green-100 text-green-700' :
                        content.suitability === 'Medium-High' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {content.suitability} Suitability
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{content.gmvContribution}</div>
                      <div className="text-xs text-gray-500">GMV Contribution</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div className="text-center">
                      <div className="font-bold text-blue-600">{content.ctr}</div>
                      <div className="text-xs text-gray-500">CTR</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-600">{content.cvr}</div>
                      <div className="text-xs text-gray-500">CVR</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-purple-600">{content.engagement}</div>
                      <div className="text-xs text-gray-500">Engagement</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Key Characteristics:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {content.characteristics.map((char, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span>{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* High-Performing Content Analysis */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-orange-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">High-Performing Content Analysis</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {highPerformingContent.map((content, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-200">
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900 mb-1">{content.title}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                        {content.contentType}
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs">
                        {content.platform}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div>
                      <span className="text-gray-600">Views: </span>
                      <span className="font-medium">{content.views}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">CTR: </span>
                      <span className="font-medium text-blue-600">{content.ctr}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">CVR: </span>
                      <span className="font-medium text-green-600">{content.cvr}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">GMV: </span>
                      <span className="font-medium text-orange-600">{content.gmv}</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Success Elements:</h5>
                    <div className="space-y-1">
                      {content.keyElements.map((element, idx) => (
                        <div key={idx} className="text-xs text-gray-700 flex items-start gap-1">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{element}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GMV Contribution Analysis & Optimization Strategies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GMV Breakdown */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <DollarSign className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">GMV Contribution Analysis</h3>
              </div>
              <div className="space-y-4">
                {gmvBreakdown.map((month, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{month.month}</span>
                      <span className="font-bold text-green-600">${(month.revenue / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Ads: </span>
                        <span className="font-medium">${(month.ads / 1000).toFixed(0)}K</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Organic: </span>
                        <span className="font-medium">${(month.organic / 1000).toFixed(0)}K</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(month.ads / month.revenue) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimization Strategies */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="text-yellow-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Content Optimization Strategies</h3>
              </div>
              <div className="space-y-4">
                {optimizationStrategies.map((strategy, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{strategy.category}</h4>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-600">Current: {strategy.currentPerformance}</span>
                          <span className="text-green-600 font-medium">{strategy.targetImprovement}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        strategy.priority === 'High' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {strategy.priority} Priority
                      </span>
                    </div>
                    <div className="space-y-1">
                      {strategy.strategies.map((item, idx) => (
                        <div key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-yellow-600 mt-1">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
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

export default ContentPerformanceConversion;