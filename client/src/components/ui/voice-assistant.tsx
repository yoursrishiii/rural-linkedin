import { Mic } from "lucide-react";
import { motion } from "framer-motion";

export function VoiceAssistantBanner() {
  return (
    <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-2xl p-4 flex items-center justify-between mb-6">
      <div>
        <h3 className="text-lg font-bold text-foreground">Bol ke Dhundo</h3>
        <p className="text-sm text-muted-foreground">Speak to find jobs nearby</p>
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20"
      >
        <Mic className="text-primary-foreground h-6 w-6" />
      </motion.button>
    </div>
  );
}