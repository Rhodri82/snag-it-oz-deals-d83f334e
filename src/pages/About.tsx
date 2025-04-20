
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">About DealsOz</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Target className="w-16 h-16 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg">
                  DealsOz is Australia's community-powered deals platform. Our mission is to help Australians save money
                  by finding and sharing the best deals, discounts, and offers from across the web and in-store.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Community-Driven
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our community of deal hunters is at the heart of everything we do. Members share deals they find, vote on the best offers,
                and help each other save money through shared knowledge and experiences.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Quality Focused
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We believe in quality over quantity. Our community voting system ensures that only the best deals rise to the top,
                while our moderation team works to verify deals and maintain a high standard.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="bg-secondary text-secondary-foreground font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
              <p><strong>Find a Deal:</strong> Spot a great deal online or in-store that you think others would appreciate.</p>
            </div>
            
            <Separator />
            
            <div className="flex gap-4 items-center">
              <div className="bg-secondary text-secondary-foreground font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
              <p><strong>Share It:</strong> Submit the deal on our platform with all the relevant details.</p>
            </div>
            
            <Separator />
            
            <div className="flex gap-4 items-center">
              <div className="bg-secondary text-secondary-foreground font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
              <p><strong>Community Votes:</strong> Members vote on deals, with the best ones rising to the top.</p>
            </div>
            
            <Separator />
            
            <div className="flex gap-4 items-center">
              <div className="bg-secondary text-secondary-foreground font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">4</div>
              <p><strong>Save Money:</strong> Browse the platform to discover deals and save on your purchases.</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;
