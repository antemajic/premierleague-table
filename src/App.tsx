import React from 'react';
import logo from './logo.svg';
import './App.css';
import StandingsTable from './components/standingsTable/StandingsTable'
import Select from './components/select/Select'

const App: React.FC = () => {
  return (
    <div className="App">
      <h3>Premiership Standings 2016/2017</h3>
      <div>
        <span><label>Select matchweek:</label><Select /></span>
      </div>
      <StandingsTable />
    </div>
  );
}

export default App;
