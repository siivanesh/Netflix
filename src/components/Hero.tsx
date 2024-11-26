import React from 'react';
import { Play, Info } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[95vh] w-full">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-[20%] left-8 max-w-xl space-y-6 md:left-16">
        <h1 className="text-4xl font-bold md:text-6xl">Stranger Things</h1>
        <p className="text-lg text-gray-200">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 rounded-md bg-white px-6 py-2.5 text-lg font-semibold text-black hover:bg-white/90">
            <Play className="h-5 w-5 fill-black" />
            <span>Play</span>
          </button>
          <button className="flex items-center space-x-2 rounded-md bg-gray-500/70 px-6 py-2.5 text-lg font-semibold hover:bg-gray-500/50">
            <Info className="h-5 w-5" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}