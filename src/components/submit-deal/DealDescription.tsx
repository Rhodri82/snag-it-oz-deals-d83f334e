
import React from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface DealDescriptionProps {
  description: string;
  onChange: (value: string) => void;
}

const DealDescription = ({ description, onChange }: DealDescriptionProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="description">Why's it a ripper?</Label>
      <Textarea
        id="description"
        value={description}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tell us what makes this deal special..."
        rows={5}
        required
      />
    </div>
  );
};

export default DealDescription;
