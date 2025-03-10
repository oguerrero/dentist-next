import Image from "next/image"
import aboutMeImage from "../../public/assets/about.png"
import doctoraliaSvg from "../../public/assets/doctoralia.svg"

export default function ImageCard() {
  return (
    <div className="card lg:card-side shadow-sm max-h-[800px]">
      <div className="carousel max-w-[1400px]">
        <figure className="carousel-item w-full max-w-[1400px]">
          <Image
            src={aboutMeImage.src}
            width={1400}
            height={800}
            className="object-cover max-h-[800px] max-w-[1400px]"
            alt="Movie" />
        </figure>
        <figure className="carousel-item w-full max-w-[1400px]">
          <Image
            src={aboutMeImage.src}
            width={1400}
            height={800}
            className="object-cover max-h-[800px] max-w-[1400px]"
            alt="Movie" />
        </figure>
        <figure className="carousel-item w-full max-w-[1400px]">
          <Image
            src={aboutMeImage.src}
            width={1400}
            height={800}
            className="object-cover max-h-[800px] max-w-[1400px]"
            alt="Movie" />
        </figure>
        <figure className="carousel-item w-full max-w-[1400px]">
          <Image
            src={aboutMeImage.src}
            width={1400}
            height={800}
            className="object-cover max-h-[800px] max-w-[1400px]"
            alt="Movie" />
        </figure>
      </div>
      <div className="card-body text-center items-center justify-center w-3xl px-20">
        <h2 className="card-title font-bold text-4xl pb-12 pt-4 ">Sobre mí</h2>
        <div className="flex flex-col items-center space-y-8">
          <p className="text-2xl">Soy el Doctor Daniel Isai García Montes, médico especilista, cuento con una amplia trayectoria y me presento con una dedicación profunda a la precisión en cada procedimiento para traer consigo los mejores resultados.</p>
          <button className="btn bg-white text-black rounded-xl w-44">
            <Image
              src={doctoraliaSvg.src}
              width={22}
              height={22}
              alt="Movie" />
            Mi Doctoralia
          </button>
        </div>
      </div>
    </div>
  )
}