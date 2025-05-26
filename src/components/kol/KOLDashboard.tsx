import React, { useState } from 'react';
import { BarChart3, Users, DollarSign } from 'lucide-react';
import KOLOverview from './KOLOverview';
import KOLContentReachAnalysis from './KOLContentReachAnalysis';
import KOLConversionRevenueAnalysis from './KOLConversionRevenueAnalysis';

const KOLDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <BarChart3 size={16} />,
      component: <KOLOverview />
    },
    {
      id: 'content-reach',
      label: 'KOL Content & Reach Analysis',
      icon: <Users size={16} />,
      component: <KOLContentReachAnalysis />
    },
    {
      id: 'conversion-revenue',
      label: 'KOL Conversion & Revenue Analysis',
      icon: <DollarSign size={16} />,
      component: <KOLConversionRevenueAnalysis />
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

export default KOLDashboard;