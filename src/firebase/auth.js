import auth from '@react-native-firebase/auth';

export function newUser(email, password){
auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error(error);
  });
}

export function signIn(email, password){
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Signed In!!');
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    });
  }
  

export async function signOut(){
auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}

