import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCR0ga8taGCQS_LNGT1oG7YX93ST--dS7M",
  authDomain: "varthajanapadanewsapp.firebaseapp.com",
  projectId: "varthajanapadanewsapp",
  storageBucket: "varthajanapadanewsapp.firebasestorage.app",
  messagingSenderId: "818823084784",
  appId: "1:818823084784:web:197bf7e0df71e51321a035",
  measurementId: "G-NEPMBFTVK2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
                                     