import React, { Component } from 'react';
import md5 from "../js/md5.min"

class Identicon extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
      }
    componentDidMount() {
        this.updateCanvas(this.props);
    }
    componentWillReceiveProps(props){
        this.updateCanvas(props)
    }
    updateCanvas(props) {
        let {fg, bg, count, palette} = props
        let hash = md5(props.string)
        let block = Math.floor(props.size/count)
        let hashcolor = hash.slice(0,6)

        if(palette && palette.length) {
            let palette_index = Math.floor(range(parseInt(hash.slice(-3), 16), 0, 4095, 0, palette.length))
            fg = palette[palette_index]
        }

        if(this.props.getColor) {
            this.props.getColor(fg || hashcolor)
        }
        
        let pad = props.padding;
        this.canvas.current.width = block*count + pad
        this.canvas.current.height = block*count + pad
        let arr = hash.split("").map(el=> {
            el = parseInt(el, 16)
            if(el < 8) {return 0}
            else {return 1}
        })
           
        let map = [];

        map[0] = map[4] = arr.slice(0, 5)
        map[1] = map[3] = arr.slice(5, 10)
        map[2] = arr.slice(10, 15)
 
        const ctx = this.canvas.current.getContext('2d');
        ctx.imageSmoothingEnabled = false
        ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
        
        map.forEach((row, i) => {
            row.forEach((el, j) => {
                if (el) {
                    ctx.fillStyle = fg?fg:"#" + hashcolor  ;
                    ctx.fillRect(block * i + pad, block * j + pad, block - pad, block - pad);
                }
                else{
                    ctx.fillStyle = bg
                    ctx.fillRect(block * i + pad, block * j + pad, block - pad, block - pad);   
                }
            })
        })
    }
    render() {
      return (
        <canvas ref={this.canvas} className={this.props.className} style={{width: this.props.size, height: this.props.size}}/>
      );
    }
  }

  Identicon.defaultProps = {
    className: "identicon",
    bg: "transparent",
    count: 5,
    palette: null,
    fg: null,
    padding: 0,
    size: 400,
    getColor: null,
    string: ""
  }
  
  let range = function (n, in_min, in_max, out_min, out_max) {
    return (n - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
export default Identicon