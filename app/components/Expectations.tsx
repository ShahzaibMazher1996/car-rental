export default function Expectations() {
  return (
    <section className="py-12 px-4 flex flex-col md:flex-row items-center justify-center gap-8 bg-white">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 h-120">
        <div className="bg-[#003333] text-white text-2xl font-semibold p-6 rounded-t-lg text-center">What should you expect?</div>
        <ul className="space-y-5 mt-6 justify-self-center">
          <li className="flex items-center text-gray-800 text-2xl py-2">
            <span className="text-[#16c686] mr-10 text-2xl">✔</span> No money down needed
          </li>
          <li className="flex items-center text-gray-800 text-2xl py-2">
            <span className="text-[#16c686] mr-10 text-2xl">✔</span> No SIN required to pre-qualify
          </li>
          <li className="flex items-center text-gray-800 text-2xl py-2">
            <span className="text-[#16c686] mr-10 text-2xl">✔</span> No obligation
          </li>
          <li className="flex items-center text-gray-800 text-2xl py-2">
            <span className="text-[#16c686] mr-10 text-2xl">✔</span> All credit accepted
          </li>
        </ul>

      </div>
        <img src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/6079d189c278b60aeb495bc2_Designer%20standing%20pointing.svg" alt="Girl" className="w-50 h-auto object-contain" />
    </section>
  )
}
