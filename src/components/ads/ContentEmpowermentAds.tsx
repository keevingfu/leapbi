import React, { useState } from 'react';
import {
  Target,
  BarChart3,
  Users,
  Zap
} from 'lucide-react';

import AdDistributionStrategy from './AdDistributionStrategy';
import ContentPerformanceConversion from './ContentPerformanceConversion';
import AudienceInsightsBehavior from './AudienceInsightsBehavior';
import ContentDrivenOptimization from './ContentDrivenOptimization';

interface ContentEmpowermentAdsProps {
  onNavigate: (page: string) => void;
}

const ContentEmpowermentAds: React.FC<ContentEmpowermentAdsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('distribution');

  const tabs = [
    {
      id: 'distribution',
      label: 'Ad Distribution Strategy',
      icon: <Target size={16} />,
      component: <AdDistributionStrategy onNavigate={onNavigate} />
    },
    {
      id: 'performance',
      label: 'Content Performance & Conversion',
      icon: <BarChart3 size={16} />,
      component: <ContentPerformanceConversion onNavigate={onNavigate} />
    },
    {
      id: 'audience',
      label: 'Audience Insights & Behavior',
      icon: <Users size={16} />,
      component: <AudienceInsightsBehavior onNavigate={onNavigate} />
    },
    {
      id: 'optimization',
      label: 'Content-Driven Optimization',
      icon: <Zap size={16} />,
      component: <ContentDrivenOptimization onNavigate={onNavigate} />
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

export default ContentEmpowermentAds;