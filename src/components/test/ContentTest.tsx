import React, { useState } from 'react';
import {
  Lightbulb,
  Play,
  BarChart3,
  RefreshCw
} from 'lucide-react';

import ContentIdeationPlanning from './ContentIdeationPlanning';
import ContentTestingExecution from './ContentTestingExecution';
import PerformanceAnalysisOptimization from './PerformanceAnalysisOptimization';
import ContentRefinementIteration from './ContentRefinementIteration';

interface ContentTestProps {
  onNavigate: (page: string) => void;
}

const ContentTest: React.FC<ContentTestProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('ideation');

  const tabs = [
    {
      id: 'ideation',
      label: 'Content Ideation & Planning',
      icon: <Lightbulb size={16} />,
      component: <ContentIdeationPlanning onNavigate={onNavigate} />
    },
    {
      id: 'execution',
      label: 'Content Testing Execution',
      icon: <Play size={16} />,
      component: <ContentTestingExecution onNavigate={onNavigate} />
    },
    {
      id: 'analysis',
      label: 'Performance Analysis & Optimization',
      icon: <BarChart3 size={16} />,
      component: <PerformanceAnalysisOptimization onNavigate={onNavigate} />
    },
    {
      id: 'refinement',
      label: 'Content Refinement & Iteration',
      icon: <RefreshCw size={16} />,
      component: <ContentRefinementIteration onNavigate={onNavigate} />
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="h-full bg-gray-50">
      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === tab.id
                  ? 'text-indigo-600 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 h-full">
        {activeTabData?.component}
      </div>
    </div>
  );
};

export default ContentTest;