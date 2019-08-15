import React from 'react';
import './App.css';
import StandingsTable from './components/standingsTable/StandingsTable'
import Select from './components/select/Select'
import MatchweekResults from './components/matchweekResults/MatchweekResults'

const App: React.FC = () => {
  return (
    <div className="App">
      <h3>Premiership Standings 2016/2017</h3>
      <div>
        <span className = "select"><label>Select matchweek:</label><Select /></span>
      </div>
      <span className = "matchweekResults"><label>Matchweek Results</label><MatchweekResults /></span>
      
      <StandingsTable />
    </div>
  );
}

export default App;
