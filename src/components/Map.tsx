export default function Map() {
  return (
    <div className="flex flex-col bg-blue-950 text-white px-32 py-8 items-center justify-around">
      <div className="text-center pb-4 max-w-xl">
        <p className="text-2xl font-bold text-center">Consultorios</p>
      </div>
      <div className="max-w-[640px] max-h-[480px]">
      <iframe src="https://www.google.com/maps/d/embed?mid=18w0WuT-JbGIZ7uXyUDFebHt6At5I34c&ehbc=2E312F&noprof=1" className="aspect-video lg:hidden" width="350" height="300"></iframe>
        <iframe src="https://www.google.com/maps/d/embed?mid=18w0WuT-JbGIZ7uXyUDFebHt6At5I34c&ehbc=2E312F&noprof=1" className="aspect-video hidden lg:block" width="640" height="480"></iframe>
      </div>
    </div>
  )
}