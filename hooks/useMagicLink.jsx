import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from '@firebase/auth'
import cookie from 'js-cookie'

import auth from '@/lib/auth'
import { BASE_URL } from '@/utils/constants'
import { formatUser } from '@/utils/functions'
import { useRouter } from 'next/router'
import { useUserProfile } from '.'

export default function useMagicLink() {
  const { addHandle } = useUserProfile()

  const { asPath } = useRouter()
  let error = null

  // Send magic link
  async function sendMagicLink({ handle, email }) {
    error = null

    try {
      await sendSignInLinkToEmail(auth, email, {
        url: BASE_URL,
        handleCodeInApp: true,
      })
      cookie.set('handle', handle)
      cookie.set('magicEmail', email)
      error = null
    } catch (err) {
      error = err.message
    }
  }

  // Login with magic link
  async function loginWithMagicLink() {
    error = null

    try {
      const emailLink = asPath
      console.log(emailLink)
      if (isSignInWithEmailLink(auth, emailLink)) {
        const email = cookie.get('magicEmail')
        const handle = cookie.get('handle')
        const { user } = await signInWithEmailLink(auth, email, emailLink)
        await addHandle({ handle })

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

        cookie.remove('magicEmail')
        cookie.remove('handle')
        error = null
        return loggedInUser
      } else {
        error = 'Invalid link'
      }
    } catch (err) {
      error = err.message
    }
  }

  return {
    error,
    sendMagicLink,
    loginWithMagicLink,
  }
}
