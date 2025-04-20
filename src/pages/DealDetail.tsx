
import React from 'react';
import { useParams, Link } from "react-router-dom";
import Header from '../components/Header';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DealImage } from '@/components/deals/DealImage';
import { DealVoting } from '@/components/deals/DealVoting';
import { DealCategories } from '@/components/deals/DealCategories';
import { PriceDisplay } from '@/components/deals/PriceDisplay';
import { SAMPLE_DEALS } from '@/data/sample-deals';
import { useDealInteractions } from '@/hooks/useDealInteractions';
import { ArrowLeft, Clock, User, MapPin, ExternalLink, MessageSquare } from 'lucide-react';

const DealDetail = () => {
  const { id } = useParams<{ id: string }>();
  const deal = SAMPLE_DEALS.find(deal => deal.id === Number(id));
  
  if (!deal) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 pt-[73px]">
          <div className="flex flex-col items-center justify-center py-12">
            <h1 className="text-2xl font-bold mb-4">Deal Not Found</h1>
            <p className="text-muted-foreground mb-6">The deal you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Deals
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }
  
  const { saved, userVote, handleVote, handleSave } = useDealInteractions(deal.temperature, !!deal.featured, !!deal.expired);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-[73px] max-w-[800px]">
        <div className="mb-4">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/" className="flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Back to Deals
            </Link>
          </Button>
        </div>
        
        <Card className="overflow-hidden">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline" className="px-2 py-0.5 bg-background">
                {deal.retailer}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                <span>{deal.timestamp}</span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl font-bold mb-4">{deal.title}</h1>
            
            {/* Image (responsive) */}
            <div className="mb-6 max-w-md mx-auto">
              <DealImage imageUrl={deal.imageUrl} title={deal.title} discount={deal.discount} />
            </div>
            
            {/* Price and CTA */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <PriceDisplay 
                  price={deal.price}
                  previousPrice={deal.previousPrice}
                  shipping={deal.shipping}
                  size="large"
                />
              </div>
              <Button 
                size="lg" 
                className="rounded-full"
                asChild
              >
                <a href={deal.dealUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Snag This Deal
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{deal.description}</p>
            </div>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Spotted by {deal.postedBy}</span>
              </div>
              {deal.location && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{deal.location}</span>
                </div>
              )}
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <DealCategories categories={deal.categories} />
            </div>
            
            {/* Voting and Comments */}
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Deal Rating</h3>
              <DealVoting
                votes={deal.votes}
                userVote={userVote}
                onVote={handleVote}
                commentCount={deal.commentCount || 0}
                orientation="horizontal"
              />
            </div>
            
            {/* Comments Section (placeholder) */}
            <div className="border-t mt-6 pt-4">
              <h3 className="font-semibold flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5" />
                Comments ({deal.commentCount || 0})
              </h3>
              <div className="space-y-4">
                {deal.commentCount ? (
                  <div className="bg-muted/30 p-4 rounded-md">
                    <p className="font-medium">Demo User</p>
                    <p className="text-sm text-muted-foreground">This looks like a ripper deal! Thanks for sharing.</p>
                  </div>
                ) : (
                  <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
                )}
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default DealDetail;
