var config = {
  apiKey: "AIzaSyBidEoT9UhaxHm0z3ZHLUiMVJs2nHg6RnM",
  authDomain: "wodchargen.firebaseapp.com",
  databaseURL: "https://wodchargen.firebaseio.com",
  projectId: "wodchargen",
  storageBucket: "wodchargen.appspot.com",
  messagingSenderId: "679200538033"
};
firebase.initializeApp(config);
var ref = firebase.database().ref();