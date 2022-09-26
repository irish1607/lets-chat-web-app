var firebaseConfig = {
    apiKey: "AIzaSyBxFGsVyKFNzhgWGDY-O0ROdT54mGQxgjE",
    authDomain: "kwitter-webapp-b75e1.firebaseapp.com",
    projectId: "kwitter-webapp-b75e1",
    storageBucket: "kwitter-webapp-b75e1.appspot.com",
    messagingSenderId: "210573737524",
    appId: "1:210573737524:web:f338660afc4e3fd491d461",
    measurementId: "G-TCG838KVRB"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics() ;

    user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
         childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  