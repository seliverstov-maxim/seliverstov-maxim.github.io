'use strict';

import React from 'react';
import PicNumber from './number.jsx'
import CoordConv from './../../helpers/coordinate_converter.js'

export default class SecondSummand extends React.Component {
  callback() { return this.props.callback }

  position(num1, num2) {
    var num1_pix_shift = CoordConv.numToPixelX(num1.in_expression)
    var num2_pix_shift = Math.round(CoordConv.numToPixelX(num2.in_expression)/2)

    var y = CoordConv.numToPixelY(num2.in_expression)
    var x = num1_pix_shift + num2_pix_shift

    x = num2.is_input ? x - 20 : x - 10
    return {x: x, y: y}
  }

  render() {
    var num1 = this.props.state.num1
    var num2 = this.props.state.num2

    if(!num2.show_num_on_pic) { return <span></span> }

    return <PicNumber
      pic_val={num2.on_pic}
      exp_val={num2.in_expression}
      position={this.position(num1, num2)}
      callback={this.callback()}/>
  }
}
