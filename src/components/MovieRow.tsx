import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MovieRowProps {
  title: string;
  category: string;
}

export default function MovieRow({ title, category }: MovieRowProps) {
  const movies = [
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=169&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=169&fit=crop",
    "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300&h=169&fit=crop",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=169&fit=crop",
    "https://images.unsplash.com/photo-1599837565318-67429bde7162?w=300&h=169&fit=crop",
    "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=169&fit=crop"
  ];

  return (
    <div className="pl-8 md:pl-16">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <div className="group relative">
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="relative flex-none transition duration-200 hover:scale-110"
            >
              <img
                src={movie}
                alt={`Movie ${index + 1}`}
                className="h-[169px] w-[300px] rounded-sm object-cover"
              />
              <div className="absolute inset-0 opacity-0 transition duration-200 hover:bg-black/50 hover:opacity-100" />
            </div>
          ))}
        </div>
        <button className="absolute left-0 top-0 bottom-0 hidden items-center justify-center bg-black/50 px-2 group-hover:flex">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button className="absolute right-0 top-0 bottom-0 hidden items-center justify-center bg-black/50 px-2 group-hover:flex">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}