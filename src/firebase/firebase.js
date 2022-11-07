import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
   apiKey: "AIzaSyAdejJj1Y6pfqMtsbmOIkCUZxRmPWYPqU8",
   authDomain: "task-tracker-44a37.firebaseapp.com",
   projectId: "task-tracker-44a37",
   storageBucket: "task-tracker-44a37.appspot.com",
   messagingSenderId: "632805196399",
   appId: "1:632805196399:web:e537c4c4de75cae299039a",
   measurementId: "G-5MZGE8GQQC",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }
