import { Loader2 } from "lucide-react";

export default function WarmupScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center transition-all overflow-hidden">
      {/* Gradient background with pink and black */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-black animate-gradient-shift"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30 blur-xl"
            style={{
              width: `${Math.random() * 10 + 5}rem`,
              height: `${Math.random() * 10 + 5}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animationDelay: `${Math.random() * 5}s`,
              animation: "pulse 8s infinite ease-in-out",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 rounded-xl bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl">
        <div className="p-4 rounded-full bg-pink-500/20 mb-6">
          <Loader2 className="h-10 w-10 animate-spin text-pink-300" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Waking up backend...
        </h2>
        <p className="text-pink-200 mt-1 text-center">Just a few seconds ⏳</p>

        {/* Progress bar */}
        <div className="w-64 h-1.5 bg-black/30 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  );
}
