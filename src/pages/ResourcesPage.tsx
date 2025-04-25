import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResourceCard } from "@/components/custom/ResourceCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { SAMPLE_RESOURCES } from "@/lib/constants";
import { Resource } from "@/lib/types";

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter resources based on search query and active tab
  const filteredResources: Resource[] = SAMPLE_RESOURCES.filter((resource) => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeTab === "all" || 
      resource.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Resources</h1>
        <p className="text-muted-foreground">
          Browse curated resources for mental health support, career guidance, and more.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Find Resources</CardTitle>
          <CardDescription>
            Search our collection or browse by category.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="mental-health">Mental Health</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="mt-6">
              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredResources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No resources found matching your search criteria.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card className="border-info/20 bg-info/5">
        <CardHeader>
          <CardTitle>Need More Support?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you're in crisis or need immediate professional help, please use these resources:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="font-medium">National Suicide Prevention Lifeline:</span> 988 or 1-800-273-8255
            </li>
            <li className="flex items-center gap-2">
              <span className="font-medium">Crisis Text Line:</span> Text HOME to 741741
            </li>
            <li className="flex items-center gap-2">
              <span className="font-medium">Emergency Services:</span> Call 911 or go to your nearest emergency room
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourcesPage;