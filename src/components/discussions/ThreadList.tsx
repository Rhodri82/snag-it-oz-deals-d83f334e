
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, ArrowUp } from "lucide-react";
import { type Thread } from '@/types/discussions';
import { formatDistanceToNow } from 'date-fns';

interface ThreadListProps {
  threads: Thread[];
}

const ThreadList = ({ threads }: ThreadListProps) => {
  return (
    <div className="space-y-4">
      {threads.map((thread) => (
        <Link
          key={thread.id}
          to={`/discussions/${thread.id}`}
          className="block p-4 rounded-lg border bg-card hover:border-primary/50 transition-colors"
        >
          <div className="flex gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={thread.authorAvatar} />
              <AvatarFallback>{thread.authorName[0]}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-1">
              <h3 className="font-semibold hover:text-primary transition-colors">
                {thread.title}
              </h3>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {thread.content}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{thread.authorName}</span>
                <span>•</span>
                <span>{formatDistanceToNow(new Date(thread.createdAt), { addSuffix: true })}</span>
                
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  {thread.replyCount}
                </div>
                
                <div className="flex items-center gap-1">
                  <ArrowUp className="h-4 w-4" />
                  {thread.upvotes}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ThreadList;
