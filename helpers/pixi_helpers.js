function createTextures(framesCount, spriteName) {
  const list = Array.from({length: framesCount}, (i, val) => `${spriteName}_${pad(val, 3)}.png`);
  return list.map((e) => PIXI.Texture.from(e))
}

function createAnimatedStripe(framesCount, spriteName) {
  let anim = new PIXI.AnimatedSprite(createTextures(framesCount, spriteName));
  anim.animationSpeed = 0.4;
  anim.anchor.set(0.5, 1);
  anim.x = 0;
  anim.y = 0;
  anim.play();

  return anim;
}

const renderCircle = (x, y, r, color) => {
  const g = new PIXI.Graphics();
  g.x = x;
  g.y = y;
  g.width = r;
  g.height = r;;

  g.lineStyle(0);
  g.beginFill(color, 1);
  g.drawCircle(0, 0, r);
  g.endFill();

  return g;
}

const setStickCoords = (stick, x, y) => {
  stick.x = x - stick.width / 2;
  stick.y = y - stick.height / 2;
}

const drawController = (stage, x, y) => {
  const radius = 75;
  let color;

  const controller = new PIXI.Container();
  controller.x = x - radius;
  controller.y = y - radius;
  controller.width = radius * 2;
  controller.height = radius * 2;
  controller.addChild(renderCircle(radius, radius, radius, 0x00DEFF));

  controller.filters = [new PIXI.filters.AlphaFilter(0.3)];
  controller.updateStickPosition = (x, y) => {
    const stick = controller.children[1];
    const stickRadius = diagonalLength(stick.width);
    const controllerRadius = controller._width / 2;
    function angle(cx, cy, ex, ey) {
      var dy = ey - cy;
      var dx = ex - cx;
      var theta = Math.atan2(dy, dx); // range (-PI, PI]
      return theta;
    }

    const radian = angle(0, 0, x, y);
    let radius = diagonalLength(x, y);
    if (radius > controllerRadius - stickRadius / 2) radius = controllerRadius - stickRadius / 2;

    setStickCoords(stick, controller.width / 2 + Math.cos(radian) * radius, controller.height / 2 + Math.sin(radian) * radius);
    return true;
  }

  const stick = new PIXI.Container();
  stickRadius = radius / 4;
  stick.addChild(renderCircle(stickRadius, stickRadius, stickRadius, 0xB894FF));
  stick.width = stickRadius * 2;
  stick.height = stickRadius * 2;
  setStickCoords(stick, controller.width / 2, controller.height / 2);

  controller.addChild(stick);

  stage.addChild(controller);
  return controller;
}
