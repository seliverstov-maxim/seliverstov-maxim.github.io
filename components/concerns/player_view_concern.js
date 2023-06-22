const initPlayerView = (x = 100, y = 100, minX = 0, maxX = 640) => {
  let playerView = new PlayerView(x, y, minX, maxX,
  {
    idle: createAnimatedStripe(11, 'minotaur_idle'),
    walk: createAnimatedStripe(17, 'minotaur_walking')
  });


  playerView.applyAnimation();

  return playerView;
}
