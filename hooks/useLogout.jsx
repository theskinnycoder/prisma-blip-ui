import { signOut } from '@firebase/auth'
import auth from '@/lib/auth'

export default function useLogout() {
  let error = null

  async function logout() {
    error = null
    try {
      await signOut(auth)
      error = null
    } catch (err) {
      error = err.message
    }
  }

  return { error, logout }
}
