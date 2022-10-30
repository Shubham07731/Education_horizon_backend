const { createCanvas } = require("canvas");
const { performance } = require("perf_hooks");
let start = performance.now();
function getMyNewColor(colors = []) {
  const width = 256;
  const height = 128;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  const getDataFromImage = ctx.createImageData(width, height);
  let i = 4;
  while (i < getDataFromImage.data.length) {
    let iColor = i / 4;

    getDataFromImage.data[i] = colors[iColor][0];
    getDataFromImage.data[i + 1] = colors[iColor][1];
    getDataFromImage.data[i + 2] = colors[iColor][2];
    getDataFromImage.data[i + 3] = colors[iColor][3];
    i = i + 4;
  }
  ctx.putImageData(getDataFromImage, 0, 0);
  return canvas.toDataURL();
}

module.exports = {
  getMyColors: (req, res) => {
    // lets create a canvas

    // As from the question I got increment value which is 8 and number of steps is 32 means I have to create a empty array of size 32

    // create a empty array to map rgb values
    const rgbArray = new Array();
    const nu_of_steps = 32;
    const total_difference = 8;
    // we have to ignore zero so we must have to add +1

    var diff_array = [...new Array(nu_of_steps + 1)].map(
      (key, value) => value * total_difference
    );
    diff_array.splice(0, 1);
    alpha = 255;
    diff_array.map((color1) => {
      diff_array.map((color2) => {
        diff_array.map((color3) => {
          rgbArray.push([color1, color2, color3, alpha]);
        });
      });
    });

    // let me shuffled the color
    let shuffled = rgbArray
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    let end = performance.now();
    let value = end - start;
    console.log("loop time", `${value}ms`);
    res.json({
      message: JSON.stringify(getMyNewColor(shuffled)),
    });
  },
};
