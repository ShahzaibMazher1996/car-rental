'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white px-6 md:px-12 py-12">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10">

        {/* Text Block */}
        <div className="md:w-1/2 text-center md:text-right">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Get driving now
          </h2>
          <h3 className="text-2xl md:text-4xl font-semibold text-[#f3443e] mb-4">
            All Credit Accepted.
          </h3>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Find out what vehicles you’re eligible for today.
          </p>
          <button className="bg-[#f3443e] text-white px-8 py-3 rounded-full hover:bg-[#d93933] transition font-semibold">
            Apply Now
          </button>
        </div>

        {/* Image Block */}
        <div className="md:w-1/2 flex justify-center">
          <div className="max-w-md w-full">
            <Image
              src="https://img.freepik.com/free-vector/car-dealer-showing-new-red-sports-auto_3446-654.jpg"
              alt="Car dealership"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
