import React from 'react';
import { DollarSign, TrendingUp, Target, Users, ShoppingCart, Eye, Star, Award, BarChart3, PieChart, Calendar, ArrowUpRight, ArrowDownRight, Briefcase } from 'lucide-react';

const KOLConversionRevenueAnalysis: React.FC = () => {
  const conversionMetrics = [
    {
      title: "CTR (Click-Through Rate)",
      value: "8.9%",
      change: "+12.4%",
      description: "Average click rate across KOL content",
      icon: <Target size={20} className="text-green-600" />,
      benchmark: "Industry: 5.2%"
    },
    {
      title: "Purchase Conversion Rate",
      value: "3.7%",
      change: "+8.1%",
      description: "Conversion from click to purchase",
      icon: <ShoppingCart size={20} className="text-blue-600" />,
      benchmark: "Industry: 2.1%"
    },
    {
      title: "Follow Conversion Rate",
      value: "15.6%",
      change: "+24.3%",
      description: "New followers gained from KOL content",
      icon: <Users size={20} className="text-purple-600" />,
      benchmark: "Industry: 9.8%"
    },
    {
      title: "Revenue Per View",
      value: "$0.47",
      change: "+18.7%",
      description: "Average revenue generated per content view",
      icon: <DollarSign size={20} className="text-orange-600" />,
      benchmark: "Industry: $0.31"
    }
  ];

  const revenueData = [
    {
      kolName: "Tech Reviewer Mike",
      commission: "$47,890",
      gmvContribution: "$958,000",
      roi: "847%",
      category: "Electronics",
      tier: "Top Tier"
    },
    {
      kolName: "Lifestyle Sarah",
      commission: "$32,450",
      gmvContribution: "$649,000",
      roi: "723%",
      category: "Home & Garden",
      tier: "Mid Tier"
    },
    {
      kolName: "Fitness Coach Alex",
      commission: "$28,670",
      gmvContribution: "$573,400",
      roi: "689%",
      category: "Sports & Fitness",
      tier: "Top Tier"
    },
    {
      kolName: "Beauty Guru Emma",
      commission: "$24,380",
      gmvContribution: "$487,600",
      roi: "612%",
      category: "Beauty & Personal Care",
      tier: "Mid Tier"
    }
  ];

  const contentOptimization = [
    {
      type: "High Converting Content",
      title: "Product Demo Videos",
      conversionRate: "6.8%",
      keywordsUsed: "review, unboxing, comparison, hands-on",
      avgViewTime: "4:32",
      engagement: "12.4%",
      recommendation: "Increase production of detailed product demonstrations"
    },
    {
      type: "Medium Converting Content",
      title: "Lifestyle Integration",
      conversionRate: "4.2%",
      keywordsUsed: "daily routine, lifestyle, experience, recommend",
      avgViewTime: "3:18",
      engagement: "8.7%",
      recommendation: "Add more specific product benefits and CTAs"
    },
    {
      type: "Low Converting Content",
      title: "General Brand Posts",
      conversionRate: "1.9%",
      keywordsUsed: "brand, partnership, sponsored, collaboration",
      avgViewTime: "2:05",
      engagement: "4.1%",
      recommendation: "Transform into authentic experience sharing"
    }
  ];

  const strategicCases = [
    {
      kolName: "Tech Reviewer Mike",
      campaign: "PowerCore 27K Launch",
      duration: "3 months",
      totalGMV: "$1.2M",
      roi: "892%",
      keySuccess: "Detailed technical reviews and comparisons",
      learnings: "Technical depth drives higher conversion in electronics"
    },
    {
      kolName: "Lifestyle Sarah",
      campaign: "Smart Home Series",
      duration: "6 months",
      totalGMV: "$850K",
      roi: "734%",
      keySuccess: "Real home integration scenarios",
      learnings: "Authentic lifestyle integration increases trust and sales"
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">KOL Conversion & Revenue Analysis</h2>
            <p className="text-gray-600">Detailed analysis of KOL conversion performance and revenue optimization</p>
          </div>
          
          <div className="space-y-6">
      {/* Conversion Rate Analysis */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <Target className="text-blue-600" size={24} />
          <h2 className="text-xl font-semibold text-gray-900">Conversion Rate Analysis</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {conversionMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                {metric.icon}
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  metric.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600 mb-2">{metric.title}</p>
              <p className="text-xs text-gray-500 mb-2">{metric.description}</p>
              <p className="text-xs text-blue-600 font-medium">{metric.benchmark}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GMV & Commission Settlement */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="text-green-600" size={24} />
          <h2 className="text-xl font-semibold text-gray-900">GMV & Commission Settlement</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">KOL Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Commission</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">GMV Contribution</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">ROI</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Tier</th>
              </tr>
            </thead>
            <tbody>
              {revenueData.map((kol, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Star size={16} className="text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-900">{kol.kolName}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-semibold text-green-600">{kol.commission}</td>
                  <td className="py-4 px-4 font-semibold text-blue-600">{kol.gmvContribution}</td>
                  <td className="py-4 px-4">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                      {kol.roi}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{kol.category}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      kol.tier === 'Top Tier' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {kol.tier}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={20} className="text-green-600" />
              <span className="text-sm font-medium text-green-700">Total Commission</span>
            </div>
            <span className="text-2xl font-bold text-green-900">$133,390</span>
            <p className="text-xs text-green-600 mt-1">+15.7% vs last quarter</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={20} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Total GMV</span>
            </div>
            <span className="text-2xl font-bold text-blue-900">$2.67M</span>
            <p className="text-xs text-blue-600 mt-1">+22.4% vs last quarter</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 size={20} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Average ROI</span>
            </div>
            <span className="text-2xl font-bold text-purple-900">718%</span>
            <p className="text-xs text-purple-600 mt-1">Above industry average</p>
          </div>
        </div>
      </div>

      {/* Content Optimization Recommendations */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <Award className="text-orange-600" size={24} />
          <h2 className="text-xl font-semibold text-gray-900">Content Optimization Recommendations</h2>
        </div>
        <div className="space-y-4">
          {contentOptimization.map((content, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      content.type === 'High Converting Content' ? 'bg-green-100 text-green-700' :
                      content.type === 'Medium Converting Content' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {content.type}
                    </span>
                    <h3 className="font-semibold text-gray-900">{content.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{content.recommendation}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-gray-900">{content.conversionRate}</span>
                  <p className="text-xs text-gray-500">Conversion Rate</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Keywords: </span>
                  <span className="text-gray-900 font-medium">{content.keywordsUsed}</span>
                </div>
                <div>
                  <span className="text-gray-500">Avg View Time: </span>
                  <span className="text-gray-900 font-medium">{content.avgViewTime}</span>
                </div>
                <div>
                  <span className="text-gray-500">Engagement: </span>
                  <span className="text-gray-900 font-medium">{content.engagement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Review & Case Studies */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="text-indigo-600" size={24} />
          <h2 className="text-xl font-semibold text-gray-900">Strategic Review & Case Studies</h2>
        </div>
        <div className="space-y-4">
          {strategicCases.map((case_, index) => (
            <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{case_.campaign}</h3>
                  <p className="text-sm text-gray-600">KOL: {case_.kolName} • Duration: {case_.duration}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-600">{case_.roi}</div>
                  <div className="text-sm text-gray-500">ROI</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Performance Metrics</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total GMV:</span>
                      <span className="text-sm font-medium text-gray-900">{case_.totalGMV}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Key Success Factor:</span>
                      <span className="text-sm font-medium text-gray-900">{case_.keySuccess}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Strategic Learnings</h4>
                  <p className="text-sm text-gray-700 bg-white rounded-lg p-3 border border-gray-200">
                    {case_.learnings}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Long-term Cooperation Planning */}
        <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Long-term Cooperation Planning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h4 className="font-medium text-gray-900 mb-2">Retention Strategy</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tiered partnership programs based on performance</li>
                <li>• Exclusive product access for top performers</li>
                <li>• Co-creation opportunities for high-value content</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h4 className="font-medium text-gray-900 mb-2">Data Archiving</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Historical performance data for trend analysis</li>
                <li>• Content library for future reference</li>
                <li>• ROI benchmarks for campaign planning</li>
              </ul>
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

export default KOLConversionRevenueAnalysis;