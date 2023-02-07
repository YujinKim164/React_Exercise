import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Auth 연결
import { getFirestore } from "firebase/firestore"; // Database 연결
import { getStorage } from "firebase/storage"; // storage 연결

const firebaseConfig = {
  apiKey: "AIzaSyAeUD0HRW0novh9N0PkZzMoZ-OpZEB_fEU",
  authDomain: "asfeqe-3c03b.firebaseapp.com",
  projectId: "asfeqe-3c03b",
  storageBucket: "asfeqe-3c03b.appspot.com",
  messagingSenderId: "199498978524",
  appId: "1:199498978524:web:6691d60b8ce5eaf8555019",
  measurementId: "G-4NHK0CR3EK"
};

const app = initializeApp(firebaseConfig);  //firebase 초기화
const auth = getAuth(app);
const dbService = getFirestore(app);
const storage = getStorage(app);

export { app, auth, dbService,storage };