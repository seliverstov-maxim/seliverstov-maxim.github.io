const initPlayerView = (x = 100, y = 100, screenSize = 640) => {
  let playerView = new PlayerView(x, y, screenSize,
  {
    idle: createAnimatedStripe(11, 'minotaur_idle'),
    walk: createAnimatedStripe(17, 'minotaur_walking')
  });


  playerView.applyAnimation();

  return playerView;
}
