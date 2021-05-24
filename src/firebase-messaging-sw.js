importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js');


firebase.initializeApp(
    {
        apiKey: 'AIzaSyD-HFMJ74FkdKJBdRGPp6bkDFPxaYd4_28',
        authDomain: 'push-notification-64047.firebaseapp.com',
        projectId: 'push-notification-64047',
        storageBucket: 'push-notification-64047.appspot.com',
        messagingSenderId: '454222813349',
        appId: '1:454222813349:web:f0b4bc32b47be442d3954c',
        measurementId: 'G-FPD0QL2E6R',
    }
);

const messaging = firebase.messaging();