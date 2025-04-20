
export type CategoryIcon = 'building' | 'laptop' | 'shopping-cart' | 'plane' | 'shirt' | 'wrench' | 'tag' | 'gift';

export interface DealCategory {
  name: string;
  icon: CategoryIcon;
  slug: string;
  description: string;
  metadata?: {
    popularRetailers?: string[];
    backgroundColor?: string;
    featuredImage?: string;
  };
}

export interface CategoryWithCount extends Omit<DealCategory, 'description' | 'metadata'> {
  id: string;
  count: number;
}

