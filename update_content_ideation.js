const fs = require('fs');

// Read the current file
const filePath = './src/components/test/ContentIdeationPlanning.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the Trend Growth Chart section
const oldChart = `            {/* Trend Growth Chart */}
            <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4">Topic Growth Trends (Last 30 Days)</h4>
              <div className="relative h-40">
                <div className="absolute inset-0 flex items-end justify-between">
                  {[25, 32, 28, 38, 35, 42, 45].map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-xs mb-1 font-semibold text-blue-600">+{value}%</div>
                      <div 
                        className="w-8 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                        style={{ height: \`\${(value / 45) * 100}%\` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-2">
                        {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'][index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>`;

const newChart = `            {/* Trend Growth Chart - Enhanced Bar Chart */}
            <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                Topic Growth Trends (Last 30 Days)
              </h4>
              <div className="relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-10 w-12 flex flex-col justify-between text-xs text-gray-600">
                  <span>50%</span>
                  <span>40%</span>
                  <span>30%</span>
                  <span>20%</span>
                  <span>10%</span>
                  <span>0%</span>
                </div>
                
                {/* Chart container */}
                <div className="ml-14">
                  <div className="relative h-64">
                    {/* Grid lines */}
                    <div className="absolute inset-0">
                      {[0, 20, 40, 60, 80, 100].map((percentage) => (
                        <div
                          key={percentage}
                          className="absolute w-full border-t border-gray-200"
                          style={{ bottom: \`\${percentage}%\` }}
                        />
                      ))}
                    </div>
                    
                    {/* Bars */}
                    <div className="absolute inset-0 flex items-end justify-between px-4">
                      {[
                        { value: 25, topic: "Unboxing", color: "from-blue-500 to-blue-400" },
                        { value: 32, topic: "Pet Content", color: "from-green-500 to-green-400" },
                        { value: 28, topic: "Tech Review", color: "from-purple-500 to-purple-400" },
                        { value: 38, topic: "Before/After", color: "from-pink-500 to-pink-400" },
                        { value: 35, topic: "Challenge", color: "from-orange-500 to-orange-400" },
                        { value: 42, topic: "Lifestyle", color: "from-indigo-500 to-indigo-400" },
                        { value: 45, topic: "Smart Home", color: "from-red-500 to-red-400" }
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center flex-1 mx-1 group">
                          {/* Value label on hover */}
                          <div className="relative w-full flex justify-center mb-2">
                            <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                              +{item.value}% growth
                            </div>
                          </div>
                          
                          {/* Bar */}
                          <div className="w-full relative">
                            <div 
                              className={\`w-full bg-gradient-to-t \${item.color} rounded-t-lg hover:opacity-90 transition-all duration-300 relative overflow-hidden\`}
                              style={{ height: \`\${(item.value / 50) * 256}px\` }}
                            >
                              {/* Bar value */}
                              <div className="absolute top-2 left-0 right-0 text-center text-white font-semibold text-sm">
                                +{item.value}%
                              </div>
                              
                              {/* Animated shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                          </div>
                          
                          {/* X-axis label */}
                          <div className="mt-2 text-xs text-gray-700 font-medium text-center transform group-hover:scale-110 transition-transform">
                            {item.topic}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* X-axis line */}
                  <div className="border-t-2 border-gray-300 mt-2"></div>
                </div>
              </div>
              
              {/* Chart legend */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-400 rounded"></div>
                  <span className="text-gray-600">High Growth (&gt;30%)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-400 rounded"></div>
                  <span className="text-gray-600">Moderate Growth (20-30%)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-300 rounded"></div>
                  <span className="text-gray-600">Low Growth (&lt;20%)</span>
                </div>
              </div>
            </div>`;

// Replace the content
content = content.replace(oldChart, newChart);

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated ContentIdeationPlanning.tsx with enhanced bar chart!');