
import { Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MissionSection = () => {
  return (
    <Card className="mb-8">
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
              To make deal hunting fun, fair, and full of real savings — powered by our community, not by big brands.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
