import procedure10 from "../../public/assets/procedures10.jpg"
import procedure11 from "../../public/assets/procedures11.png"
import procedure12 from "../../public/assets/procedures12.png"
import procedure20 from "../../public/assets/procedures20.jpg"
import procedure21 from "../../public/assets/procedures21.jpg"
import procedure22 from "../../public/assets/procedures22.jpg"
import procedure30 from "../../public/assets/procedures30.png"
import procedure31 from "../../public/assets/procedures31.jpg"
import procedure32 from "../../public/assets/procedures32.png"

export interface Procedure {
  imageSrc: string;
  title: string;
  description: string;
}

const procedures = [
  {
    imageSrc: procedure10.src,
    title: "Cirugía ortognática y maxilar",
    description: "Busco mejorar la función masticatoria, respiratoria, y la estética facial de los pacientes."
  },
  {
    imageSrc: procedure11.src,
    title: "Cirugía bucal",
    description: "Para evitar problemas de alineación, reabsorcion radicular y quistes o tumores odontogenicos."
  },
  {
    imageSrc: procedure12.src,
    title: "Transtornos de la ATM",
    description: "Devuelvo la comodidad y funcionalidad de tu articulación temporomandibular."
  },
  {
    imageSrc: procedure20.src,
    title: "Trauma facial y dental",
    description: "Orientado a restablecer la estructura facial, la funcionalidad oral y la estética de mis pacientes."
  },
  {
    imageSrc: procedure21.src,
    title: "Restauración de labio leporino y paladar hendido",
    description: "En colaboración con un equipo multidisciplinario de especialistas, para garantizarte los mejores resultados."
  },
  {
    imageSrc: procedure22.src,
    title: "Dientes retenidos",
    description: "Busco lograr una correcta funcionalidad y alineación dental."
  },
  {
    imageSrc: procedure30.src,
    title: "Tratamientos de patalogía bucal",
    description: "Identificación y tratamiento de problemas que comprometen la salud de los tejidos blandos y duros de área bucal y maxilar."
  },
  {
    imageSrc: procedure31.src,
    title: "Armonización facial y procedimientos estéticos",
    description: "Utilizo tanto técnicas mínimamente invasivas como métodos convencionales."
  },
  {
    imageSrc: procedure32.src,
    title: "Implantes dentales",
    description: "Tratamiento efectivo y duradero, mejorando tanto la salud oral como la apariencia del paciente."
  }
]

export default procedures

export function groupProcedures(procedures: Procedure[], groupSize: number) {
  return procedures.reduce((result: Procedure[][], item, index) => {
    const groupIndex = Math.floor(index / groupSize)
    if (!result[groupIndex]) {
      result[groupIndex] = []
    }
    result[groupIndex].push(item)
    return result
  }, [])
}