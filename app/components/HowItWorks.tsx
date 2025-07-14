export default function HowItWorks() {
  return (
    <section className="bg-white py-12 px-4 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-gray-900 mb-10 text-center font-[cursive]">How it works.</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="mt-5 bg-white p-6 rounded-lg shadow-2xl text-center w-64 h-72 flex flex-col items-center justify-between relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#003333] text-white rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-2xl font-bold">1</span>
            </div>
          </div>
          <p className="text-lg font-medium text-gray-800 mt-8 mb-4">2 Minute Application</p>
          <div className="w-32 h-32">
            <img src="https://ch.swisslife-am.com/content/dam/slamch/karriere-global/new-careers-pages/application-process-1.gif" alt="Application Icon" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-2xl text-center w-64 h-72 flex flex-col items-center justify-between relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#003333] text-white rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-2xl font-bold">2</span>
            </div>
          </div>
          <p className="text-lg font-medium text-gray-800 mt-8 mb-4">Work With Loan Provider</p>
          <div className="w-32 h-32">
            <img src="https://i.pinimg.com/originals/d1/c4/33/d1c433405e4727ecd36e3417dff6025d.gif" alt="Handshake Icon" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-2xl text-center w-64 h-72 flex flex-col items-center justify-between relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#003333] text-white rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-2xl font-bold">3</span>
            </div>
          </div>
          <p className="text-lg font-medium text-gray-800 mt-8 mb-4">Pick Up Your New Car</p>
          <div className="w-32 h-32">
            <img src="https://www.tyremarket.com/Images/choosevehicle.gif" alt="Car Icon" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
