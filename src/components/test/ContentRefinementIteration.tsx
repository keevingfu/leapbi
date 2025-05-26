import React from 'react';
import {
  RefreshCw,
  Crown,
  Target,
  TrendingUp,
  Award,
  Star,
  CheckCircle,
  ArrowUpRight,
  Zap,
  Users,
  BarChart3,
  Calendar,
  Settings,
  Lightbulb,
  FileText,
  Eye,
  MessageCircle,
  Heart,
  PieChart,
  LineChart,
  ArrowUp
} from 'lucide-react';

interface ContentRefinementIterationProps {
  onNavigate: (page: string) => void;
}

const ContentRefinementIteration: React.FC<ContentRefinementIterationProps> = ({ onNavigate }) => {
  const highConversionContent = [
    {
      content: "Pet Hair Challenge - Before/After",
      conversionRate: "8.7%",
      engagement: "15.2%",
      views: "1.8M",
      keyElements: [
        "Emotional hook in first 3 seconds",
        "Split-screen before/after visual",
        "Pet owner testimonial overlay",
        "Clear CTA at peak engagement moment"
      ],
      optimizationPotential: "High",
      replicationScore: 94
    },
    {
      content: "45-Day Battery Life Real Test",
      conversionRate: "7.3%",
      engagement: "11.8%",
      views: "980K",
      keyElements: [
        "Time-lapse visual storytelling",
        "Daily usage counter overlay",
        "Comparison to competitors",
        "Personal lifestyle integration"
      ],
      optimizationPotential: "Medium",
      replicationScore: 89
    },
    {
      content: "Smart Home Integration Demo",
      conversionRate: "6.9%",
      engagement: "10.4%",
      views: "720K",
      keyElements: [
        "Voice command demonstration",
        "Multi-device connectivity",
        "Seamless automation flow",
        "Tech enthusiast validation"
      ],
      optimizationPotential: "High",
      replicationScore: 91
    }
  ];

  const kolAlignmentData = [
    {
      kolName: "Pet Lifestyle Sarah",
      currentAlignment: 87,
      feedback: "More organic pet interaction",
      contentAdjustments: [
        "Increase pet personality moments",
        "Show genuine cleaning challenges",
        "Add spontaneous reactions"
      ],
      performanceImprovement: "+23%"
    },
    {
      kolName: "Tech Reviewer Mike",
      currentAlignment: 92,
      feedback: "Technical depth appreciated",
      contentAdjustments: [
        "Include technical specifications",
        "Add comparison charts",
        "Show internal components"
      ],
      performanceImprovement: "+18%"
    },
    {
      kolName: "Busy Mom Jenny",
      currentAlignment: 84,
      feedback: "Time-saving focus needed",
      contentAdjustments: [
        "Emphasize convenience features",
        "Show real family scenarios",
        "Highlight time savings"
      ],
      performanceImprovement: "+31%"
    }
  ];

  const adOptimizationData = [
    {
      adType: "Social Media Ads",
      currentPerformance: {
        ctr: "7.2%",
        conversionRate: "4.9%",
        roas: "3.4x"
      },
      optimizedVersion: {
        ctr: "9.1%",
        conversionRate: "6.3%",
        roas: "4.2x"
      },
      keyChanges: [
        "KOL-inspired hook format",
        "User-generated content style",
        "Authentic testimonial integration"
      ]
    },
    {
      adType: "Video Advertising",
      currentPerformance: {
        ctr: "6.8%",
        conversionRate: "5.2%",
        roas: "3.1x"
      },
      optimizedVersion: {
        ctr: "8.7%",
        conversionRate: "6.8%",
        roas: "3.9x"
      },
      keyChanges: [
        "Adopted KOL storytelling structure",
        "Incorporated viral content elements",
        "Added social proof overlays"
      ]
    }
  ];

  const longTermStrategies = [
    {
      strategy: "Content Evolution Framework",
      timeline: "6 months",
      stages: [
        "Baseline content performance analysis",
        "KOL feedback integration cycle",
        "A/B testing optimization phase",
        "Performance scaling and replication"
      ],
      expectedImpact: "+45% overall performance",
      currentProgress: 68
    },
    {
      strategy: "KOL Partnership Optimization",
      timeline: "3 months",
      stages: [
        "KOL content style analysis",
        "Brand alignment assessment",
        "Co-creation workflow development",
        "Performance tracking implementation"
      ],
      expectedImpact: "+32% engagement rate",
      currentProgress: 75
    },
    {
      strategy: "Cross-Platform Content Adaptation",
      timeline: "4 months",
      stages: [
        "Platform-specific content audit",
        "Format optimization testing",
        "Audience behavior analysis",
        "Automated adaptation pipeline"
      ],
      expectedImpact: "+28% reach expansion",
      currentProgress: 52
    }
  ];

  const successCases = [
    {
      campaign: "Pet Hair Challenge Series",
      duration: "3 months",
      kolPartner: "Pet Lifestyle Sarah",
      results: {
        totalViews: "12.8M",
        avgEngagement: "14.2%",
        conversionRate: "7.8%",
        brandLift: "+34%"
      },
      keyLearnings: [
        "Authentic pet interactions drive highest engagement",
        "Before/after format creates strong conversion intent",
        "Personal testimonials amplify trust and credibility"
      ],
      replicationStrategy: "Scale to 5 additional pet-focused KOLs"
    },
    {
      campaign: "Smart Home Integration",
      duration: "2 months",
      kolPartner: "Tech Reviewer Mike",
      results: {
        totalViews: "8.4M",
        avgEngagement: "10.9%",
        conversionRate: "6.2%",
        brandLift: "+28%"
      },
      keyLearnings: [
        "Technical depth appeals to quality-conscious buyers",
        "Comparison content builds competitive advantage",
        "Expert validation significantly impacts purchase decisions"
      ],
      replicationStrategy: "Expand to tech review community network"
    }
  ];

  const dataArchiving = [
    {
      category: "Content Performance Database",
      metrics: ["View counts", "Engagement rates", "Conversion tracking", "Audience demographics"],
      retentionPeriod: "24 months",
      accessLevel: "Full analytics team"
    },
    {
      category: "KOL Collaboration History",
      metrics: ["Partnership performance", "Content feedback", "Audience response", "ROI analysis"],
      retentionPeriod: "36 months",
      accessLevel: "Partnership managers"
    },
    {
      category: "Creative Asset Library",
      metrics: ["High-performing elements", "Template variations", "Brand guidelines", "Best practices"],
      retentionPeriod: "Indefinite",
      accessLevel: "Creative teams"
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Content Refinement & Iteration</h2>
            <p className="text-gray-600">Optimize content through data-driven refinement to enhance KOL distribution and advertising effectiveness</p>
          </div>

          {/* Content Iteration Performance Charts */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <RefreshCw className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Iteration Impact Analysis</h3>
            </div>

            {/* Content Iteration Chart */}
            <div className="mb-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4">Content Performance Across Iterations</h4>
              <div className="relative h-40">
                <div className="absolute inset-0 flex items-end justify-between">
                  {[4.2, 5.8, 6.3, 7.1, 7.9].map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-xs mb-1 font-semibold text-purple-600">{value}%</div>
                      <div 
                        className="w-12 bg-gradient-to-t from-purple-500 to-indigo-300 rounded-t"
                        style={{ height: `${(value / 7.9) * 100}%` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-2">
                        {['Original', 'Iter 1', 'Iter 2', 'Iter 3', 'Iter 4'][index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-4">
                <span className="text-sm text-purple-600 font-semibold">+88% improvement in conversion through iterative optimization</span>
              </div>
            </div>

            {/* Content Improvement Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <PieChart className="w-4 h-4" />
                  Optimization Elements Distribution
                </h4>
                <div className="flex items-center justify-center">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 rounded-full border-8 border-transparent"
                         style={{
                           background: `conic-gradient(from 0deg, #ef4444 0deg 90deg, #8b5cf6 90deg 180deg, #10b981 180deg 270deg, #3b82f6 270deg 360deg)`
                         }}>
                    </div>
                    <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">100%</div>
                        <div className="text-xs text-gray-600">Elements</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Visuals (25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Narrative (25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Hooks (25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>CTAs (25%)</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-4">Progressive Improvement Metrics</h4>
                <div className="space-y-4">
                  {[
                    { metric: 'Engagement', initial: '8.7%', current: '15.2%', improvement: '+74.7%' },
                    { metric: 'Completion', initial: '62%', current: '84%', improvement: '+35.5%' },
                    { metric: 'Conversion', initial: '4.2%', current: '7.9%', improvement: '+88.1%' }
                  ].map((item) => (
                    <div key={item.metric} className="bg-white rounded p-3 border border-green-100">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-sm font-medium text-gray-900">{item.metric}</div>
                        <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1">
                          <ArrowUp className="w-3 h-3" />
                          {item.improvement}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Initial: {item.initial}</span>
                        <span className="text-green-600 font-semibold">Current: {item.current}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* High Converting Content Identification */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Crown className="text-gold-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">High Converting Content Identification</h3>
            </div>
            <div className="space-y-4">
              {highConversionContent.map((content, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{content.content}</h4>
                      <div className="flex gap-4 text-sm">
                        <span className="text-gray-600">Views: <span className="font-medium">{content.views}</span></span>
                        <span className="text-gray-600">Engagement: <span className="font-medium text-blue-600">{content.engagement}</span></span>
                        <span className="text-gray-600">Conversion: <span className="font-medium text-green-600">{content.conversionRate}</span></span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star size={16} className="text-yellow-500" />
                        <span className="font-bold text-yellow-600">{content.replicationScore}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        content.optimizationPotential === 'High' ? 'bg-green-100 text-green-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {content.optimizationPotential} Potential
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Key Success Elements:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {content.keyElements.map((element, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle size={14} className="text-green-500" />
                          <span className="text-gray-700">{element}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KOL Content Alignment Optimization */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Users className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">KOL Content Alignment Optimization</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {kolAlignmentData.map((kol, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{kol.kolName}</h4>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{kol.currentAlignment}%</div>
                      <div className="text-xs text-gray-500">Alignment</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm text-gray-600 mb-1">Feedback:</div>
                    <div className="text-sm font-medium text-gray-900 italic">"{kol.feedback}"</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm text-gray-600 mb-1">Content Adjustments:</div>
                    <div className="space-y-1">
                      {kol.contentAdjustments.map((adjustment, idx) => (
                        <div key={idx} className="text-xs text-gray-700 flex items-start gap-1">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{adjustment}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-blue-200">
                    <span className="text-sm text-gray-600">Performance:</span>
                    <span className="text-sm font-bold text-green-600">{kol.performanceImprovement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Campaign Optimization */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Target className="text-green-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Ad Campaign Optimization with KOL Insights</h3>
            </div>
            <div className="space-y-6">
              {adOptimizationData.map((ad, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-4">{ad.adType}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Current Performance</h5>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">CTR:</span>
                          <span className="font-medium">{ad.currentPerformance.ctr}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Conversion:</span>
                          <span className="font-medium">{ad.currentPerformance.conversionRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">ROAS:</span>
                          <span className="font-medium">{ad.currentPerformance.roas}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Optimized Version</h5>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">CTR:</span>
                          <span className="font-medium text-green-600">{ad.optimizedVersion.ctr}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Conversion:</span>
                          <span className="font-medium text-green-600">{ad.optimizedVersion.conversionRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">ROAS:</span>
                          <span className="font-medium text-green-600">{ad.optimizedVersion.roas}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Key Changes</h5>
                      <div className="space-y-1">
                        {ad.keyChanges.map((change, idx) => (
                          <div key={idx} className="text-xs text-gray-700 flex items-start gap-1">
                            <ArrowUpRight size={12} className="text-green-500 mt-1" />
                            <span>{change}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Long-term Optimization Strategy */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="text-purple-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Long-term Optimization Strategy</h3>
            </div>
            <div className="space-y-4">
              {longTermStrategies.map((strategy, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{strategy.strategy}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Timeline: {strategy.timeline}</span>
                        <span>Expected Impact: <span className="font-medium text-green-600">{strategy.expectedImpact}</span></span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">{strategy.currentProgress}%</div>
                      <div className="text-xs text-gray-500">Progress</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {strategy.stages.map((stage, idx) => (
                      <div key={idx} className={`text-xs p-2 rounded border ${
                        idx < Math.floor(strategy.stages.length * strategy.currentProgress / 100)
                          ? 'bg-green-100 border-green-300 text-green-700'
                          : 'bg-gray-100 border-gray-300 text-gray-600'
                      }`}>
                        {stage}
                      </div>
                    ))}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${strategy.currentProgress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Cases & Data Archiving */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Success Cases */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-orange-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Success Cases</h3>
              </div>
              <div className="space-y-4">
                {successCases.map((case_, index) => (
                  <div key={index} className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{case_.campaign}</h4>
                        <div className="text-sm text-gray-600">{case_.kolPartner} • {case_.duration}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                      <div>
                        <span className="text-gray-600">Views: </span>
                        <span className="font-medium">{case_.results.totalViews}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Engagement: </span>
                        <span className="font-medium">{case_.results.avgEngagement}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Conversion: </span>
                        <span className="font-medium">{case_.results.conversionRate}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Brand Lift: </span>
                        <span className="font-medium">{case_.results.brandLift}</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <h5 className="text-sm font-medium text-gray-700 mb-1">Key Learnings:</h5>
                      <div className="space-y-1">
                        {case_.keyLearnings.map((learning, idx) => (
                          <div key={idx} className="text-xs text-gray-700">• {learning}</div>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Replication: </span>
                      <span className="font-medium text-blue-600">{case_.replicationStrategy}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Archiving */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="text-indigo-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Data Archiving & Knowledge Management</h3>
              </div>
              <div className="space-y-4">
                {dataArchiving.map((archive, index) => (
                  <div key={index} className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{archive.category}</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Metrics: </span>
                        <span className="text-gray-900">{archive.metrics.join(", ")}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Retention: </span>
                        <span className="font-medium text-indigo-600">{archive.retentionPeriod}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Access: </span>
                        <span className="text-gray-900">{archive.accessLevel}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Continuous Improvement Cycle</h4>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <RefreshCw size={14} className="text-green-500" />
                    <span>Weekly data review</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Settings size={14} className="text-blue-500" />
                    <span>Monthly optimization</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={14} className="text-purple-500" />
                    <span>Quarterly strategy revision</span>
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

export default ContentRefinementIteration;