import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Button from '@material-ui/core/Button';

import firebase from '../services/firebase';
import firebaseAuthConfig from '../config/firebaseAuthConfig';
import useIsSignedIn from '../hooks/useIsSignedIn';

export default function HomePage() {
  const { isSignedIn } = useIsSignedIn();

  return (
    <div>
      {isSignedIn ? (
        <div>
          <p>Welcome, {firebase.auth().currentUser.email}</p>
          <Button onClick={() => firebase.auth().signOut()}>Sign Out</Button>
        </div>
      ) : (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
}
