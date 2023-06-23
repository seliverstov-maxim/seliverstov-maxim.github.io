function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length-size);
}

function diagonalLength(w, h = null) {
  h ||= w;
  return Math.round(Math.sqrt(Math.pow(Math.abs(w), 2) + Math.pow(Math.abs(h), 2)));
}
