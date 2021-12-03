import admin from 'firebase-admin'

let adminApp

if (!admin.apps.length) {
  adminApp = admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
  })
}

const adminAuth = admin.auth(adminApp)
export default adminAuth
