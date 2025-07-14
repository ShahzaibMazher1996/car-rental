export default function PressLogos() {
  return (
       <section className="bg-[#e8f9f3]   flex flex-col md:flex-row items-center justify-center">
      <div
        className="p-6  text-center h-210"
        style={{
          backgroundImage: `url(https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/6079dadbe0f0425265716c87_Jeep%20Guy%20Billboard.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className="text-xl md:text-4xl font-semibold text-gray-800 mb-6">People are talking about us!</h2>
        <div className="grid grid-cols-3 gap-4 mb-6 p-8 ">
          <img src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/606a5d0be5289d3cd0cdef99_BI_blue_background_vertical-p-2000.png" alt="Business Insider" className="h-12 object-contain" />
          <img src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/608ae5ad3671b474bb778a9f_newmonkeylogo.png" alt="Mobile Monkey" className="h-12 object-contain" />
          <img src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/6087069992677d121b48fbda_Narcity_red_RGB_box.png" alt="Narcity" className="h-12 object-contain" />
          <img src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/609148469aaf2c2f7f66135d_usecalogo.png" alt="Smarter Loans" className="h-12 object-contain" />
          <img src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/608ae4725976db3179854895_logo-white-background-1.png" alt="Greedy Rates" className="h-12 object-contain" />
          <img src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/6086f2a9402fd094f483f8c3_GreedyRates_992x232_2pxMargin.png" alt="Used.ca" className="h-12 object-contain" />
        </div>
        <p className="text-gray-600 mb-6 md:text-2xl">Find out what all the fuss is about!</p>
        <button className="bg-[#033] text-white px-12 mt-2 py-3 rounded-full hover:bg-green-800 transition duration-300">
          START NOW
        </button>
      </div>
    </section>
  )
}
