'use strict';

import React from 'react';
import PicNumber from './number.jsx'
import CoordConv from './../../helpers/coordinate_converter.js'

export default class FirstSummand extends React.Component {
  callback() { return this.props.callback }
  position() { return this.props.position }

  position(num) {
    var y = CoordConv.numToPixelY(num.in_expression)
    var x = Math.round(CoordConv.numToPixelX(num.in_expression) / 2)

    x = num.is_input ? x - 20 : x - 10
    return { x: x, y: y }
  }

  render() {
    var num = this.props.state.num1

    if(!num.show_num_on_pic) { return <span></span> }

    return <PicNumber
      pic_val={num.on_pic}
      exp_val={num.in_expression}
      position={this.position(num)}
      callback={this.callback()}/>
  }
}
