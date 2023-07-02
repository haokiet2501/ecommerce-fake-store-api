import { useContext } from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import { BsCartX } from 'react-icons/bs'
import { CartContextApi } from 'src/contexts/cart.context'
import CartItem from 'src/CartItem'
import { SidebarContext } from 'src/contexts/sidebar.context'

export default function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearAllItem, total } = useContext(CartContextApi)
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } fixed top-0 z-20 h-full w-full cursor-default bg-white px-4 shadow-2xl transition-all duration-500 md:w-[45vw] lg:w-[45vw] xl:w-[30vw]`}
    >
      <div className='flex items-center justify-between border-b py-6'>
        <div className='text-sm font-semibold uppercase'>Giỏ hàng (0)</div>
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
        {cart.length > 0 ? (
          <>
            <div className='flex h-[350px] flex-col overflow-y-auto overflow-x-hidden medium:h-[480px] lg:h-[480px] xl:h-[620px] 2xl:h-[850px]'>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className='absolute bottom-0 z-10 mt-3 flex w-[91%] flex-col bg-white py-4'>
              <div className='flex w-full items-center justify-between'>
                <div className='text-base font-semibold uppercase text-gray-800'>
                  <span className='mr-2'>Tổng cộng:</span> ${' '}
                  {parseFloat(Number(total).toFixed(2))}
                </div>

                <div
                  onClick={clearAllItem}
                  role='button'
                  aria-hidden='true'
                  tabIndex={0}
                  className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-red-500 py-4 text-base text-white'
                >
                  <FiTrash2 />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex items-center justify-center'>
              <BsCartX className='text-9xl text-black/80' />
            </div>
            <div className='mt-10 flex items-center justify-center font-medium uppercase text-black/80'>
              <span>Chưa có sản phẩm</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
