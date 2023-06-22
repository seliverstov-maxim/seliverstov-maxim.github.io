const initPlayerView = (x = 100, y = 100, minX = 0, maxX = 640) => {
  let playerView = new PlayerView(x, y, minX, maxX);

  playerView.animations = {
    idle: createAnimatedStripe(17, 'minotaur_idle'),
    walk: createAnimatedStripe(23, 'minotaur_walking')
  }

  playerView.applyAnimation();

  return playerView;
}
