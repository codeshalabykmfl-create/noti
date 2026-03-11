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

messaging.onBackgroundMessage(function(payload) {

console.log("Message received:", payload);

const title = payload.notification.title;

const options = {
body: payload.notification.body,
icon: "https://cdn-icons-png.flaticon.com/512/1827/1827349.png"
};

self.registration.showNotification(title, options);

});
