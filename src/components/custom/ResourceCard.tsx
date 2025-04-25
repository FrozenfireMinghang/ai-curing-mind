import { Resource } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  // Map category to appropriate styles
  const getCategoryStyle = () => {
    switch (resource.category) {
      case "career":
        return "bg-info/20 text-info hover:bg-info/30";
      case "mental-health":
        return "bg-success/20 text-success hover:bg-success/30";
      case "financial":
        return "bg-warning/20 text-warning hover:bg-warning/30";
      case "general":
      default:
        return "bg-primary/20 text-primary hover:bg-primary/30";
    }
  };

  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{resource.title}</CardTitle>
          <Badge className={cn(getCategoryStyle(), "capitalize")}>
            {resource.category.replace("-", " ")}
          </Badge>
        </div>
        <CardDescription className="line-clamp-3">
          {resource.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {/* Additional content could go here */}
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="outline" 
          className="w-full gap-2"
          onClick={() => window.open(resource.url, "_blank", "noopener,noreferrer")}
        >
          Visit Resource <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}