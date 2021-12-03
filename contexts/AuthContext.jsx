import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'

import auth from '@/lib/auth'
import { formatUser } from '@/utils/functions'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  // Initialize user & loading states
  const [user, setUser] = useState(auth?.currentUser)
  const [authLoading, setAuthLoading] = useState(true)

  // Listen for auth state changes
  useEffect(() => {
    return onAuthStateChanged(auth, (_user) => {
      if (_user) {
        const formattedUser = formatUser(_user)
        setUser(formattedUser)
        setAuthLoading(false)
      } else {
        setUser(null)
        setAuthLoading(false)
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {!authLoading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
