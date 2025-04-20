
export interface User {
  id: string;
  username: string;
  avatar?: string;
  reputation: number;
  createdAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
  likes: number;
}

export interface Deal {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  retailer: string;
  description: string;
  imageUrl?: string;
  link: string;
  category: string;
  subcategory?: string;
  temperature: number;
  votes: {
    yeah: number;
    nah: number;
  };
  comments: Comment[];
  author: User;
  createdAt: Date;
  expiresAt?: Date;
  isExpired: boolean;
  isHot: boolean;
  location?: string;
  shippingCost?: string;
  dealCode?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: any; // Lucide icon component
  count: number;
  subcategories?: {
    id: string;
    name: string;
    count: number;
  }[];
}

export type SortOption = "newest" | "hottest" | "expiring" | "price-low-high" | "price-high-low";

export type FilterOptions = {
  categories: string[];
  localOnly: boolean;
  onlineOnly: boolean;
  priceRange: [number, number];
  includeExpired: boolean;
};
