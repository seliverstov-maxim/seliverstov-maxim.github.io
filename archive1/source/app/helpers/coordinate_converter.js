class CoordinateConverter {
  static numToPixelX(val) { return Math.round(val * 39) }
  static numToPixelY(val) { return 42 - Math.round(val * 6) }
}

export default CoordinateConverter
