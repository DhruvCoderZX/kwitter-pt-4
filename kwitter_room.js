var firebaseConfig = {
    apiKey: "AIzaSyA_D1uyNtIJlkKYxA_dMUxKIvSlhuKe3PU",
    authDomain: "kwitter-project-45a04.firebaseapp.com",
    databaseURL: "https://kwitter-project-45a04-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-45a04",
    storageBucket: "kwitter-project-45a04.appspot.com",
    messagingSenderId: "745783189778",
    appId: "1:745783189778:web:9f703a06fac53d684453cb",
    measurementId: "G-TKBRYRB184"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML="Welcome To Kwitter! "+user_name+".";

    function addRoom(){
          room_name=document.getElementById("room_name").value ;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding Room Name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });
      });
      }
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";    
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}