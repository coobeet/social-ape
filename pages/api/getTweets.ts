import { NextApiRequest, NextApiResponse } from 'next';

import { firebase } from '../../services';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const querySnapshot = await firebase.firestore().collection('tweets').get();
  res.status(200).json(querySnapshot.docs.map((doc) => doc.data()));
};
