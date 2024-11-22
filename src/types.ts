export interface Account {
  id: string;
  platform: 'Instagram' | 'Twitter' | 'TikTok' | 'YouTube';
  accountLink: string;
  followersCount: number;
  engagementRate?: number;
  niche: string;
  price: number;
  accountAge: number;
  isVerified: boolean;
  screenshots: string[];
  sellerId: string;
  createdAt: Date;
  status: 'pending' | 'active' | 'sold';
}

export interface Service {
  id: string;
  type: 'VPN' | 'Streaming' | 'Gaming' | 'Social';
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  buyerId: string;
  sellerId: string;
  date: string;
}

export interface Filter {
  platform?: string;
  minFollowers?: number;
  maxFollowers?: number;
  minPrice?: number;
  maxPrice?: number;
  niche?: string;
  serviceType?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  accounts?: Account[];
  reviews?: Review[];
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
}