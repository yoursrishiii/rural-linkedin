import { useLocation } from "wouter";
import MobileLayout from "@/components/layout/MobileLayout";
import { VoiceAssistantBanner } from "@/components/ui/voice-assistant";
import { CATEGORIES, JOBS } from "@/lib/mockData";
import { MapPin, Bell, MessageSquare, Search, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/dark_themed_rural_landscape_background.png";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <MobileLayout>
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-card/50 backdrop-blur-md sticky top-0 z-40 border-b border-white/5">
        <div className="flex items-center space-x-2 text-primary">
          <MapPin size={20} />
          <span className="font-semibold text-foreground">Rampur, UP</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/chat">
            <button className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors relative">
              <MessageSquare size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 border border-card"></span>
            </button>
          </Link>
          <button className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors">
            <Bell size={20} />
          </button>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden h-48 flex items-end p-4 shadow-xl">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Rural Landscape" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full">
            <h1 className="text-2xl font-bold text-white mb-1">Namaste, Mukesh!</h1>
            <p className="text-white/80 text-sm mb-3">Find work near your village today.</p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 flex items-center border border-white/20">
              <Search className="text-white/60 ml-2" size={18} />
              <input 
                type="text" 
                placeholder="Search jobs..." 
                className="bg-transparent border-none text-white placeholder-white/50 focus:ring-0 text-sm flex-1 px-3"
              />
            </div>
          </div>
        </div>

        {/* Voice Search Banner */}
        <VoiceAssistantBanner />

        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-foreground">Categories</h2>
            <span className="text-xs text-primary font-medium">View All</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {CATEGORIES.slice(0, 6).map((cat) => (
              <div key={cat.id} className="flex flex-col items-center p-3 bg-card border border-border rounded-xl active:scale-95 transition-transform">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-2 ${cat.color}`}>
                  <cat.icon size={24} />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Jobs */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-foreground">Recent Jobs</h2>
            <Link href="/jobs">
              <span className="text-xs text-primary font-medium flex items-center">
                See All <ArrowRight size={12} className="ml-1" />
              </span>
            </Link>
          </div>
          <div className="space-y-3">
            {JOBS.map((job) => (
              <div key={job.id} className="bg-card border border-border rounded-xl p-4 flex items-start space-x-3 active:bg-accent/50 transition-colors">
                <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <span className="text-lg">🌾</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">{job.pay}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1 space-x-2">
                    <span className="flex items-center"><MapPin size={10} className="mr-1" /> {job.location} ({job.distance})</span>
                    <span>•</span>
                    <span>{job.posted}</span>
                  </div>
                  {job.urgent && (
                    <div className="mt-2 inline-block">
                      <span className="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                        URGENT
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}