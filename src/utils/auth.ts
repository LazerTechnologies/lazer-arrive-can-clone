import { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'

export const logout = () => {
  auth().signOut()
}

export const useUser = () => {
  const [user, setUser] = useState()

  function onAuthStateChanged(user: any) {
    setUser(user)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  return user
}
export const login = (email: string, password: string) => {
  return new Promise<void>((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => resolve())
      .catch(error => {
        console.error(error)
        reject(error)
      })
  })
}
export const createUser = (email: string, password: string) => {
  return new Promise<void>((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('wtf')
        resolve()
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!')
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!')
        }

        console.error(error)
        reject(error)
      })
  })
}
