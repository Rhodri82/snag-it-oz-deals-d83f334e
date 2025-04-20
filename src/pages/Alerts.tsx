
import React from 'react';
import Header from '@/components/Header';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/card';
import { Bell, Megaphone, Clock, Tag, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SAMPLE_ALERTS = [
  {
    id: 1,
    title: "New deals in Tech",
    description: "5 new tech deals have been posted in the last 24 hours",
    type: "new",
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    title: "Woolworths voucher expiring",
    description: "Your saved Woolworths 10% off voucher expires tomorrow",
    type: "expiring",
    timestamp: "1 day ago"
  },
  {
    id: 3, 
    title: "Price drop on Nintendo Switch",
    description: "A deal you're watching has dropped in price by $50",
    type: "price_drop",
    timestamp: "3 days ago"
  },
  {
    id: 4,
    title: "Your deal was featured",
    description: "Your ALDI Special Buys deal has been featured on the home page",
    type: "featured",
    timestamp: "1 week ago"
  }
];

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'new':
      return <Megaphone className="w-5 h-5 text-blue-500" />;
    case 'expiring':
      return <Clock className="w-5 h-5 text-amber-500" />;
    case 'price_drop':
      return <Tag className="w-5 h-5 text-green-500" />;
    case 'featured':
      return <Bell className="w-5 h-5 text-purple-500" />;
    default:
      return <Bell className="w-5 h-5" />;
  }
};

const Alerts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-[73px] pb-20 md:pb-8">
        <PageHeader
          title="Your Alerts"
          subtitle="Stay updated on deals you care about"
          icon={<Bell className="w-6 h-6" />}
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">Recent Alerts</h2>
            <Button variant="outline" size="sm">Mark all as read</Button>
          </div>
          
          <div className="space-y-4">
            {SAMPLE_ALERTS.map((alert) => (
              <Card key={alert.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex gap-3">
                  <div className="mt-1">{getAlertIcon(alert.type)}</div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{alert.title}</h3>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                    <div className="text-xs text-muted-foreground mt-2">{alert.timestamp}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 pt-4 border-t">
            <h2 className="text-lg font-medium mb-4">Watchlist Settings</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="font-medium">Groceries</span>
                </div>
                <Button variant="ghost" size="sm">Remove</Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="font-medium">Nintendo</span>
                </div>
                <Button variant="ghost" size="sm">Remove</Button>
              </div>
            </div>
            
            <Button variant="outline" className="mt-4 w-full">
              <PlusCircle className="w-4 h-4 mr-2" />
              Add to Watchlist
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Alerts;
