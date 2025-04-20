
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
  helperText?: string;
}

const PriceInput = ({
  id,
  label,
  value,
  onChange,
  required,
  className,
  helperText,
}: PriceInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, '');
    onChange(raw);
  };

  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1 block">{label}</Label>
      <div className="relative">
        <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          id={id}
          type="number"
          step="0.01"
          value={value}
          onChange={handleChange}
          required={required}
          className="pl-10"
          placeholder="0.00"
        />
      </div>
      {helperText && (
        <p className="text-xs text-muted-foreground mt-1">{helperText}</p>
      )}
    </div>
  );
};

export default PriceInput;
