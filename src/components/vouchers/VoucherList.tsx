
import React from 'react';
import VoucherCard from './VoucherCard';
import { type Voucher } from '@/types/vouchers';

interface VoucherListProps {
  vouchers: Voucher[];
}

const VoucherList = ({ vouchers }: VoucherListProps) => {
  return (
    <div className="space-y-4">
      {vouchers.map((voucher) => (
        <VoucherCard
          key={voucher.code}
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
