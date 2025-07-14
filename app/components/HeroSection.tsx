export default function HeroSection() {
  return (
 <section className="flex flex-col items-center justify-center p-6 md:p-12 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto">
        <div className="text-left mb-6 md:mb-0 md:mr-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 font-sans">Get driving now</h2>
          <h3 className="text-2xl md:text-5xl font-semibold text-[#16c686] mb-4">All Credit Accepted.</h3>
          <p className="text-gray-600 mb-6">Find out what vehicles you’re eligible for today.</p>
          <button className="ml-2 bg-[#003333] text-white px-14 py-2 rounded-full hover:bg-green-800 transition duration-300">
            Apply Now
          </button>
        </div>
        <div className="w-full md:w-1/2">
        <img src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/6090093eeea1c12c9b002777_guy-on-phone.png" alt="Car" className="w-full h-auto object-cover" />
      </div></div>
    </section>
  )
}
