
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvFGlUuuIHDlEGZroRvSF61E00yhbHOLU",
    authDomain: "testereact-2e594.firebaseapp.com",
    projectId: "testereact-2e594"

  };
  

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export {db}
