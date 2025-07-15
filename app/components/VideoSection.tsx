'use client';

import { useState } from 'react';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = 'Joa71AjfJqw?si=PWEzuy1Vyh9JzYSX'; // 👉 replace with your actual YouTube ID

  // YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center max-w-7xl mx-auto">
      <div className="text-center relative z-10 max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
          We’re bringing Canada’s auto industry
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-[#f3443e] mb-8">
          ONLINE
        </h1>

        {/* Thumbnail with play overlay */}
        <div
          className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer"
          style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
          onClick={() => setIsOpen(true)}
        >
          <img
            src="https://i.pinimg.com/736x/71/e7/33/71e73337e58f9f2650336aee1071143e.jpg"
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
            <div className="bg-[#f3443e] rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with video iframe */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500"
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
