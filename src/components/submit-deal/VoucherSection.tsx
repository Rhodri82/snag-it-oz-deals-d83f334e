
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface VoucherSectionProps {
  voucherCode: string;
  voucherExpiry: string;
  showVoucherSection: boolean;
  onVoucherChange: (field: string, value: string) => void;
  onToggleVoucher: (show: boolean) => void;
}

const VoucherSection = ({
  voucherCode,
  voucherExpiry,
  showVoucherSection,
  onVoucherChange,
  onToggleVoucher,
}: VoucherSectionProps) => {
  return (
    <Collapsible open={showVoucherSection} onOpenChange={onToggleVoucher}>
      <CollapsibleTrigger asChild>
        <Button type="button" variant="outline" className="w-full">
          {showVoucherSection ? "Hide Voucher Details" : "Add Voucher Code"}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4 pt-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="voucherCode">Voucher Code</Label>
            <Input
              id="voucherCode"
              value={voucherCode}
              onChange={(e) => onVoucherChange('voucherCode', e.target.value)}
              placeholder="Enter code"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="voucherExpiry">Expiry Date</Label>
            <Input
              id="voucherExpiry"
              type="date"
              value={voucherExpiry}
              onChange={(e) => onVoucherChange('voucherExpiry', e.target.value)}
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default VoucherSection;
