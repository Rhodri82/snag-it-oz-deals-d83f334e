
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Copy, Check } from "lucide-react";
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
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    
    toast({
      title: "Code copied!",
      description: `${code} has been copied to your clipboard.`,
    });
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md bg-background/80 border border-muted">
      <div className="p-4">
        <div className="flex items-start gap-4">
          {/* Store Logo */}
          <div className="w-16 h-16 flex items-center justify-center rounded-md bg-muted/50">
            <img
              src={storeLogo}
              alt={`${storeName} logo`}
              className="w-12 h-12 object-contain"
            />
          </div>
          
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
                  <Badge key={tag} variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
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
                    variant={isCopied ? "default" : "outline"}
                    size="sm"
                    className="ml-auto h-8 px-2"
                    onClick={handleCopy}
                  >
                    {isCopied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    <span className="sr-only">Copy code</span>
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="secondary"
                  className="flex-1 rounded-full"
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
