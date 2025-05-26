import React from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown, TrendingUp, Star, Users, Target, BarChart3, PieChart } from 'lucide-react';

interface ConsumerVoiceAnalysisProps {
  onNavigate?: (tab: string) => void;
}

const ConsumerVoiceAnalysis: React.FC<ConsumerVoiceAnalysisProps> = ({ onNavigate }) => {
  return (
    <div className="p-6 space-y-6">
      {/* Sentiment Analysis Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <MessageSquare className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">User Comment Sentiment Analysis</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 text-center">
            <ThumbsUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">68.4%</div>
            <div className="text-sm text-gray-600">Positive Comments</div>
            <div className="text-xs text-green-600 mt-1">+5.2% vs last month</div>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-4 text-center">
            <div className="w-8 h-8 bg-gray-400 rounded mx-auto mb-2 flex items-center justify-center">
              <div className="w-4 h-1 bg-white rounded"></div>
            </div>
            <div className="text-2xl font-bold text-gray-600">23.1%</div>
            <div className="text-sm text-gray-600">Neutral Comments</div>
            <div className="text-xs text-gray-600 mt-1">-1.8% vs last month</div>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 text-center">
            <ThumbsDown className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-600">8.5%</div>
            <div className="text-sm text-gray-600">Negative Comments</div>
            <div className="text-xs text-red-600 mt-1">-3.4% vs last month</div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 text-center">
            <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">4.7</div>
            <div className="text-sm text-gray-600">Avg. Rating Score</div>
            <div className="text-xs text-green-600 mt-1">+0.3 vs last month</div>
          </div>
        </div>

        {/* Sentiment Distribution Chart */}
        <div className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <PieChart className="w-4 h-4" />
            Sentiment Distribution Visualization
          </h4>
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              {/* Mock Pie Chart Using CSS */}
              <div className="absolute inset-0 rounded-full border-8 border-transparent bg-conic-gradient"
                   style={{
                     background: `conic-gradient(from 0deg, #10b981 0deg ${68.4 * 3.6}deg, #6b7280 ${68.4 * 3.6}deg ${(68.4 + 23.1) * 3.6}deg, #ef4444 ${(68.4 + 23.1) * 3.6}deg 360deg)`
                   }}>
              </div>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">91.5%</div>
                  <div className="text-xs text-gray-600">Non-negative</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Positive 68.4%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-sm">Neutral 23.1%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm">Negative 8.5%</span>
            </div>
          </div>
        </div>

        {/* Platform Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-red-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              YouTube Comments
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Comments</span>
                <span className="font-semibold text-red-600">127,584</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Positive Sentiment</span>
                <span className="font-semibold text-green-600">71.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg Response Time</span>
                <span className="font-semibold text-gray-900">4.2 hrs</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
              Instagram Comments
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Comments</span>
                <span className="font-semibold text-purple-600">98,276</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Positive Sentiment</span>
                <span className="font-semibold text-green-600">74.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg Response Time</span>
                <span className="font-semibold text-gray-900">2.8 hrs</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-4 h-4 bg-black rounded"></div>
              TikTok Comments
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Comments</span>
                <span className="font-semibold text-gray-900">89,142</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Positive Sentiment</span>
                <span className="font-semibold text-green-600">69.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg Response Time</span>
                <span className="font-semibold text-gray-900">1.5 hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Pros & Cons Extraction */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <BarChart3 className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Product Pros & Cons Analysis</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Strengths */}
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-medium text-green-900 mb-4 flex items-center gap-2">
              <ThumbsUp className="w-4 h-4" />
              Top Product Strengths (Mentioned Most)
            </h4>
            <div className="space-y-3">
              {[
                { feature: "Easy Setup & Installation", mentions: 1584, percentage: 89.2 },
                { feature: "High Video Quality", mentions: 1347, percentage: 85.6 },
                { feature: "Reliable Smart Features", mentions: 1298, percentage: 84.1 },
                { feature: "Great Value for Money", mentions: 1156, percentage: 79.3 },
                { feature: "Excellent Customer Support", mentions: 982, percentage: 72.8 },
                { feature: "Long Battery Life", mentions: 876, percentage: 68.4 },
                { feature: "User-Friendly App", mentions: 743, percentage: 64.2 }
              ].map((item) => (
                <div key={item.feature} className="bg-white rounded border p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900">{item.feature}</span>
                    <span className="text-xs text-green-600">{item.mentions} mentions</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{item.percentage}% positive</div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Weaknesses */}
          <div className="bg-red-50 rounded-lg p-4">
            <h4 className="font-medium text-red-900 mb-4 flex items-center gap-2">
              <ThumbsDown className="w-4 h-4" />
              Areas for Improvement (Pain Points)
            </h4>
            <div className="space-y-3">
              {[
                { issue: "Wi-Fi Connectivity Issues", mentions: 342, percentage: 18.7 },
                { issue: "App Crashes Occasionally", mentions: 298, percentage: 15.2 },
                { issue: "Night Vision Could Be Better", mentions: 267, percentage: 13.8 },
                { issue: "Price Point Too High", mentions: 234, percentage: 12.1 },
                { issue: "Motion Detection Sensitivity", mentions: 189, percentage: 9.4 },
                { issue: "Storage Limitations", mentions: 156, percentage: 7.8 },
                { issue: "Setup Instructions Unclear", mentions: 123, percentage: 6.2 }
              ].map((item) => (
                <div key={item.issue} className="bg-white rounded border p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900">{item.issue}</span>
                    <span className="text-xs text-red-600">{item.mentions} mentions</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{item.percentage}% negative feedback</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyword Trends Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">High-Frequency Keyword Trends</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Trending Keywords */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Trending Product Keywords</h4>
            <div className="space-y-3">
              {[
                { keyword: "smart pet camera", frequency: 2847, trend: "+24.3%" },
                { keyword: "AI pet monitoring", frequency: 2156, trend: "+31.7%" },
                { keyword: "pet feeder automatic", frequency: 1978, trend: "+18.9%" },
                { keyword: "wireless pet tech", frequency: 1654, trend: "+42.1%" },
                { keyword: "home pet security", frequency: 1432, trend: "+15.6%" },
                { keyword: "pet behavior tracking", frequency: 1298, trend: "+28.4%" },
                { keyword: "remote pet care", frequency: 1156, trend: "+36.2%" }
              ].map((item) => (
                <div key={item.keyword} className="flex justify-between items-center p-3 bg-white rounded border">
                  <div>
                    <div className="font-medium text-gray-900">{item.keyword}</div>
                    <div className="text-xs text-gray-500">{item.frequency} mentions</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 text-sm font-semibold">{item.trend}</div>
                    <div className="text-xs text-gray-500">vs last month</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emotional Keywords */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Emotional Response Keywords</h4>
            <div className="space-y-3">
              {[
                { keyword: "love this product", sentiment: "positive", frequency: 1876 },
                { keyword: "peace of mind", sentiment: "positive", frequency: 1542 },
                { keyword: "highly recommend", sentiment: "positive", frequency: 1398 },
                { keyword: "game changer", sentiment: "positive", frequency: 1267 },
                { keyword: "disappointed", sentiment: "negative", frequency: 342 },
                { keyword: "waste of money", sentiment: "negative", frequency: 234 },
                { keyword: "frustrating experience", sentiment: "negative", frequency: 189 }
              ].map((item) => (
                <div key={item.keyword} className="flex justify-between items-center p-3 bg-white rounded border">
                  <div>
                    <div className="font-medium text-gray-900">{item.keyword}</div>
                    <div className={`text-xs ${item.sentiment === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {item.sentiment} sentiment
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-900 text-sm font-semibold">{item.frequency}</div>
                    <div className="text-xs text-gray-500">mentions</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Competitor Comparison */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Target className="w-5 h-5 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Competitor Feedback Comparison</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="font-semibold text-blue-600 mb-2">Anker Eufy</div>
            <div className="text-2xl font-bold text-blue-600">4.7</div>
            <div className="text-sm text-gray-600">Rating Score</div>
            <div className="text-xs text-green-600 mt-1">68.4% positive</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="font-semibold text-green-600 mb-2">Furbo</div>
            <div className="text-2xl font-bold text-green-600">4.3</div>
            <div className="text-sm text-gray-600">Rating Score</div>
            <div className="text-xs text-green-600 mt-1">62.1% positive</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="font-semibold text-purple-600 mb-2">Wyze</div>
            <div className="text-2xl font-bold text-purple-600">4.1</div>
            <div className="text-sm text-gray-600">Rating Score</div>
            <div className="text-xs text-green-600 mt-1">58.7% positive</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="font-semibold text-gray-600 mb-2">Ring</div>
            <div className="text-2xl font-bold text-gray-600">3.9</div>
            <div className="text-sm text-gray-600">Rating Score</div>
            <div className="text-xs text-green-600 mt-1">54.3% positive</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Competitive Advantage Analysis
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-orange-600 mb-3">Our Strengths vs Competitors</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Superior video quality (mentioned 40% more than competitors)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Easier setup process (85% vs 67% average satisfaction)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  More reliable smart features (84% vs 71% average)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Better customer support response (4.7/5 vs 3.9/5 average)
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-orange-600 mb-3">Areas for Competitive Improvement</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Price competitiveness (competitors 15-25% lower)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Cloud storage options (fewer complaints from competitors)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  App feature richness (Furbo users praise more features)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Night vision performance (Wyze gets higher ratings here)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerVoiceAnalysis;