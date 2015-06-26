var loadState = {

  preload: function () {

    var loadingLabel = game.add.text(80,150, 'loading...', {font: '30px Courier', fill: 'red'});
    game.load.image('tree', 'images/trunk.jpg');
    game.load.image('acorn', 'images/acorn2.png');
    game.load.image('squirrel', 'images/squirrel.gif', 32, 32);
    game.load.spritesheet('button-start', 'images/button-start.png', 401, 143);
    game.load.image('startBackground', 'images/start_background.png');

  },

  create: function () {
    game.state.start('menu');
  },

}
