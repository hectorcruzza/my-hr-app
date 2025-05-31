import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWtykmh-ha7ujtMRk-OlwUYxto6IlUKj8",
  authDomain: "hr-app-2568a.firebaseapp.com",
  projectId: "hr-app-2568a",
  storageBucket: "hr-app-2568a.firebasestorage.app",
  messagingSenderId: "619438635648",
  appId: "1:619438635648:web:356f602555133859e2c465",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
