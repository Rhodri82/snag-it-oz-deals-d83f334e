
import React from 'react';
import VoucherCard from './VoucherCard';
import { type Voucher } from '@/types/vouchers';

interface VoucherListProps {
  vouchers: Voucher[];
}

const VoucherList: React.FC<VoucherListProps> = ({ vouchers }) => {
  if (vouchers.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold mb-2">No vouchers available</h3>
        <p className="text-muted-foreground">Check back soon for new voucher codes</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {vouchers.map((voucher) => (
        <VoucherCard
          key={voucher.id}
          storeLogo={voucher.storeLogo}
          storeName={voucher.storeName}
          code={voucher.code}
          summary={voucher.summary}
          description={voucher.description}
          expiryDate={voucher.expiryDate}
          tags={voucher.tags}
        />
      ))}
    </div>
  );
};

export default VoucherList;
