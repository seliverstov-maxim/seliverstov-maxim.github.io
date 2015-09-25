'use strict';
require('./styles/main.css');

import React from 'react';
import App from './components/app.jsx';

main();

function main() {
  React.render(<App />, document.getElementById('app'));
}
