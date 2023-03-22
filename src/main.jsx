import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVyNVXjslq7IWowe9hHqCRuFPXKTAnP7w",
  authDomain: "botanica-plantas.firebaseapp.com",
  projectId: "botanica-plantas",
  storageBucket: "botanica-plantas.appspot.com",
  messagingSenderId: "560339832367",
  appId: "1:560339832367:web:9a720e82670f71ab2940da"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

