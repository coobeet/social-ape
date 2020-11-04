import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from '../config/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  if ('measurementId' in firebaseConfig) {
    firebase.analytics();
  }
}

export default firebase;
