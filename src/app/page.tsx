import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import ImageCard from "@/components/ImageCard"
import Navbar from "@/components/Navbar"
import consejoImage from "../../public/assets/consejo_mexicano.png"
import ethicImage from "../../public/assets/etica.png"
import attentionImage from "../../public/assets/atencion.png"
import OptionCard from "@/components/OptionCard"
import ProceduresCard from "@/components/ProceduresCard"
import procedures, { groupProcedures } from "@/data/procedures"
import { Key } from "react"
import Map from "@/components/Map"
import Patients from "@/components/Patients"

export default function Home() {
  const groupedProcedures = groupProcedures(procedures, 3)

  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="flex flex-col md:flex-row bg-blue-950 text-white px-24 py-16 items-center justify-around">
          <OptionCard
            imageSrc={consejoImage.src}
            title="Certificado por el consejo"
            description="Garantizo tratamientos seguros y de excelencia profesional."
          />
          <OptionCard
            imageSrc={ethicImage.src}
            title="Ética profesional"
            description="Priorizo la confianza, el respeto y el bienestar de mis pacientes en todo momento."
          />
          <OptionCard
            imageSrc={attentionImage.src}
            title="Atención personalizada"
            description="Adecuada a las necesidades específicas de cada paciente para lograr los mejores resultados."
          />
        </div>
        <ImageCard />
        <div className="flex flex-col bg-blue-950 text-white px-32 py-16 items-center justify-around">
          <p className="font-bold text-4xl text-center">Tratamientos en los que me especializo</p>
          <div className="carousel rounded-box w-xl md:w-full">
            {groupedProcedures.map((group: any[], groupIndex: Key | null | undefined) => (
              <div key={groupIndex} className="carousel-item">
                {group.map((procedure, index) => (
                  <div key={index} className="flex-1">
                    <ProceduresCard
                      imageSrc={procedure.imageSrc}
                      title={procedure.title}
                      description={procedure.description}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Patients />
        <Map />
      </main>
      <Footer />
    </div>
  )
}
