import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageSquare, BarChart3, BookOpen, ArrowRight } from "lucide-react";
import { MoodSelector } from "@/components/custom/MoodSelector";

const HomePage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
          Welcome to AI Curing Mind
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your 24/7 AI companion for emotional support, guidance, and mental wellbeing.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/chat">
              Start Chatting <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <MoodSelector />

      <h2 className="text-2xl font-bold mt-12 mb-6">Our Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>24/7 AI Support</CardTitle>
            <CardDescription>
              Chat anytime with an AI trained to provide empathetic emotional support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full mt-2">
              <Link to="/chat">Start a Conversation</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Mood Tracking</CardTitle>
            <CardDescription>
              Record your daily moods and see patterns to better understand your emotions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full mt-2">
              <Link to="/mood">Track Your Mood</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Resources</CardTitle>
            <CardDescription>
              Access curated resources for mental health, career guidance, and more.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full mt-2">
              <Link to="/resources">Browse Resources</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-12 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>How AI Curing Mind Can Help You</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">For emotional support</h3>
              <p className="text-muted-foreground">
                Whether you're feeling anxious, sad, or overwhelmed, our AI companion provides a safe space to express yourself.
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">For career guidance</h3>
              <p className="text-muted-foreground">
                Navigating job loss or career transitions? Get suggestions, encouragement, and practical next steps.
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">For mental health</h3>
              <p className="text-muted-foreground">
                Learn coping strategies, relaxation techniques, and get connected to professional resources.
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">For daily reflection</h3>
              <p className="text-muted-foreground">
                Use our mood tracking to become more aware of your emotional patterns and triggers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;