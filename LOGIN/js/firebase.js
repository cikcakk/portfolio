var appFB = {};
(function () {
    // Make sure you replace this code with youre api key, that you get from firebase
    var config = {
        apiKey: "AIzaSyCV4Og8CIaxlolFhS8utpOSRczjrWLI-L0",
    authDomain: "firstproject-crud.firebaseapp.com",
    databaseURL: "https://firstproject-crud.firebaseio.com",
    projectId: "firstproject-crud",
    storageBucket: "firstproject-crud.appspot.com",
    messagingSenderId: "486599286694",
    appId: "1:486599286694:web:7f2ae63da5937176493967",
    measurementId: "G-FNKRZ00FWL"
    };
    firebase.initializeApp(config);
    appFB = firebase;
})();
