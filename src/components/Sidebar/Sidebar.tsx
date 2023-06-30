import { SidebarContext } from 'src/contexts/sidebar.context'
import { useContext } from 'react'
import { IoMdArrowForward } from 'react-icons/io'

export default function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext)
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } fixed top-0 z-20 h-full w-full cursor-default bg-white px-4 shadow-2xl transition-all duration-500 md:w-[35vw] lg:px-[35px] xl:w-[30vw]`}
    >
      <div className='flex items-center justify-between border-b py-6'>
        <div className='text-sm font-semibold uppercase'>Cart (0)</div>
        <button
          onClick={handleClose}
          className='flex h-8 w-8 cursor-pointer items-center justify-center'
        >
          <IoMdArrowForward className='text-2xl' />
        </button>
      </div>
    </div>
  )
}
