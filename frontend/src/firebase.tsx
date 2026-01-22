import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB77pEI3adtvzylF8b6ilYZ_3RMwfHuRuk",
    authDomain: "cloud-kakeibo.firebaseapp.com",
    projectId: "cloud-kakeibo",
    storageBucket: "cloud-kakeibo.firebasestorage.app",
    messagingSenderId: "491055793873",
    appId: "1:491055793873:web:3c26202268f2a8ec02a7f0",
    measurementId: "G-0QLQL2GB0W"
};

export const app = initializeApp(firebaseConfig);