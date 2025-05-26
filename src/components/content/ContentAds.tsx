import React from 'react';

interface ContentAdsProps {
  onNavigate: (page: string) => void;
}

const ContentAds: React.FC<ContentAdsProps> = ({ onNavigate }) => {
  return (
    <div className="content-ads-container p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Advertising Management</h1>
        <p className="text-gray-600 mb-6">
          Create, manage, and optimize your advertising campaigns across multiple platforms.
          Track ad performance and maximize your advertising ROI.
        </p>
        
        <div className="space-y-6">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-800 mb-2">Campaign Creation</h3>
            <p className="text-red-600 text-sm">Design and launch targeted advertising campaigns</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="font-semibold text-orange-800 mb-2">Budget Management</h3>
            <p className="text-orange-600 text-sm">Monitor and optimize advertising spend</p>
          </div>
          
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
            <h3 className="font-semibold text-teal-800 mb-2">Performance Analytics</h3>
            <p className="text-teal-600 text-sm">Track clicks, conversions, and ROI metrics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAds;