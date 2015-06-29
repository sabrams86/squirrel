
  var game = new Phaser.Game(1000, 600, Phaser.AUTO, '');
  game.state.add('boot', bootState);
  game.state.add('load', loadState);
  game.state.add('menu', menuState);
  game.state.add('play', playState);
  game.state.add('win', winState);

  game.state.start('boot');

  var button;
  var startLabel;
  var enterKey;
  var player;
  var cursors;
  var moveUp;
  var moveDown;
  var moveRight;
  var moveLeft;
  var acornCount = 0;
  var acornCountText;
