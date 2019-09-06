const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./util/fbAuth");


const { getAllScreams, postOneScream, getScream, commentOnScream, likeScream, unlikeScream } = require("./handlers/screams");
const {signup, login, uploadImage, addUserDetails, getAuthenticatedUser} = require("./handlers/users");


 // const firebase = require("firebase");
// firebase.initializeApp(firebaseConfig); 


//screams routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.get("/scream/:screamId", getScream);
app.post("/scream/:screamId/comment", FBAuth, commentOnScream);
app.get("/scream/:screamId/like", FBAuth, likeScream);
app.get("/scream/:screamId/unlike", FBAuth, unlikeScream);
//delete scream
//like a scream
//unlike a scream
//comment on scream

//users routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser)


exports.api = functions.region("us-central1").https.onRequest(app);
