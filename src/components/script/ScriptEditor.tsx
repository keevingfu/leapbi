import React, { useState } from 'react';
import { 
  Save, 
  Play, 
  Film, 
  Layers, 
  Edit3, 
  Clock, 
  Clipboard, 
  Download,
  Share2,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Eye,
  BarChart,
  PlusCircle,
  Grid,
  CheckCircle,
  X,
  Info
} from 'lucide-react';

interface ScriptEditorProps {
  onNavigate: (page: string) => void;
}

const ScriptEditor: React.FC<ScriptEditorProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('editor');
  const [script, setScript] = useState({
    title: "Pet Hair Cleaning Challenge",
    duration: "60sec",
    platform: "TikTok",
    scenes: [
      {
        id: 1,
        time: "0-5sec",
        description: "Close-up: Pet owner looking frustrated at pet hair all over the floor, holding a regular vacuum cleaner that can't clean thoroughly",
        dialogue: "[Voiceover] Exhausted from daily battles with pet hair?",
        visualNotes: "Warm home environment, golden/brown pet hair close-up, owner's exaggerated helpless expression"
      },
      {
        id: 2,
        time: "6-15sec",
        description: "Split screen comparison: Regular cleaning methods vs Robot Vacuum Omni E28 cleaning results",
        dialogue: "[Voiceover] Regular vacuums only clean the surface, while Robot Vacuum Omni E28's professional pet hair cleaning system penetrates deep into carpet fibers...",
        visualNotes: "Close-up of product's professional pet hair brush underneath, showing suction and hair collection process"
      },
      {
        id: 3,
        time: "16-25sec",
        description: "Product close-up: Shows Robot Vacuum Omni E28 easily avoiding pet toys and furniture",
        dialogue: "[Voiceover] Smart obstacle avoidance system ensures it won't get stuck on pet toys, completing cleaning work without your intervention.",
        visualNotes: "Bird's eye view showing product navigating flexibly through room with obstacles"
      },
      {
        id: 4,
        time: "26-35sec",
        description: "Feature demonstration: Auto-empty station operation process",
        dialogue: "[Voiceover] Even better, it auto-empties trash for 45 days without your involvement, reducing allergen contact.",
        visualNotes: "Product returning to base station, auto-empty process, base station indicator light changes"
      },
      {
        id: 5,
        time: "36-50sec",
        description: "Transformation scene: Pet owner goes from exhausted cleaning to relaxing and enjoying time with pets",
        dialogue: "[Voiceover] From now on, you can escape pet hair cleaning stress and have more precious time with your furry companions.",
        visualNotes: "Heartwarming scene of owner and pet interacting in clean home, Robot Vacuum Omni E28 working in background"
      },
      {
        id: 6,
        time: "51-60sec",
        description: "Product showcase and call to action",
        dialogue: "[Voiceover] Robot Vacuum Omni E28, the cleaning solution designed for pet families. Buy now and enjoy 30-day free trial.",
        visualNotes: "Complete product display, QR code scan, clear brand logo presentation"
      }
    ],
    musicSuggestion: "Upbeat, positive background music synchronized with product movement",
    keyVisualElements: [
      "Pet hair 'before and after' comparison shots",
      "Product obstacle avoidance feature close-up",
      "Auto-empty demonstration",
      "Happy scenes of liberated pet owners interacting with pets"
    ],
    callToAction: "Scan QR code and let Robot Vacuum Omni E28 solve your pet hair troubles"
  });
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left sidebar - header and scene navigation */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-1">{script.title}</h2>
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-1" />
            <span>{script.duration}</span>
            <span className="mx-2">•</span>
            <span>{script.platform}</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-700">Scene List</h3>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                <PlusCircle size={16} className="mr-1" />
                Add Scene
              </button>
            </div>
            
            <div className="space-y-2">
              {script.scenes.map((scene) => (
                <div 
                  key={scene.id}
                  className="p-3 bg-indigo-50 hover:bg-indigo-100 rounded-md cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-indigo-700">Scene {scene.id}</span>
                    <span className="text-xs text-indigo-600">{scene.time}</span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">{scene.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md text-sm flex items-center justify-center">
              <Save size={16} className="mr-1" />
              Save
            </button>
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm flex items-center justify-center">
              <Play size={16} className="mr-1" />
              Preview
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="flex px-4">
            <button 
              className={`px-4 py-3 text-sm font-medium ${activeTab === 'editor' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('editor')}
            >
              Script Editor
            </button>
            <button 
              className={`px-4 py-3 text-sm font-medium ${activeTab === 'storyboard' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('storyboard')}
            >
              Storyboard
            </button>
            <button 
              className={`px-4 py-3 text-sm font-medium ${activeTab === 'analytics' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('analytics')}
            >
              Performance Prediction
            </button>
          </div>
        </div>
        
        {/* Editor content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'editor' && (
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Script header section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Script Title</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={script.title}
                          onChange={(e) => setScript({...script, title: e.target.value})}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={script.duration}
                            onChange={(e) => setScript({...script, duration: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                          <select 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={script.platform}
                            onChange={(e) => setScript({...script, platform: e.target.value})}
                          >
                            <option>TikTok</option>
                            <option>Instagram</option>
                            <option>YouTube</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-4 flex space-x-2">
                      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                        <Clipboard size={18} />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                        <Download size={18} />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Music Suggestion</label>
                    <textarea 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-16"
                      value={script.musicSuggestion}
                      onChange={(e) => setScript({...script, musicSuggestion: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Key Visual Elements</label>
                    <div className="flex flex-wrap gap-2">
                      {script.keyVisualElements.map((element, index) => (
                        <div key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700">
                          {element}
                          <button className="ml-1 text-indigo-500 hover:text-indigo-700">
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                      <button className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
                        <PlusCircle size={14} className="mr-1" />
                        Add Element
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Scene editor cards */}
                {script.scenes.map((scene) => (
                  <div key={scene.id} className="bg-white rounded-lg shadow overflow-hidden">
                    {/* Scene header */}
                    <div className="bg-indigo-50 p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-medium mr-3">
                          {scene.id}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Scene {scene.id}</h3>
                          <span className="text-sm text-gray-500">{scene.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-indigo-100 rounded">
                          <Edit3 size={18} />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-indigo-100 rounded">
                          <Layers size={18} />
                        </button>
                        <button className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded">
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Scene content */}
                    <div className="p-4">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Scene Description</label>
                        <textarea 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20"
                          value={scene.description}
                          onChange={(e) => {
                            const updatedScenes = script.scenes.map(s => 
                              s.id === scene.id ? {...s, description: e.target.value} : s
                            );
                            setScript({...script, scenes: updatedScenes});
                          }}
                        ></textarea>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Voiceover/Dialogue</label>
                        <textarea 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20"
                          value={scene.dialogue}
                          onChange={(e) => {
                            const updatedScenes = script.scenes.map(s => 
                              s.id === scene.id ? {...s, dialogue: e.target.value} : s
                            );
                            setScript({...script, scenes: updatedScenes});
                          }}
                        ></textarea>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Visual Notes</label>
                        <textarea 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20"
                          value={scene.visualNotes}
                          onChange={(e) => {
                            const updatedScenes = script.scenes.map(s => 
                              s.id === scene.id ? {...s, visualNotes: e.target.value} : s
                            );
                            setScript({...script, scenes: updatedScenes});
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* CTA section */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-medium text-gray-900 mb-3">Call to Action (CTA)</h3>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20"
                    value={script.callToAction}
                    onChange={(e) => setScript({...script, callToAction: e.target.value})}
                  ></textarea>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'storyboard' && (
            <div className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Storyboard</h2>
                <div className="flex items-center space-x-3">
                  <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm flex items-center">
                    <Grid size={16} className="mr-2" />
                    Grid View
                  </button>
                  <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm flex items-center">
                    <Layers size={16} className="mr-2" />
                    Timeline View
                  </button>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm flex items-center">
                    <PlusCircle size={16} className="mr-2" />
                    Add Reference
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {script.scenes.map((scene) => (
                  <div key={scene.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-medium mr-2">
                          {scene.id}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{scene.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                          <Edit3 size={16} />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                          <Eye size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <Film size={32} className="text-gray-400" />
                    </div>
                    
                    <div className="p-3">
                      <p className="text-sm text-gray-700 mb-2 line-clamp-2">{scene.description}</p>
                      <div className="bg-indigo-50 p-2 rounded-md">
                        <p className="text-xs text-indigo-700 italic">{scene.dialogue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'analytics' && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Performance Prediction</h2>
                <p className="text-gray-600">Expected performance analysis based on script content and target platform</p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <CheckCircle size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">82</h3>
                      <p className="text-sm text-gray-500">Overall Quality Score</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Script overall quality above average with strong appeal and clear messaging.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <BarChart size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">76%</h3>
                      <p className="text-sm text-gray-500">Expected Completion Rate</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Video structure and pacing fit TikTok platform characteristics with high completion rate expected.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <Share2 size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">4.2%</h3>
                      <p className="text-sm text-gray-500">Expected Conversion Rate</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Strong problem-solution narrative and emotional appeal expected to drive good conversion results.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-lg shadow">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-md font-medium text-gray-900">Detailed Analysis</h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-medium text-gray-700">Opening Appeal</h4>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900 mr-2">90/100</span>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Opening directly addresses pet owner pain points, effectively capturing target audience attention within 3 seconds.</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-medium text-gray-700">Content Pacing</h4>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900 mr-2">85/100</span>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Moderate scene transition pacing with information density suitable for short video platforms.</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-medium text-gray-700">Product Information Delivery</h4>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900 mr-2">78/100</span>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Core selling points clearly presented, but consider reducing information volume to emphasize key features.</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-medium text-gray-700">Emotional Resonance</h4>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900 mr-2">88/100</span>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Successfully captures pet owners' emotional needs, transformation from stress to liberation is powerful.</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-medium text-gray-700">Call to Action Effectiveness</h4>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900 mr-2">75/100</span>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Clear CTA, but consider adding urgency elements to improve conversion rate.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-md font-medium text-gray-900">Optimization Suggestions</h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="flex">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <Info size={16} className="text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-800">Consider adding a specific obstacle challenge example in Scene 3 to showcase the intelligence of the avoidance system.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <Info size={16} className="text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-800">To maintain TikTok user attention, suggest simplifying Scene 4 to focus on auto-empty convenience demonstration.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <Info size={16} className="text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-800">Add limited-time offer elements to the call to action, such as "Limited Time Offer" or "First 100 orders get extra gifts".</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <Info size={16} className="text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-800">Consider showcasing user community or real user feedback at the end to enhance social proof.</p>
                        </div>
                      </div>
                    </div>
                    
                    <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm">
                      Apply Smart Optimization
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Right sidebar - comments & collaboration */}
      <div className="w-64 bg-white border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Collaboration</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-700">Team Members</h3>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                <PlusCircle size={16} className="mr-1" />
                Add
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium mr-2">
                    LW
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Li Wei</p>
                    <p className="text-xs text-gray-500">Editing</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium mr-2">
                    ZM
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Zhang Min</p>
                    <p className="text-xs text-gray-500">Viewing</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-medium mr-2">
                    WL
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Wang Lei</p>
                    <p className="text-xs text-gray-500">Offline</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-700">Comments</h3>
              <span className="text-xs text-gray-500">5 comments</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex mb-1">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium mr-2">
                    ZM
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">Zhang Min</p>
                      <span className="mx-1 text-gray-400">•</span>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <div className="mt-1 bg-gray-100 p-2 rounded-md">
                      <p className="text-sm text-gray-800">Great opening hook, but I think Scene 4 could be more concise - a bit too much information.</p>
                    </div>
                    <button className="text-xs text-indigo-600 mt-1">Reply</button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex mb-1">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-medium mr-2">
                    WL
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">Wang Lei</p>
                      <span className="mx-1 text-gray-400">•</span>
                      <span className="text-xs text-gray-500">Yesterday</span>
                    </div>
                    <div className="mt-1 bg-gray-100 p-2 rounded-md">
                      <p className="text-sm text-gray-800">Can we add a dog in the pet owner liberation scene? Data shows pet imagery increases engagement rates.</p>
                    </div>
                    <button className="text-xs text-indigo-600 mt-1">Reply</button>
                  </div>
                </div>
                
                <div className="flex mb-1 ml-10 mt-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium mr-2">
                    LW
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">Li Wei</p>
                      <span className="mx-1 text-gray-400">•</span>
                      <span className="text-xs text-gray-500">Yesterday</span>
                    </div>
                    <div className="mt-1 bg-gray-100 p-2 rounded-md">
                      <p className="text-sm text-gray-800">Great idea! I'll add pet elements to Scene 5.</p>
                    </div>
                    <button className="text-xs text-indigo-600 mt-1">Reply</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium mr-2">
                  LW
                </div>
                <div className="flex-1 relative">
                  <textarea 
                    placeholder="Add comment..." 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20 text-sm"
                  ></textarea>
                  <button className="absolute bottom-2 right-2 text-indigo-600 hover:text-indigo-800">
                    <MessageCircle size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptEditor;