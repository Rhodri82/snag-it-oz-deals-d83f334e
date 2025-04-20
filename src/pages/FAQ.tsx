
import React from 'react';
import Header from '../components/Header';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What is DealsOz?",
      answer: "DealsOz is your go-to Aussie community for finding and sharing the best deals, discounts, and vouchers. Think of it as a local version of a snag-happy treasure hunt."
    },
    {
      question: "Is it free to join?",
      answer: "Absolutely. Signing up and sharing deals is 100% free."
    },
    {
      question: "Can I post my own deals?",
      answer: "Yep! Anyone can submit a deal. Just make sure it's a genuine bargain and not spam."
    },
    {
      question: "What's the deal with 'Yeah' and 'Nay' votes?",
      answer: "Voting helps surface the best finds. Hit \"Yeah\" if a deal's a ripper, or \"Nay\" if it's not worth your time."
    },
    {
      question: "Why was my deal removed?",
      answer: "Deals may be taken down if they break our rules (e.g. spammy, expired, fake). Check our Community Guidelines."
    },
    {
      question: "How do vouchers work?",
      answer: "Some deals come with a promo code. Tap \"Copy Code\" and paste it at checkout."
    },
    {
      question: "I found something dodgy. What now?",
      answer: "Hit the \"Report\" button under the post or contact us at support@dealsoz.com.au."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pb-12">
        <PageHeader 
          title="Got Questions? We've Got Answers" 
          subtitle="Find quick answers to common questions about DealsOz"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQ;
