import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {eventChannel} from 'redux-saga';
import {select} from 'redux-saga/effects';

export const addNewUserToFirestore = async (user) => {
  try {
    const {profile} = user.additionalUserInfo;
    const details = {
      userName: 'New Cuber',
      userStatus: 'Hi, I am a new Cuber!',
      circle: -1,
      lastLoginTime: firestore.FieldValue.serverTimestamp(),
    };

    const collection = await firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .set(details);
    return {user, details};
  } catch (e) {
    throw e;
  }
};

export const getFirebaseUserData = async (userUID) => {
  let profileData;
  let profileImage;

  function onResolve(foundUrl) {
    profileImage = foundUrl;
  }

  function onReject(error) {
    // console.log('err', error);
  }

  try {
    await firestore()
      .collection('Users')
      .doc(userUID)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          profileData = documentSnapshot.data();
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const reference = storage().ref('users' + '/' + userUID + '/' + 'profile');
    await reference.getDownloadURL().then(onResolve, onReject);

    return {profileData, profileImage};
  } catch (e) {
    throw e;
  }
};

export const getCircleList = async () => {
  try {
    let circleData = [];

    await firestore()
      .collection('Circles')
      .get()
      .then((querySnapshot) => {
        console.log('querySnapshot: ', querySnapshot);

        querySnapshot.forEach((documentSnapshot) => {
          circleData.push(documentSnapshot.data());
        });
      })
      .catch((err) => {
        console.log(err);
      });

    return circleData;
  } catch (e) {
    throw e;
  }
};

export const setUserCircle = async (user, circle) => {
  try {
    await firestore()
      .collection('Users')
      .doc(user.uid)
      .update({circle: circle})
      .then(() => {
        console.log('Circle Updated!');
      });
  } catch (e) {
    throw e;
  }
};

export const addUserToCircle = async (user, circle) => {
  try {
    console.log('user', user);
    await firestore()
      .collection('CirclesAndCrowds')
      .doc(circle)
      .collection('Members')
      .doc(user.uid)
      .set({user: user.uid}, {merge: true});
  } catch (e) {
    throw e;
  }
};

export const deleteUserFromCircle = async (user, circle) => {
  try {
    console.log('user', user);
    await firestore()
      .collection('CirclesAndCrowds')
      .doc(circle)
      .collection('Members')
      .doc(user.uid)
      .delete();
  } catch (e) {
    throw e;
  }
};

export const setUserProfileData = async (userData, user, userImage) => {
  try {
    console.log('set user saga', user);
    console.log('set userImage saga', userImage);

    await firestore()
      .collection('Users')
      .doc(user.uid)
      .update(userData)
      .then(() => {
        console.log('User added!');
      })
      .catch((err) => {
        console.log(err);
      });

    const reference = storage().ref('users' + '/' + user.uid + '/' + 'profile');
    const pathToFile = userImage;
    // uploads file
    await reference.putFile(pathToFile).catch((err) => {
      console.log(err);
    });
  } catch (e) {
    throw e;
  }
};

export const sendContactRequest = async (userData, user, userImage) => {
  try {
    console.log('user', user);
    await firestore()
      .collection('CirclesAndCrowds')
      .doc(circle)
      .collection('Members')
      .doc(user.uid)
      .set({user: user.uid}, {merge: true});
  } catch (e) {
    throw e;
  }
};

export const getContactRequestsChannel = (userUID) => async () => {
  if (this.getContactRequestsChannel) {
    return this.getContactRequestsChannel;
  }

  const evtChannel = eventChannel((emit) => {
    const subscriber = firestore()
      .collection('ChatRequests')
      .doc(userUID)
      .collection('Requests')
      .onSnapshot(
        (invitations) => {
          let requestList = [];
          invitations.docs.forEach((documentSnapshot) => {
            requestList.push(documentSnapshot.data());
          });
          emit({requestList});
        },
        (error) => emit({error}),
      );

    console.log('subscriber', subscriber);

    return subscriber;
  });

  this.getContactRequestsChannel = evtChannel;

  return evtChannel;
};

export function usersInCircleChannel() {
  if (this.usersInCircleChannel) {
    return this.usersInCircleChannel;
  }

  const evtChannel = eventChannel((emit) => {
    const subscriber = firestore()
      .collection('CirclesAndCrowds')
      .doc('AT')
      .collection('Members')
      .onSnapshot(
        (members) => {
          let peopleInCircle = [];
          members.docs.forEach((documentSnapshot) => {
            peopleInCircle.push(documentSnapshot.id);
          });
          emit({peopleInCircle});
        },
        (error) => emit({error}),
      );

    console.log('subscriber', subscriber);

    return subscriber;
  });

  this.usersInCircleChannel = evtChannel;

  return evtChannel;
}
