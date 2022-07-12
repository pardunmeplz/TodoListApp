import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';

export async function newUser(email, password){
auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    Snackbar.show({text:'User created successfully !', duration:Snackbar.LENGTH_LONG})
    console.log('User account created & signed in!');
  })
  .catch(error => {

    Snackbar.show({text: error.message, duration:Snackbar.LENGTH_LONG})
  });
}

export async function signIn(email, password){
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      Snackbar.show({text:'Signed in!', duration:Snackbar.LENGTH_LONG})
    })
    .catch(error => {
      Snackbar.show({text:error.message, duration:Snackbar.LENGTH_LONG})
    });
  }
  

export async function signOut(){
await auth()
  .signOut()
  .then(() => 
  Snackbar.show({text:'User logged out', duration:Snackbar.LENGTH_LONG}));
}

export function loggedIn()
{
  return auth().currentUser != null
}

