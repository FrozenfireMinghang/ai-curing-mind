import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatInterface } from "@/components/custom/ChatInterface";

const ChatPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Chat Support</h1>
        <p className="text-muted-foreground">
          Share your thoughts, concerns, or questions with your AI companion. 
          All conversations are private and designed to provide supportive guidance.
        </p>
      </div>
      
      <ChatInterface />
      
      <Card>
        <CardHeader>
          <CardTitle>How to get the most from your AI companion</CardTitle>
          <CardDescription>
            Tips for meaningful conversations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Be specific about your feelings</h3>
            <p className="text-sm text-muted-foreground">
              Instead of saying "I feel bad," try "I'm feeling anxious about my job interview tomorrow."
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Ask for what you need</h3>
            <p className="text-sm text-muted-foreground">
              "Can you help me with a breathing exercise?" or "I need advice on how to approach my manager."
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Remember this is an AI tool</h3>
            <p className="text-sm text-muted-foreground">
              While helpful for support and guidance, please seek professional help for serious mental health concerns.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatPage;