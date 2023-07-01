export interface Product {
  id: number
  amount: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

// export interface ProductList {
//   productItem: Product[]
// }
