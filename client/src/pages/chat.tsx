import { ArrowLeft, Mic, Send, Image } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Namaste! Are you available for work tomorrow?", sender: "bot", time: "10:00 AM" },
    { id: 2, text: "Yes, I am free. What is the work?", sender: "user", time: "10:05 AM" },
    { id: 3, text: "It is for harvesting in Rampur field. Pay is ₹500.", sender: "bot", time: "10:06 AM" },
  ]);

  return (
    <div className="flex flex-col h-screen bg-background max-w-md mx-auto shadow-2xl overflow-hidden">
      {/* Header */}
      <header className="p-4 border-b border-border bg-card flex items-center space-x-3 sticky top-0 z-10">
        <Link href="/">
          <button className="p-2 -ml-2 hover:bg-accent rounded-full text-muted-foreground">
            <ArrowLeft size={20} />
          </button>
        </Link>
        <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">
          RK
        </div>
        <div>
          <h2 className="font-bold text-foreground leading-tight">Ramesh Kumar</h2>
          <p className="text-xs text-green-500">Online</p>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
              msg.sender === "user"
                ? "bg-primary text-primary-foreground ml-auto rounded-tr-none"
                : "bg-card border border-border text-foreground mr-auto rounded-tl-none"
            )}
          >
            <p>{msg.text}</p>
            <span className={cn(
              "text-[10px] block mt-1 text-right opacity-70",
              msg.sender === "user" ? "text-primary-foreground" : "text-muted-foreground"
            )}>
              {msg.time}
            </span>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-card border-t border-border">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-muted-foreground hover:bg-accent rounded-full">
            <Image size={20} />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full bg-muted/50 border-none rounded-full pl-4 pr-10 py-3 text-sm focus:ring-1 focus:ring-primary"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-background rounded-full text-muted-foreground shadow-sm">
              <Mic size={16} />
            </button>
          </div>
          <button className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg active:scale-95 transition-transform">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}