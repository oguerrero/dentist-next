import Image from "next/image"
import logoImage from "../../public/assets/logo.png"

export default function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content py-8 lg:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Inicio</a></li>
            <li><a>Sobre mi</a></li>
            <li><a>Opiniones</a></li>
            <li><a>Ubicaciones</a></li>
            <li>
              <a>Agenda tu cita</a>
              <ul className="p-2">
                <li><a>Online</a></li>
                <li><a>Presencial</a></li>
              </ul>
            </li>
          </ul>
        </div>
          <Image
            src={logoImage}
            width={250}
            height={250}
            alt="Logo"
          />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><a>Inicio</a></li>
        <div className="divider divider-horizontal"></div>
        <li><a>Sobre mi</a></li>
        <div className="divider divider-horizontal"></div>
        <li><a>Opiniones</a></li>
        <div className="divider divider-horizontal"></div>
        <li><a>Ubicaciones</a></li>
        <div className="divider divider-horizontal"></div>
        <li>
          <details>
            <summary>Agenda tu cita</summary>
            <ul className="p-2">
              <li><a>Online</a></li>
              <li><a>Presencial</a></li>
            </ul>
          </details>
        </li>
        </ul>
      </div>
    </div>
  )
}