import Image from "next/image"

interface ProceduresCardProps {
  imageSrc: string
  title: string
  description: string
}

export default function ProceduresCard({ imageSrc, title, description }: ProceduresCardProps) {
  return (
    <div className="card">
      <figure className="px-10 pt-10">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="rounded-xl w-[250px] h-[150px] md:w-[500px] md:h-[300px] object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="divider"></div>
        <p>{description}</p>
      </div>
    </div>
  )
}