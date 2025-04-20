
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  ThumbsUp, 
  ThumbsDown, 
  MessageSquare, 
  Clock, 
  ExternalLink, 
  User, 
  MapPin, 
  Tag
} from "lucide-react";
import { Deal } from '../types';
import { formatDistanceToNow } from 'date-fns';
import { Link } from "react-router-dom";

interface DealCardProps {
  deal: Deal;
  onVote?: (dealId: string, voteType: 'yeah' | 'nah') => void;
}

const DealCard = ({ deal, onVote }: DealCardProps) => {
  const [showComments, setShowComments] = useState(false);
  
  const handleVote = (voteType: 'yeah' | 'nah') => {
    if (onVote) {
      onVote(deal.id, voteType);
    }
  };
  
  const formatTime = (date: Date) => {
    return formatDistanceToNow(date, { addSuffix: true });
  };

  const calcTemperatureClass = (temp: number) => {
    if (temp >= 80) return "text-green-600";
    if (temp >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        {deal.imageUrl && (
          <div className="relative h-48 bg-muted">
            <img
              src={deal.imageUrl}
              alt={deal.title}
              className="w-full h-full object-cover"
            />
            {deal.isExpired && (
              <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 m-2 rounded-md">
                Expired
              </div>
            )}
            {deal.isHot && !deal.isExpired && (
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 m-2 rounded-md">
                HOT!
              </div>
            )}
          </div>
        )}
        <div className="p-4">
          <div className="flex items-center mb-2 gap-2">
            <Badge variant="outline" className="bg-slate-100">
              <Tag className="h-3 w-3 mr-1" />
              {deal.category}
            </Badge>
            {deal.location && (
              <Badge variant="outline" className="bg-slate-100">
                <MapPin className="h-3 w-3 mr-1" />
                {deal.location}
              </Badge>
            )}
          </div>
          
          <h2 className="text-xl font-semibold mb-2">{deal.title}</h2>
          
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">{deal.price}</span>
              {deal.originalPrice && (
                <span className="text-sm line-through text-muted-foreground">{deal.originalPrice}</span>
              )}
              {deal.discount && (
                <span className="text-sm font-medium text-green-600">{deal.discount}</span>
              )}
            </div>
            <span className="text-sm text-muted-foreground">{deal.retailer}</span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">{deal.description}</p>
          
          {deal.dealCode && (
            <div className="bg-slate-100 p-2 rounded-md mb-4 flex justify-between items-center">
              <code className="text-sm font-mono">{deal.dealCode}</code>
              <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(deal.dealCode || '')}>
                Copy
              </Button>
            </div>
          )}
          
          <div className="flex items-center gap-2 mb-4">
            <Link to={`/user/${deal.author.id}`}>
              <Avatar className="h-6 w-6">
                <AvatarImage src={deal.author.avatar} />
                <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
              </Avatar>
            </Link>
            <span className="text-xs text-muted-foreground">
              Posted by{" "}
              <Link to={`/user/${deal.author.id}`} className="font-medium hover:text-primary">
                {deal.author.username}
              </Link>{" "}
              {formatTime(deal.createdAt)}
            </span>
          </div>
          
          {deal.expiresAt && !deal.isExpired && (
            <div className="flex items-center text-xs text-amber-600 mb-2">
              <Clock className="h-3 w-3 mr-1" />
              Expires {formatTime(deal.expiresAt)}
            </div>
          )}
          
          <Button variant="outline" size="sm" className="w-full mt-2" asChild>
            <a href={deal.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Get Deal
            </a>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={() => handleVote('yeah')}
          >
            <ThumbsUp className="w-4 h-4" />
            Yeah ({deal.votes.yeah})
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={() => handleVote('nah')}
          >
            <ThumbsDown className="w-4 h-4" />
            Nah ({deal.votes.nah})
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare className="w-4 h-4" />
            {deal.comments.length}
          </Button>
        </div>
        <div className={`text-lg font-bold ${calcTemperatureClass(deal.temperature)}`}>
          {deal.temperature}°
        </div>
      </CardFooter>
      
      {showComments && deal.comments.length > 0 && (
        <div className="px-4 py-3 border-t">
          <h3 className="text-sm font-medium mb-2">Comments</h3>
          <div className="space-y-3">
            {deal.comments.map(comment => (
              <div key={comment.id} className="bg-slate-50 p-2 rounded-md">
                <div className="flex items-center gap-2 mb-1">
                  <Link to={`/user/${comment.author.id}`}>
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={comment.author.avatar} />
                      <AvatarFallback><User className="h-3 w-3" /></AvatarFallback>
                    </Avatar>
                  </Link>
                  <Link to={`/user/${comment.author.id}`} className="text-xs font-medium hover:text-primary">
                    {comment.author.username}
                  </Link>
                  <span className="text-xs text-muted-foreground">{formatTime(comment.createdAt)}</span>
                </div>
                <p className="text-sm">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default DealCard;
