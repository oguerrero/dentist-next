export default function Hero() {
  return (
    <div
      className="hero min-h-screen bg-[url('../../public/assets/hero2.jpg')] place-items-start"
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center px-12 py-28">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Cirugía maxilofacial y armonización dentofacial</h1>
          <p className="mb-5 text-2xl">
            Somos MedFace, un equipo de especialistas altamente capacitados, ofrecemos soluciones innovadoras y de calidad, a través de un enfoque humano, ético y profesional.
          </p>
          <div className="flex flex-col items-center space-y-5">
            <h2 className="mb-5 text-2xl font-bold">Contactate conmigo</h2>
            <button className="btn bg-blue-950 border-blue-950 w-xs px-12 py-4 text-lg font-bold rounded-xl">Online</button>
            <button className="btn bg-blue-950 border-blue-950 w-xs px-12 py-4 text-lg font-bold rounded-xl">Presencial</button>
          </div>
        </div>
      </div>
    </div>
  )
}