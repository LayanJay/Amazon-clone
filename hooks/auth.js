import { useCallback, useEffect, useState } from "react"
import { auth } from "../lib/firebase"

export const useAuth = () => {
  const [user, setUser] = useState(null)

  const getUser = useCallback(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      }
    })
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return user
}
