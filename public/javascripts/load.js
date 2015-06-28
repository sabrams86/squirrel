var loadState = {

  preload: function () {

    var loadingLabel = game.add.text(80,150, 'loading...', {font: '30px Courier', fill: 'red'});
    game.load.image('tree', 'images/trunk.jpg');
    game.load.image('acorn', 'images/acorn2.png');
    game.load.spritesheet('squirrel', 'images/squirrelSprite.png', 30, 50);
    game.load.image('home', 'images/home.png');
    game.load.spritesheet('button-start', 'images/button-start.png', 401, 143);
    game.load.image('startBackground', 'images/start_background.png');

  },

  create: function () {
    game.state.start('menu');
  },

}
