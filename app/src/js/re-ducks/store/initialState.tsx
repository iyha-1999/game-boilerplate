// store types
export type PlayerSprite = {
  x: number;
  y: number;
};
export type InitialState = {
  battle: {
    playerSprite: PlayerSprite;
  };
};

// stateの初期値を設定する
const initialState: InitialState = {
  battle: {
    playerSprite: {
      x: 0,
      y: 0,
    },
  },
};

export default initialState;
