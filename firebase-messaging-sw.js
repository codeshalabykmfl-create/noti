importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAKF6Z9HSbF_m1L6QYUMAb6xc-20o2IYSc",
  authDomain: "massege-5ec76.firebaseapp.com",
  projectId: "massege-5ec76",
  messagingSenderId: "837311654111",
  appId: "1:837311654111:web:4bdf723a6f16ae301c616a"
});

const messaging = firebase.messaging();
