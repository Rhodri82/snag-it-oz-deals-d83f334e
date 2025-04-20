
import React from 'react';
import Header from '../components/Header';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        <PageHeader 
          title="Need a Hand?" 
          subtitle="Got a question, suggestion, or something that's gone pear-shaped?"
        />
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Drop us a line:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <span className="font-medium">Email: </span>
                      <a 
                        href="mailto:support@dealsoz.com.au" 
                        className="text-primary hover:underline"
                      >
                        support@dealsoz.com.au
                      </a>
                    </li>
                    <li>
                      <span className="font-medium">Feedback form: </span>
                      <span className="text-muted-foreground">Coming soon</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-muted-foreground">
                    We're a small team, but we read every message.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;
