import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContextApi } from '../../contexts/cart.context'
import productApi from 'src/api/product.api'
import { useQuery } from '@tanstack/react-query'
import { Product } from 'src/types/product.type'

export default function ProductsDetail() {
  const { id } = useParams()
  const { handleAddToCart } = useContext(CartContextApi)

  const { data: productsDetail } = useQuery({
    queryKey: ['products', id],
    queryFn: () => productApi.getProductDetail(id as string)
  })

  const product = productsDetail?.data

  if (!productsDetail)
    return (
      <div className='flex h-screen items-center justify-center'>
        Loading...
      </div>
    )

  return (
    <div className='flex h-screen items-center px-4 pb-12 pt-32 lg:py-32'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row'>
          <div className='mb-8 flex flex-1 items-center justify-center lg:mb-0'>
            <img
              className='max-w-[200px] lg:max-w-sm'
              src={product?.image}
              alt={product?.title}
            />
          </div>

          <div className='flex-1 text-center lg:text-left'>
            <h1 className='mx-auto mb-2 max-w-[450px] text-[26px] font-medium lg:mx-0'>
              {product?.title}
            </h1>
            <div className='mb-6 text-xl font-medium text-red-500'>
              $ {product?.price}
            </div>
            <p className='mb-8'>{product?.description}</p>
            <button
              onClick={() =>
                handleAddToCart(product as Product, product?.id as number)
              }
              className='bg-black/80 px-8 py-4 text-white'
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
