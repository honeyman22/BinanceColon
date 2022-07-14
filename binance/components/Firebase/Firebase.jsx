// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { ProfileAtom } from "../../atoms/ProfileAtom";
import { useRouter } from "next/router";
import React from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn3b9eE1lEEUaxH3m39e-8tTyeXfaNRsw",
  authDomain: "binance-f4b13.firebaseapp.com",
  projectId: "binance-f4b13",
  storageBucket: "binance-f4b13.appspot.com",
  messagingSenderId: "850263521460",
  appId: "1:850263521460:web:9ae2c866a23c9518013fe1",
  measurementId: "G-JMZLT6PH2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();

export const db = getFirestore(app);

const Provider = new GoogleAuthProvider();

export const signInWithGoogle = async () =>
  await signInWithPopup(auth, Provider);
