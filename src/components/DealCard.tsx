
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, ExternalLink, MessageSquare, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DealCardProps {
  title: string;
  price: string;
  retailer: string;
  description: string;
  imageUrl?: string;
  timestamp: string;
  temperature: number;
  votes: { yeah: number; nah: number };
}

const DealCard = ({
  title,
  price,
  retailer,
  description,
  imageUrl,
  timestamp,
  temperature,
  votes,
}: DealCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow mb-4 border-t-4 border-t-primary">
      <CardContent className="p-0">
        <div className="p-3">
          <div className="flex items-center space-x-1 mb-2">
            <Badge variant="outline" className="text-xs px-1 py-0 h-5 bg-background">
              {retailer}
            </Badge>
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
          
          <div className="flex gap-3">
            {imageUrl && (
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-muted flex-shrink-0">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <h2 className="text-sm lg:text-base font-medium line-clamp-2 mb-1">{title}</h2>
              <div className="text-lg lg:text-xl font-bold text-secondary">{price}</div>
              <p className="hidden lg:block text-sm text-muted-foreground mt-2 line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-0 flex flex-col">
        <div className="flex items-center w-full border-t border-b border-muted">
          <div className="flex-1 flex items-center py-2 px-3">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="h-7 px-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="text-xs">{votes.yeah}</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-7 px-1">
                <TrendingDown className="w-4 h-4 mr-1" />
                <span className="text-xs">{votes.nah}</span>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-1 py-2 px-3">
            <Button variant="ghost" size="sm" className="h-7 px-2">
              <MessageSquare className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 px-2">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full h-7" size="sm">
              <ExternalLink className="w-4 h-4 mr-1" />
              <span className="text-xs">Get deal</span>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DealCard;
