import { useContext } from 'react'
import { SidebarContext } from 'src/contexts/sidebar.context'
import Sidebar from '../Sidebar'
import { BsBag } from 'react-icons/bs'

export default function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  return (
    <div>
      <div>Header</div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='text-2xl' />
        <Sidebar />
      </button>
    </div>
  )
}
