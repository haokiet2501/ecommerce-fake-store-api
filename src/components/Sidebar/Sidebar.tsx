import { SidebarContext } from 'src/contexts/sidebar.context'
import { useContext } from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { CartContextApi } from 'src/contexts/cart.context'
import CartItem from 'src/CartItem'

export default function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart } = useContext(CartContextApi)
  console.log(cart)
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } fixed top-0 z-20 h-full w-full cursor-default overflow-y-scroll bg-white px-4 shadow-2xl transition-all duration-500 md:w-[45vw] lg:w-[45vw] xl:w-[30vw]`}
    >
      <div className='flex items-center justify-between border-b py-6'>
        <div className='text-sm font-semibold uppercase'>Cart (0)</div>
        <div
          onClick={handleClose}
          role='button'
          aria-hidden='true'
          tabIndex={0}
          className='flex h-8 w-8 items-center justify-center'
        >
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
