'use strict';

import React from 'react';
import Formula from './formula.jsx';
import Pic from './pic.jsx';
import _ from 'underscore'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = this.setInitialState()
  }

  setInitialState() {
    var res = _.random(11, 14)
    var num1 = _.random(6, 9)
    var num2 = res - num1

    return {
      num1: {in_expression: num1.toString(), on_pic: null, show_num_on_pic: true, is_input: true},
      num2: {in_expression: num2.toString(), on_pic: null, show_num_on_pic: false, is_input: true},
      res: {val: null, correct_val: res, show_input: false}
    }
  }

  onChangeResult(e) {
    if(e.target.value.length > 2) { return false }

    var state = this.state
    state.res.val = e.target.value || null
    if (state.res.val == state.res.correct_val) {
      state.res.show_input = false
    }
    this.setState(state)
  }

  onChangeNum1(e) {
    if(e.target.value.length > 1) { return false }

    var state = this.state
    state.num1.on_pic = e.target.value || null
    if (state.num1.in_expression == state.num1.on_pic) {
      state.num2.show_num_on_pic = true
      state.num1.is_input = false
    }
    this.setState(state)
  }

  onChangeNum2(e) {
    if(e.target.value.length > 1) { return false }

    var state = this.state
    state.num2.on_pic = e.target.value || null
    if (state.num2.in_expression == state.num2.on_pic) {
      state.res.show_input = true
      state.num2.is_input = false
    }
    this.setState(state)
  }

  // toInt(resource_val, default_val) {
  //   var val = parseInt(resource_val)
  //   if(isNaN(val)) {return default_val}
  //   return val
  // }


  render() {
    return(
      <div>
        <Formula state={this.state}
          onChangeResult={this.onChangeResult.bind(this)} />
        <Pic state={this.state}
          onChangeNum1={this.onChangeNum1.bind(this)}
          onChangeNum2={this.onChangeNum2.bind(this)} />
      </div>
    );
  }
}

