import { TbMathIntegralX } from 'react-icons/tb'

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-sky-950 text-white">
      <div>
        <h1 className="subpixel-antialiased text-xl text-center font-roboto">Teorema de Bayes</h1>
      </div>
      <div className='text-3xl'>
        <TbMathIntegralX />
      </div>
    </div>
  )
}
