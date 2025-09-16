'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PresetComparisonProps {
  original: string;
  preset: string;
  title: string;
}

export default function PresetComparison({ original, preset, title }: PresetComparisonProps) {
  const [showPreset, setShowPreset] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setShowPreset(!showPreset);
  };

  return (
    <div className="relative group">
      <div 
        className="relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleToggle}
      >
        {/* Original Image */}
        <Image
          src={original}
          alt={`${title} - Original`}
          width={1200}
          height={800}
          className="h-64 w-full object-cover"
        />
        
        {/* Preset Image Overlay */}
        <div 
          className="absolute inset-0 transition-all duration-500 ease-in-out"
          style={{
            opacity: showPreset ? 1 : 0,
            transform: showPreset ? 'translateX(0)' : 'translateX(100%)'
          }}
        >
          <Image
            src={preset}
            alt={`${title} - Preset`}
            width={1200}
            height={800}
            className="h-64 w-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Toggle Button */}
        <button
          className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-black/70 transition-colors z-10"
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
        >
          {showPreset ? 'Original' : 'Preset'}
        </button>
        
        {/* Comparison Labels */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${
            !showPreset ? 'bg-white/20 text-white' : 'bg-white/10 text-white/70'
          }`}>
            Original
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${
            showPreset ? 'bg-white/20 text-white' : 'bg-white/10 text-white/70'
          }`}>
            Preset
          </span>
        </div>

        {/* Hover Indicator */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-20">
            <div className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
              </svg>
              Click to toggle
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
