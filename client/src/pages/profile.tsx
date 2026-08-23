import MobileLayout from "@/components/layout/MobileLayout";
import { USER_PROFILE } from "@/lib/mockData";
import { MapPin, Star, Settings, FileText, Phone, Award } from "lucide-react";
import avatar from "@assets/generated_images/construction_worker_avatar.png";

export default function Profile() {
  return (
    <MobileLayout>
      <div className="relative h-40 bg-gradient-to-b from-primary/20 to-background">
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-background/50 backdrop-blur rounded-full text-foreground">
            <Settings size={20} />
          </button>
        </div>
      </div>
      
      <div className="px-4 -mt-16 mb-6">
        <div className="flex flex-col items-center">
          <div className="h-32 w-32 rounded-full border-4 border-background bg-card shadow-xl overflow-hidden mb-3">
            <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">{USER_PROFILE.name}</h1>
          <div className="flex items-center text-muted-foreground text-sm mt-1">
            <MapPin size={14} className="mr-1" />
            {USER_PROFILE.location}
          </div>
        </div>
      </div>

      <div className="px-4 grid grid-cols-2 gap-3 mb-6">
        <div className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center">
          <span className="text-2xl font-bold text-primary mb-1">{USER_PROFILE.earnings}</span>
          <span className="text-xs text-muted-foreground">Total Earnings</span>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center">
          <div className="flex items-center text-2xl font-bold text-secondary mb-1">
            {USER_PROFILE.rating} <Star size={20} className="ml-1 fill-secondary" />
          </div>
          <span className="text-xs text-muted-foreground">Rating</span>
        </div>
      </div>

      <div className="px-4 space-y-4">
        <section>
          <h3 className="font-bold text-lg mb-3">My Skills</h3>
          <div className="flex flex-wrap gap-2">
            {USER_PROFILE.skills.map(skill => (
              <span key={skill} className="px-3 py-1 bg-accent rounded-full text-sm text-foreground border border-border">
                {skill}
              </span>
            ))}
            <button className="px-3 py-1 border border-dashed border-muted-foreground rounded-full text-sm text-muted-foreground">
              + Add Skill
            </button>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-lg mb-2">Menu</h3>
          
          <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/20 text-blue-500 rounded-lg">
                <FileText size={20} />
              </div>
              <span className="font-medium">My Applications</span>
            </div>
            <span className="text-muted-foreground text-sm">12 Active</span>
          </button>

          <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-500/20 text-purple-500 rounded-lg">
                <Award size={20} />
              </div>
              <span className="font-medium">Certificates</span>
            </div>
          </button>

          <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500/20 text-green-500 rounded-lg">
                <Phone size={20} />
              </div>
              <span className="font-medium">Help & Support</span>
            </div>
          </button>
        </section>
      </div>
    </MobileLayout>
  );
}