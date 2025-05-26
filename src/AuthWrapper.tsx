import React, { useState, useEffect } from 'react';
import LoginPage from './components/login/LoginPage';
import App from './App';

interface User {
  id: string;
  email: string;
  fullName: string;
  role: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

const AuthWrapper: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for stored authentication on component mount
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const storedUser = localStorage.getItem('leapai_user');
        const authToken = localStorage.getItem('leapai_auth_token');
        
        if (storedUser && authToken) {
          const userData = JSON.parse(storedUser);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        // Clear invalid stored data
        localStorage.removeItem('leapai_user');
        localStorage.removeItem('leapai_auth_token');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true);
      
      // Simulate API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock user data - replace with actual API response
      const userData: User = {
        id: '1',
        email: credentials.email,
        fullName: getDisplayName(credentials.email),
        role: 'admin'
      };
      
      // Mock auth token - replace with actual token from API
      const authToken = 'mock-jwt-token-' + Date.now();
      
      // Store authentication data
      localStorage.setItem('leapai_user', JSON.stringify(userData));
      localStorage.setItem('leapai_auth_token', authToken);
      
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('leapai_user');
    localStorage.removeItem('leapai_auth_token');
    setUser(null);
  };

  const getDisplayName = (email: string): string => {
    // Extract name from email for display purposes
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <div className="w-7 h-7 bg-white rounded"></div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">LeapAI</h1>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login page if user is not authenticated
  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Show main application if user is authenticated
  return (
    <div className="min-h-screen bg-gray-50">
      {/* User Context Provider - you can expand this to provide user data to child components */}
      <UserContext.Provider value={{ user, logout: handleLogout }}>
        <App />
      </UserContext.Provider>
    </div>
  );
};

// Create React Context for user data
export const UserContext = React.createContext<{
  user: User | null;
  logout: () => void;
}>({
  user: null,
  logout: () => {}
});

// Custom hook to use user context
export const useAuth = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthWrapper');
  }
  return context;
};

export default AuthWrapper;