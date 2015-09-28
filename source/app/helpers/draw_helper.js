class DrawHelper {
  static drawArrow(canvas, from, to) {
    var diff = Math.abs(to - from)
    var circle_rx = Math.round(Math.pow(diff/20, 1.5))
    var circle_ry = Math.round(Math.pow(diff/40, 1.5))

    canvas.path(`M ${from + 5}, 100 A${circle_rx}, ${circle_ry} 0 0, 1 ${to}, 100`).attr({
      'fill': 'none',
      'stroke': '#ED00A2',
      'stroke-width': 2
    })

    var gradusOfArrow = 30 + Math.round(diff/8.7)

    canvas.path(`M ${to-15} 95 L ${to}, 100 L ${to-15} 105`).attr({
      'stroke': '#ED00A2',
      'fill': '#ED00A2',
      'stroke-width': 2,
      'transform': `rotate(${gradusOfArrow}, ${to}, 100)`
    })
  }
}

export default DrawHelper
