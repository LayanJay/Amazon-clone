import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from 'react'
import { db } from '../lib/firebase'
import { reducer, SET_CART, SET_CHECKOUT, initialState } from './reducer'

const CartContext = createContext()
const CartDispatchContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setCart = (payload) => dispatch({ type: SET_CART, payload })
  const setCheckout = (payload) => dispatch({ type: SET_CHECKOUT, payload })

  const getCart = useCallback(async () => {
    try {
      const cart = await db.collection('carts').get()
      if (cart) setCart(cart)
      console.log('cart fetched')
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getCart()
  }, [getCart])

  return (
    <CartDispatchContext.Provider value={{ setCart, setCheckout }}>
      <CartContext.Provider value={state}>{children}</CartContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCartState = () => useContext(CartContext)
export const useCartDispatch = () => useContext(CartDispatchContext)
