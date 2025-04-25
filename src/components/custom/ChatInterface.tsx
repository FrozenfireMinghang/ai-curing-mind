import { useRef, useState, useEffect } from "react";
import { useChatStore } from "@/store/chatStore";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, RefreshCw } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/userStore";

export function ChatInterface() {
  const { messages, addMessage, resetChat, simulateAIResponse, isLoadingResponse } = useChatStore();
  const { profile } = useUserStore();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    if (!isLoadingResponse) {
      inputRef.current?.focus();
    }
  }, [isLoadingResponse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() === "" || isLoadingResponse) return;
    
    // Add user message
    addMessage(input, "user");
    
    // Clear input
    setInput("");
    
    // Simulate AI response
    await simulateAIResponse(input);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleResetChat = () => {
    if (window.confirm("Are you sure you want to reset the chat? This will clear all messages.")) {
      resetChat();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)]">
      {/* Chat messages */}
      <Card className="flex-1 overflow-hidden mb-4">
        <ScrollArea className="h-full p-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={cn(
                "chat-message",
                message.role === "user" ? "chat-message-user" : "chat-message-ai"
              )}
            >
              <div className="flex items-start gap-3">
                <Avatar className="mt-0.5">
                  {message.role === "user" ? (
                    <div className="bg-primary text-primary-foreground w-full h-full flex items-center justify-center text-sm font-medium">
                      {profile.name ? profile.name[0].toUpperCase() : "U"}
                    </div>
                  ) : (
                    <div className="bg-info text-info-foreground w-full h-full flex items-center justify-center text-sm font-medium">
                      AI
                    </div>
                  )}
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium mb-1">
                    {message.role === "user" ? (profile.name || "You") : "AI Companion"}
                  </div>
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
          
          {/* Loading indicator */}
          {isLoadingResponse && (
            <div className="flex justify-center p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <RefreshCw size={18} className="animate-spin" />
                <span>AI is thinking...</span>
              </div>
            </div>
          )}
        </ScrollArea>
      </Card>
      
      {/* Input area */}
      <Card className="p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Textarea
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Type your message here..."
            className="min-h-24 text-base"
            disabled={isLoadingResponse}
          />
          <div className="flex justify-between items-center">
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleResetChat} 
              disabled={isLoadingResponse || messages.length <= 1}
              className="text-base px-4"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Reset Chat
            </Button>
            <Button 
              type="submit" 
              className="gleam text-base px-6" 
              disabled={isLoadingResponse || input.trim() === ""}
            >
              <Send className="mr-2 h-4 w-4" /> Send
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}