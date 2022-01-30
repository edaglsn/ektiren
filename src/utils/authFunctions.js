import {AccessToken, LoginManager} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import {eventChannel} from 'redux-saga';
import firestore from '@react-native-firebase/firestore';
import {resolve} from 'react-native-svg/src/lib/resolve';
import {addNewUserToFirestore} from './firebaseServices';

export function authChannel() {
  if (this.authChannel) {
    return this.authChannel;
  }

  const evtChannel = eventChannel((emit) => {
    const unsubscribe = auth().onAuthStateChanged(
      (user) => emit({user}),
      (error) => emit({error}),
    );

    console.log('unsubscribed', unsubscribe);

    return unsubscribe;
  });

  this.authChannel = evtChannel;

  return evtChannel;
}

export const facebookLogin = async () => {
  try {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    console.log('data', data);

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(facebookCredential)
      .then((user) => {
        addUserToFirestoreIfNotExist(user);
      })
      .catch((error) => {
        console.log('Something went wrong with sign up: ', error);
      });

    return auth().currentUser;
  } catch (error) {
    console.log({error});
  }
};

export const phoneLogin = (phoneNumber) => async () => {
  try {
    const phoneLoginConfirmation = await auth().signInWithPhoneNumber(
      phoneNumber,
    );

    return phoneLoginConfirmation;
  } catch (error) {
    console.log({error});
  }
};

export const phoneLoginValidatePin =
  (phoneLoginConfirmation, code) => async () => {
    try {
      const confirmation = await phoneLoginConfirmation
        .confirm(code)
        .then((user) => {
          addUserToFirestoreIfNotExist(user);
        })
        .catch((error) => {
          console.log('Something went wrong with sign up: ', error);
        });

      return confirmation;
    } catch (error) {
      console.log({error});
    }
  };

const addUserToFirestoreIfNotExist = (user) => {
  const docRef = firestore().collection('Users').doc(auth().currentUser.uid);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log('user');
        //user exists then just update the login time
        return user;
      } else {
        console.log('user');

        //user doesn't exist - create a new user in firestore
        resolve(addNewUserToFirestore(user));
      }
    })
    .catch((error) => {
      console.error('Checking if customer exists failed" ' + error);
    });
};
