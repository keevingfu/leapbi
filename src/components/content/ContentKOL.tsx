import React from 'react';

interface ContentKOLProps {
  onNavigate: (page: string) => void;
}

const ContentKOL: React.FC<ContentKOLProps> = ({ onNavigate }) => {
  return (
    <div className="content-kol-container p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">KOL Management</h1>
        <p className="text-gray-600 mb-6">
          Manage your Key Opinion Leader (KOL) partnerships and collaborations.
          Track influencer campaigns and measure their impact.
        </p>
        
        <div className="space-y-6">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-800 mb-2">Influencer Directory</h3>
            <p className="text-purple-600 text-sm">Browse and connect with relevant influencers</p>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <h3 className="font-semibold text-pink-800 mb-2">Campaign Management</h3>
            <p className="text-pink-600 text-sm">Create and monitor influencer campaigns</p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <h3 className="font-semibold text-indigo-800 mb-2">Performance Tracking</h3>
            <p className="text-indigo-600 text-sm">Measure ROI and engagement from KOL partnerships</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentKOL;