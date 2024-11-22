import React, { useState } from 'react';
import { Upload, Plus, Trash2 } from 'lucide-react';
import type { Account } from '../types';

const PLATFORMS = ['Instagram', 'Twitter', 'TikTok', 'YouTube'] as const;

export function Dashboard() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [newAccount, setNewAccount] = useState({
    platform: 'Instagram',
    accountLink: '',
    followersCount: '',
    engagementRate: '',
    niche: '',
    price: '',
    accountAge: '',
    isVerified: false,
    screenshots: [] as File[],
  });

  const handleScreenshotUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setNewAccount(prev => ({
      ...prev,
      screenshots: [...prev.screenshots, ...files],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Add Social Media Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Platform
              </label>
              <select
                value={newAccount.platform}
                onChange={(e) => setNewAccount(prev => ({ ...prev, platform: e.target.value }))}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              >
                {PLATFORMS.map(platform => (
                  <option key={platform} value={platform}>{platform}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Account Link
              </label>
              <input
                type="url"
                value={newAccount.accountLink}
                onChange={(e) => setNewAccount(prev => ({ ...prev, accountLink: e.target.value }))}
                placeholder="https://..."
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Followers Count
              </label>
              <input
                type="number"
                value={newAccount.followersCount}
                onChange={(e) => setNewAccount(prev => ({ ...prev, followersCount: e.target.value }))}
                placeholder="e.g., 10000"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Price (₦)
              </label>
              <input
                type="number"
                value={newAccount.price}
                onChange={(e) => setNewAccount(prev => ({ ...prev, price: e.target.value }))}
                placeholder="e.g., 50000"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Engagement Rate (%)
              </label>
              <input
                type="number"
                step="0.01"
                value={newAccount.engagementRate}
                onChange={(e) => setNewAccount(prev => ({ ...prev, engagementRate: e.target.value }))}
                placeholder="e.g., 3.5"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Account Age (years)
              </label>
              <input
                type="number"
                step="0.1"
                value={newAccount.accountAge}
                onChange={(e) => setNewAccount(prev => ({ ...prev, accountAge: e.target.value }))}
                placeholder="e.g., 2.5"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Niche/Category
              </label>
              <input
                type="text"
                value={newAccount.niche}
                onChange={(e) => setNewAccount(prev => ({ ...prev, niche: e.target.value }))}
                placeholder="e.g., Fashion, Tech, Gaming"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newAccount.isVerified}
                  onChange={(e) => setNewAccount(prev => ({ ...prev, isVerified: e.target.checked }))}
                  className="w-5 h-5 rounded border-gray-600 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-gray-300">Account is Verified</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Account Screenshots
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {newAccount.screenshots.map((file, index) => (
                <div key={index} className="relative bg-gray-700 rounded-lg p-2">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-32 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setNewAccount(prev => ({
                        ...prev,
                        screenshots: prev.screenshots.filter((_, i) => i !== index)
                      }));
                    }}
                    className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-600 rounded-lg hover:border-primary-500 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleScreenshotUpload}
                  className="hidden"
                />
                <Upload className="w-8 h-8 text-gray-400" />
                <span className="mt-2 text-sm text-gray-400">Upload Screenshots</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
            >
              <Plus className="w-5 h-5" />
              <span>Add Account</span>
            </button>
          </div>
        </form>
      </div>

      {accounts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-4">Your Listed Accounts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Account cards will be rendered here */}
          </div>
        </div>
      )}
    </div>
  );
}