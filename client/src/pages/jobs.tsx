import MobileLayout from "@/components/layout/MobileLayout";
import { JOBS } from "@/lib/mockData";
import { MapPin, Filter, Search } from "lucide-react";

export default function Jobs() {
  return (
    <MobileLayout>
      <div className="p-4 sticky top-0 bg-background/95 backdrop-blur z-40 border-b border-border">
        <h1 className="text-2xl font-bold mb-4">Find Jobs</h1>
        <div className="flex space-x-2">
          <div className="flex-1 bg-card border border-border rounded-xl px-3 py-2 flex items-center">
            <Search className="text-muted-foreground mr-2" size={18} />
            <input 
              type="text" 
              placeholder="Search by job name..." 
              className="bg-transparent border-none w-full focus:outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <button className="bg-card border border-border rounded-xl w-10 flex items-center justify-center text-foreground hover:bg-accent">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {JOBS.map((job) => (
          <div key={job.id} className="bg-card border border-border rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-foreground">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.type}</p>
              </div>
              <div className="text-right">
                <span className="block font-bold text-primary text-lg">{job.pay}</span>
                {job.urgent && <span className="text-xs text-red-400 font-medium">Urgent Hiring</span>}
              </div>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <MapPin size={14} className="mr-1" />
              {job.location} • {job.distance} away
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="py-2.5 rounded-lg border border-primary text-primary font-medium hover:bg-primary/5 transition-colors text-sm">
                Details
              </button>
              <button className="py-2.5 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-sm">
                Apply Now
              </button>
            </div>
          </div>
        ))}
        
        {/* Load More Trigger */}
        <div className="py-4 text-center">
          <span className="text-sm text-muted-foreground">End of list</span>
        </div>
      </div>
    </MobileLayout>
  );
}