import React from 'react';
import { 
  BarChart3, 
  Eye, 
  Beaker, 
  Users, 
  Megaphone, 
  Lock, 
  Palette, 
  FileText, 
  Settings,
  ChevronRight,
  Home
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Overview', icon: Home },
    { id: 'content-insight', name: 'Content Insight', icon: Eye },
    { id: 'content-testing', name: 'Content Testing', icon: Beaker },
    { id: 'content-kol', name: 'Content for KOL', icon: Users },
    { id: 'content-ads', name: 'Content for Ads', icon: Megaphone },
    { id: 'content-private', name: 'Content for Private', icon: Lock },
    { id: 'creative-workspace', name: 'CreativeWorkspace', icon: Palette },
    { id: 'script-editor', name: 'ScriptEditor', icon: FileText },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">LeapAI</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {isActive && (
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          LeapAI Content Platform
        </div>
      </div>
    </div>
  );
};

export default Sidebar;