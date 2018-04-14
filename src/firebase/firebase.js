import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB7YO0KC7KCve6V8FxhNOxfQFH5xJGqLuw",
    authDomain: "wizardarmory.firebaseapp.com",
    databaseURL: "https://wizardarmory.firebaseio.com",
    projectId: "wizardarmory",
    storageBucket: "wizardarmory.appspot.com",
    messagingSenderId: "854113084142"
  };
  firebase.initializeApp(config);

const auth = firebase.auth();

export {
  auth,
}
// export default firebase;
