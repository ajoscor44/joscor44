import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      {user ? (
        <Dashboard />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-white">
            Please sign in to access your dashboard
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;