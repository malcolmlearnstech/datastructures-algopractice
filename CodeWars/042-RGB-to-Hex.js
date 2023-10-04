function rgb(r, g, b) {
  if (r < 0) {
    r = 0;
  }
  if (r > 255) {
    r = 255;
  }
  if (g < 0) {
    g = 0;
  }
  if (g > 255) {
    g = 255;
  }
  if (b < 0) {
    b = 0;
  }
  if (b > 255) {
    b = 255;
  }

  let hexR = r.toString(16).toUpperCase();
  let hexG = g.toString(16).toUpperCase();
  let hexB = b.toString(16).toUpperCase();

  if (hexR.length === 1) {
    hexR = '0'.concat(hexR);
  }
  if (hexG.length === 1) {
    hexG = '0'.concat(hexG);
  }
  if (hexB.length === 1) {
    hexB = '0'.concat(hexB);
  }

  return hexR + hexG + hexB;
}
