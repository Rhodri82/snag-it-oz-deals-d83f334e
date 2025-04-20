
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign } from 'lucide-react';

interface PriceInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

const PriceInput = ({ id, label, value, onChange, required, className }: PriceInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    onChange(value);
  };

  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        <Input
          id={id}
          type="text"
          value={value}
          onChange={handleChange}
          required={required}
          className="pl-10"
          placeholder="0.00"
        />
      </div>
    </div>
  );
};

export default PriceInput;
