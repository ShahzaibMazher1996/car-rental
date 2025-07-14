export default function PreApproval() {
  return (
       <section className="py-12 px-4 flex flex-col md:flex-row  bg-white relative">
      <div className="w-full md:w-1/2 flex justify-end md:pr-8">
        <img src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/6079c81dcb4d5c2eb8d1cbba_pre-approved%20chikita.svg" alt="Girl" className="w-100 h-auto object-contain" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 ml-15">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 mt-20">Get pre-approved <br></br><span className="text-[#16c686]">before</span> you shop!</h2>
        <p className="text-gray-600 mb-6 text-xl mt-10  ">Avoid rejection and disappointment by car <br></br>shopping AFTER your finances are approved.</p>
        <button className="bg-[#033] text-white px-12 py-3 rounded-full hover:bg-green-800 transition duration-300">
          GET PRE-APPROVED
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#e8f9f3] mt-5" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }}></div>
    </section>
  )
}
