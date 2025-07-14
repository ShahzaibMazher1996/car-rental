import Image from 'next/image';

export default function VideoSection() {
  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white" ></div>
      <div className="relative z-10 text-center">
        <h2 className="text-xl md:text-5xl font-[cursive] font-bold text-gray-900 mb-2">We’re bringing Canada’s auto industry</h2>
        <h1 className="text-4xl md:text-5xl font-bold font-[cursive] text-[#003333] mb-8">ONLINE</h1>
        <div className="w-full  mx-auto">
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <Image src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/60a515ef634e1ba88865251f_video_stillimage%20copy-p-800.png" alt="Video" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#003333] text-white rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
