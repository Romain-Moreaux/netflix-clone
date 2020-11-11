import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed'

const config = {
  apiKey: 'AIzaSyBTTt6HwyJ1HHJuuTS6cHFa1Wo5GVs4kx8',
  authDomain: 'netflix-clone-1e60a.firebaseapp.com',
  databaseURL: 'https://netflix-clone-1e60a.firebaseio.com',
  projectId: 'netflix-clone-1e60a',
  storageBucket: 'netflix-clone-1e60a.appspot.com',
  messagingSenderId: '453076678966',
  appId: '1:453076678966:web:e39c7e77cd364430ed5b97',
}

const firebase = Firebase.initializeApp(config)
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase)
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase }
