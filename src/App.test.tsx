import React from 'react';
import ReactDOM from 'react-dom';
import Premiership from './components/mainPage/Premiership';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Premiership />, div);
  ReactDOM.unmountComponentAtNode(div);
});
