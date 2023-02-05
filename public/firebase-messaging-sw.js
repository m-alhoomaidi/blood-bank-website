importScripts("https://www.gstatic.com/firebasejs/9.16.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.16.0/firebase-messaging-compat.js")

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    apiKey: "AIzaSyC-WrbSA7o6lA6yTw98MTRHKhU7bH8hKcc",
    authDomain: "blood-bank-df3f9.firebaseapp.com",
    projectId: "blood-bank-df3f9",
    storageBucket: "blood-bank-df3f9.appspot.com",
    messagingSenderId: "961191689727",
    appId: "1:961191689727:web:2e60aff3874ce4b1ee3bca",
    measurementId: "G-3H704K1FH8"
});

// Initialize Firebase
const messaging =firebase.messaging();

messaging.onBackgroundMessage(payload =>{
    console.log("rrytfhgfhghhjg");
    const notificationTitle=payload.notification.title;
    const notificationOptions={
        body:payload.notification.body,
        icon:""
    }
    return self.registration.showNotification(notificationTitle,notificationOptions);
})