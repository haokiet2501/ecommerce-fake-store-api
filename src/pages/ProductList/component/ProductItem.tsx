import { Product } from 'src/types/product.type'

interface IProps {
  product: Product
}

export default function ProductItem({ product }: IProps) {
  return <div className='text-black'>{product.category}</div>
}
