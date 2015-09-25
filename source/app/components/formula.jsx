'use strict';

import React from 'react';

export default class Formula extends React.Component {
  p_state() { return this.props.state; }

  render() {
    var n1 = this.p_state().num1
    var n2 = this.p_state().num2
    var r = this.p_state().res

    return(
      <div className='formula'>
        {this.summand(n1)}+{this.summand(n2)}={this.result(r)}
      </div>
    );
  }

  summand(num) {
    var class_name = (num.on_pic != null && num.in_expression != num.on_pic) ? 'error' : ''
    return <span className={`summand ${class_name}`}>{num.in_expression}</span>
  }

  result(num) {
    var class_name = (num.val != null && num.val != num.correct_val) ? 'error' : ''

    if(num.show_input) {
      var output = <input value={num.val} onChange={this.props.onChangeResult} autoFocus={true} />
    } else {
      var output = (num.val != null) ? num.val : '?'
    }

    return <span className={`result ${class_name}`}>{output}</span>
  }
}
