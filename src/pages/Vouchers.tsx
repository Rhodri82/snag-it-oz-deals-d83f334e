
import React from 'react';
import Header from '@/components/Header';
import { PageHeader } from '@/components/layout/PageHeader';
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
  },
  {
    storeLogo: "/placeholder.svg",
    storeName: "Dan Murphy's",
    code: "WINE10",
    summary: "$10 off wines over $50",
    description: "Get $10 off when you spend $50 or more on any wine.",
    expiryDate: "15 May 2025",
    tags: ["Alcohol", "Wine"]
  },
  {
    storeLogo: "/placeholder.svg",
    storeName: "JB Hi-Fi",
    code: "TECH100",
    summary: "$100 off TVs over $1000",
    description: "Save $100 on any TV priced $1000 or more. In-store and online.",
    expiryDate: "1 June 2025",
    tags: ["Electronics", "TV", "Big Purchase"]
  }
];

const Vouchers = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px] pb-20 md:pb-6">
        <PageHeader 
          title="Latest Vouchers & Promo Codes"
          subtitle="Save with exclusive voucher codes and special offers from top Australian retailers"
        />
        <div className="container mx-auto px-4 py-6 max-w-3xl">
          <VoucherList vouchers={SAMPLE_VOUCHERS} />
        </div>
      </main>
    </div>
  );
};

export default Vouchers;

