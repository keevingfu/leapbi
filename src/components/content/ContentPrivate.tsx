import React from 'react';

interface ContentPrivateProps {
  onNavigate: (page: string) => void;
}

const ContentPrivate: React.FC<ContentPrivateProps> = ({ onNavigate }) => {
  return (
    <div className="content-private-container p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Private Content</h1>
        <p className="text-gray-600 mb-6">
          Manage your private and exclusive content. Control access permissions
          and create premium content for your audience.
        </p>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
            <h3 className="font-semibold text-gray-800 mb-2">Access Control</h3>
            <p className="text-gray-600 text-sm">Set permissions and manage who can view your private content</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Premium Content</h3>
            <p className="text-blue-600 text-sm">Create exclusive content for subscribers and premium members</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">Content Library</h3>
            <p className="text-green-600 text-sm">Organize and manage your private content collection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPrivate;