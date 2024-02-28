
export default function App() {

  const Cars = [
    { image: "/images/icon-sedans.svg", content: "Sedans", text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.", button: "Learn More", background: "hsl(31, 77%, 52%)" },
    { image: "/images/icon-suvs.svg", content: "SUVs", text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.", button: "Learn More", background: "hsl(184, 100%, 22%)" },
    { image: "/images/icon-luxury.svg", content: "Luxury", text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.", button: "Learn More", background: "hsl(179, 100%, 13%)" },
  ]

  return (
    <main className="min-h-screen flex justify-center items-center ">
      <section className="max-w-4xl p-8 flex sm:flex-row flex-col rounded-lg">
        {Cars.map((car) => (
          <div key={car.image} className="flex flex-col gap-4 p-8 "
          style={{background: `${car.background}`}}>
            <img src={car.image} alt="" className="w-16 h-14"/>
            <h1 className="text-2xl text-white font-semibold uppercase">{car.content}</h1>
            <p className="text-white sm:mb-8">{car.text}</p>
            <button className="bg-white p-2 rounded-full w-32 hover:bg-transparent hover:text-white focus:outline-none focus:ring" 
            style={{color: car.background}}>{car.button}</button>
          </div>
        ))}


      </section>
    </main>
  )
}