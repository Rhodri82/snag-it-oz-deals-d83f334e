
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface VoucherCardProps {
  storeLogo: string;
  storeName: string;
  code: string;
  summary: string;
  description: string;
  expiryDate: string;
  tags?: string[];
}

const VoucherCard = ({
  storeLogo,
  storeName,
  code,
  summary,
  description,
  expiryDate,
  tags = [],
}: VoucherCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: `${code} has been copied to your clipboard.`,
    });
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="p-4">
        <div className="flex items-start gap-4">
          {/* Store Logo */}
          <img
            src={storeLogo}
            alt={`${storeName} logo`}
            className="w-16 h-16 object-contain rounded-md"
          />
          
          <div className="flex-1">
            {/* Store Name & Summary */}
            <h3 className="font-semibold text-lg">{storeName}</h3>
            <p className="text-muted-foreground mb-2">{summary}</p>
            
            {/* Description (hidden on mobile) */}
            <p className="hidden md:block text-sm text-muted-foreground mb-3">
              {description}
            </p>

            {/* Tags (hidden on mobile) */}
            {tags.length > 0 && (
              <div className="hidden md:flex flex-wrap gap-1 mb-3">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Expiry Date */}
            <div className="flex items-center text-xs text-muted-foreground mb-3">
              <Calendar className="w-3 h-3 mr-1" />
              <span>Expires: {expiryDate}</span>
            </div>

            {/* Code Section */}
            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
              {isRevealed ? (
                <div className="flex-1 flex items-center gap-2 p-2 bg-muted rounded-md">
                  <code className="text-sm font-mono">{code}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto h-8 px-2"
                    onClick={handleCopy}
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy code</span>
                  </Button>
                </div>
              ) : (
                <Button 
                  className="flex-1"
                  onClick={() => setIsRevealed(true)}
                >
                  Reveal Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VoucherCard;
