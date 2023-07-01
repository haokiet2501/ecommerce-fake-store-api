import { createContext, useState } from 'react'
import { Product } from 'src/types/product.type'

interface CartContextInterface {
  cart: Product[]
  handleAddToCart: (product: Product, id: number) => void
}

const initialCartContext: CartContextInterface = {
  cart: [],
  handleAddToCart: () => null
}

export const CartContextApi =
  createContext<CartContextInterface>(initialCartContext)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([])

  const handleAddToCart = (product: Product, id: number) => {
    const newItem = { ...product, amount: 1 }
    const cartItem = [...cart].find((item) => item.id === id)

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  return (
    <CartContextApi.Provider value={{ cart, handleAddToCart }}>
      {children}
    </CartContextApi.Provider>
  )
}

export default CartProvider
