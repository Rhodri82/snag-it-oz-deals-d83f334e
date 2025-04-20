
import { Users, Building } from "lucide-react";
import Header from '../components/Header';
import { PageHeader } from '../components/layout/PageHeader';
import { MissionSection } from '../components/about/MissionSection';
import { FeatureCard } from '../components/about/FeatureCard';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <PageHeader 
          title="Who We Are" 
          subtitle="We're a community of Aussie bargain hunters who love a good snag. From tech and travel to groceries and gadgets, DealsOz helps everyday Aussies find the sharpest discounts out there."
        />
        
        <MissionSection />
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <FeatureCard
            icon={Building}
            title="Built for Australia"
            description="DealsOz is proudly local. We feature deals relevant to Aussie shoppers — no weird overseas shipping fees or out-of-reach prices."
          />
          
          <FeatureCard
            icon={Users}
            title="Community First"
            description="Our platform is built around trust and transparency. Every vote, comment, and post helps others make smarter choices."
          />
        </div>
      </main>
    </div>
  );
};

export default About;
