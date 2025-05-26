import React from 'react';

interface ContentTestingProps {
  onNavigate: (page: string) => void;
}

const ContentTesting: React.FC<ContentTestingProps> = ({ onNavigate }) => {
  return (
    <div className="content-testing-container p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Content Testing</h1>
        <p className="text-gray-600 mb-6">
          Test different versions of your content to optimize performance.
          Run A/B tests and analyze results to improve engagement.
        </p>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">A/B Testing</h3>
            <p className="text-blue-600 text-sm">Create and manage split tests for your content</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">Performance Comparison</h3>
            <p className="text-yellow-600 text-sm">Compare metrics across different content variants</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">Optimization Insights</h3>
            <p className="text-green-600 text-sm">Get recommendations based on test results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTesting;