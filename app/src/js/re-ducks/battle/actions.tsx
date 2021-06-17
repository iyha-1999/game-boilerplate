import { PlayerSprite } from '../store/initialState';

export const CHANGE_PLAYER_SPRITE_COORDINAYE = 'CHANGE_PLAYER_SPRITE_COORDINAYE';
type ChangePlayerSpriteCoordinate = {
  type: string;
  payload: {
    x: number;
    y: number;
  };
};

export const changePlayerSpriteCoordinate = (playerSpriteState: PlayerSprite): ChangePlayerSpriteCoordinate => {
  return {
    type: `CHANGE_PLAYER_SPRITE_COORDINAYE`,
    payload: {
      x: playerSpriteState.x,
      y: playerSpriteState.y,
    },
  };
};
