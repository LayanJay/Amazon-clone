import { useReducer, createContext, useContext, useEffect } from 'react'
import { db } from '../lib/firebase'

const CartContext = createContext()
const CartDispatchContext = createContext()

//actions
const SET_CART = 'set-cart'
const SET_CHECKOUT = 'set-checkout'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, ...action.payload }
    case SET_CHECKOUT:
      return { ...state, ...action.payload }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const initialState = {
  total_items: 0,
  line_items: [],
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setCart = (payload) => dispatch({ type: SET_CART, payload })
  const setCheckout = (payload) => dispatch({ type: SET_CHECKOUT, payload })

  const getCart = async () => {
    try {
      const cart = await db.collection('carts').get()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCart()
  }, [])

  return (
    <CartDispatchContext.Provider value={{ setCart, setCheckout }}>
      <CartContext.Provider value={state}>{children}</CartContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCartState = () => useContext(CartContext)
export const useCartDispatch = () => useContext(CartDispatchContext)
