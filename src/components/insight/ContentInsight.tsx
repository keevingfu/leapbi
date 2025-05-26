import React, { useState } from 'react';
import {
  MessageCircle,
  CheckCircle,
  Zap,
  TrendingUp
} from 'lucide-react';

// Import remaining 4 analytics components
import ConsumerVoiceAnalysis from './ConsumerVoiceAnalysis';
import SearchInsights from './SearchInsights';
import ViralFactorAnalysis from './ViralFactorAnalysis';
import ViralVideoInsights from './ViralVideoInsights';

interface ContentInsightProps {
  onNavigate: (page: string) => void;
}

const ContentInsight: React.FC<ContentInsightProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('consumer-voice-analysis');

  const tabs = [
    {
      id: 'consumer-voice-analysis',
      label: 'ConsumerVoiceAnalysis',
      icon: <MessageCircle size={16} />,
      component: <ConsumerVoiceAnalysis onNavigate={onNavigate} />
    },
    {
      id: 'search-insights',
      label: 'SearchInsights',
      icon: <CheckCircle size={16} />,
      component: <SearchInsights onNavigate={onNavigate} />
    },
    {
      id: 'viral-factor-analysis',
      label: 'ViralFactorAnalysis',
      icon: <Zap size={16} />,
      component: <ViralFactorAnalysis onNavigate={onNavigate} />
    },
    {
      id: 'viral-video-insights',
      label: 'ViralVideoInsights',
      icon: <TrendingUp size={16} />,
      component: <ViralVideoInsights onNavigate={onNavigate} />
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="min-h-full bg-gray-50">
      {/* Tabs - Now only 4 tabs, no need for horizontal scroll */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-indigo-600 border-indigo-600 bg-indigo-50'
                  : 'text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300 hover:bg-gray-50'
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
      <div className="w-full">
        {activeTabData?.component}
      </div>
    </div>
  );
};

export default ContentInsight;