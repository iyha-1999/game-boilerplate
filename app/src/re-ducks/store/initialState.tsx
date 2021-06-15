// store types
export type Users = {
  isSignedIn: boolean;
  uid: string;
  userName: string;
};
export type InitialState = {
  users: Users;
};

// stateの初期値を設定する
const initialState: InitialState = {
  users: {
    isSignedIn: false,
    uid: '',
    userName: '',
  },
};

export default initialState;
