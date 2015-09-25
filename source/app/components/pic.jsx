'use strict';

import React from 'react';
import SVG from 'svg.js';
import FirstSummand from './pic/first_summand.jsx'
import SecondSummand from './pic/second_summand.jsx'
import CoordConv from './../helpers/coordinate_converter.js'
import DrawHelper from './../helpers/draw_helper.js'

export default class Pic extends React.Component {
  p_state() { return this.props.state; }

  componentDidMount() {
    this.canvas = SVG('svg-graph')
    this.renderArrows()
  }

  renderArrows() {
    var num1 = parseInt(this.props.state.num1.in_expression)
    var num2 = parseInt(this.props.state.num2.in_expression)

    DrawHelper.drawArrow(this.canvas, CoordConv.numToPixelX(0), CoordConv.numToPixelX(num1))
    DrawHelper.drawArrow(this.canvas, CoordConv.numToPixelX(num1), CoordConv.numToPixelX(num1 + num2))
  }

  render() {
    return(
      <div className='pic'>
        <img src={require('./../images/sprite.png')} className='ruler' />
        <div className='graph'>
          <div id='svg-graph'></div>
          <FirstSummand state={this.p_state()} callback={this.props.onChangeNum1} />
          <SecondSummand state={this.p_state()} callback={this.props.onChangeNum2} />
        </div>
      </div>
    )
  }
}
