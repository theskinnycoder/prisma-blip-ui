import { signInWithPopup } from '@firebase/auth'
import auth, {
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
} from '@/lib/auth'
import { formatUser } from '@/utils/functions'

export default function useSocialLogin() {
  let error = null

  async function loginWithSocials({ provider }) {
    error = null

    try {
      let providerFunc
      switch (provider) {
        case 'GITHUB':
          providerFunc = githubAuthProvider
          break
        case 'GOOGLE':
          providerFunc = googleAuthProvider
          break
        case 'TWITTER':
          providerFunc = twitterAuthProvider
          break
        default:
          break
      }

      const { user } = await signInWithPopup(auth, providerFunc)
      const loggedInUser = formatUser(user)

      await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          handle: loggedInUser.handle,
          email: loggedInUser.email,
        }),
      })

      error = null
      return loggedInUser
    } catch (err) {
      const { message } = err

      if (
        message !== 'Firebase: Error (auth/popup-closed-by-user)' &&
        message !== 'Firebase: Error (auth/cancelled-popup-request)'
      ) {
        error = message
      }
    }
  }

  return { error, loginWithSocials }
}
