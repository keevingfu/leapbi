#!/usr/bin/env python3
import re

# Read the file
with open('./src/components/kol/KOLOverview.tsx', 'r') as f:
    content = f.read()

# Add new imports
content = content.replace(
    "Clock,\n  ArrowUp,\n  ArrowDown\n} from 'lucide-react';",
    "Clock,\n  ArrowUp,\n  ArrowDown,\n  Calendar,\n  UserCheck,\n  Sparkles\n} from 'lucide-react';"
)

# Add new data structures before the return statement
new_data = """
  // Weekly KOL Collaboration Plan (May 2025)
  const weeklyCollaborationPlan = [
    {
      week: "Week 1",
      dateRange: "May 6-12, 2025",
      kolCount: "4-5",
      targetViews: "1B-2B",
      viewsNumeric: 1500,
      objective: "Test market response with 4-5 creators (KOC, KOL, mid-tier + high-traffic bloggers)",
      status: "Planning"
    },
    {
      week: "Week 2",
      dateRange: "May 13-19, 2025",
      kolCount: "5-7",
      targetViews: "2B-3B",
      viewsNumeric: 2500,
      objective: "Expand investment, optimize content strategy based on Week 1 data",
      status: "Ready"
    },
    {
      week: "Week 3",
      dateRange: "May 20-26, 2025",
      kolCount: "5-9",
      targetViews: "3B-4B",
      viewsNumeric: 3500,
      objective: "Accelerate investment, ensure diverse structure & 70%+ qualified video output",
      status: "Upcoming"
    },
    {
      week: "Week 4",
      dateRange: "May 27-June 2, 2025",
      kolCount: "6-9",
      targetViews: "3B+",
      viewsNumeric: 3500,
      objective: "Sprint execution, focus on creator reinvestment & viral content amplification",
      status: "Future"
    }
  ];

  // KOL Type Distribution
  const kolTypeDistribution = [
    {
      type: "Tail KOLs",
      description: "Daily life sharing, amateur content",
      followerProfile: "Balanced gender, 18-35 years old",
      contentTypes: ["Amateur sharing", "Daily life content"],
      viewsRange: "1K-1.5M",
      percentage: 50,
      color: "from-blue-400 to-blue-600"
    },
    {
      type: "Mid-Tier KOLs",
      description: "Product recommendations, lifestyle content",
      followerProfile: "Balanced gender, 18-35 years old",
      contentTypes: ["Product recommendations", "Shopping", "Family", "Lifestyle"],
      viewsRange: "8K-2M",
      percentage: 45,
      color: "from-purple-400 to-purple-600"
    },
    {
      type: "Top-Tier KOLs",
      description: "3C & Household Appliances focus",
      followerProfile: "Balanced gender, 18-35 years old",
      contentTypes: ["3C Electronics", "Household Appliances"],
      viewsRange: "20K-2M",
      percentage: 5,
      color: "from-orange-400 to-orange-600"
    }
  ];
"""

# Insert before return statement
return_index = content.find('  return (')
content = content[:return_index] + new_data + '\n' + content[return_index:]

# Add new visualization sections after optimization insights
new_sections = """          </div>

          {/* Weekly KOL Collaboration Plan */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-medium text-gray-900">May 2025 KOL Collaboration Weekly Plan</h3>
              </div>
              <p className="text-gray-500 text-sm mt-1">Strategic rollout plan targeting 9B total views</p>
            </div>
            <div className="p-6">
              {/* Progress Overview */}
              <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">Monthly Target Progress</h4>
                  <span className="text-2xl font-bold text-indigo-600">9B Views</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>0%</span>
                  <span>Target: 20-30 KOLs</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Weekly Breakdown */}
              <div className="space-y-4">
                {weeklyCollaborationPlan.map((week, index) => (
                  <div key={index} className="relative">
                    <div className={`p-4 border rounded-lg transition-all hover:shadow-md ${
                      week.status === 'Planning' ? 'border-indigo-300 bg-indigo-50' :
                      week.status === 'Ready' ? 'border-green-300 bg-green-50' :
                      'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                            week.status === 'Planning' ? 'bg-indigo-600' :
                            week.status === 'Ready' ? 'bg-green-600' :
                            'bg-gray-400'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{week.week}</h4>
                            <p className="text-sm text-gray-600">{week.dateRange}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-indigo-600">{week.targetViews}</div>
                          <div className="text-sm text-gray-600">{week.kolCount} KOLs</div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm text-gray-700">{week.objective}</p>
                      </div>

                      {/* Views Progress Bar */}
                      <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`absolute left-0 top-0 h-full transition-all ${
                            index === 0 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                            index === 1 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                            index === 2 ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                            'bg-gradient-to-r from-orange-400 to-orange-600'
                          }`}
                          style={{ width: `${(week.viewsNumeric / 4000) * 100}%` }}
                        >
                          <div className="absolute inset-0 bg-white opacity-20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-700">
                          {((week.viewsNumeric / 9000) * 100).toFixed(0)}% of Total Target
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute -top-2 -right-2">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          week.status === 'Planning' ? 'bg-indigo-100 text-indigo-800' :
                          week.status === 'Ready' ? 'bg-green-100 text-green-800' :
                          week.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {week.status}
                        </span>
                      </div>
                    </div>
                    
                    {/* Connection Line */}
                    {index < weeklyCollaborationPlan.length - 1 && (
                      <div className="absolute left-5 top-full h-4 w-0.5 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">20-30</div>
                  <div className="text-sm text-gray-600">Total KOLs</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">9B</div>
                  <div className="text-sm text-gray-600">Target Views</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">70%+</div>
                  <div className="text-sm text-gray-600">Quality Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* KOL Type Distribution */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-medium text-gray-900">KOL Type Distribution Strategy</h3>
              </div>
              <p className="text-gray-500 text-sm mt-1">Strategic allocation across different KOL tiers</p>
            </div>
            <div className="p-6">
              {/* Visual Distribution Chart */}
              <div className="mb-6">
                <div className="flex items-center h-12 rounded-lg overflow-hidden">
                  {kolTypeDistribution.map((kol, index) => (
                    <div
                      key={index}
                      className={`relative h-full bg-gradient-to-r ${kol.color} transition-all hover:opacity-90`}
                      style={{ width: `${kol.percentage}%` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                        {kol.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {kolTypeDistribution.map((kol, index) => (
                    <div key={index} className="text-center" style={{ width: `${kol.percentage}%` }}>
                      <div className="text-sm font-medium text-gray-700">{kol.type}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-6">
                {kolTypeDistribution.map((kol, index) => (
                  <div key={index} className="p-5 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${kol.color} flex items-center justify-center`}>
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">{kol.type}</h4>
                          <p className="text-sm text-gray-600">{kol.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${kol.color} bg-clip-text text-transparent`}>
                          {kol.percentage}%
                        </div>
                        <div className="text-sm text-gray-500">Allocation</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-700 text-sm mb-1">Follower Profile</h5>
                        <p className="text-sm text-gray-600">{kol.followerProfile}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-700 text-sm mb-1">Content Types</h5>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {kol.contentTypes.map((type, idx) => (
                            <span key={idx} className="text-xs bg-white px-2 py-1 rounded border border-gray-200">
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-700 text-sm mb-1">Views Range</h5>
                        <p className="text-sm font-semibold text-indigo-600">{kol.viewsRange}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Strategy Points */}
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-indigo-600" />
                  Strategic Focus
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5"></div>
                    <span>50% allocation to tail KOLs for authentic, relatable content and community building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                    <span>45% to mid-tier KOLs for balanced reach and engagement with strong conversion potential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-1.5"></div>
                    <span>5% to top-tier KOLs for brand authority and maximum reach in tech categories</span>
                  </li>
                </ul>
              </div>
            </div>"""

# Find where to insert the new sections
closing_div_pattern = r'(\s*</div>\s*</div>\s*</div>\s*</div>\s*\);\s*};\s*export default KOLOverview;)'
match = re.search(closing_div_pattern, content)

if match:
    insertion_point = match.start()
    content = content[:insertion_point] + new_sections + content[insertion_point:]
else:
    print("Could not find insertion point!")

# Write the updated content
with open('./src/components/kol/KOLOverview.tsx', 'w') as f:
    f.write(content)

print("Successfully updated KOLOverview.tsx with new visualizations!")