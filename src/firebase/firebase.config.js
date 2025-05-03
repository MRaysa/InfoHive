import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZsdARyYF5df_p3YynBF5ho0i6A4yE3x8",
  authDomain: "infohive-6269a.firebaseapp.com",
  projectId: "infohive-6269a",
  storageBucket: "infohive-6269a.firebasestorage.app",
  messagingSenderId: "1019098432756",
  appId: "1:1019098432756:web:9522ef9f94ca4b798f0aa1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
export default app;
