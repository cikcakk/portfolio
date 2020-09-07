// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBJmO-FDRlAtzLJEeecrfd873CRLtqmy0U",
    authDomain: "form-adatok.firebaseapp.com",
    databaseURL: "https://form-adatok.firebaseio.com",
    projectId: "form-adatok",
    storageBucket: "form-adatok.appspot.com",
    messagingSenderId: "165461629532",
    appId: "1:165461629532:web:e10b7bc357ca3ffb802499",
    measurementId: "G-SW8G2LGTN1",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal("name");
    var company = getInputVal("company");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    var message = getInputVal("message");

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Clear form
    document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message,
    });
}
