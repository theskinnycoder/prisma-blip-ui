import { updateProfile } from '@firebase/auth'
import auth from '@/lib/auth'

export default function useUserProfile() {
  async function addHandle({ handle }) {
    await updateProfile(auth?.currentUser, {
      displayName: handle,
    })
    return auth.currentUser?.displayName
  }

  return { addHandle }
}
