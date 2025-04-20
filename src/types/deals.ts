
export interface Deal {
  id: number;
  title: string;
  description: string;
  price: string;
  previousPrice?: string; // original_price
  retailer: string; // store
  imageUrl?: string;
  postedBy: string;
  timestamp: string; // posted_at
  categories: string[]; // tags + category
  temperature: number;
  votes: {
    yeah: number;
    nah: number;
  };
  commentCount: number;
  shipping?: string;
  discount?: string;
  featured?: boolean;
  expired?: boolean;
  dealUrl?: string;
  location?: string;
}

