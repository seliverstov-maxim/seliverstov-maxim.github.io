class PlayerView {
  _state;
  container;
  needSwitchAnimation;
  direction;
  needRedraw;
  scaleFactor = 0.15;
  x = 0;
  y = 0;
  minX = 0;
  maxX = 640
  originSpriteSize = 900;
  characterWidth = 135;
  characterCollisionShift = this.characterWidth / 4 - 10;

  constructor(x, y, minX, maxX) {
    this.state = PlayerView.STATES.IDLE;
    this.direction = PlayerView.DIRECTIONS.LEFT;
    this.x = x;
    this.y = y;
    this.minX = minX;
    this.maxX = maxX;

    this.container = new PIXI.Container();
    this.container.scale.x = this.characterWidth / this.originSpriteSize;
    this.container.scale.y = this.characterWidth / this.originSpriteSize;
    this.container.x = x;
    this.container.y = y;
  }

  static get STATES() { return {IDLE: 'idle', WALK: 'walk'} }
  static get DIRECTIONS() { return {RIGHT: 'right', LEFT: 'left'} }

  get isWalk() { return this.state == PlayerView.STATES.WALK }
  get isIdle() { return this.state == PlayerView.STATES.IDLE }
  get state() { return this._state; }

  set state(newState) {
    const oldState = this._state;
    this._state = newState;

    if (oldState == newState) return;
    if (!this.container) return;
    this.needSwitchAnimation = true;
  }

  get isGoRight() { return this.direction == PlayerView.DIRECTIONS.RIGHT }
  get idGoLeft() { return this.direction == PlayerView.DIRECTIONS.LEFT }

  tick(delta = 0) {
    if (!this.container) return;

    if (this.direction == PlayerView.DIRECTIONS.RIGHT && this.isWalk && this.container.x + delta + this.characterCollisionShift < this.maxX) {
      this.container.x += delta;
      this.container.scale.x = this.scaleFactor;
    }
    if (this.direction == PlayerView.DIRECTIONS.LEFT && this.isWalk && this.container.x - delta - this.characterCollisionShift > this.minX) {
      this.container.x -= delta;
      this.container.scale.x = -this.scaleFactor;
    }

    if (this.needSwitchAnimation) {
      this.needSwitchAnimation = false;
      this.applyAnimation();
    }
  }

  applyAnimation() {
    this.container.removeChildren();
    if (this.isWalk) {
      this.container.addChild(this.animations[PlayerView.STATES.WALK])
    } else {
      this.container.addChild(this.animations[PlayerView.STATES.IDLE])
    }
  }
}
