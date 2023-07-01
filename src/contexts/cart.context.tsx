import { createContext, useState, useEffect } from 'react'
import { Product } from 'src/types/product.type'

interface CartContextInterface {
  cart: Product[]
  handleAddToCart: (product: Product, id: number) => void
  handleRemoveCartItem: (id: number) => void
  clearAllItem: () => void
  increaseAmount: (id: number) => void
  decreaseAmount: (id: number) => void
  amount: number
}

const initialCartContext: CartContextInterface = {
  cart: [],
  handleAddToCart: () => null,
  handleRemoveCartItem: () => null,
  clearAllItem: () => null,
  increaseAmount: () => null,
  decreaseAmount: () => null,
  amount: Number()
}

export const CartContextApi =
  createContext<CartContextInterface>(initialCartContext)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([])
  const [amount, setAmount] = useState<number>(0)

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, cur) => acc + cur.amount, 0)
      setAmount(amount)
    }
  }, [cart])

  // Add cart
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

  // Remove cart
  const handleRemoveCartItem = (id: number) => {
    const removeCart = cart.filter((item) => item.id !== id)
    setCart(removeCart)
  }

  // Clear all item in cart
  const clearAllItem = () => {
    setCart([])
  }

  // IncreaseItem
  const increaseAmount = (id: number) => {
    const cartItem = cart.find((item) => item.id === id)
    handleAddToCart(cartItem as Product, id)
  }

  // decreaseItem
  const decreaseAmount = (id: number) => {
    const cartItem = cart.find((item) => item.id === id)
    if (cartItem) {
      const decreaseItem = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 }
        } else {
          return item
        }
      })
      setCart(decreaseItem)
    }
    if ((cartItem as Product).amount < 2) {
      handleRemoveCartItem(id)
    }
  }

  return (
    <CartContextApi.Provider
      value={{
        cart,
        handleAddToCart,
        handleRemoveCartItem,
        clearAllItem,
        increaseAmount,
        decreaseAmount,
        amount
      }}
    >
      {children}
    </CartContextApi.Provider>
  )
}

export default CartProvider
