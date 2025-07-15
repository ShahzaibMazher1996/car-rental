export default function CallToAction() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div
            className="bg-white p-8 rounded-3xl shadow-lg text-center flex flex-col items-center
            transition-transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhM4ZCe90SUhd5kEdDwD4Uvrvetc_hoBR89A&s"
              alt="Calculator Icon"
              className="w-16 h-16 mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Car Loan Calculator</h3>
            <p className="text-gray-600 mb-8">Get your monthly payments</p>
            <button
              className="bg-[#f3443e] text-white px-6 py-3 rounded-full
              hover:bg-[#f3443e] hover:text-white hover:shadow-lg transition duration-300 w-full max-w-xs"
            >
              CALCULATE
            </button>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-8 rounded-3xl shadow-lg text-center flex flex-col items-center
            transition-transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
          >
            <img
              src="https://cdn-icons-png.freepik.com/512/12576/12576514.png"
              alt="Speed Icon"
              className="w-16 h-16 mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Credit Score Information</h3>
            <p className="text-gray-600 mb-8">Soft pull credit information</p>
            <button
              className="bg-[#f3443e] text-white px-6 py-3 rounded-full
              hover:bg-[#f3443e] hover:text-white hover:shadow-lg transition duration-300 w-full max-w-xs"
            >
              GET SCORE
            </button>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-8 rounded-3xl shadow-lg text-center flex flex-col items-center
            transition-transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/054/608/754/non_2x/an-orange-sports-car-on-a-white-background-vector.jpg"
              alt="Car Icon"
              className="w-16 h-16 mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Trade In Estimate</h3>
            <p className="text-gray-600 mb-8">What's my car worth?</p>
            <button
              className="bg-[#f3443e] text-white px-6 py-3 rounded-full
              hover:bg-[#f3443e] hover:text-white hover:shadow-lg transition duration-300 w-full max-w-xs"
            >
              GET ESTIMATE
            </button>
          </div>

          {/* Card 4 */}
          <div
            className="bg-white p-8 rounded-3xl shadow-lg text-center flex flex-col items-center
            transition-transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/021/398/726/non_2x/orange-book-design-free-vector.jpg"
              alt="Book Icon"
              className="w-16 h-16 mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Insurance Quotes</h3>
            <p className="text-gray-600 mb-8">Sonnet Auto Insurance</p>
            <button
              className="bg-[#f3443e] text-white px-6 py-3 rounded-full
              hover:bg-[#f3443e] hover:text-white hover:shadow-lg transition duration-300 w-full max-w-xs"
            >
              GET QUOTE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
