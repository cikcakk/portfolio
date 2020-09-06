var appFB = {};
(function () {
    // Make sure you replace this code with youre api key, that you get from firebase
    var config = {
        apiKey: "AIzaSyCal7HmODpMIwxroEIF-MvALsFnocHvQg4",
        authDomain: "cikcakk-ea825.firebaseapp.com",
        databaseURL: "https://cikcakk-ea825.firebaseio.com",
        projectId: "cikcakk-ea825",
        storageBucket: "cikcakk-ea825.appspot.com",
        messagingSenderId: "165930271012",
    };
    firebase.initializeApp(config);
    appFB = firebase;
})();
