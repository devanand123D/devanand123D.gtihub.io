// Import the functions you need from the SDKs you need
{/* <script type="module"> */}
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
{/* </script> */}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyCax4E34mVKHuSiMV_q5_BB68-so9il-jA",
  authDomain: "fir-pushnotification-bcfe7.firebaseapp.com",
  projectId: "fir-pushnotification-bcfe7",
  storageBucket: "fir-pushnotification-bcfe7.appspot.com",
  messagingSenderId: "507792574540",
  appId: "1:507792574540:web:5c4029f03afb07f89b0ce9",
  measurementId: "G-LETWLSYMR1"
});
// const messaging = firebase.messaging();

//  messaging.onBackgroundMessage(function(payload) {
//    console.log("Received background message ", payload);

//    const notificationTitle = payload.notification.title;
//    const notificationOptions = {
//      body: payload.notification.body,
//    };

//    self.registration.showNotification(notificationTitle, notificationOptions);
//  });
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 