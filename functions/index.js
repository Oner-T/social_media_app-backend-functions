const functions = require("firebase-functions");

const express = require("express");


const { getAllScreams, postOneScream } = require("./handlers/screams");
const {signup, login} = require(".handlers/users");

const app = express();

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);


//screams routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

//users routes
app.post("/signup", signup);
app.post("/login", login);






exports.api = functions.region("europe-west2").https.onRequest(app);
