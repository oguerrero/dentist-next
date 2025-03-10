import Image from "next/image"

interface OptionCardProps {
  imageSrc: string
  title: string
  description: string
}

export default function OptionCard({ imageSrc, title, description }: OptionCardProps) {
  return (
    <div className="flex flex-col w-64 h-96 text-center items-center justify-around">
      <Image
        src={imageSrc}
        width={250}
        height={250}
        alt={title}
      />
      <div className="pt-4">
        <p className="font-bold text-center text-xl pb-2">{title}</p>
        <p className="text-md">{description}</p>
      </div>
    </div>
  )
}

