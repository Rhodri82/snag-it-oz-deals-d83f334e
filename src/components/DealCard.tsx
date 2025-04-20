
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        {imageUrl && (
          <div className="relative h-48 bg-muted">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="text-xs">
                {retailer}
              </Badge>
            </div>
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-primary">{price}</span>
            {!imageUrl && (
              <span className="text-sm text-muted-foreground">{retailer}</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <Button className="w-full mb-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <ExternalLink className="w-4 h-4 mr-2" /> Snag it!
          </Button>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            Yeah ({votes.yeah})
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <TrendingDown className="w-4 h-4" />
            Nah ({votes.nah})
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">{timestamp}</div>
      </CardFooter>
    </Card>
  );
};

export default DealCard;
