import React from 'react';
import { Search, TrendingUp, Hash, ShoppingCart, Target, BarChart3, Eye, ArrowUp, ArrowDown } from 'lucide-react';

interface SearchInsightsProps {
  onNavigate?: (tab: string) => void;
}

const SearchInsights: React.FC<SearchInsightsProps> = ({ onNavigate }) => {
  return (
    <div className="p-6 space-y-6">
      {/* Trending Hashtags Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Hash className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Trending Hashtags Analysis</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Performing Hashtags */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Top Performing Hashtags</h4>
            <div className="space-y-3">
              {[
                { tag: "#pettech", posts: "2.4M", engagement: "18.7%", trend: "up" },
                { tag: "#smartpets", posts: "1.8M", engagement: "22.3%", trend: "up" },
                { tag: "#petcamera", posts: "1.6M", engagement: "16.4%", trend: "up" },
                { tag: "#petmonitoring", posts: "1.2M", engagement: "19.8%", trend: "up" },
                { tag: "#petstagram", posts: "980K", engagement: "25.1%", trend: "down" },
                { tag: "#dogtech", posts: "876K", engagement: "17.2%", trend: "up" },
                { tag: "#petsafety", posts: "743K", engagement: "21.6%", trend: "up" }
              ].map((item) => (
                <div key={item.tag} className="flex justify-between items-center p-3 bg-white rounded border">
                  <div>
                    <div className="font-medium text-blue-600">{item.tag}</div>
                    <div className="text-xs text-gray-500">{item.posts} posts</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold text-gray-900">{item.engagement}</span>
                      {item.trend === 'up' ? (
                        <ArrowUp className="w-3 h-3 text-green-500" />
                      ) : (
                        <ArrowDown className="w-3 h-3 text-red-500" />
                      )}
                    </div>
                    <div className="text-xs text-gray-500">engagement</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform-Specific Hashtags */}
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4">
              <h5 className="font-medium text-red-900 mb-3">YouTube Top Tags</h5>
              <div className="space-y-2">
                {[
                  { tag: "#petcamerareview", performance: "92%" },
                  { tag: "#smarthome", performance: "89%" },
                  { tag: "#pettech2024", performance: "86%" },
                  { tag: "#eufy", performance: "83%" }
                ].map((item) => (
                  <div key={item.tag} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{item.tag}</span>
                    <span className="text-red-600 font-semibold">{item.performance}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
              <h5 className="font-medium text-purple-900 mb-3">Instagram Top Tags</h5>
              <div className="space-y-2">
                {[
                  { tag: "#petstagram", performance: "94%" },
                  { tag: "#smartpets", performance: "91%" },
                  { tag: "#pettech", performance: "88%" },
                  { tag: "#petmonitoring", performance: "85%" }
                ].map((item) => (
                  <div key={item.tag} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{item.tag}</span>
                    <span className="text-purple-600 font-semibold">{item.performance}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-3">TikTok Top Tags</h5>
              <div className="space-y-2">
                {[
                  { tag: "#petcheck", performance: "96%" },
                  { tag: "#smartpets", performance: "93%" },
                  { tag: "#pettech", performance: "90%" },
                  { tag: "#dogmom", performance: "87%" }
                ].map((item) => (
                  <div key={item.tag} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{item.tag}</span>
                    <span className="text-gray-900 font-semibold">{item.performance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hashtag Performance Metrics */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Performance Metrics</h4>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">847K</div>
                <div className="text-sm text-gray-600">Total Hashtag Reach</div>
                <div className="text-xs text-green-600">+34.2% vs last month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">19.8%</div>
                <div className="text-sm text-gray-600">Avg Engagement Rate</div>
                <div className="text-xs text-green-600">+2.4% vs last month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">156</div>
                <div className="text-sm text-gray-600">Active Hashtags</div>
                <div className="text-xs text-gray-600">+12 vs last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amazon Keyword Search Trends */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Search className="w-5 h-5 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Amazon Keyword Search Trends</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Search Keywords */}
          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Top Product Search Keywords</h4>
            <div className="space-y-3">
              {[
                { keyword: "pet camera with treat dispenser", volume: "89K", trend: "+45.2%" },
                { keyword: "smart pet feeder", volume: "76K", trend: "+38.7%" },
                { keyword: "wifi pet camera", volume: "68K", trend: "+29.1%" },
                { keyword: "dog camera with app", volume: "54K", trend: "+52.3%" },
                { keyword: "pet monitoring camera", volume: "47K", trend: "+33.8%" },
                { keyword: "automatic pet feeder", volume: "43K", trend: "+26.4%" },
                { keyword: "pet camera with microphone", volume: "39K", trend: "+41.7%" },
                { keyword: "indoor pet camera", volume: "36K", trend: "+24.9%" }
              ].map((item) => (
                <div key={item.keyword} className="bg-white rounded border p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-900">{item.keyword}</span>
                    <span className="text-xs text-green-600">{item.trend}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Monthly searches: {item.volume}</span>
                    <span className="text-xs text-orange-600 font-semibold">High Intent</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seasonal Trends */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Seasonal Search Patterns</h4>
            <div className="space-y-4">
              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-blue-900 mb-2">Holiday Season (Q4)</h5>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• "pet camera christmas gift" +127%</div>
                  <div>• "black friday pet tech" +89%</div>
                  <div>• "holiday pet monitoring" +76%</div>
                </div>
              </div>
              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-blue-900 mb-2">Back to School (Q3)</h5>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• "pet camera for college" +98%</div>
                  <div>• "monitor pets while away" +67%</div>
                  <div>• "student pet care tech" +54%</div>
                </div>
              </div>
              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-blue-900 mb-2">Summer Travel (Q2)</h5>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• "pet camera vacation" +145%</div>
                  <div>• "travel pet monitoring" +112%</div>
                  <div>• "remote pet check" +89%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Volume vs Conversion Rate */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <ShoppingCart className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Search Volume vs Conversion Rate Analysis</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 text-center">
            <Eye className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">412K</div>
            <div className="text-sm text-gray-600">Total Search Volume</div>
            <div className="text-xs text-green-600 mt-1">+28.4% monthly growth</div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 text-center">
            <ShoppingCart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">12.8%</div>
            <div className="text-sm text-gray-600">Avg Conversion Rate</div>
            <div className="text-xs text-green-600 mt-1">+1.9% vs last quarter</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 text-center">
            <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">$47.80</div>
            <div className="text-sm text-gray-600">Avg Order Value</div>
            <div className="text-xs text-green-600 mt-1">+15.3% vs last quarter</div>
          </div>
        </div>

        {/* Search Volume Trend Chart */}
        <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-4">Search Volume Trend (Last 6 Months)</h4>
          <div className="relative h-32">
            <div className="absolute inset-0 flex items-end justify-between">
              {[65, 78, 92, 85, 96, 100].map((height, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-8 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-2">
                    {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* High Volume, High Conversion Keywords */}
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-medium text-green-900 mb-4">High Impact Keywords (Volume + Conversion)</h4>
            <div className="space-y-3">
              {[
                { keyword: "eufy pet camera", volume: "34K", conversion: "18.7%", value: "$89.99" },
                { keyword: "smart pet feeder wifi", volume: "28K", conversion: "16.4%", value: "$67.99" },
                { keyword: "pet camera treat dispenser", volume: "25K", conversion: "19.2%", value: "$94.50" },
                { keyword: "wireless pet monitor", volume: "22K", conversion: "15.8%", value: "$72.30" },
                { keyword: "app controlled pet camera", volume: "19K", conversion: "17.3%", value: "$85.20" }
              ].map((item) => (
                <div key={item.keyword} className="bg-white rounded border p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-gray-900">{item.keyword}</span>
                    <span className="text-xs text-green-600 font-semibold">{item.conversion}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{item.volume} searches/month</span>
                    <span className="text-green-600 font-semibold">AOV: {item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optimization Opportunities */}
          <div className="bg-yellow-50 rounded-lg p-4">
            <h4 className="font-medium text-yellow-900 mb-4">Optimization Opportunities</h4>
            <div className="space-y-3">
              {[
                { keyword: "cheap pet camera", volume: "45K", conversion: "8.2%", opportunity: "Price targeting" },
                { keyword: "pet camera reviews", volume: "38K", conversion: "6.1%", opportunity: "Content marketing" },
                { keyword: "best pet camera 2024", volume: "32K", conversion: "9.4%", opportunity: "SEO optimization" },
                { keyword: "pet camera amazon", volume: "29K", conversion: "7.8%", opportunity: "Amazon ads" },
                { keyword: "dog camera live stream", volume: "26K", conversion: "5.9%", opportunity: "Feature highlight" }
              ].map((item) => (
                <div key={item.keyword} className="bg-white rounded border p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-gray-900">{item.keyword}</span>
                    <span className="text-xs text-red-600 font-semibold">{item.conversion}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">{item.volume} searches/month</span>
                    <span className="text-yellow-600 font-semibold">{item.opportunity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Competitor Keyword Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <BarChart3 className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Competitor High-Conversion Keywords</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Competitor Analysis */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Competitor Keyword Performance</h4>
            <div className="space-y-4">
              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-purple-900 mb-2">Furbo Keywords</h5>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>"furbo dog camera"</span>
                    <span className="text-purple-600">22.4% CVR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>"treat tossing camera"</span>
                    <span className="text-purple-600">19.8% CVR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>"alexa pet camera"</span>
                    <span className="text-purple-600">17.3% CVR</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-purple-900 mb-2">Wyze Keywords</h5>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>"wyze pet camera"</span>
                    <span className="text-purple-600">16.7% CVR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>"budget pet camera"</span>
                    <span className="text-purple-600">14.2% CVR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>"affordable pet monitor"</span>
                    <span className="text-purple-600">13.8% CVR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Recommendations */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-4">Strategic Keyword Recommendations</h4>
            <div className="space-y-4">
              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-blue-900 mb-2">Opportunity Keywords</h5>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• "premium pet camera" (low competition, high intent)</li>
                  <li>• "AI pet behavior camera" (emerging trend)</li>
                  <li>• "professional pet monitoring" (B2B opportunity)</li>
                  <li>• "outdoor pet camera wireless" (weather-resistant USP)</li>
                </ul>
              </div>

              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-blue-900 mb-2">Content Gaps to Fill</h5>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• "pet camera setup guide" (high search, low content)</li>
                  <li>• "pet camera troubleshooting" (support content)</li>
                  <li>• "pet camera vs pet sitter" (comparison content)</li>
                  <li>• "pet camera benefits" (educational content)</li>
                </ul>
              </div>

              <div className="bg-white rounded border p-3">
                <h5 className="text-sm font-semibold text-blue-900 mb-2">Long-tail Opportunities</h5>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• "best pet camera for apartment dwellers"</li>
                  <li>• "pet camera that works with google home"</li>
                  <li>• "pet camera with cloud storage included"</li>
                  <li>• "pet camera for multiple pets"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInsights;