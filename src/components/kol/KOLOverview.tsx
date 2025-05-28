import React from 'react';
import ReactECharts from 'echarts-for-react';
import {
  TrendingUp,
  Play,
  Heart,
  DollarSign,
  Users,
  BarChart3,
  Eye,
  Share2,
  Target,
  Award,
  Youtube,
  Instagram,
  Video,
  Clock,
  ArrowUp,
  ArrowDown,
  Calendar,
  UserCheck,
  Sparkle,
  Activity,
  Zap
} from 'lucide-react';

interface KOLOverviewProps {
  onNavigate?: (page: string) => void;
}

const KOLOverview: React.FC<KOLOverviewProps> = ({ onNavigate }) => {
  const keyMetrics = [
    {
      title: "Total Views",
      value: "12.8M",
      change: "+34.7%",
      description: "Total video views across all KOL partnerships",
      icon: <Play size={20} className="text-blue-600" />
    },
    {
      title: "Engagement Rate",
      value: "8.4%",
      change: "+12.3%",
      description: "(Likes + Comments + Shares) / Total Views",
      icon: <Heart size={20} className="text-pink-600" />
    },
    {
      title: "GMV Conversion Rate",
      value: "4.2%",
      change: "+18.9%",
      description: "Total GMV / Total Views",
      icon: <Target size={20} className="text-green-600" />
    },
    {
      title: "Influence Score",
      value: "847",
      change: "+28.1%",
      description: "Follower Growth + Engagement Quality Index",
      icon: <Award size={20} className="text-purple-600" />
    },
    {
      title: "ROI",
      value: "3.8x",
      change: "+22.4%",
      description: "GMV Revenue / Operational Costs",
      icon: <DollarSign size={20} className="text-orange-600" />
    }
  ];

  const performanceTrends = [
    { month: "Jan", views: 8.2, engagement: 6.8, conversion: 3.1, followers: 245 },
    { month: "Feb", views: 9.1, engagement: 7.2, conversion: 3.4, followers: 267 },
    { month: "Mar", views: 10.3, engagement: 7.8, conversion: 3.7, followers: 289 },
    { month: "Apr", views: 11.7, engagement: 8.1, conversion: 3.9, followers: 312 },
    { month: "May", views: 12.8, engagement: 8.4, conversion: 4.2, followers: 334 }
  ];

  const platformBreakdown = [
    {
      platform: "YouTube",
      views: "6.2M",
      engagement: "9.1%",
      conversion: "5.3%",
      gmvContribution: "42%",
      icon: <Youtube size={24} className="text-red-600" />
    },
    {
      platform: "Instagram",
      views: "4.1M", 
      engagement: "8.7%",
      conversion: "3.8%",
      gmvContribution: "31%",
      icon: <Instagram size={24} className="text-pink-600" />
    },
    {
      platform: "TikTok",
      views: "2.5M",
      engagement: "7.2%",
      conversion: "2.9%",
      gmvContribution: "27%",
      icon: <Video size={24} className="text-gray-900" />
    }
  ];

  const kolTierAnalysis = [
    {
      tier: "Top Tier KOLs",
      count: 8,
      followerRange: "1M+",
      avgViews: "850K",
      engagementRate: "12.4%",
      gmvContribution: "58%",
      cooperation: "Weekly",
      avgDealSize: "$45K"
    },
    {
      tier: "Mid Tier KOLs", 
      count: 24,
      followerRange: "100K-1M",
      avgViews: "120K",
      engagementRate: "9.8%",
      gmvContribution: "31%",
      cooperation: "Bi-weekly",
      avgDealSize: "$12K"
    },
    {
      tier: "Micro KOLs",
      count: 67,
      followerRange: "10K-100K",
      avgViews: "15K",
      engagementRate: "6.2%",
      gmvContribution: "11%",
      cooperation: "Monthly",
      avgDealSize: "$3K"
    }
  ];

  const optimizationInsights = [
    {
      category: "High Conversion Content",
      insight: "Product demonstration videos show 67% higher conversion rates",
      recommendation: "Increase demo content allocation by 30%",
      priority: "High"
    },
    {
      category: "Low Engagement Analysis",
      insight: "Lifestyle content shows low engagement but high brand awareness",
      recommendation: "Optimize lifestyle content for conversion touchpoints",
      priority: "Medium"
    },
    {
      category: "KOL Selection Optimization",
      insight: "Mid-tier KOLs show best ROI performance",
      recommendation: "Increase mid-tier KOL partnerships by 40%",
      priority: "High"
    },
    {
      category: "Platform Strategy",
      insight: "YouTube shows highest conversion but Instagram has best reach",
      recommendation: "Cross-platform content strategy implementation",
      priority: "Medium"
    }
  ];

  // Chart Options for Performance Trends
  const performanceTrendsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6b7280'
        }
      }
    },
    legend: {
      data: ['Views (M)', 'Engagement (%)', 'Conversion (%)', 'New Followers (K/10)'],
      top: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: performanceTrends.map(t => t.month)
    },
    yAxis: {
      type: 'value',
      name: 'Metrics',
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [
      {
        name: 'Views (M)',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#3B82F6'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(59, 130, 246, 0.3)' },
              { offset: 1, color: 'rgba(59, 130, 246, 0.05)' }
            ]
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: performanceTrends.map(t => t.views)
      },
      {
        name: 'Engagement (%)',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#EC4899'
        },
        emphasis: {
          focus: 'series'
        },
        data: performanceTrends.map(t => t.engagement)
      },
      {
        name: 'Conversion (%)',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#10B981'
        },
        emphasis: {
          focus: 'series'
        },
        data: performanceTrends.map(t => t.conversion)
      },
      {
        name: 'New Followers (K/10)',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#8B5CF6'
        },
        emphasis: {
          focus: 'series'
        },
        data: performanceTrends.map(t => t.followers / 10)
      }
    ]
  };

  // Platform Performance Radar Chart
  const platformRadarOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: platformBreakdown.map(p => p.platform),
      bottom: 0
    },
    radar: {
      indicator: [
        { name: 'Views', max: 10 },
        { name: 'Engagement', max: 10 },
        { name: 'Conversion', max: 6 },
        { name: 'GMV Share', max: 50 }
      ],
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: 'rgb(107, 114, 128)'
      },
      splitLine: {
        lineStyle: {
          color: [
            'rgba(229, 231, 235, 0.5)',
            'rgba(229, 231, 235, 0.5)',
            'rgba(229, 231, 235, 0.5)',
            'rgba(229, 231, 235, 0.5)',
            'rgba(229, 231, 235, 0.5)'
          ]
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(249, 250, 251, 0.8)', 'rgba(243, 244, 246, 0.8)']
        }
      }
    },
    series: [
      {
        type: 'radar',
        data: platformBreakdown.map(p => ({
          value: [
            parseFloat(p.views.replace('M', '')),
            parseFloat(p.engagement.replace('%', '')),
            parseFloat(p.conversion.replace('%', '')),
            parseInt(p.gmvContribution.replace('%', ''))
          ],
          name: p.platform,
          lineStyle: {
            width: 2
          },
          areaStyle: {
            opacity: 0.2
          },
          itemStyle: {
            color: p.platform === 'YouTube' ? '#DC2626' : 
                   p.platform === 'Instagram' ? '#EC4899' : '#111827'
          }
        }))
      }
    ]
  };

  // KOL Tier Distribution Pie Chart
  const kolTierPieOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} KOLs ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 'right',
      data: kolTierAnalysis.map(t => t.tier)
    },
    series: [
      {
        name: 'KOL Distribution',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: kolTierAnalysis.map((tier, index) => ({
          value: tier.count,
          name: tier.tier,
          itemStyle: {
            color: index === 0 ? '#6366F1' : index === 1 ? '#10B981' : '#F59E0B'
          }
        }))
      }
    ]
  };

  // KOL Collaboration Schedule Data
  const collaborationSchedule = [
    {
      week: "Week 1",
      startDate: "May 6, 2025 (US Time)",
      quantity: "4-5",
      targetViews: "1000M-2000M",
      task: "Select 4-5 creators (including KOC, KOL, mid-tier + high-traffic bloggers) to test market feedback and provide reference for subsequent cold start",
      progress: 0,
      status: "Upcoming"
    },
    {
      week: "Week 2",
      startDate: "May 13, 2025",
      quantity: "5-7",
      targetViews: "2000M-3000M",
      task: "Expand investment, focus on optimizing content strategy and creator type combination based on Week 1 data",
      progress: 0,
      status: "Planned"
    },
    {
      week: "Week 3",
      startDate: "May 20, 2025",
      quantity: "5-9",
      targetViews: "3000M-4000M",
      task: "Accelerate investment, focus on ensuring structural diversity and over 70% video output meets standards",
      progress: 0,
      status: "Planned"
    },
    {
      week: "Week 4",
      startDate: "May 27, 2025",
      quantity: "6-9",
      targetViews: "3000M+",
      task: "Sprint execution, focus on creator re-investment + viral content multiplication; strengthen monthly burst power and conversion rate improvement",
      progress: 0,
      status: "Planned"
    }
  ];

  // KOL Type Distribution Data
  const kolTypeDistribution = [
    {
      type: "Tail-end",
      bloggerType: "1. Balanced gender ratio\n2. Age group mainly 18-25; 25-35",
      contentType: "Amateur sharing, daily sharing",
      viewsLevel: "1K-1.5M",
      ratio: 50,
      color: "bg-blue-500"
    },
    {
      type: "Mid-tier",
      bloggerType: "1. Balanced gender ratio\n2. Age group mainly 18-25; 25-35",
      contentType: "Product recommendations/shopping, family, personal blogger lifestyle sharing",
      viewsLevel: "8K-2M",
      ratio: 45,
      color: "bg-green-500"
    },
    {
      type: "Top-tier",
      bloggerType: "1. Balanced gender ratio\n2. Age group mainly 18-25; 25-35",
      contentType: "3C, Household Appliances priority",
      viewsLevel: "20K-2M",
      ratio: 5,
      color: "bg-purple-500"
    }
  ];

  // Collaboration Schedule Bar Chart
  const collaborationBarOption = {
    title: {
      text: 'KOL Collaboration Timeline - May 2025',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(params: any) {
        const data = params[0];
        const weekData = collaborationSchedule[data.dataIndex];
        return `${data.name}<br/>
                KOLs: ${weekData.quantity}<br/>
                Target Views: ${weekData.targetViews}<br/>
                Start Date: ${weekData.startDate}`;
      }
    },
    legend: {
      data: ['KOL Count (Max)', 'Target Views (Billions)'],
      top: 30
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      axisLabel: {
        fontSize: 12
      }
    },
    yAxis: [
      {
        type: 'value',
        name: 'KOL Count',
        position: 'left',
        axisLabel: {
          formatter: '{value}'
        },
        min: 0,
        max: 10
      },
      {
        type: 'value',
        name: 'Target Views (B)',
        position: 'right',
        axisLabel: {
          formatter: '{value}B'
        },
        min: 0,
        max: 5
      }
    ],
    series: [
      {
        name: 'KOL Count (Max)',
        type: 'bar',
        yAxisIndex: 0,
        data: [
          {
            value: 5,
            itemStyle: { 
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: '#3B82F6' },
                  { offset: 1, color: '#1E40AF' }
                ]
              }
            }
          },
          {
            value: 7,
            itemStyle: { 
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: '#10B981' },
                  { offset: 1, color: '#047857' }
                ]
              }
            }
          },
          {
            value: 9,
            itemStyle: { 
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: '#8B5CF6' },
                  { offset: 1, color: '#6D28D9' }
                ]
              }
            }
          },
          {
            value: 9,
            itemStyle: { 
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: '#F59E0B' },
                  { offset: 1, color: '#D97706' }
                ]
              }
            }
          }
        ],
        barWidth: '40%',
        label: {
          show: true,
          position: 'top',
          formatter: '{c}',
          color: '#374151',
          fontSize: 12,
          fontWeight: 'bold'
        }
      },
      {
        name: 'Target Views (Billions)',
        type: 'bar',
        yAxisIndex: 1,
        data: [
          {
            value: 2,
            itemStyle: { 
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(59, 130, 246, 0.6)' },
                  { offset: 1, color: 'rgba(30, 64, 175, 0.6)' }
                ]
              }
            }
          },
          {
            value: 3,
            itemStyle: { 
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(16, 185, 129, 0.6)' },
                  { offset: 1, color: 'rgba(4, 120, 87, 0.6)' }
                ]
              }
            }
          },
          {
            value: 4,
            itemStyle: { 
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(139, 92, 246, 0.6)' },
                  { offset: 1, color: 'rgba(109, 40, 217, 0.6)' }
                ]
              }
            }
          },
          {
            value: 4,
            itemStyle: { 
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(245, 158, 11, 0.6)' },
                  { offset: 1, color: 'rgba(217, 119, 6, 0.6)' }
                ]
              }
            }
          }
        ],
        barWidth: '40%',
        label: {
          show: true,
          position: 'top',
          formatter: '{c}B',
          color: '#374151',
          fontSize: 12,
          fontWeight: 'bold'
        }
      }
    ]
  };

  // KOL Distribution Horizontal Bar Chart
  const kolDistributionBarOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        formatter: '{value}%'
      }
    },
    yAxis: {
      type: 'category',
      data: ['Top-tier', 'Mid-tier', 'Tail-end']
    },
    series: [
      {
        type: 'bar',
        data: [
          {
            value: 5,
            itemStyle: { color: '#8B5CF6' }
          },
          {
            value: 45,
            itemStyle: { color: '#10B981' }
          },
          {
            value: 50,
            itemStyle: { color: '#3B82F6' }
          }
        ],
        label: {
          show: true,
          position: 'inside',
          formatter: '{c}%'
        },
        barWidth: '60%'
      }
    ]
  };

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">KOL Content Empowerment Overview</h2>
            <p className="text-gray-600">Comprehensive performance metrics and trends for KOL content collaboration</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-gray-100">
                    {metric.icon}
                  </div>
                  <span className="text-green-500 text-sm font-medium">{metric.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-gray-600 text-sm mb-2">{metric.title}</p>
                <p className="text-gray-500 text-xs">{metric.description}</p>
              </div>
            ))}
          </div>

          {/* Performance Trends */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Performance Trends</h3>
                  <p className="text-gray-500 text-sm">Key metrics evolution over the last 5 months</p>
                </div>
                <div className="flex items-center gap-2">
                  <Activity size={20} className="text-indigo-600" />
                  <span className="text-sm font-medium text-gray-600">Live Analytics</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="h-[400px]">
                <ReactECharts option={performanceTrendsOption} style={{ height: '100%', width: '100%' }} />
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">56%</div>
                  <p className="text-sm text-gray-600">Views Growth</p>
                </div>
                <div className="text-center p-3 bg-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">23%</div>
                  <p className="text-sm text-gray-600">Engagement Lift</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">35%</div>
                  <p className="text-sm text-gray-600">Conversion Boost</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">36%</div>
                  <p className="text-sm text-gray-600">Follower Growth</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Platform Performance Radar */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Platform Performance Analysis</h3>
                    <p className="text-gray-500 text-sm">Multi-dimensional platform comparison</p>
                  </div>
                  <Zap size={20} className="text-yellow-500" />
                </div>
              </div>
              <div className="p-6">
                <div className="h-[350px] mb-4">
                  <ReactECharts option={platformRadarOption} style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {platformBreakdown.map((platform, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-center mb-2">{platform.icon}</div>
                      <p className="text-xs text-gray-600">{platform.platform}</p>
                      <p className="text-lg font-bold text-indigo-600">{platform.gmvContribution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* KOL Tier Distribution */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">KOL Tier Distribution</h3>
                    <p className="text-gray-500 text-sm">Resource allocation by KOL tiers</p>
                  </div>
                  <Users size={20} className="text-purple-600" />
                </div>
              </div>
              <div className="p-6">
                <div className="h-[300px]">
                  <ReactECharts option={kolTierPieOption} style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="mt-4 space-y-2">
                  {kolTierAnalysis.map((tier, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium text-gray-700">{tier.tier}</span>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-gray-600">{tier.avgViews} avg views</span>
                        <span className="font-bold text-indigo-600">{tier.gmvContribution} GMV</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Optimization Insights */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Strategic Optimization Insights</h3>
              <p className="text-gray-500 text-sm">Data-driven recommendations for KOL content strategy</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {optimizationInsights.map((insight, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{insight.category}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        insight.priority === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {insight.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{insight.insight}</p>
                    <p className="text-sm font-medium text-indigo-600">{insight.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KOL Collaboration Schedule */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">KOL Collaboration Timeline - May 2025</h3>
                  <p className="text-gray-500 text-sm">Strategic weekly execution plan</p>
                </div>
                <Calendar size={20} className="text-indigo-600" />
              </div>
            </div>
            <div className="p-6">
              {/* Timeline Bar Chart */}
              <div className="h-[400px] mb-6">
                <ReactECharts option={collaborationBarOption} style={{ height: '100%', width: '100%' }} />
              </div>
              
              {/* Week Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {collaborationSchedule.map((schedule, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{schedule.week}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        schedule.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {schedule.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">KOLs:</span>
                        <span className="font-medium">{schedule.quantity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Target:</span>
                        <span className="font-medium text-indigo-600">{schedule.targetViews}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Campaign Summary */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">20-30</div>
                    <p className="text-sm text-gray-600 mt-1">Total KOLs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">9B</div>
                    <p className="text-sm text-gray-600 mt-1">Target Views</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">70%+</div>
                    <p className="text-sm text-gray-600 mt-1">Quality Standard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KOL Type Distribution */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">KOL Type Distribution Strategy</h3>
                  <p className="text-gray-500 text-sm">Strategic creator allocation by tier</p>
                </div>
                <UserCheck size={20} className="text-purple-600" />
              </div>
            </div>
            <div className="p-6">
              {/* Distribution Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="h-[300px]">
                  <ReactECharts option={kolDistributionBarOption} style={{ height: '100%', width: '100%' }} />
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Strategic Allocation Focus</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-blue-600">50%</span>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-gray-900">Tail-end KOLs</p>
                          <p className="text-sm text-gray-600">Authentic daily content</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-green-600">45%</span>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-gray-900">Mid-tier KOLs</p>
                          <p className="text-sm text-gray-600">Product recommendations</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-purple-600">5%</span>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-gray-900">Top-tier KOLs</p>
                          <p className="text-sm text-gray-600">Tech & appliances focus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-4">
                {kolTypeDistribution.map((type, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Sparkle size={24} className={
                          type.type === 'Tail-end' ? 'text-blue-600' :
                          type.type === 'Mid-tier' ? 'text-green-600' : 'text-purple-600'
                        } />
                        <h4 className="text-lg font-semibold text-gray-900">{type.type} KOLs</h4>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{type.ratio}%</div>
                        <div className="text-sm text-gray-600">Allocation</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Audience Profile</h5>
                        <p className="text-sm text-gray-600">Balanced gender ratio</p>
                        <p className="text-sm text-gray-600">Age: 18-35 years old</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Content Focus</h5>
                        <p className="text-sm text-gray-600">{type.contentType}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Performance Range</h5>
                        <p className="text-lg font-bold text-indigo-600">{type.viewsLevel}</p>
                        <p className="text-xs text-gray-500">Average views per video</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategic Insights */}
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <Target size={16} className="text-indigo-600" />
                  Key Strategic Insights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium text-gray-900 mb-1">ROI Optimization</p>
                    <p className="text-gray-600">Mid-tier KOLs deliver 3.2x better ROI than top-tier</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium text-gray-900 mb-1">Engagement Quality</p>
                    <p className="text-gray-600">Tail-end KOLs achieve 2x higher comment rates</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium text-gray-900 mb-1">Conversion Focus</p>
                    <p className="text-gray-600">Product demos by mid-tier convert at 67% higher rate</p>
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

export default KOLOverview;