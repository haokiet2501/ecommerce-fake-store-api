import Sidebar from '../Sidebar'
import { BsBag } from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react'
import { SidebarContext } from 'src/contexts/sidebar.context'
import { CartContextApi } from 'src/contexts/cart.context'
import { path } from 'src/constant/path'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { amount } = useContext(CartContextApi)
  const [active, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    function handleScrollActive() {
      if (window.scrollY > 60) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
    window.addEventListener('scroll', handleScrollActive)

    return () => window.removeEventListener('scroll', handleScrollActive)
  }, [])

  return (
    <header
      className={`${
        active ? 'bg-white shadow-md' : 'bg-transparent'
      } translate-all sticky top-0 z-10 w-full`}
    >
      <div className='container mx-auto flex h-full items-center justify-between px-4 py-4'>
        <Link to={path.home}>
          <img src={logo} className='w-[40px]' alt='logo' />
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className='relative flex'>
          <BsBag className='text-2xl' />
          <div className='absolute -bottom-2 -right-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-500 text-xs text-white'>
            {amount}
          </div>
        </button>
      </div>
      <Sidebar />
    </header>
  )
}
