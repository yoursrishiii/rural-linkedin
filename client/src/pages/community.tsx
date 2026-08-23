import MobileLayout from "@/components/layout/MobileLayout";
import { COMMUNITY_POSTS } from "@/lib/mockData";
import { MessageSquare, ThumbsUp, Share2, MapPin, Plus } from "lucide-react";
import communityImg from "@assets/generated_images/community_gathering_illustration.png";

export default function Community() {
  return (
    <MobileLayout>
      <div className="p-4 sticky top-0 bg-background/95 backdrop-blur z-40 border-b border-border flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Community</h1>
          <div className="flex items-center text-xs text-muted-foreground">
            <MapPin size={10} className="mr-1" />
            <span>Rampur District Forum</span>
          </div>
        </div>
        <button className="bg-secondary text-secondary-foreground h-10 w-10 rounded-full flex items-center justify-center shadow-lg">
          <Plus size={24} />
        </button>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-card border border-border rounded-xl p-4 flex items-center space-x-4">
            <img src={communityImg} alt="Community" className="w-20 h-20 rounded-lg object-cover" />
            <div>
              <h3 className="font-bold text-foreground">Village Panchayat Meeting</h3>
              <p className="text-sm text-muted-foreground">Tomorrow at 10 AM, Community Hall.</p>
              <button className="text-xs text-primary font-bold mt-2">View Details</button>
            </div>
        </div>

        <h2 className="font-bold text-lg">Discussions</h2>
        
        <div className="space-y-4">
          {COMMUNITY_POSTS.map((post) => (
            <div key={post.id} className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground">
                  {post.user[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">{post.user}</h4>
                  <p className="text-xs text-muted-foreground">{post.role} • {post.time}</p>
                </div>
              </div>
              
              <p className="text-sm text-foreground/90 mb-4 leading-relaxed">
                {post.content}
              </p>
              
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp size={16} />
                  <span className="text-xs">{post.likes} Likes</span>
                </button>
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                  <MessageSquare size={16} />
                  <span className="text-xs">{post.comments} Comments</span>
                </button>
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                  <Share2 size={16} />
                  <span className="text-xs">Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
}