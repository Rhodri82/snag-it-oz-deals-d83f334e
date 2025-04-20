
export interface Deal {
  id: number;
  title: string;
  price: string;
  retailer: string;
  description: string;
  imageUrl?: string;
  timestamp: string;
  temperature: number;
  votes: {
    yeah: number;
    nah: number;
  };
  commentCount?: number;
  expireDate?: string;
  shipping?: string;
  discount?: string;
  previousPrice?: string;
  featured?: boolean;
  expired?: boolean;
  categories?: string[];
}
