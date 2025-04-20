
import React from 'react';
import Header from '../components/Header';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardContent } from "@/components/ui/card";
import { Search, ThumbsUp, Share2, MessageSquare, Ticket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Browse",
      description: "Check out the latest deals, trending offers, or filter by category.",
      icon: Search
    },
    {
      title: "Vote",
      description: "If you spot a good deal, give it a \"Yeah\". If it's a dud, hit \"Nay\". That helps surface the gold.",
      icon: ThumbsUp
    },
    {
      title: "Share",
      description: "Got a ripper deal? Post it! Upload the link, chuck in a title, price, and a quick description. Easy.",
      icon: Share2
    },
    {
      title: "Chat",
      description: "Jump into the comments and share tips, reviews, or your own experience.",
      icon: MessageSquare
    },
    {
      title: "Bonus: Vouchers",
      description: "Some deals come with voucher codes. Copy the code with one tap and paste it at checkout to save even more.",
      icon: Ticket
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        <PageHeader 
          title="Snag Deals the Easy Way" 
          subtitle="Learn how to make the most of DealsOz"
        />
        <div className="max-w-4xl mx-auto grid gap-6">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Step {index + 1}: {step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;
