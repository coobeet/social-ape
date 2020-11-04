import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Button from '@material-ui/core/Button';

import { firebase } from '../services';
import { firebaseUiConfig } from '../config';
import { useIsSignedIn } from '../hooks';

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
          uiConfig={firebaseUiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
}
