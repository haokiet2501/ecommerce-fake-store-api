export interface Product {
  id: number
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

export interface ProductList {
  products: Product[]
}

export interface ProductListConfig {
  page?: number | string
  limit?: number | string
  order?: 'asc' | 'desc'
}
