var loadState = {

  preload: function () {
    var loadingLabel = game.add.text(80,150, 'loading...', {font: '30px Courier', fill: 'red'});
    game.load.image('tree', 'images/tiletree.png');
    game.load.spritesheet('window', 'images/windows.png', 30, 30);
    game.load.image('grass', 'images/grass.png');
    game.load.image('sky', 'images/widesky.png');
    game.load.image('cat', 'images/cat.png');
    game.load.image('barrier', 'images/barrier.png');
    game.load.image('acorn', 'images/acorn.gif');
    game.load.spritesheet('squirrel', 'images/squirrelSprite.png', 30, 50);
    game.load.image('home', 'images/woodendoor.png');
    game.load.spritesheet('button-start', 'images/button-start.png', 401, 143);
    game.load.image('startBackground', 'images/start_background.png');
    for (var i = 1; i <= 11; i++) {
      game.load.image('bullet', 'images/acorn.gif');
    }
  },

  create: function () {
    game.state.start('menu');
  },

}
