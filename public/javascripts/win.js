var winState = {

  create: function () {
  totalScore = (acornCount * 10) + (minutes * 60) + (seconds * 1);
  var winLabel = game.add.text(80,100, 'You Won!', {font: '30px Courier', fill: 'yellow'});
  var score = game.add.text(80,150, 'Your total score is ' + totalScore + "points!", {font: '30px Courier', fill: 'orange'});
  var restartLabel = game.add.text(700,450, 'Press Enter to Restart', {font: '15px Courier', fill: 'lightblue'});
  var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  enterKey.onDown.addOnce(this.restart, this);
  this.recordScore();
  },

  recordScore: function () {
    var data = {"score": totalScore, "time": minutes.substr(-2) + ":" + seconds.substr(-2), "acorns": acornCount};
    var scoreXhr = new XMLHttpRequest;
    scoreXhr.open('post', '/score', true);
    scoreXhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    scoreXhr.send(JSON.stringify(data));
  },

  restart: function () {
    game.state.start('menu');
  },

}
