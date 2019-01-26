import { fireapp } from '../config/fireBase';

export const signIn = (email, password) =>
  new Promise((resolve, reject) =>
  fireapp.auth().signInWithEmailAndPassword(email, password)
      .then(user => resolve(user))
      .catch(err => reject(err))
  );

export const signOut = () =>
  new Promise((resolve, reject) => 
  fireapp.auth().signOut()
      .then(() => resolve('Sign-out successful'))
      .catch(err => reject(err))
  );

  /*
export const onAuthStateChanged = () => {
  fireapp.auth().onAuthStateChanged(user => {
    if (user != null) {
      this.user = user;
      console.warn(this.user);
    }
  });
}*/