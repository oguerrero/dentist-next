export default function Patients() {
  return (
    <div className="flex flex-col bg-black text-white px-32 py-16 items-center justify-around">
      <p className="font-bold text-4xl text-center pb-8">La experiencia de mis pacientes</p>
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <div className="flex flex-row items-center space-y-8">
            <div className="flex flex-col items-center space-y-4 max-h-60 justify-around">
              <svg width="53" height="47" viewBox="0 0 53 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.0057 16.6694L30.9855 15.4191L33.4949 6.10408C34.1495 3.33251 33.4098 1.74145 31.0433 1.04023L27.2585 0.0139087C27.1689 -0.00876306 27.0741 -0.00361624 26.9878 0.0286044C26.9015 0.060825 26.8282 0.118446 26.7785 0.193123L12.7041 21.2759C12.626 21.3971 12.5167 21.4972 12.3867 21.5667C12.2566 21.6362 12.1101 21.6728 11.9611 21.6728H0V43.3432H12.8317C13.3946 43.3431 13.9539 43.4297 14.4879 43.5996L22.8125 46.2492C23.7026 46.5327 24.6346 46.6773 25.5729 46.6775H44.9857C47.0587 46.6775 48.4225 45.2687 48.8295 43.3266L52.3699 28.5038V20.8372C52.3699 18.5387 50.406 16.8778 48.0057 16.6694Z" fill="white" />
              </svg>
              <h2 className="font-bold text-2xl">Ana G.A</h2>
              <p className="max-w-sm text-center">“Botox ¡Sin duda, mi mejor experiencia con Botox! Las instalaciones son impecables y el médico es increíblemente profesional, puntual y amable.”</p>
            </div>
            <div className="flex flex-col items-center space-y-4 max-h-60 justify-around">
              <svg width="53" height="47" viewBox="0 0 53 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.0057 16.6694L30.9855 15.4191L33.4949 6.10408C34.1495 3.33251 33.4098 1.74145 31.0433 1.04023L27.2585 0.0139087C27.1689 -0.00876306 27.0741 -0.00361624 26.9878 0.0286044C26.9015 0.060825 26.8282 0.118446 26.7785 0.193123L12.7041 21.2759C12.626 21.3971 12.5167 21.4972 12.3867 21.5667C12.2566 21.6362 12.1101 21.6728 11.9611 21.6728H0V43.3432H12.8317C13.3946 43.3431 13.9539 43.4297 14.4879 43.5996L22.8125 46.2492C23.7026 46.5327 24.6346 46.6773 25.5729 46.6775H44.9857C47.0587 46.6775 48.4225 45.2687 48.8295 43.3266L52.3699 28.5038V20.8372C52.3699 18.5387 50.406 16.8778 48.0057 16.6694Z" fill="white" />
              </svg>
              <h2 className="font-bold text-2xl">Melissa E</h2>
              <p className="max-w-sm text-center">“Excelente atención por parte del Dr. Daniel y su equipo de trabajo, muy puntual y explicando cada paso del proceso a seguir.”</p>
            </div>
            <div className="flex flex-col items-center space-y-4 max-h-60 justify-around">
              <svg width="53" height="47" viewBox="0 0 53 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.0057 16.6694L30.9855 15.4191L33.4949 6.10408C34.1495 3.33251 33.4098 1.74145 31.0433 1.04023L27.2585 0.0139087C27.1689 -0.00876306 27.0741 -0.00361624 26.9878 0.0286044C26.9015 0.060825 26.8282 0.118446 26.7785 0.193123L12.7041 21.2759C12.626 21.3971 12.5167 21.4972 12.3867 21.5667C12.2566 21.6362 12.1101 21.6728 11.9611 21.6728H0V43.3432H12.8317C13.3946 43.3431 13.9539 43.4297 14.4879 43.5996L22.8125 46.2492C23.7026 46.5327 24.6346 46.6773 25.5729 46.6775H44.9857C47.0587 46.6775 48.4225 45.2687 48.8295 43.3266L52.3699 28.5038V20.8372C52.3699 18.5387 50.406 16.8778 48.0057 16.6694Z" fill="white" />
              </svg>
              <h2 className="font-bold text-2xl">Chantal S</h2>
              <p className="max-w-sm text-center">“El Dr García me atendió de maravilla, estuvo muy atento con mi postoperatorio y en constante comunicación.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}