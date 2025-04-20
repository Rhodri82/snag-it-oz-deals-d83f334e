
import React from 'react';
import Header from '@/components/Header';
import VoucherList from '@/components/vouchers/VoucherList';
import { type Voucher } from '@/types/vouchers';

// Sample voucher data - would come from backend in real app
const SAMPLE_VOUCHERS: Voucher[] = [
  {
    storeLogo: "/placeholder.svg",
    storeName: "Woolworths",
    code: "SAVE20",
    summary: "20% off your first online shop",
    description: "Save 20% on your first online grocery shop at Woolworths. Minimum spend $100.",
    expiryDate: "30 May 2025",
    tags: ["Groceries", "Online Only", "New Customers"]
  },
  {
    storeLogo: "/placeholder.svg",
    storeName: "Coles",
    code: "FRESH15",
    summary: "$15 off fresh produce",
    description: "Get $15 off when you spend $100 or more on fresh produce.",
    expiryDate: "1 June 2025",
    tags: ["Fresh Food", "Minimum Spend"]
  }
];

const Vouchers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[73px] pb-20 md:pb-6">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-6">Latest Vouchers & Promo Codes</h1>
          <VoucherList vouchers={SAMPLE_VOUCHERS} />
        </div>
      </main>
    </div>
  );
};

export default Vouchers;
