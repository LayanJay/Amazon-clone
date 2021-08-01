import {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from 'react'
import { initialState, reducer, SET_USER } from './reducer'

const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setUser = (payload) => dispatch({ type: SET_USER, payload })

  const getUser = useCallback(() => {
    // TODO: authentication logic
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <AuthDispatchContext.Provider value={{ setUser }}>
      <AuthStateContext.Provider value={state.user}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  )
}

export const useAuthState = () => useContext(AuthStateContext)
export const useAuthDispatch = () => useContext(AuthDispatchContext)
