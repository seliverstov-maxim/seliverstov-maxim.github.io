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

const chevronePath = (x, y, w, h, border = 1, direction = 'left') => {
  border = Math.ceil(border / 2);
  if (direction == 'left') {
    return [
      x + w / 2, y - h / 2,
      x - w / 2, y,
      x + w / 2, y + h/ 2,

      x + w / 2 + border, y + h/ 2 - border,
      x - w / 2 + border, y,
      x + w / 2 + border, y - h / 2 + border
    ]
  }

  if (direction == 'right') {
    return [
      x - w / 2, y - h / 2,
      x + w / 2, y,
      x - w / 2, y + h/ 2,

      x - w / 2 - border, y + h/ 2 - border,
      x + w / 2 - border, y,
      x - w / 2 - border, y - h / 2 + border
    ]
  }
}
const drawController = (stage, x, y) => {
  const radius = 75;
  window.graphics = new PIXI.Graphics();
  graphics.x = x;
  graphics.y = y;
  graphics.width = radius * 2;
  graphics.height = radius * 2;
  let color = 0x00DEFF;
  graphics.lineStyle(0);
  graphics.beginFill(color, 1);
  graphics.drawCircle(0, 0, radius);
  graphics.endFill();

  color = 0x6FEDFF;
  graphics.lineStyle(1, color, 1);
  graphics.beginFill(color, 1);
  graphics.drawPolygon(chevronePath(20 - radius, 0, radius / 5, radius / 2, 4, 'left'));
  graphics.drawPolygon(chevronePath(radius - 20, 0, radius / 5, radius / 2, 4, 'right'));
  graphics.endFill();

  graphics.filters = [new PIXI.filters.AlphaFilter(0.3)];
  stage.addChild(graphics);
  return graphics;
}
