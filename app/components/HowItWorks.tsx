export default function HowItWorks() {
  return (
    <section className="bg-white py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
        How it works
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {[{
          number: 1,
          title: '2 Minute Application',
          imgSrc: 'https://substackcdn.com/image/fetch/$s_!M7YQ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb170e948-67c1-462f-a886-b6e423dc376a_376x480.gif',
          alt: 'Application Icon',
        }, {
          number: 2,
          title: 'Work With Loan Provider',
          imgSrc: 'https://i.pinimg.com/originals/04/29/72/0429722fff58863a95104e37eea5ed44.gif',
          alt: 'Handshake Icon',
        }, {
          number: 3,
          title: 'Pick Up Your New Car',
          imgSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/source/ce8c6752282495.590b262e81608.gif',
          alt: 'Car Icon',
        }].map(({ number, title, imgSrc, alt }) => (
          <div
            key={number}
            className="relative bg-white p-6 rounded-xl shadow-lg text-center w-64 h-72 flex flex-col items-center justify-between
              transition-transform hover:scale-105 hover:shadow-xl"
          >
            {/* Number Badge */}
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#f3443e] text-white rounded-full w-16 h-16 flex items-center justify-center
                text-2xl font-bold shadow-md">
                {number}
              </div>
            </div>

            {/* Title */}
            <p className="mt-10 mb-4 text-lg font-semibold text-gray-800">{title}</p>

            {/* Image */}
            <div className="w-32 h-32">
              <img src={imgSrc} alt={alt} className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
