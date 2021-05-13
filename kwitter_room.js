var firebaseConfig = {
      apiKey: "AIzaSyDi3r47fD_b8qf5xMun5Xd9WUPUgEn9gqE",
      authDomain: "class93-c11a0.firebaseapp.com",
      projectId: "class93-c11a0",
      storageBucket: "class93-c11a0.appspot.com",
      messagingSenderId: "297016972662",
      appId: "1:297016972662:web:a647b330f4ad62d0415657",
      measurementId: "G-7ZBSS74Q4F"
    };

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
          localStorage.setItem("room_name", room_name)
          window.location = "kwitter_page.html";
    }

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       function redirectToRoomName(name){
             console.log(name);
             localStorage.setItem("room_name", name);
             window.location = "kwitter_page.html";x
       }
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_Names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>"
     document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();
