function updateTimer() {
  if (timer.running) {
    game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 20, 14, "orange");
  }
  else {
    game.debug.text("Done!", 2, 14, "#0f0");
  }
}

var formatTime = function(s) {
    // Convert seconds (s) to a nicely formatted and padded time string
    minutes = "0" + Math.floor(s / 60);
    seconds = "0" + (s - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
}
