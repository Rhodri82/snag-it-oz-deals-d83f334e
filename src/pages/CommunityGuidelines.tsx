
import React from 'react';
import Header from '../components/Header';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, MessageSquare, Link, Info, Search } from 'lucide-react';

const rules = [
  {
    title: "Be decent",
    description: "No abuse, trolling, or offensive language.",
    icon: MessageSquare
  },
  {
    title: "Post real deals",
    description: "No fake offers or clickbait.",
    icon: Shield
  },
  {
    title: "Don't self-promote",
    description: "If you're a retailer, contact us first.",
    icon: Link
  },
  {
    title: "Respect expiry",
    description: "Mark deals as expired if they're no longer valid.",
    icon: Search
  },
  {
    title: "Stay on-topic",
    description: "Comments should help others decide or learn more.",
    icon: Info
  }
];

const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        <PageHeader 
          title="Play Nice. Snag Hard." 
          subtitle="DealsOz is built on trust. Here's how to keep things fair."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {rules.map((rule, index) => (
            <Card key={index}>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <rule.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{rule.title}</h3>
                  <p className="text-muted-foreground">{rule.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                Break the rules, and we may remove posts or suspend accounts. Let's keep DealsOz a ripper place to share.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CommunityGuidelines;
