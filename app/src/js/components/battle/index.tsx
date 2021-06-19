import React from 'react';
import { Stage } from '@inlet/react-pixi';
import PlusButton from './plusButton';
import Sprite from './sprite';

const Battle = () => {
  return (
    <div>
      <PlusButton />
      <Stage width={1920} height={1080}>
        <Sprite />
      </Stage>
    </div>
  );
};

export default Battle;
