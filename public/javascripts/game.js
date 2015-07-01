
  var game = new Phaser.Game(1000, 600, Phaser.AUTO, '');
  game.state.add('boot', bootState);
  game.state.add('load', loadState);
  game.state.add('menu', menuState);
  game.state.add('play', playState);
  game.state.add('win', winState);
  game.state.add('lose', loseState);

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
  var weapons = [];
  var currentWeapon = 0;
  var weaponName = null;
  var sky;
  var barriers;
  var timer;
  var timerEvent;
  var milliseconds = 0;
  var seconds;
  var minutes;
  var gameover = false;
  var totalScore;
  var acorn;
  var cat;
  var start = true;
  var once = true;
