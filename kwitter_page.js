var firebaseConfig = {
  apiKey: "AIzaSyB27DMNuDkQK7e_NfnyLx4jMcrGjuBwmXA",
  authDomain: "kwitter1-a6c89.firebaseapp.com",
  databaseURL: "https://kwitter1-a6c89-default-rtdb.firebaseio.com",
  projectId: "kwitter1-a6c89",
  storageBucket: "kwitter1-a6c89.appspot.com",
  messagingSenderId: "697265456236",
  appId: "1:697265456236:web:9c34322f0df5e500d9c449",
  measurementId: "G-7DFYQVD2P5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0,
  });
  document.getElementById("msg").value = "";
}
