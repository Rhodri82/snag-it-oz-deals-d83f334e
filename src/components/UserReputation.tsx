
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { formatDistanceToNow } from 'date-fns';
import { User, ThumbsUp, Award, MessageSquare } from "lucide-react";
import { User as UserType } from '../types';

interface UserReputationProps {
  user: UserType;
  dealCount: number;
  commentCount: number;
}

const UserReputation = ({ user, dealCount, commentCount }: UserReputationProps) => {
  const getReputationLevel = (rep: number) => {
    if (rep >= 1000) return { level: "Expert", color: "text-amber-500" };
    if (rep >= 500) return { level: "Established", color: "text-cyan-500" };
    if (rep >= 100) return { level: "Member", color: "text-emerald-500" };
    return { level: "Newbie", color: "text-slate-500" };
  };

  const { level, color } = getReputationLevel(user.reputation);
  
  const nextLevel = user.reputation < 100 ? 100 : 
                   user.reputation < 500 ? 500 : 
                   user.reputation < 1000 ? 1000 : 1500;
  
  const progress = (user.reputation / nextLevel) * 100;
  const timeRegistered = formatDistanceToNow(user.createdAt, { addSuffix: true });

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-2 border-primary">
              <AvatarImage src={user.avatar} />
              <AvatarFallback><User /></AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{user.username}</CardTitle>
              <CardDescription>Joined {timeRegistered}</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className={`${color} border-current`}>
            {level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-muted-foreground">Reputation</span>
            <span className="text-sm font-medium">{user.reputation} / {nextLevel}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-muted rounded-md p-2">
            <ThumbsUp className="mx-auto h-5 w-5 text-primary mb-1" />
            <div className="text-lg font-semibold">{user.reputation}</div>
            <div className="text-xs text-muted-foreground">Rep Points</div>
          </div>
          <div className="bg-muted rounded-md p-2">
            <Award className="mx-auto h-5 w-5 text-amber-500 mb-1" />
            <div className="text-lg font-semibold">{dealCount}</div>
            <div className="text-xs text-muted-foreground">Deals Posted</div>
          </div>
          <div className="bg-muted rounded-md p-2">
            <MessageSquare className="mx-auto h-5 w-5 text-blue-500 mb-1" />
            <div className="text-lg font-semibold">{commentCount}</div>
            <div className="text-xs text-muted-foreground">Comments</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Last activity: {formatDistanceToNow(new Date(), { addSuffix: true })}
      </CardFooter>
    </Card>
  );
};

export default UserReputation;
