import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCj-M38er1IOJiB-Z86kVVB88OavbjJRhA",
    authDomain: "cloud-project-92acb.firebaseapp.com",
    databaseURL: "https://cloud-project-92acb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cloud-project-92acb",
    storageBucket: "cloud-project-92acb.appspot.com",
    messagingSenderId: "733661163159",
    appId: "1:733661163159:web:fded7a6f62c84bea9903d2",
    measurementId: "${config.measurementId}"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);