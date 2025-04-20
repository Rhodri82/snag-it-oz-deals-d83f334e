
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface DealBasicInfoProps {
  title: string;
  retailer: string;
  dealLink: string;
  onFieldChange: (field: string, value: string) => void;
}

const DealBasicInfo = ({ title, retailer, dealLink, onFieldChange }: DealBasicInfoProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="title">What'd you find?</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => onFieldChange('title', e.target.value)}
          placeholder="Enter a descriptive title for the deal"
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="retailer">Where'd you find it?</Label>
          <Input
            id="retailer"
            value={retailer}
            onChange={(e) => onFieldChange('retailer', e.target.value)}
            placeholder="Store name"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dealLink">Deal Link</Label>
        <Input
          id="dealLink"
          type="url"
          value={dealLink}
          onChange={(e) => onFieldChange('dealLink', e.target.value)}
          placeholder="https://example.com/deal"
          required
        />
      </div>
    </>
  );
};

export default DealBasicInfo;
