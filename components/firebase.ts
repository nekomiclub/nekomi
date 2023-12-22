import { initializeApp } from 'firebase/app';
import { env } from '../config'

const firebaseConfig = {
  apiKey: env.FIREBASE_APIKEY,
  authDomain: "auth.animee.club",
  projectId: "animee-core",
  storageBucket: "animee-core.appspot.com",
  messagingSenderId: env.FIREBASE_MSI,
  appId: env.FIREBASE_APPID
};

export const firebaseApp = initializeApp(firebaseConfig);