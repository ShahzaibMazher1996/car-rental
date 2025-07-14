export default function CallToAction() {
  return (
 <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mt-4 text-gray-900 text-center mb-12">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6  w-250 h-100 place-self-center" >
          <div className="bg-white p-6 rounded-4xl shadow-lg text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-8">Car Loan Calculator</h3>
            <img src="https://img.icons8.com/ios-filled/50/00C08B/calculator.png" alt="Calculator Icon" className=" w-16 h-16 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Get your monthly payments</p>
            <button className="bg-[#003333] text-white px-6 py-2 mt-16 rounded-full hover:bg-green-800 transition duration-300">
              CALCULATE
            </button>
          </div>
          <div className="bg-white p-6 rounded-4xl shadow-lg text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Credit Score Information</h3>
            <img src="https://img.icons8.com/ios-filled/50/00C08B/speed.png" alt="Speed Icon" className="w-16 h-16 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Soft pull credit information</p>
            <button className="bg-[#003333] text-white px-6 py-2 mt-12 rounded-full hover:bg-green-800 transition duration-300">
              GET SCORE
            </button>
          </div>
          <div className="bg-white p-6 rounded-4xl shadow-lg text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-8">Trade In Estimate</h3>
            <img src="https://img.icons8.com/ios-filled/50/00C08B/car.png" alt="Car Icon" className="w-16 h-16 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">What's my car worth?</p>
            <button className="bg-[#003333] text-white px-6 py-2 mt-20 rounded-full hover:bg-green-800 transition duration-300">
              GET ESTIMATE
            </button>
          </div>
          <div className="bg-white p-6 rounded-4xl shadow-lg text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-8">Insurance Quotes</h3>
            <img src="https://img.icons8.com/ios-filled/50/00C08B/book.png" alt="Book Icon" className="w-16 h-16 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Sonnet Auto Insurance</p>
            <button className="bg-[#003333] text-white px-6 py-2 mt-20 rounded-full hover:bg-green-800 transition duration-300">
              GET QUOTE
            </button>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 text-center mt-12 mb-6">Our Partners</h2>
        <img src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/61fb009e256146ae60c3f943_60c7981deb4dfc9408decd9b_Partners.png" className="justify-self-center" alt="" />
      </div>
    </section>
  )
}
