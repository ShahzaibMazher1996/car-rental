export default function Offerings() {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Offerings</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {[
          { title: "Car Loan Calculator", desc: "Get your monthly payment" },
          { title: "Credit Score Information", desc: "Soft pull credit" },
          { title: "Trade-In Estimate", desc: "What's my car worth" },
          { title: "Insurance Quotes", desc: "Get auto insurance" },
        ].map((item) => (
          <div key={item.title} className="bg-green-50 p-6 rounded shadow">
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
