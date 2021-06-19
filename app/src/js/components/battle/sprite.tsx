import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, AnimatedSprite, useApp } from '@inlet/react-pixi';

// spriteのjsonを読み込み時、Pixiで使用するTextuerオブジェクトに変換するために使用する
import { Texture } from 'pixi.js';

// 参照先を現在はimagesにしているが、後にsprite専用のディレクトリについて考える
// _dirnameは相対パス
const spritesheet = `${__dirname}/images/sprite/sprite.json`;

const Sprite = () => {
  // PIXIのTextureオブジェクト格納用配列、型宣言用
  const textureArray: Array<Texture> = [];
  const [frames, setFrames] = React.useState(textureArray);
  // PIXI.Applicationクラス内のload機能のみを抽出し、使用するためにインスタンスを作成している
  // TextuerPackerから吐き出される形式のメタデータを読み込み、テクスチャ配列に変換するため
  // 作成したテクスチャ配列はstateに格納する
  const app = useApp();
  const [width, height] = [500, 500];

  // load
  React.useEffect(() => {
    app.loader.add(spritesheet).load((_, resource) => {
      const resourceFrames = resource[spritesheet].data.frames;
      console.log(resource);
      console.log(resourceFrames);
      const generateFrames = Object.keys(resourceFrames).map((frame) =>
        Texture.from(frame)
      );
      // useEffect(DOMレンダリングの後、スプライトが読み込まれている状態でstateを変更し、初回レンダリングを飛ばした後に再レンダリングされる)
      setFrames(generateFrames);
    });
    // 空の配列が渡された場合、マウント・アンマウント時のみ第一引数の関数を実行する
    // 第2引数に値の配列が渡された場合、最初のマウント時と与えられた値に変化があった場合のみ第１引数の関数を実行
    // 第2引数を空にすると、Render毎に実行される関数となる
    // 空配列にするとアンマウント時(DOM から削除されるとき)に再実行されてしまうため、今回はマウント/app.loaderの変化時のみの処理に実装している
    // app.loaderが変化する時はこの一回きりしかないと想定する。理由はapp.loaderはTextuer Packer形式のjsonを読み込むだけに使用する、使い捨てのインスタンスのため
  }, [app.loader]);

  // reactのrenderの初回レンダリングを飛ばす(useEffectでのスプライト読み込み前に、renderが走るのを避ける)
  if (frames.length === 0) {
    return null;
  }

  return (
    // PIXI.Containerと同じ。Containerは描画用オブジェクトをまとめるもの。複数存在してもよく、zIndexで重ねるなど、既存のPIXI.Container apiを使用する
    <Container x={width / 2} y={height / 2}>
      <AnimatedSprite
        animationSpeed={0.1}
        isPlaying
        textures={frames}
        anchor={0.5}
        scale={1.5}
      />
    </Container>
  );
};

export default Sprite;
