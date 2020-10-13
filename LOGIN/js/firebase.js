var appFB = {};
(function () {
    // Make sure you replace this code with youre api key, that you get from firebase
    var config = {
        apiKey: "AIzaSyBa8dTFYyxUkWQz-VYXZbm4liUCuq91_jc",
    authDomain: "login-uzenet.firebaseapp.com",
    databaseURL: "https://login-uzenet.firebaseio.com",
    projectId: "login-uzenet",
    storageBucket: "login-uzenet.appspot.com",
    messagingSenderId: "790094741391",
    appId: "1:790094741391:web:0741b22d766192634895fa",
    measurementId: "G-64W02E48SD"
    };
    firebase.initializeApp(config);
    appFB = firebase;
})();
