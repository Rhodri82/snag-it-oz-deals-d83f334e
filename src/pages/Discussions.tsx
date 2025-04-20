
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MessageSquare, Plus } from "lucide-react";
import Header from '@/components/Header';
import ThreadList from '@/components/discussions/ThreadList';
import { type Thread } from '@/types/discussions';

// Sample data - would come from backend in real app
const SAMPLE_THREADS: Thread[] = [
  {
    id: "1",
    title: "Best grocery deals this week?",
    content: "Looking for the best grocery deals this week, particularly for fresh produce.",
    authorId: "user1",
    authorName: "DealHunter",
    createdAt: "2025-04-19T10:00:00Z",
    replyCount: 5,
    upvotes: 12
  },
  {
    id: "2",
    title: "Woolworths vs Coles - Better deals?",
    content: "Which supermarket chain generally has better deals?",
    authorId: "user2",
    authorName: "SaverPro",
    createdAt: "2025-04-18T15:30:00Z",
    replyCount: 8,
    upvotes: 15
  }
];

const Discussions = () => {
  const [currentTab, setCurrentTab] = React.useState("all");
  const [threads, setThreads] = React.useState<Thread[]>(SAMPLE_THREADS);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-[73px] pb-20 md:pb-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-between py-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <MessageSquare className="h-6 w-6" />
              Community Discussions
            </h1>
            <Button asChild>
              <Link to="/discussions/new" className="gap-2">
                <Plus className="h-4 w-4" />
                Start a Discussion
              </Link>
            </Button>
          </div>

          <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="all">All Threads</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="mt-6">
            <ThreadList threads={threads} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Discussions;
