import { Instagram, Twitter, Youtube, Video, CheckCircle } from 'lucide-react';
import type { Account } from '../types';

const platformIcons = {
  Instagram: Instagram,
  Twitter: Twitter,
  YouTube: Youtube,
  TikTok: Video,
};

interface AccountCardProps {
  account: Account;
  onClick: () => void;
}

export function AccountCard({ account, onClick }: AccountCardProps) {
  const Icon = platformIcons[account.platform];
  const formattedFollowers = new Intl.NumberFormat('en', { 
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(account.followersCount);

  return (
    <div 
      onClick={onClick}
      className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all cursor-pointer border border-gray-700 hover:border-purple-500"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-purple-400" />
          <span className="text-lg font-semibold text-white">{account.platform}</span>
          {account.verified && (
            <CheckCircle className="w-5 h-5 text-green-400" />
          )}
        </div>
        <span className="text-2xl font-bold text-white">
          ${account.price.toLocaleString()}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-gray-300">
          <span>Followers:</span>
          <span className="font-semibold">{formattedFollowers}</span>
        </div>
        {account.engagementRate && (
          <div className="flex justify-between text-gray-300">
            <span>Engagement:</span>
            <span className="font-semibold">{account.engagementRate}%</span>
          </div>
        )}
        <div className="flex justify-between text-gray-300">
          <span>Niche:</span>
          <span className="font-semibold">{account.niche}</span>
        </div>
      </div>
    </div>
  );
}