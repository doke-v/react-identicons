import React, { useRef, useEffect } from 'react';

var range = function range(n, in_min, in_max, out_min, out_max) {
  return (n - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

var md5 = require("./js/md5.min.js");
var Identicon = function Identicon(props) {
  var fg = props.fg,
    bg = props.bg,
    count = props.count,
    palette = props.palette,
    string = props.string,
    size = props.size,
    getColor = props.getColor,
    padding = props.padding,
    className = props.className;
  var canvas = useRef(null);
  useEffect(function () {
    updateCanvas();
  });
  var updateCanvas = function updateCanvas() {
    var hash = md5(string);
    var block = Math.floor(size / count);
    var hashcolor = hash.slice(0, 6);
    if (palette && palette.length) {
      var index = Math.floor(range(parseInt(hash.slice(-3), 16), 0, 4095, 0, palette.length));
      fg = palette[index];
    }
    if (getColor) {
      getColor(fg || hashcolor);
    }
    var pad = padding;
    canvas.current.width = block * count + pad;
    canvas.current.height = block * count + pad;
    var arr = hash.split('').map(function (el) {
      el = parseInt(el, 16);
      if (el < 8) {
        return 0;
      } else {
        return 1;
      }
    });
    var map = [];
    map[0] = map[4] = arr.slice(0, 5);
    map[1] = map[3] = arr.slice(5, 10);
    map[2] = arr.slice(10, 15);
    var ctx = canvas.current.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    map.forEach(function (row, i) {
      row.forEach(function (el, j) {
        if (el) {
          ctx.fillStyle = fg ? fg : '#' + hashcolor;
          ctx.fillRect(block * i + pad, block * j + pad, block - pad, block - pad);
        } else {
          ctx.fillStyle = bg;
          ctx.fillRect(block * i + pad, block * j + pad, block - pad, block - pad);
        }
      });
    });
  };
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvas,
    className: className,
    style: {
      width: size,
      height: size
    }
  });
};
Identicon.defaultProps = {
  className: 'identicon',
  bg: 'transparent',
  count: 5,
  palette: null,
  fg: null,
  padding: 0,
  size: 400,
  getColor: null,
  string: ''
};

export { Identicon, Identicon as default };
