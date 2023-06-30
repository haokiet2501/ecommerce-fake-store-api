import { Product } from 'src/types/product.type'
import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { path } from 'src/constant/path'

interface IProps {
  product: Product
}

export default function ProductItem({ product }: IProps) {
  return (
    <div className='flex flex-col'>
      <div className='group relative mb-4 h-[300px] overflow-hidden border border-[#e4e4e4] transition'>
        {/* Image */}
        <div className='flex h-full w-full items-center justify-center'>
          <div className='mx-auto flex w-[200px] items-center justify-center'>
            <img
              src={product.image}
              alt={product.category}
              className='max-h-[160px] transition duration-300 group-hover:scale-110'
            />
          </div>
        </div>
        {/* Button */}
        <div className='absolute -right-11 top-0 flex flex-col items-center justify-center gap-y-2 bg-red-500/40 p-2 opacity-0 transition-all duration-300 group-hover:right-0 group-hover:opacity-100'>
          <button>
            <div className='flex h-8 w-8 items-center justify-center bg-red-500 text-white'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link
            to={`${path.products}/${product.id}`}
            className='text-primary flex h-8 w-8 items-center justify-center bg-white drop-shadow-xl'
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className='mb-1 text-sm capitalize text-gray-500'>
          {product.category}
        </div>
        <Link to={`${path.products}/${product.id}`}>
          <h2 className='mb-1 line-clamp-1 font-semibold'>{product.title}</h2>
        </Link>
        <div className='font-semibold'>$ {product.price}</div>
      </div>
    </div>
  )
}
