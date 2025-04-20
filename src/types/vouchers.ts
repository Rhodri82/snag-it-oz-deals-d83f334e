
export interface Voucher {
  storeLogo: string;
  storeName: string;
  code: string;
  summary: string;
  description: string;
  expiryDate: string;
  tags?: string[];
}
