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
document.getElementById("welcome").innerHTML = "Welcome" + user_name + "!" ;

function addRoom(){
  room_name =  document.getElementById("add_room").value ;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("Room_name", room_name ) ;
  window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Roomname:" + Room_names) ;
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>" ; 
   document.getElementById("output").innerHTML += row ; 
   });});}
    getData() ;

    function redirectToRoomName(name){
          console.log(name) ; 
          localStorage.setItem("Room_name", name) ;
          window.location =  "kwitter_page.html"
    }