  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDKsnEVjx1X5AwaBrCz9AL4H_Hjftqp_Cs",
    authDomain: "contactform-e7964.firebaseapp.com",
    databaseURL: "https://contactform-e7964.firebaseio.com",
    projectId: "contactform-e7964",
    storageBucket: "contactform-e7964.appspot.com",
    messagingSenderId: "940721419256",
    appId: "1:940721419256:web:f9f860d54cb7fc960c1c0d",
    measurementId: "G-YTDC2YG0WS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference message collection
var messagesRef = firebase.database().ref('messages');


document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
e.preventDefault();

var name = getInputVal('name');
var contactnumber = getInputVal('contactnumber');
var email = getInputVal('email');
var message = getInputVal('message');

saveMessage(name, contactnumber, email, message);

document.querySelector('.alert').style.display = 'block';

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);

document.getElementById('contactForm').reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, contactnumber, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        contactnumber: contactnumber,
        email: email,
        message: message
    });
}