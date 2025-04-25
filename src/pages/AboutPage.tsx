import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">About AI Curing Mind</h1>
        <p className="text-muted-foreground">
          Learn more about our mission, how the application works, and get answers to common questions.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            AI Curing Mind was created to make emotional and mental health support accessible to everyone,
            regardless of their financial situation or location.
          </p>
          <p className="mb-4">
            We recognize that many individuals face barriers to traditional mental health services,
            whether due to cost, availability, or stigma. Our AI-powered platform provides a 24/7 companion
            that offers empathetic support, practical coping strategies, and connections to resources when needed.
          </p>
          <p>
            While our AI is not a replacement for professional mental health care, it serves as a valuable
            tool for daily emotional support, stress management, and building resilience.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">AI Chat Support</h3>
            <p className="text-muted-foreground">
              Our AI companion uses advanced natural language processing to understand your concerns and
              provide supportive responses. It's designed to be empathetic, non-judgmental, and helpful.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Mood Tracking</h3>
            <p className="text-muted-foreground">
              Recording your mood helps you recognize patterns and triggers. Our simple tracking system
              allows you to note your emotions and associated thoughts, building self-awareness over time.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Resources</h3>
            <p className="text-muted-foreground">
              We provide carefully curated resources for different needs, from career guidance to mental
              health support. These resources are regularly updated to ensure relevance and quality.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is my data private?</AccordionTrigger>
              <AccordionContent>
                Yes, your privacy is a top priority. Chat conversations are processed securely and 
                not shared with third parties. You can also use anonymous mode, which ensures no data
                is retained between sessions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Is this a replacement for therapy?</AccordionTrigger>
              <AccordionContent>
                No, AI Curing Mind is not a substitute for professional mental health treatment.
                It's designed as a complementary tool for daily emotional support. If you're experiencing
                severe distress or a mental health crisis, please contact a healthcare professional or
                use the emergency resources provided in our Resources section.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>How does the AI learn about me?</AccordionTrigger>
              <AccordionContent>
                The AI personalizes responses based on your conversations and the information you share.
                However, it does not build a persistent profile or "learn" about you between separate 
                conversations unless you create an account and disable anonymous mode.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I access my previous conversations?</AccordionTrigger>
              <AccordionContent>
                Yes, chat history is available within the current session. If you choose to disable
                anonymous mode, your conversation history can be saved between sessions. You can always
                reset all data from the Settings page.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I provide feedback?</AccordionTrigger>
              <AccordionContent>
                We value your input! You can provide feedback about your experience through the
                feedback form in the Settings section, or by contacting our support team at
                support@aicuringmind.example.com.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <Button asChild size="lg" className="px-8">
          <Link to="/chat">Start Chatting Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;