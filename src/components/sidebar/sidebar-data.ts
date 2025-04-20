
import { DealCategory, CategoryWithCount } from '@/types/categories';

export const AUSTRALIAN_DEAL_CATEGORIES: DealCategory[] = [
  {
    name: 'Bunnings Deals',
    icon: 'building',
    slug: 'bunnings',
    description: 'Snags, tools, and weekend project specials',
    metadata: {
      popularRetailers: ['Bunnings Warehouse'],
      backgroundColor: 'bg-green-100'
    }
  },
  {
    name: 'Tech & Gadgets',
    icon: 'laptop',
    slug: 'tech',
    description: 'JB Hi-Fi, Harvey Norman deals',
    metadata: {
      popularRetailers: ['JB Hi-Fi', 'Harvey Norman', 'The Good Guys'],
      backgroundColor: 'bg-blue-100'
    }
  },
  {
    name: 'Supermarket Specials',
    icon: 'shopping-cart',
    slug: 'groceries',
    description: 'Coles, Woolworths, ALDI bargains',
    metadata: {
      popularRetailers: ['Coles', 'Woolworths', 'ALDI'],
      backgroundColor: 'bg-yellow-100'
    }
  },
  {
    name: 'Travel & Flights',
    icon: 'plane',
    slug: 'travel',
    description: 'Qantas, Virgin, cheap getaway deals',
    metadata: {
      popularRetailers: ['Qantas', 'Virgin Australia', 'Jetstar'],
      backgroundColor: 'bg-sky-100'
    }
  },
  {
    name: 'Fashion & Clothing',
    icon: 'shirt',
    slug: 'fashion',
    description: 'DFO, online fashion sales',
    metadata: {
      popularRetailers: ['The Iconic', 'Cotton On', 'DFO'],
      backgroundColor: 'bg-purple-100'
    }
  },
  {
    name: 'Tradies Corner',
    icon: 'wrench',
    slug: 'trade',
    description: 'Tools, work gear, and equipment',
    metadata: {
      popularRetailers: ['Total Tools', 'Sydney Tools', 'Blackwoods'],
      backgroundColor: 'bg-orange-100'
    }
  }
];

export const mainCategories: CategoryWithCount[] = AUSTRALIAN_DEAL_CATEGORIES.map(category => ({
  id: category.slug,
  name: category.name,
  icon: category.icon,
  slug: category.slug,
  count: Math.floor(Math.random() * 100) // Random count for demonstration
}));

// Helper functions
export const getCategoryBySlug = (slug: string): DealCategory | undefined => 
  AUSTRALIAN_DEAL_CATEGORIES.find(category => category.slug === slug);

export const getPopularRetailers = (slug: string): string[] => 
  getCategoryBySlug(slug)?.metadata?.popularRetailers || [];

