import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyAxrpbOnEezkn91WtEg8CJXpxCNwxB8kC0",
    authDomain: "kwitter-project-286bf.firebaseapp.com",
    databaseURL: "https://kwitter-project-286bf-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-286bf",
    storageBucket: "kwitter-project-286bf.appspot.com",
    messagingSenderId: "1093890736859",
    appId: "1:1093890736859:web:cef3e38bac4200f0dc82fe"
  };
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name") ;
  room_name = localStorage.getItem("Room_name") ; 

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name , 
          message: msg ,
          like : 0  
    }) ;
    document.getElementById("msg").innerHTML = "" ; 
} 

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
   console.log(firebase_message_id) ;
   console.log(message_data) ;
   name = message_data['name'] ;
   message = message_data['message'] ;
   like = message_data['like'] ;
   name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>" ; 
   message_with_tag = "<h4 class = 'messageh4'>" + message + "</h4>" ; 
   like_btn = "<button class = 'btn btn-warning' id ="+firebase_message_id + " value = "+ like +" onclick = 'update_like(this.id)'>" ;
   span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up>like:"+like+"</span></button><hr>" ; 
 row = name_with_tag + message_with_tag + like_btn + span_with_tag ; 
 document.getElementById("output").innerHTML += row
//End code
 } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name") ;
    localStorage.removeItem("Room_name") ;
    window.location = "index.html" 
}



