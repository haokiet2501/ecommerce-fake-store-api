import { Link } from 'react-router-dom'
import { path } from 'src/constant/path'
import { Product } from 'src/types/product.type'
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io'
import { makeDecimals } from 'src/utils/utils'
import { CartContextApi } from 'src/contexts/cart.context'
import { useContext } from 'react'

export default function CartItem({ item }: { item: Product }) {
  const { handleRemoveCartItem } = useContext(CartContextApi)
  return (
    <div className='flex w-full gap-x-4 border-gray-200 py-2 text-gray-600 lg:px-4 [&:not(:last-child)]:border-b'>
      <div className='flex min-h-[150px] w-full items-center gap-x-4'>
        <Link to={`${path.products}/${item.id}`}>
          <img className='max-w-[80px]' src={item.image} alt={item.title} />
        </Link>
        <div className='flex w-full flex-col gap-y-2'>
          <div className='flex justify-between'>
            <Link
              to={`${path.products}/${item.id}`}
              className='text-primary line-clamp-2 max-w-[180px] text-left text-[10px] font-medium uppercase hover:underline md:max-w-[200px] md:text-xs'
            >
              {item.title}
            </Link>

            <div
              role='button'
              tabIndex={0}
              aria-hidden='true'
              onClick={() => handleRemoveCartItem(item.id)}
              className='flex cursor-pointer items-center justify-center text-xl'
            >
              <IoMdClose className='text-gray-500 transition hover:text-red-500' />
            </div>
          </div>
          <div className='flex h-[25px] gap-x-2 text-sm'>
            <div className='text-primary flex h-full max-w-[75px] flex-1 items-center border font-medium'>
              <div className='flex h-full flex-1 cursor-pointer items-center justify-center border-r'>
                <IoMdRemove />
              </div>
              <div className='flex h-full flex-1 items-center justify-center px-2'>
                {item.amount}
              </div>
              <div className='flex h-full flex-1 cursor-pointer items-center justify-center border-l'>
                <IoMdAdd />
              </div>
            </div>
            <div className='flex flex-1 items-center justify-around'>
              ${item.price}
            </div>
            <div className='text-primary flex flex-1 items-center justify-end font-medium text-gray-700'>{`$ ${makeDecimals(
              item.price,
              item.amount
            )}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
