import React from 'react';
import { Zap, TrendingUp, Heart, Share2, Target, Users, BarChart3, Eye, ArrowRight } from 'lucide-react';

interface ViralFactorAnalysisProps {
  onNavigate?: (tab: string) => void;
}

const ViralFactorAnalysis: React.FC<ViralFactorAnalysisProps> = ({ onNavigate }) => {
  return (
    <div className="p-6 space-y-6">
      {/* Content Structure Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <BarChart3 className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Viral Content Structure Analysis</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Opening Hook Analysis */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Opening Hook Elements</h4>
            <div className="space-y-3">
              {[
                { element: "Question Hook", usage: "94%", effectiveness: "High", example: "Did you know your pet..." },
                { element: "Shock Statement", usage: "87%", effectiveness: "Very High", example: "This will blow your mind!" },
                { element: "Problem Premise", usage: "91%", effectiveness: "High", example: "Pet owners hate this..." },
                { element: "Visual Surprise", usage: "83%", effectiveness: "Medium", example: "Watch what happens..." },
                { element: "Trend Reference", usage: "76%", effectiveness: "Medium", example: "Everyone is talking about..." }
              ].map((item) => (
                <div key={item.element} className="bg-white rounded border p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900">{item.element}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.effectiveness === 'Very High' ? 'bg-green-100 text-green-700' :
                      item.effectiveness === 'High' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.effectiveness}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">{item.example}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Usage in viral videos</span>
                    <span className="text-sm font-semibold text-indigo-600">{item.usage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Flow Patterns */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Viral Content Flow Patterns</h4>
            <div className="space-y-4">
              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-green-900 mb-2">3-Act Structure (89% of viral videos)</h5>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Act 1: Hook & Problem (0-3 seconds)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Act 2: Solution Demo (3-25 seconds)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Act 3: Result & CTA (25-30 seconds)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-green-900 mb-2">Tension-Release Pattern (76% usage)</h5>
                <div className="space-y-2 text-xs text-gray-600">
                  <div>• Build curiosity/problem tension</div>
                  <div>• Maintain suspense with "but wait..."</div>
                  <div>• Provide satisfying resolution</div>
                  <div>• End with surprising element</div>
                </div>
              </div>

              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-green-900 mb-2">Before/After Format (83% usage)</h5>
                <div className="space-y-2 text-xs text-gray-600">
                  <div>• Show current state/problem</div>
                  <div>• Introduce solution/product</div>
                  <div>• Demonstrate transformation</div>
                  <div>• Highlight key benefits</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Production Elements */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Key Production Elements</h4>
            <div className="space-y-3">
              {[
                { element: "Quick Cuts/Transitions", presence: "96%", impact: "Very High" },
                { element: "Text Overlays", presence: "91%", impact: "High" },
                { element: "Trending Audio", presence: "87%", impact: "High" },
                { element: "Close-up Product Shots", presence: "94%", impact: "Very High" },
                { element: "Lifestyle Context", presence: "79%", impact: "Medium" },
                { element: "User Reactions", presence: "72%", impact: "High" }
              ].map((item) => (
                <div key={item.element} className="bg-white rounded border p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-900">{item.element}</span>
                    <span className="text-sm font-semibold text-orange-600">{item.presence}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Impact: <span className={`${
                      item.impact === 'Very High' ? 'text-green-600' :
                      item.impact === 'High' ? 'text-blue-600' :
                      'text-yellow-600'
                    }`}>{item.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emotional Trigger Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-pink-100 rounded-lg">
            <Heart className="w-5 h-5 text-pink-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">User Emotional Trigger Points</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Primary Emotional Triggers */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Primary Emotional Triggers</h4>
            <div className="space-y-3">
              {[
                { emotion: "Curiosity & Wonder", trigger: "\"How does this work?\"", engagement: "28.4%", conversion: "19.7%" },
                { emotion: "Relief & Solution", trigger: "\"Finally, a solution to...\"", engagement: "24.6%", conversion: "22.3%" },
                { emotion: "FOMO & Urgency", trigger: "\"Don't miss out on...\"", engagement: "22.1%", conversion: "18.9%" },
                { emotion: "Trust & Security", trigger: "\"Peace of mind for pet owners\"", engagement: "19.8%", conversion: "25.1%" },
                { emotion: "Joy & Surprise", trigger: "\"Amazing result!\"", engagement: "26.7%", conversion: "16.4%" }
              ].map((item) => (
                <div key={item.emotion} className="bg-white rounded border p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900">{item.emotion}</span>
                    <span className="text-xs text-pink-600 font-semibold">{item.engagement}</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2 italic">"{item.trigger}"</div>
                  <div className="text-xs text-green-600">Conversion Rate: {item.conversion}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Emotional Journey Mapping */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Viral Content Emotional Journey</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded border">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-sm font-bold text-red-600">1</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Initial Hook</div>
                  <div className="text-xs text-gray-600">Curiosity + Surprise</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded border">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm font-bold text-yellow-600">2</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Problem Recognition</div>
                  <div className="text-xs text-gray-600">Relatability + Frustration</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded border">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">3</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Solution Discovery</div>
                  <div className="text-xs text-gray-600">Hope + Anticipation</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded border">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">4</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Result & Satisfaction</div>
                  <div className="text-xs text-gray-600">Joy + Trust</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Response Patterns */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-4">User Engagement Response Patterns</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">3.2 sec</div>
              <div className="text-sm text-gray-600">Average hook retention</div>
              <div className="text-xs text-green-600">+87% vs industry avg</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">73.4%</div>
              <div className="text-sm text-gray-600">Completion rate</div>
              <div className="text-xs text-green-600">+42% vs industry avg</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">18.7%</div>
              <div className="text-sm text-gray-600">Share likelihood</div>
              <div className="text-xs text-green-600">+156% vs industry avg</div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Sharing Pathway Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Share2 className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Social Sharing Pathway Analysis</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sharing Triggers */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">High-Share Content Triggers</h4>
            <div className="space-y-3">
              {[
                { trigger: "Surprising Result", shareRate: "31.2%", platform: "TikTok" },
                { trigger: "Relatable Problem", shareRate: "28.7%", platform: "Instagram" },
                { trigger: "Educational Value", shareRate: "26.4%", platform: "YouTube" },
                { trigger: "Emotional Story", shareRate: "24.1%", platform: "Instagram" },
                { trigger: "Practical Tips", shareRate: "22.8%", platform: "YouTube" },
                { trigger: "Humor & Fun", shareRate: "29.6%", platform: "TikTok" }
              ].map((item) => (
                <div key={item.trigger} className="bg-white rounded border p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-900">{item.trigger}</span>
                    <span className="text-sm font-semibold text-blue-600">{item.shareRate}</span>
                  </div>
                  <div className="text-xs text-gray-500">Peak platform: {item.platform}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Viral Amplification Patterns */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Viral Amplification Patterns</h4>
            <div className="space-y-4">
              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-green-900 mb-2">Platform Cross-Pollination</h5>
                <div className="space-y-2 text-xs text-gray-600">
                  <div>• TikTok → Instagram Reels (67% migration)</div>
                  <div>• YouTube Shorts → TikTok (52% adaptation)</div>
                  <div>• Instagram → Facebook (43% cross-share)</div>
                  <div>• Platform-specific optimization boosts reach by 89%</div>
                </div>
              </div>

              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-green-900 mb-2">Influencer Amplification</h5>
                <div className="space-y-2 text-xs text-gray-600">
                  <div>• Micro-influencer reshares: +245% reach</div>
                  <div>• Celebrity endorsements: +567% engagement</div>
                  <div>• User-generated recreations: +189% organic growth</div>
                </div>
              </div>

              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-green-900 mb-2">Timing & Momentum</h5>
                <div className="space-y-2 text-xs text-gray-600">
                  <div>• Peak sharing: 48-72 hours post-publish</div>
                  <div>• Weekend sharing rates: +34% higher</div>
                  <div>• Evening posts (7-9 PM): +56% share rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Adaptation Strategies */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Platform Adaptation Strategy</h4>
            <div className="space-y-3">
              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-red-900 mb-2">YouTube Optimization</h5>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Longer format (60-90 seconds)</div>
                  <div>• Educational/review angle</div>
                  <div>• In-depth product demonstration</div>
                  <div>• SEO-optimized titles & descriptions</div>
                </div>
              </div>

              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-red-900 mb-2">TikTok Optimization</h5>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Quick cuts & trending audio</div>
                  <div>• Challenge/humor format</div>
                  <div>• Vertical 9:16 aspect ratio</div>
                  <div>• Hashtag trend integration</div>
                </div>
              </div>

              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-red-900 mb-2">Instagram Optimization</h5>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• High-quality visual aesthetics</div>
                  <div>• Story-driven content</div>
                  <div>• User-generated content style</div>
                  <div>• Shopping tag integration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Optimization Strategies */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <Target className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Data-Driven Conversion Optimization</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Content-to-Conversion Funnel */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Content-to-Conversion Funnel</h4>
            <div className="space-y-3">
              <div className="bg-white rounded border p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">Video Views</span>
                  <span className="text-lg font-bold text-blue-600">2.4M</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                </div>
              </div>

              <div className="bg-white rounded border p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">Profile Visits</span>
                  <span className="text-lg font-bold text-indigo-600">384K</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '16%' }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">16% conversion rate</div>
              </div>

              <div className="bg-white rounded border p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">Website Clicks</span>
                  <span className="text-lg font-bold text-purple-600">89K</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '23%' }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">23% click-through rate</div>
              </div>

              <div className="bg-white rounded border p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">Purchases</span>
                  <span className="text-lg font-bold text-green-600">11.2K</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '12.6%' }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">12.6% purchase conversion</div>
              </div>
            </div>
          </div>

          {/* Optimization Strategy Recommendations */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Optimization Strategy Framework</h4>
            <div className="space-y-4">
              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-orange-900 mb-2">Content Level Optimization</h5>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• A/B test hook variations (+24% retention improvement)</li>
                  <li>• Optimize emotional peak timing (25-30 second mark)</li>
                  <li>• Include direct product benefit statements</li>
                  <li>• Add social proof elements within content</li>
                </ul>
              </div>

              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-orange-900 mb-2">Platform Integration</h5>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Link viral content to optimized landing pages</li>
                  <li>• Use retargeting pixels on high-engagement viewers</li>
                  <li>• Create platform-specific conversion funnels</li>
                  <li>• Implement cross-platform audience syncing</li>
                </ul>
              </div>

              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-orange-900 mb-2">Performance Scaling</h5>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Amplify high-performing content with paid promotion</li>
                  <li>• Create content series based on viral elements</li>
                  <li>• Develop influencer partnership frameworks</li>
                  <li>• Implement real-time performance monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Viral Factor Correlation Matrix */}
        <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-4">Viral Factor Correlation Matrix</h4>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div></div>
            <div className="text-center font-medium">Hook</div>
            <div className="text-center font-medium">Emotion</div>
            <div className="text-center font-medium">Share</div>
            
            <div className="font-medium">Hook</div>
            <div className="bg-green-500 text-white text-center py-1 rounded">1.00</div>
            <div className="bg-blue-400 text-white text-center py-1 rounded">0.84</div>
            <div className="bg-blue-300 text-white text-center py-1 rounded">0.72</div>
            
            <div className="font-medium">Emotion</div>
            <div className="bg-blue-400 text-white text-center py-1 rounded">0.84</div>
            <div className="bg-green-500 text-white text-center py-1 rounded">1.00</div>
            <div className="bg-blue-500 text-white text-center py-1 rounded">0.91</div>
            
            <div className="font-medium">Share</div>
            <div className="bg-blue-300 text-white text-center py-1 rounded">0.72</div>
            <div className="bg-blue-500 text-white text-center py-1 rounded">0.91</div>
            <div className="bg-green-500 text-white text-center py-1 rounded">1.00</div>
          </div>
        </div>

        {/* Success Metrics Dashboard */}
        <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Viral Factor Success Metrics
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">89.2%</div>
              <div className="text-sm text-gray-600">Content Structure Score</div>
              <div className="text-xs text-green-600">vs 67% industry avg</div>
              <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                <div className="bg-indigo-600 h-1 rounded-full" style={{ width: '89.2%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">92.7%</div>
              <div className="text-sm text-gray-600">Emotional Trigger Score</div>
              <div className="text-xs text-green-600">vs 74% industry avg</div>
              <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                <div className="bg-purple-600 h-1 rounded-full" style={{ width: '92.7%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">78.4%</div>
              <div className="text-sm text-gray-600">Viral Potential Score</div>
              <div className="text-xs text-green-600">vs 45% industry avg</div>
              <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                <div className="bg-pink-600 h-1 rounded-full" style={{ width: '78.4%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">4.7x</div>
              <div className="text-sm text-gray-600">ROI Multiplier</div>
              <div className="text-xs text-green-600">vs 2.1x industry avg</div>
              <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                <div className="bg-green-600 h-1 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViralFactorAnalysis;