import { useQuery } from '@tanstack/react-query'
import productApi from 'src/api/product.api'
import ProductItem from './component'

export default function ProductList() {
  const { data: productsData } = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return productApi.getProducts()
    },
    staleTime: 3 * 60 * 1000
  })

  const filterData = productsData?.data.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  )

  return (
    <>
      <div className='px-4 py-16'>
        <div className='container mx-auto'>
          {filterData && (
            <div className='mx-auto grid max-w-sm grid-cols-1 gap-[30px] md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
              {filterData.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
