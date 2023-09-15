import { getApps, getApp, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBA_zpNcXekKcxzYykw8sheQ1pcmyzS7KE",
    authDomain: "vocab-dev-b2085.firebaseapp.com",
    projectId: "vocab-dev-b2085",
    storageBucket: "vocab-dev-b2085.appspot.com",
    messagingSenderId: "94416160311",
    appId: "1:94416160311:web:504bc5c553d0d16d08a1b2"
};

const app = getApps.length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }