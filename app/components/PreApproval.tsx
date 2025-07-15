import Image from 'next/image';

export default function PreApproval() {
  return (
    <section className="py-12 px-6 flex flex-col md:flex-row bg-white relative max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 flex justify-end md:pr-12">
        <Image
          src="https://cdn.prod.website-files.com/5ebd4ee4fb92c0dfe132262b/6079c81dcb4d5c2eb8d1cbba_pre-approved%20chikita.svg"
          alt="Girl"
          width={420}
          height={420}
          className="object-contain"
          priority
        />
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col justify-center text-center md:text-left px-4 md:px-0">
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Get pre-approved <br />
          <span className="text-[#f3443e] underline decoration-4 decoration-[#f3443e]/40">before</span> you shop!
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">
          Avoid rejection and disappointment by car <br className="hidden md:block" /> shopping AFTER your finances are approved.
        </p>
        <button
          className="bg-[#f3443e] hover:bg-green-800 transition duration-300 text-white font-semibold px-16 py-4 rounded-full shadow-md hover:shadow-lg max-w-xs mx-auto md:mx-0"
          aria-label="Get pre-approved"
        >
          Get Pre-Approved
        </button>
      </div>

    </section>
  );
}
