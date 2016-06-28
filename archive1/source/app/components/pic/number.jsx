'use strict';

import React from 'react';

export default class PicNumber extends React.Component {
  pic_val() { return this.props.pic_val }
  exp_val() { return this.props.exp_val }
  callback() { return this.props.callback }
  position() { return this.props.position }

  style() {
    return { top: `${this.position().y}px`, left: `${this.position().x}px` }
  }

  class_name() {
    if (this.pic_val() == null) { return '' }
    if (this.pic_val() == this.exp_val()) { return '' }

    return 'error'
  }

  result() {
    if (this.exp_val() == this.pic_val()) { return this.pic_val() }
    return <input value={this.pic_val()} onChange={this.callback()} autoFocus={true} />
  }

  render() {
    return (
      <span className={`summand ${this.class_name()}`} style={this.style()}>
        {this.result()}
      </span>
    )
  }
}
