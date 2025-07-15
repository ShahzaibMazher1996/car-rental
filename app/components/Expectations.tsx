export default function Expectations() {
  const positivePoints = [
    'No money down needed',
    'No SIN required to pre-qualify',
    'No obligation',
    'All credit accepted',
  ];

  const negativePoints = [
    'No hidden fees',
    'No hard credit checks',
    'No long waits',
    'No complicated paperwork',
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* What you should NOT expect */}
        <div className="bg-white rounded-xl shadow-2xl p-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
            What you should NOT expect
          </h2>
          <ul className="space-y-6">
            {negativePoints.map((item, i) => (
              <li key={i} className="flex items-center text-gray-800 text-lg font-medium">
                <div className="flex-shrink-0 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What you should expect */}
        <div className="bg-white rounded-xl shadow-2xl p-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
            What should you expect?
          </h2>
          <ul className="space-y-6">
            {positivePoints.map((item, i) => (
              <li key={i} className="flex items-center text-gray-800 text-lg font-medium">
                <div className="flex-shrink-0 bg-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
