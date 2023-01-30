const firebaseConfig = {
  apiKey: 'AIzaSyDcLHn4ynu2oXakLn6xqZt75pOkxC-f3v0',
  authDomain: 'contactform-6765f.firebaseapp.com',
  projectId: 'contactform-6765f',
  storageBucket: 'contactform-6765f.appspot.com',
  messagingSenderId: '649434620838',
  appId: '1:649434620838:web:fc892fee49a7339d6fa567',
};
firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('messages');
function submitForm(e) {
  e.preventDefault();
  var t = getInputVal('name'),
    a = getInputVal('email'),
    s = getInputVal('subject'),
    n = getInputVal('message');
  saveMessage(t, a, s, n),
    (document.querySelector('#sendmessage').style.display = 'block'),
    setTimeout(function () {
      document.querySelector('#sendmessage').style.display = 'none';
    }, 3000),
    setTimeout(function () {
      (document.getElementById('name').value = ''),
        (document.getElementById('email').value = ''),
        (document.getElementById('subject').value = ''),
        (document.getElementById('message').value = '');
    }, 500);
}
function getInputVal(e) {
  return document.getElementById(e).value;
}
function saveMessage(e, t, a, s) {
  messagesRef.push().set({ name: e, email: t, subject: a, message: s });
}
document.getElementById('contactForm').addEventListener('submit', submitForm);
