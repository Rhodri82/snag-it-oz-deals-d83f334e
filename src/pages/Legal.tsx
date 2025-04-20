
import React from 'react';
import Header from '../components/Header';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ShieldCheck } from 'lucide-react';

const Legal = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        <PageHeader 
          title="Legal Stuff" 
          subtitle="Important information about privacy and terms of use"
        />
        <div className="max-w-3xl mx-auto space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
                  <p className="text-muted-foreground mb-4">
                    We collect only what we need — like your email for login and basic analytics to improve the site. 
                    We never sell your data.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Full privacy policy coming soon.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">By using DealsOz, you agree to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Not post spam or harmful content</li>
                      <li>Respect copyright laws</li>
                      <li>Follow our Community Guidelines</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      We're not responsible for third-party deals or external retailers. 
                      Deals are shared by the community — we don't sell anything ourselves.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Legal;
