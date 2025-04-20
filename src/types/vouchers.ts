
export interface Voucher {
  id: number;
  storeLogo: string;
  storeName: string;
  code: string;
  summary: string;
  description: string;
  postedBy: string;
  timestamp: string;
  expiryDate: string;
  tags: string[];
  usageCount?: number;
}

