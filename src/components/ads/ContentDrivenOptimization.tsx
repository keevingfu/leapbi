import React from 'react';
import { TrendingUp, Target, Zap, BarChart3, Eye, ShoppingCart, Users, ArrowUp, ArrowDown } from 'lucide-react';

interface ContentDrivenOptimizationProps {
  onNavigate?: (tab: string) => void;
}

const ContentDrivenOptimization: React.FC<ContentDrivenOptimizationProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Ad Material Conversion Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Target className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Ad Material Conversion Analysis</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* CTR Analysis */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Click-Through Rate (CTR) Analysis
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span className="text-sm text-gray-600">Video Ads</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-green-600">8.2%</span>
                  <ArrowUp className="w-4 h-4 text-green-500" />
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span className="text-sm text-gray-600">Image Carousel</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-blue-600">6.7%</span>
                  <ArrowUp className="w-4 h-4 text-green-500" />
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span className="text-sm text-gray-600">Static Image</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-orange-600">4.1%</span>
                  <ArrowDown className="w-4 h-4 text-red-500" />
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span className="text-sm text-gray-600">Text Ads</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-red-600">2.8%</span>
                  <ArrowDown className="w-4 h-4 text-red-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Conversion Rate Analysis */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Purchase Conversion Rate Analysis
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span className="text-sm text-gray-600">Product Demo Videos</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-green-600">12.4%</span>
                  <ArrowUp className="w-4 h-4 text-green-500" />
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span className="text-sm text-gray-600">User Reviews</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-blue-600">9.8%</span>
                  <ArrowUp className="w-4 h-4 text-green-500" />
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span className="text-sm text-gray-600">Lifestyle Content</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-orange-600">7.2%</span>
                  <ArrowDown className="w-4 h-4 text-red-500" />
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span className="text-sm text-gray-600">Feature Highlights</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-purple-600">6.5%</span>
                  <ArrowUp className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Behavior Analysis */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-4 h-4" />
            User Behavior: View vs Purchase Analysis
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">78.3%</div>
              <div className="text-sm text-gray-600">View Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">45.2%</div>
              <div className="text-sm text-gray-600">Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">23.6%</div>
              <div className="text-sm text-gray-600">Add to Cart</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">8.9%</div>
              <div className="text-sm text-gray-600">Purchase Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Strategies */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <Zap className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Optimization Strategies</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Low Interaction Content Optimization */}
          <div className="bg-red-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4 text-red-700">Low Interaction Content Optimization</h4>
            <div className="space-y-4">
              <div className="bg-white rounded border p-3">
                <h5 className="font-medium text-sm text-gray-800 mb-2">Ad Copy Adjustments</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Strengthen emotional appeal in headlines</li>
                  <li>• Add urgency and scarcity elements</li>
                  <li>• Include specific benefits and value propositions</li>
                  <li>• A/B test different call-to-action phrases</li>
                </ul>
              </div>
              <div className="bg-white rounded border p-3">
                <h5 className="font-medium text-sm text-gray-800 mb-2">Visual Element Enhancement</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Use brighter, more contrasting colors</li>
                  <li>• Add motion graphics to static images</li>
                  <li>• Optimize thumbnail selection for videos</li>
                  <li>• Include lifestyle context in product shots</li>
                </ul>
              </div>
              <div className="bg-white rounded border p-3">
                <h5 className="font-medium text-sm text-gray-800 mb-2">Targeting Refinement</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Narrow audience based on high-performing segments</li>
                  <li>• Exclude low-converting demographics</li>
                  <li>• Adjust geographical targeting</li>
                  <li>• Optimize timing and frequency</li>
                </ul>
              </div>
            </div>
          </div>

          {/* High Conversion Content Analysis */}
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4 text-green-700">High Conversion Content Analysis</h4>
            <div className="space-y-4">
              <div className="bg-white rounded border p-3">
                <h5 className="font-medium text-sm text-gray-800 mb-2">Best Performing Ad Materials</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Product demonstration videos (12.4% CVR)</li>
                  <li>• Customer testimonial content (9.8% CVR)</li>
                  <li>• Before/after comparison visuals (8.6% CVR)</li>
                  <li>• Problem-solution storytelling (7.9% CVR)</li>
                </ul>
              </div>
              <div className="bg-white rounded border p-3">
                <h5 className="font-medium text-sm text-gray-800 mb-2">Key Success Elements</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Clear product benefits within first 3 seconds</li>
                  <li>• Authentic user-generated content integration</li>
                  <li>• Strong social proof and credibility indicators</li>
                  <li>• Mobile-optimized vertical video format</li>
                </ul>
              </div>
              <div className="bg-white rounded border p-3">
                <h5 className="font-medium text-sm text-gray-800 mb-2">Audience Characteristics</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Tech-savvy demographics (25-45 years)</li>
                  <li>• High household income ($50K+ annually)</li>
                  <li>• Active on multiple social platforms</li>
                  <li>• Previous engagement with pet/tech content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Long-term Optimization Strategy */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Long-term Optimization Strategy</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Data-Driven Content Optimization */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Data-Driven Content Optimization for Ad Performance</h4>
            <div className="space-y-4">
              <div className="bg-white rounded border p-3">
                <h5 className="font-medium text-sm text-gray-800 mb-2">Content Performance Analytics</h5>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="font-semibold text-blue-600">Content Type ROI</div>
                    <div className="text-gray-600">Video: 4.2x</div>
                    <div className="text-gray-600">Carousel: 3.1x</div>
                    <div className="text-gray-600">Static: 2.4x</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">Engagement Score</div>
                    <div className="text-gray-600">UGC: 8.9/10</div>
                    <div className="text-gray-600">Professional: 7.2/10</div>
                    <div className="text-gray-600">Product: 6.5/10</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded border p-3">
                <h5 className="font-medium text-sm text-gray-800 mb-2">Optimization Recommendations</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Increase video content production by 40%</li>
                  <li>• Focus on user-generated content campaigns</li>
                  <li>• Implement dynamic product showcasing</li>
                  <li>• Develop platform-specific content variations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* KOL Integration Strategy */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">KOL Distribution Data Integration</h4>
            <div className="space-y-4">
              <div className="bg-white rounded border p-3">
                <h5 className="font-medium text-sm text-gray-800 mb-2">Cross-Channel Synergy Metrics</h5>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="font-semibold text-orange-600">KOL + Ads ROI</div>
                    <div className="text-gray-600">Combined: 6.8x</div>
                    <div className="text-gray-600">KOL Only: 3.2x</div>
                    <div className="text-gray-600">Ads Only: 2.9x</div>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-600">Audience Overlap</div>
                    <div className="text-gray-600">High: 67%</div>
                    <div className="text-gray-600">Medium: 23%</div>
                    <div className="text-gray-600">Low: 10%</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded border p-3">
                <h5 className="font-medium text-sm text-gray-800 mb-2">Strategic Adjustments</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Retarget KOL video viewers with product ads</li>
                  <li>• Use KOL content as ad creative assets</li>
                  <li>• Adjust ad timing based on KOL posting schedule</li>
                  <li>• Cross-promote top-performing KOL content</li>
                </ul>
              </div>
              <div className="bg-white rounded border p-3">
                <h5 className="font-medium text-sm text-gray-800 mb-2">ROI Enhancement Plan</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Projected 25% increase in overall ROI</li>
                  <li>• Reduce customer acquisition cost by 18%</li>
                  <li>• Improve conversion rate by 30%</li>
                  <li>• Enhance brand awareness by 45%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Plan Summary */}
        <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            90-Day Implementation Roadmap
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded border p-3">
              <h5 className="font-semibold text-green-600 mb-2">Month 1: Foundation</h5>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Audit underperforming ad campaigns</li>
                <li>• Implement basic optimization strategies</li>
                <li>• Set up advanced tracking systems</li>
              </ul>
            </div>
            <div className="bg-white rounded border p-3">
              <h5 className="font-semibold text-blue-600 mb-2">Month 2: Integration</h5>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Launch KOL-ad synergy campaigns</li>
                <li>• A/B test high-performing elements</li>
                <li>• Refine audience targeting</li>
              </ul>
            </div>
            <div className="bg-white rounded border p-3">
              <h5 className="font-semibold text-purple-600 mb-2">Month 3: Scale</h5>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Scale successful campaigns</li>
                <li>• Implement automation systems</li>
                <li>• Measure long-term ROI impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDrivenOptimization;