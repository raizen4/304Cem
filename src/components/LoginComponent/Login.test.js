import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import App from "../../App"
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
