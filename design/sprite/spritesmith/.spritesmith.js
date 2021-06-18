'use strict';

var util = require('util');

module.exports = [
  {
    src: './in/*.{png,gif,jpg}', // 元となる画像
    destImage: './out/sprite.png', // 生成されるスプライト画像
    destCSS: './out/sprite.json', // 生成されるスプライト情報のJSONファイル
    cssTemplate: require('spritesmith-texturepacker'), // 使用するテンプレート
    padding: 4, // 個々の画像の間隔[px]
    algorithmOpts: { sort: false }, // 画像の並べ方
  }
];