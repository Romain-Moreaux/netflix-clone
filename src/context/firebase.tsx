import React from 'react'
import { firebase } from '../lib/firebase.prod'
import { createContext } from 'react'

const FirebaseContext = createContext<any>(undefined)

const FirebaseProvider = ({ children }: { children: React.ReactNode }) => (
  <FirebaseContext.Provider value={{ firebase }}>
    {children}
  </FirebaseContext.Provider>
)

export default FirebaseProvider
