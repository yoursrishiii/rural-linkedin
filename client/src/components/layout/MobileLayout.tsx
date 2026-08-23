import { Link, useLocation } from "wouter";
import { Home, Briefcase, Users, User, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Briefcase, label: "Jobs", path: "/jobs" },
    { icon: Users, label: "Community", path: "/community" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 font-sans">
      <main className="max-w-md mx-auto min-h-screen bg-background relative overflow-hidden shadow-2xl">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 pb-safe">
        <div className="max-w-md mx-auto flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <div className={cn(
                  "flex flex-col items-center justify-center w-16 h-full space-y-1 transition-colors cursor-pointer",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}>
                  <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 w-8 h-1 bg-primary rounded-t-full"
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Floating Voice Button (Center Overlay) */}
      <div className="fixed bottom-20 right-4 z-50">
        <button className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 active:scale-95 transition-all border-4 border-background/50 backdrop-blur-sm">
          <Mic size={28} />
        </button>
      </div>
    </div>
  );
}