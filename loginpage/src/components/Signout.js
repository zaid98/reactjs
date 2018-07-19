import React from 'react';

import { auth } from '../firebase';

const Signoutbutton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default Signoutbutton;
