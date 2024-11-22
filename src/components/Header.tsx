import { useState } from 'react';
import { ShoppingBag, Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { AuthModal } from './AuthModal';

export function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <>
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold text-white">GiGsFlix Marketplace</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-300 hover:text-white">Accounts</a>
              <a href="#" className="text-gray-300 hover:text-white">VPN Services</a>
              <a href="#" className="text-gray-300 hover:text-white">Streaming</a>
              <a href="#" className="text-gray-300 hover:text-white">Gaming</a>
              <a href="#" className="text-gray-300 hover:text-white">Sell</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-white">
                <Bell className="w-6 h-6" />
              </button>
              
              {user ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {user.name[0]}
                        </span>
                      </div>
                    )}
                    <span className="text-white">{user.name}</span>
                  </div>
                  <button
                    onClick={signOut}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
                >
                  <User className="w-5 h-5" />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}