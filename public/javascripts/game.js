window.onload = function() {
  var game = new Phaser.Game(1000, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

  function preload() {
    game.load.image('tree', 'images/trunk.jpg');
    game.load.image('acorn', 'images/acorn.png');
    game.load.image('squirrel', 'images/squirrel.gif', 32, 32);
  }

  var player;
  var cursors;

  var acorns;

  function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(-300,-1600,'tree');
    player = game.add.sprite(0, 0, 'squirrel');

    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();
  }

  function update() {

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    if (cursors.right.isDown && cursors.up.isDown) {
      player.body.velocity.x = 300;
      player.body.velocity.y = -300;
    } else if (cursors.right.isDown && cursors.down.isDown) {
      player.body.velocity.x = 300;
      player.body.velocity.y = 300;
    } else if (cursors.left.isDown && cursors.up.isDown) {
      player.body.velocity.x = -300;
      player.body.velocity.y = -300;
    } else if (cursors.left.isDown && cursors.down.isDown) {
      player.body.velocity.x = -300;
      player.body.velocity.y = 300;
    } else if (cursors.right.isDown) {
      player.body.velocity.x = 300;
    } else if (cursors.down.isDown) {
      player.body.velocity.y = 300;
    } else if (cursors.up.isDown) {
      player.body.velocity.y = -300;
    } else if (cursors.left.isDown) {
      player.body.velocity.x = -300;
    }

  }

}
