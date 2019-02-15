import { fireapp as firebase } from '../config/firebase'

export const signIn = ({email, password}) =>
  new Promise((resolve, reject) =>
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => resolve(user))
    .catch(err => reject(err))
  );

export const signOut = () =>
  new Promise((resolve, reject) => 
  firebase.auth().signOut()
    .then(() => resolve('Sign-out successful'))
    .catch(err => reject(err))
  );

export const getCurrentUser = () => {
  const { email, uid } = firebase.auth().currentUser
  return { email, uid }
};