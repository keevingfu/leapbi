import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import OverviewCenter from './components/overview/OverviewCenter';
import ContentInsight from './components/insight/ContentInsight';
import ContentTest from './components/test/ContentTest';
import KOLDashboard from './components/kol/KOLDashboard';
import ContentEmpowermentAds from './components/ads/ContentEmpowermentAds';
import ContentEmpowermentPrivate from './components/private/ContentEmpowermentPrivate';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <OverviewCenter onNavigate={setCurrentPage} />;
      case 'content-insight':
        return <ContentInsight onNavigate={setCurrentPage} />;
      case 'content-testing':
        return <ContentTest onNavigate={setCurrentPage} />;
      case 'content-kol':
        return <KOLDashboard />;
      case 'content-ads':
        return <ContentEmpowermentAds onNavigate={setCurrentPage} />;
      case 'content-private':
        return <ContentEmpowermentPrivate onNavigate={setCurrentPage} />;
      default:
        return <OverviewCenter onNavigate={setCurrentPage} />;
    }
  };

  return (
    <MainLayout 
      currentPage={currentPage} 
      onNavigate={setCurrentPage}
    >
      {renderPage()}
    </MainLayout>
  );
};

export default App;