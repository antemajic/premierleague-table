import React, {Component} from 'react';
import './Premiership.css';

import Standings from '../standingsTable/Standings';

class Premiership extends Component{
  render = () => {
    return (
    <div className="Premiership">
      Premiership standings for season 2016/2017
      <Standings />
    </div>
    )
  }
}

export default Premiership;
