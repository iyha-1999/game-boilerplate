import { Users } from '../store/initialState';

export const SIGN_IN = 'SIGN_IN';
type SignInAction = {
  type: string;
  payload: {
    isSignedIn: boolean;
    uid: string;
    userName: string;
  };
};
export const signInAction = (userState: Users): SignInAction => {
  return {
    type: 'SIGN_IN',
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      userName: userState.userName,
    },
  };
};

export const SIGN_OUT = 'SIGN_OUT';
type SignOutAction = {
  type: string;
  payload: {
    isSignedIn: boolean;
    uid: string;
    userName: string;
  };
};

export const signOutAction = (): SignOutAction => {
  return {
    type: `SIGN_OUT`,
    payload: {
      isSignedIn: false,
      uid: '',
      userName: '',
    },
  };
};
