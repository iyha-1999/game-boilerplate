import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, AnimatedSprite, useApp } from '@inlet/react-pixi';

import { Texture } from 'pixi.js';

const spritesheet = `${__dirname}/images/sprite/sprite.json`;

const Sprite = () => {
  const textureArray: Array<Texture> = [];
  const [frames, setFrames] = React.useState(textureArray);
  const app = useApp();
  const [width, height] = [500, 500];

  // load
  React.useEffect(() => {
    app.loader.add(spritesheet).load((_, resource) => {
      const resourceFrames = resource[spritesheet].data.frames;
      const generateFrames = Object.keys(resourceFrames).map((frame) =>
        Texture.from(frame)
      );
      console.log(generateFrames);
      setFrames(generateFrames);
    });
  }, textureArray);

  if (frames.length === 0) {
    return null;
  }

  return (
    <Container x={width / 2} y={height / 2}>
      <AnimatedSprite
        animationSpeed={0.1}
        isPlaying
        textures={frames}
        anchor={0.5}
      />
    </Container>
  );
};

export default Sprite;
