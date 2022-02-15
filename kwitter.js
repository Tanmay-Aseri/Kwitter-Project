function LoginUser(){
    user_name = document.getElementById("name").value ; 
    localStorage.setItem("name" , user_name) ; 
    window.location="kwitter_room.html" ; 
}