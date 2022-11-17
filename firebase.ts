// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK08eaYYCXuKpcrhC53oHq5ldXT_BvXDM",
  authDomain: "netflix-clone-ed7ad.firebaseapp.com",
  projectId: "netflix-clone-ed7ad",
  storageBucket: "netflix-clone-ed7ad.appspot.com",
  messagingSenderId: "959617131640",
  appId: "1:959617131640:web:99c23466736e057409398d"
};

// Initialize Firebase
const app = !getApps()?.length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }