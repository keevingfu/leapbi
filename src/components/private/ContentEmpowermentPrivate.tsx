import React, { useState } from 'react';
import {
  ShoppingCart,
  Store,
  MessageCircle,
  Mail,
  Linkedin
} from 'lucide-react';

import ShopifyAnalytics from './ShopifyAnalytics';
import OfflineStoresAnalytics from './OfflineStoresAnalytics';
import WhatsAppAnalytics from './WhatsAppAnalytics';
import EDMAnalytics from './EDMAnalytics';
import LinkedInAnalytics from './LinkedInAnalytics';

interface ContentEmpowermentPrivateProps {
  onNavigate: (page: string) => void;
}

const ContentEmpowermentPrivate: React.FC<ContentEmpowermentPrivateProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('shopify');

  const tabs = [
    {
      id: 'shopify',
      label: 'Shopify',
      icon: <ShoppingCart size={16} />,
      component: <ShopifyAnalytics onNavigate={onNavigate} />
    },
    {
      id: 'offline-stores',
      label: 'Offline Stores',
      icon: <Store size={16} />,
      component: <OfflineStoresAnalytics onNavigate={onNavigate} />
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: <MessageCircle size={16} />,
      component: <WhatsAppAnalytics onNavigate={onNavigate} />
    },
    {
      id: 'edm',
      label: 'EDM',
      icon: <Mail size={16} />,
      component: <EDMAnalytics onNavigate={onNavigate} />
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: <Linkedin size={16} />,
      component: <LinkedInAnalytics onNavigate={onNavigate} />
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

export default ContentEmpowermentPrivate;