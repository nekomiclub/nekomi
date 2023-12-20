import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAonyJixltRbgINqakQYPqkj_yuAb2g4rI",
  authDomain: "auth.animee.club",
  projectId: "animee-core",
  storageBucket: "animee-core.appspot.com",
  messagingSenderId: "563218119856",
  appId: "1:563218119856:web:c0dca24f5df0531d754f75"
};

export const firebaseApp = initializeApp(firebaseConfig);