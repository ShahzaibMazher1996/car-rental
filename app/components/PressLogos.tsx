export default function PressLogos() {
  return (
    <section className="flex justify-center py-12 px-6">
      <div
        className="max-w-7xl w-full rounded-lg p-8 md:p-12 text-center relative bg-white"
        style={{
          backgroundImage:
            "url(https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/6079dadbe0f0425265716c87_Jeep%20Guy%20Billboard.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center bottom",
          minHeight: "42rem",  // increased from 36rem
        }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-10 drop-shadow-md">
          People are talking about us!
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-2xl mx-auto mb-10 px-8">
          <img
            src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/606a5d0be5289d3cd0cdef99_BI_blue_background_vertical-p-2000.png"
            alt="Business Insider"
            className="h-12 object-contain mx-auto"
          />
          <img
            src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/608ae5ad3671b474bb778a9f_newmonkeylogo.png"
            alt="Mobile Monkey"
            className="h-12 object-contain mx-auto"
          />
          <img
            src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/6087069992677d121b48fbda_Narcity_red_RGB_box.png"
            alt="Narcity"
            className="h-12 object-contain mx-auto"
          />
          <img
            src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/609148469aaf2c2f7f66135d_usecalogo.png"
            alt="Smarter Loans"
            className="h-12 object-contain mx-auto"
          />
          <img
            src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/608ae4725976db3179854895_logo-white-background-1.png"
            alt="Greedy Rates"
            className="h-12 object-contain mx-auto"
          />
          <img
            src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/6086f2a9402fd094f483f8c3_GreedyRates_992x232_2pxMargin.png"
            alt="Used.ca"
            className="h-12 object-contain mx-auto"
          />
        </div>

        <button className="bg-[#f3443e] hover:bg-green-800 transition duration-300 text-white font-semibold px-14 py-3 rounded-full shadow-md hover:shadow-lg mx-auto block">
          Start Your Application
        </button>
      </div>
    </section>
  );
}
