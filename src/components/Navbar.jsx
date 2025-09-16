import { NavLink} from 'react-router-dom'
import MobileDropDown from './dropdownNav'

const Navbar = () => {
  return <> 
    <div className='w-full h-[9vh] z-10 bg-gradient-to-b from-green-100 to-white flex justify-between items-center px-10 '>
        <div className="p1 text-2xl font-bold text-green-800">Password Vault</div>
        <div className="p2">
            <ul className='gap-7 text-green-900 font-semibold  md:flex hidden'>
                <NavLink to='/' className='w-17 text-center hover:scale-110 hover:border-x-2 rounded px-1 transition-all-1s duration-200'>Home</NavLink>
                <NavLink to='/vault' className='w-17 text-center hover:scale-110 hover:border-x-2 rounded px-1 transition-all-1s duration-200'>Vault</NavLink>
                <NavLink to='/coder' className='w-17 text-center hover:scale-110 hover:border-x-2 rounded px-1 transition-all-1s duration-200'>Coder</NavLink>
                <NavLink to='/about' className='w-17 text-center hover:scale-110 hover:border-x-2 rounded px-1 transition-all-1s duration-200'>About</NavLink>
            </ul>

            {/* Mobile Menu (only visible below md breakpoint) */}
            <div className="md:hidden">
              <MobileDropDown />
            </div>
        </div>
    </div>
    
  </>
}

export default Navbar