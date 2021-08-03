import { useReducer, createContext, useContext, useEffect } from 'react'
import { useAuth } from '../hooks/auth'
import { getUserCart } from '../lib/firebase/cart'
import { reducer, SET_CART, SET_CHECKOUT, initialState } from './reducer'

const CartContext = createContext()
const CartDispatchContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const user = useAuth()

  const setCart = (payload) => dispatch({ type: SET_CART, payload })
  const setCheckout = (payload) => dispatch({ type: SET_CHECKOUT, payload })

  useEffect(() => {
    if (user) {
      getUserCart(user, setCart)
    }
  }, [user])

  return (
    <CartDispatchContext.Provider value={{ setCart, setCheckout }}>
      <CartContext.Provider value={state}>{children}</CartContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCartState = () => useContext(CartContext)
export const useCartDispatch = () => useContext(CartDispatchContext)
