import React, { useState } from 'react';
import { 
  Clipboard, 
  Star, 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Filter, 
  ThumbsUp, 
  ThumbsDown,
  ArrowRight,
  Zap,
  Target,
  Users,
  BarChart
} from 'lucide-react';

interface CreativeWorkspaceProps {
  onNavigate: (page: string) => void;
}

const CreativeWorkspace: React.FC<CreativeWorkspaceProps> = ({ onNavigate }) => {
  const [selectedConcept, setSelectedConcept] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('insights');
  
  const concepts = [
    {
      id: 1,
      title: "Pet Hair Cleaning Challenge",
      description: "Showcase Robot Vacuum Omni E28's cleaning effectiveness in extreme pet shedding environments, highlighting the professional pet hair cleaning features compared to other inefficient and cumbersome cleaning methods.",
      keyPoints: [
        "Professional pet hair cleaning system handles any hair challenge",
        "Smart obstacle avoidance system ensures no pet toy blockages",
        "Auto-empty function reduces allergen contact"
      ],
      emotionalAppeal: "Freedom from pet hair cleaning stress, more time to spend with pets",
      audienceMatch: 92,
      performance: {
        engagement: 87,
        virality: 78,
        conversion: 72
      }
    },
    {
      id: 2,
      title: "45-Day Worry-Free Cleaning",
      description: "Emphasize Robot Vacuum Omni E28's ultra-long battery life, showing how the product reduces daily maintenance needs for busy urban professionals.",
      keyPoints: [
        "45-day battery life without frequent charging",
        "Large dust bin reduces cleaning frequency",
        "Smart route planning improves cleaning efficiency"
      ],
      emotionalAppeal: "Simplify life and break free from tedious household chores",
      audienceMatch: 85,
      performance: {
        engagement: 82,
        virality: 70,
        conversion: 76
      }
    },
    {
      id: 3,
      title: "Smart Home Cleaning Butler",
      description: "Position Robot Vacuum Omni E28 as the core component of smart home ecosystem, showcasing how it works seamlessly with other smart devices to create a seamless cleaning experience.",
      keyPoints: [
        "Seamless connection with smart speakers",
        "Remote control via mobile app",
        "Auto-detect different rooms and adjust cleaning modes"
      ],
      emotionalAppeal: "Create future smart home and enhance quality of life",
      audienceMatch: 78,
      performance: {
        engagement: 75,
        virality: 83,
        conversion: 68
      }
    }
  ];
  
  return (
    <div className="h-full bg-gray-50">
      {/* Main content area */}
      <div className="flex flex-col overflow-hidden h-full">
        {/* Main content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left panel - Product & Target info */}
          <div className="w-1/4 border-r border-gray-200 bg-white overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Product Information</h2>
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value="Robot Vacuum Omni E28"
                  readOnly
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Core Features</label>
                <div className="space-y-2">
                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-md">
                    <div className="w-1 h-4 bg-indigo-500 rounded-full mr-2"></div>
                    <span className="text-sm">Smart Obstacle Avoidance</span>
                  </div>
                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-md">
                    <div className="w-1 h-4 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">Professional Pet Hair Cleaning</span>
                  </div>
                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-md">
                    <div className="w-1 h-4 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-sm">Auto-Empty Feature</span>
                  </div>
                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-md">
                    <div className="w-1 h-4 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-sm">45-Day Battery Life</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Unique Selling Point</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20"
                  value="Perfect cleaning companion for pet-owning families"
                  readOnly
                ></textarea>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700">Marketing Goal</label>
                  <button className="text-xs text-indigo-600 hover:text-indigo-800">Edit</button>
                </div>
                <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-md">
                  <div className="flex items-center">
                    <Target size={18} className="text-indigo-600 mr-2" />
                    <span className="text-sm text-gray-800">Increase product awareness among pet owners</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700">Target Audience</label>
                  <button className="text-xs text-indigo-600 hover:text-indigo-800">Edit</button>
                </div>
                <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-md">
                  <div className="flex items-center">
                    <Users size={18} className="text-indigo-600 mr-2" />
                    <span className="text-sm text-gray-800">25-40 year old pet owners</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700">Target Platforms</label>
                  <button className="text-xs text-indigo-600 hover:text-indigo-800">Edit</button>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="py-1 px-3 bg-red-100 text-red-800 text-sm rounded-full">TikTok</div>
                  <div className="py-1 px-3 bg-blue-100 text-blue-800 text-sm rounded-full">Instagram</div>
                  <div className="py-1 px-3 bg-gray-100 text-gray-800 text-sm rounded-full">Youtube</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center panel - Data insights & Generated concepts */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tabs */}
            <div className="bg-white border-b border-gray-200">
              <div className="flex px-4">
                <button 
                  className={`px-4 py-3 text-sm font-medium ${activeTab === 'insights' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('insights')}
                >
                  Data Insights
                </button>
                <button 
                  className={`px-4 py-3 text-sm font-medium ${activeTab === 'concepts' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('concepts')}
                >
                  Generated Concepts
                </button>
              </div>
            </div>
            
            {/* Tab content */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'insights' ? (
                <div>
                  <div className="mb-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-2">Data Insights</h2>
                    <p className="text-gray-600">Key insights based on search data, user feedback and viral content analysis</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {/* Search Insight card */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 className="text-md font-medium text-gray-900">Search Insights</h3>
                        <button className="text-sm text-indigo-600">View Details</button>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Trending Search Terms</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <div className="py-1 px-3 bg-indigo-50 text-indigo-800 text-sm rounded-full flex items-center">
                            <span>pet hair cleaning</span>
                            <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs px-1.5 py-0.5 rounded">+32%</span>
                          </div>
                          <div className="py-1 px-3 bg-indigo-50 text-indigo-800 text-sm rounded-full flex items-center">
                            <span>robot vacuum comparison</span>
                            <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs px-1.5 py-0.5 rounded">+24%</span>
                          </div>
                          <div className="py-1 px-3 bg-indigo-50 text-indigo-800 text-sm rounded-full flex items-center">
                            <span>auto-empty function</span>
                            <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs px-1.5 py-0.5 rounded">+18%</span>
                          </div>
                          <div className="py-1 px-3 bg-indigo-50 text-indigo-800 text-sm rounded-full flex items-center">
                            <span>long battery robot vacuum</span>
                            <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs px-1.5 py-0.5 rounded">+15%</span>
                          </div>
                        </div>
                        
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Competitor Search Analysis</h4>
                        <div className="overflow-hidden bg-gray-50 rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Competitor</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Search Volume</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Related Terms</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr>
                                <td className="px-4 py-2 text-sm text-gray-900">Competitor A</td>
                                <td className="px-4 py-2 text-sm text-gray-500">8,543</td>
                                <td className="px-4 py-2 text-sm text-gray-500">price, comparison, review</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-sm text-gray-900">Competitor B</td>
                                <td className="px-4 py-2 text-sm text-gray-500">6,284</td>
                                <td className="px-4 py-2 text-sm text-gray-500">value, accessories, noise</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-sm text-gray-900">Competitor C</td>
                                <td className="px-4 py-2 text-sm text-gray-500">4,721</td>
                                <td className="px-4 py-2 text-sm text-gray-500">smart, cleaning performance, app</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    
                    {/* VOC Insight card */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 className="text-md font-medium text-gray-900">User Voice Insights</h3>
                        <button className="text-sm text-indigo-600">View Details</button>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Sentiment Analysis</h4>
                        <div className="flex items-center mb-4">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '72%' }}></div>
                          </div>
                          <span className="text-sm text-gray-500">72% Positive</span>
                        </div>
                        
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Main User Pain Points</h4>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between bg-red-50 p-2 rounded-md">
                            <div className="flex items-center">
                              <div className="w-1 h-4 bg-red-500 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-800">Difficult pet hair cleaning</span>
                            </div>
                            <span className="text-xs text-red-600">38%</span>
                          </div>
                          <div className="flex items-center justify-between bg-red-50 p-2 rounded-md">
                            <div className="flex items-center">
                              <div className="w-1 h-4 bg-red-500 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-800">Frequent trash emptying needed</span>
                            </div>
                            <span className="text-xs text-red-600">26%</span>
                          </div>
                          <div className="flex items-center justify-between bg-red-50 p-2 rounded-md">
                            <div className="flex items-center">
                              <div className="w-1 h-4 bg-red-500 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-800">Insufficient battery life</span>
                            </div>
                            <span className="text-xs text-red-600">19%</span>
                          </div>
                        </div>
                        
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Positive User Feedback</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between bg-green-50 p-2 rounded-md">
                            <div className="flex items-center">
                              <div className="w-1 h-4 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-800">Strong obstacle avoidance</span>
                            </div>
                            <span className="text-xs text-green-600">42%</span>
                          </div>
                          <div className="flex items-center justify-between bg-green-50 p-2 rounded-md">
                            <div className="flex items-center">
                              <div className="w-1 h-4 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-800">Easy app operation</span>
                            </div>
                            <span className="text-xs text-green-600">31%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Viral Video Insight */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 className="text-md font-medium text-gray-900">Viral Video Insights</h3>
                        <button className="text-sm text-indigo-600">View Details</button>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-3">High Engagement Content Features</h4>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-purple-50 p-3 rounded-md">
                            <div className="flex items-center mb-1">
                              <Zap size={16} className="text-purple-600 mr-1" />
                              <span className="text-sm font-medium text-gray-800">Before/After Demos</span>
                            </div>
                            <p className="text-xs text-gray-600">Strong visual contrast of cleaning results creates high resonance</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-md">
                            <div className="flex items-center mb-1">
                              <Zap size={16} className="text-purple-600 mr-1" />
                              <span className="text-sm font-medium text-gray-800">Pet Interaction Scenes</span>
                            </div>
                            <p className="text-xs text-gray-600">Videos featuring pets get higher engagement rates</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-md">
                            <div className="flex items-center mb-1">
                              <Zap size={16} className="text-purple-600 mr-1" />
                              <span className="text-sm font-medium text-gray-800">Challenge Content</span>
                            </div>
                            <p className="text-xs text-gray-600">Extreme cleaning challenges showcase product capabilities effectively</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-md">
                            <div className="flex items-center mb-1">
                              <Zap size={16} className="text-purple-600 mr-1" />
                              <span className="text-sm font-medium text-gray-800">3-Second Hook</span>
                            </div>
                            <p className="text-xs text-gray-600">Opening 3 seconds addressing pain points significantly improves completion rates</p>
                          </div>
                        </div>
                        
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Ideal Content Structure</h4>
                        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                          <div className="flex-shrink-0 w-20 h-16 bg-indigo-100 rounded flex flex-col items-center justify-center p-1">
                            <span className="text-xs font-bold text-indigo-800">0-3sec</span>
                            <span className="text-xs text-indigo-600 text-center">Pain Point</span>
                          </div>
                          <ArrowRight size={16} className="text-gray-400 flex-shrink-0" />
                          <div className="flex-shrink-0 w-20 h-16 bg-indigo-100 rounded flex flex-col items-center justify-center p-1">
                            <span className="text-xs font-bold text-indigo-800">4-10sec</span>
                            <span className="text-xs text-indigo-600 text-center">Product Intro</span>
                          </div>
                          <ArrowRight size={16} className="text-gray-400 flex-shrink-0" />
                          <div className="flex-shrink-0 w-20 h-16 bg-indigo-100 rounded flex flex-col items-center justify-center p-1">
                            <span className="text-xs font-bold text-indigo-800">11-30sec</span>
                            <span className="text-xs text-indigo-600 text-center">Demo</span>
                          </div>
                          <ArrowRight size={16} className="text-gray-400 flex-shrink-0" />
                          <div className="flex-shrink-0 w-20 h-16 bg-indigo-100 rounded flex flex-col items-center justify-center p-1">
                            <span className="text-xs font-bold text-indigo-800">31-45sec</span>
                            <span className="text-xs text-indigo-600 text-center">Results</span>
                          </div>
                          <ArrowRight size={16} className="text-gray-400 flex-shrink-0" />
                          <div className="flex-shrink-0 w-20 h-16 bg-indigo-100 rounded flex flex-col items-center justify-center p-1">
                            <span className="text-xs font-bold text-indigo-800">46-60sec</span>
                            <span className="text-xs text-indigo-600 text-center">Call to Action</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-2">Generated Concepts</h2>
                    <p className="text-gray-600">Creative concepts generated by the system based on product information and insights data</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {concepts.map((concept) => (
                      <div 
                        key={concept.id}
                        className={`bg-white rounded-lg shadow overflow-hidden border-2 ${selectedConcept === concept.id ? 'border-indigo-500' : 'border-transparent'}`}
                        onClick={() => setSelectedConcept(concept.id)}
                      >
                        <div className="p-4 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">{concept.title}</h3>
                            <div className="flex items-center space-x-2">
                              <button className="text-gray-400 hover:text-gray-600">
                                <ThumbsUp size={18} />
                              </button>
                              <button className="text-gray-400 hover:text-gray-600">
                                <ThumbsDown size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <p className="text-gray-700 mb-4">{concept.description}</p>
                          
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Key Selling Points</h4>
                          <ul className="space-y-1 mb-4">
                            {concept.keyPoints.map((point, index) => (
                              <li key={index} className="flex items-start">
                                <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-indigo-100 text-indigo-800 text-xs rounded-full mr-2 mt-0.5">
                                  {index + 1}
                                </span>
                                <span className="text-sm text-gray-700">{point}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Emotional Appeal</h4>
                            <div className="bg-gray-50 p-3 rounded-md text-sm italic text-gray-700">
                              "{concept.emotionalAppeal}"
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-3 mb-4">
                            <div className="bg-indigo-50 p-3 rounded-md">
                              <div className="text-center mb-1">
                                <span className="text-xs text-indigo-500">Audience Match</span>
                              </div>
                              <div className="text-center font-bold text-lg text-indigo-700">
                                {concept.audienceMatch}
                                <span className="text-xs font-normal text-indigo-500">/100</span>
                              </div>
                            </div>
                            
                            <div className="bg-green-50 p-3 rounded-md">
                              <div className="text-center mb-1">
                                <span className="text-xs text-green-500">Engagement Potential</span>
                              </div>
                              <div className="text-center font-bold text-lg text-green-700">
                                {concept.performance.engagement}
                                <span className="text-xs font-normal text-green-500">/100</span>
                              </div>
                            </div>
                            
                            <div className="bg-blue-50 p-3 rounded-md">
                              <div className="text-center mb-1">
                                <span className="text-xs text-blue-500">Viral Potential</span>
                              </div>
                              <div className="text-center font-bold text-lg text-blue-700">
                                {concept.performance.virality}
                                <span className="text-xs font-normal text-blue-500">/100</span>
                              </div>
                            </div>
                            
                            <div className="bg-purple-50 p-3 rounded-md">
                              <div className="text-center mb-1">
                                <span className="text-xs text-purple-500">Conversion Potential</span>
                              </div>
                              <div className="text-center font-bold text-lg text-purple-700">
                                {concept.performance.conversion}
                                <span className="text-xs font-normal text-purple-500">/100</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-end mt-4">
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2 text-sm">
                              Edit
                            </button>
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm flex items-center">
                              Generate Script
                              <ArrowRight size={16} className="ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right panel - Help & Preview area */}
          <div className="w-1/4 border-l border-gray-200 bg-white overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Creative Assistant</h2>
            </div>
            
            <div className="p-4">
              <div className="bg-indigo-50 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-2">
                  <Star size={18} className="text-indigo-600 mr-2" />
                  <h3 className="text-md font-medium text-indigo-800">Creative Tips</h3>
                </div>
                <p className="text-sm text-indigo-700 mb-3">
                  Based on data analysis, these elements can improve pet-related content performance:
                </p>
                <ul className="text-sm text-indigo-700 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 mr-2"></span>
                    <span>Show real pet hair problems in the first 3 seconds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 mr-2"></span>
                    <span>Use split-screen to show before/after cleaning results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 mr-2"></span>
                    <span>Include pet-product interaction scenes for emotional connection</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-700 mb-3">Viral References</h3>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <div className="aspect-video bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600">Video Reference #1</span>
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm font-medium text-gray-800">Extreme Pet Hair Challenge</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">1.2M interactions</span>
                        <span className="text-xs text-green-600">4.8% conversion</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <div className="aspect-video bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600">Video Reference #2</span>
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm font-medium text-gray-800">Smart Home Comparison</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">842K interactions</span>
                        <span className="text-xs text-green-600">3.6% conversion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-medium text-gray-700 mb-3">Related Resources</h3>
                <div className="space-y-2">
                  <a href="#" className="flex items-center p-2 bg-gray-50 hover:bg-gray-100 rounded-md">
                    <div className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center mr-3">
                      <Clipboard size={16} className="text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">Creative Brief Template</h4>
                      <p className="text-xs text-gray-500">Effectively organize creative direction</p>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-center p-2 bg-gray-50 hover:bg-gray-100 rounded-md">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center mr-3">
                      <BarChart size={16} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">Pet Owner Insights Report</h4>
                      <p className="text-xs text-gray-500">Complete target audience analysis</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeWorkspace;