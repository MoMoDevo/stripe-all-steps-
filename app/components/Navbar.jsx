import {BsBagCheck} from "react-icons/bs"
export const Navbar = () => {
  return (
    <div className='flex h-12 bg-slate-100 shadow-lg  items-center justify-between px-12 z-10'>
        <div className="flex hover:bg-slate-500 cursor-pointer">LOGO</div>
        <div className="flex justify-center items-center gap-3">
            <div className="cart">
            <BsBagCheck className="font-bold text-40"/>

            </div>
           <p>0.0.</p>
        </div>



    </div>
  )
}
