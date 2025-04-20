
import React from 'react';
import Header from '@/components/Header';
import { PageHeader } from '@/components/layout/PageHeader';
import VoucherList from '@/components/vouchers/VoucherList';
import { type Voucher } from '@/types/vouchers';

// Sample voucher data - structured for Firebase integration
const SAMPLE_VOUCHERS: Voucher[] = [
  {
    id: 1,
    storeLogo: "/placeholder.svg",
    storeName: "Woolworths",
    code: "SAVE20",
    summary: "20% off your first online shop",
    description: "Save 20% on your first online grocery shop at Woolworths. Minimum spend $100.",
    postedBy: "DealHunter",
    timestamp: "2 hours ago",
    expiryDate: "30 May 2025",
    tags: ["Groceries", "Online Only", "New Customers"],
    usageCount: 156
  },
  {
    id: 2,
    storeLogo: "/placeholder.svg",
    storeName: "Coles",
    code: "FRESH15",
    summary: "$15 off fresh produce",
    description: "Get $15 off when you spend $100 or more on fresh produce.",
    postedBy: "BargainPro",
    timestamp: "1 day ago",
    expiryDate: "1 June 2025",
    tags: ["Fresh Food", "Minimum Spend"],
    usageCount: 89
  },
  {
    id: 3,
    storeLogo: "/placeholder.svg",
    storeName: "Dan Murphy's",
    code: "WINE10",
    summary: "$10 off wines over $50",
    description: "Get $10 off when you spend $50 or more on any wine.",
    postedBy: "WineLover",
    timestamp: "3 days ago",
    expiryDate: "15 May 2025",
    tags: ["Alcohol", "Wine"],
    usageCount: 234
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
        <div className="container mx-auto py-6">
          <VoucherList vouchers={SAMPLE_VOUCHERS} />
        </div>
      </main>
    </div>
  );
};

export default Vouchers;
