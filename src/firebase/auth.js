import { auth } from './firebase';

//Sign up
// export const doCreateUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);
//Sign in
// export const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailPassword(email, password);
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);


//Sign out
export const doSignOut = () => auth.signOut();

// export const doPasswordReset = (email) => auth.currentUser.updatePassword(password);
