
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBRJPnvxgdYzd5gt2SRWYvtbZuE3NRBYWo",
    authDomain: "ivape-2d0eb.firebaseapp.com",
    projectId: "ivape-2d0eb",
    storageBucket: "ivape-2d0eb.firebasestorage.app",
    messagingSenderId: "808240931713",
    appId: "1:808240931713:web:efa8c4adbfc3fe31937e80"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)

  console.log(db)

//Function to write user data to Firebase Realtime
function writeUserData(userId, firstname, lastname) {
    set(ref(db,'users/' + userId), {
        firstname: firstname,
        lastname: lastname,
    });
}

writeUserData(1,"Ukesh","Maharjan")