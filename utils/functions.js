export const formatUser = (user) => {
  return {
    uid: user?.uid,
    email: user?.email,
    handle: user?.displayName,
    photoURL: user?.photoURL,
    provider: user?.providerData[0]?.providerId,
  }
}
