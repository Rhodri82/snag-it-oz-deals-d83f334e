
import { Target, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MissionSection = () => {
  return (
    <Card className="mb-8 overflow-hidden relative border-t-4 border-t-primary">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-5">
        <MapPin className="w-48 h-48 text-primary rotate-12" />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">Our Mission</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <Target className="w-16 h-16 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              To make deal hunting fun, fair, and full of real savings — powered by our community of savvy Aussies, not by big brands. From snags at Bunnings to tech at JB Hi-Fi, we're all about helping you save a buck.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
