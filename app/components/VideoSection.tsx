'use client';

import Image from 'next/image';

export default function VideoSection() {
  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center max-w-7xl mx-auto">
      <div className="text-center relative z-10 max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
          We’re bringing Canada’s auto industry
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-[#f3443e] mb-8">
          ONLINE
        </h1>

        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <Image
            src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/60a515ef634e1ba88865251f_video_stillimage%20copy-p-800.png"
            alt="Video thumbnail"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />

          <button
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg
              hover:bg-opacity-60 focus:outline-none focus:ring-4 focus:ring-red-600"
            onClick={() => alert('Play video clicked!')}
          >
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
          </button>
        </div>
      </div>
    </section>
  );
}
