import { getApp, getApps, initializeApp } from 'firebase/app'
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from 'firebase/auth'

if (!getApps().length) {
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

const app = getApp()

const auth = getAuth(app)

export const githubAuthProvider = new GithubAuthProvider()
export const googleAuthProvider = new GoogleAuthProvider()
export const twitterAuthProvider = new TwitterAuthProvider()

export default auth
