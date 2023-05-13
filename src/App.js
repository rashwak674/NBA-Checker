import './App.css';


function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="titleHeader">
          <h1>NBA Statistic Visualization</h1>
        </div>
        <div className="boxes">
          <Box className = "dataBox"
              style={{
                backgroundColor: '#D3D3D3',
                borderRadius: 70,
                color: '#000000',
                minHeight: 600,
                padding: 12,
                width: 900,
              }}
            >
              Team:
              &nbsp;&nbsp;<select className="teams">
                <option>Atlanta Hawks</option>
                <option>Boston Celtics</option>
                <option>Brooklyn Nets</option>
                <option>Charlotte Hornets</option>
                <option>Chicago Bulls</option>
                <option>Cleveland Cavaliers</option>
                <option>Dallas Mavericks</option>
                <option>Denver Nuggets</option>
                <option>Detroit Pistons</option>
                <option>Golden State Warriors</option>
                <option>Houston Rockets</option>
                <option>Indiana Pacers</option>
                <option>Los Angeles Clippers</option>
                <option>Los Angeles Lakers</option>
                <option>Memphis Grizzlies</option>
                <option>Miami Heat</option>
                <option>Milwaukee Bucks</option>
                <option>Minnesota Timberwolves</option>
                <option>New Orleans Pelicans</option>
                <option>New York Knicks</option>
                <option>Oklahoma City Thunder</option>
                <option>Orlando Magic</option>
                <option>Philadelphia 76ers</option>
                <option>Phoenix Suns</option>
                <option>Portland Trail Blazers</option>
                <option>Sacramento Kings</option>
                <option>San Antonio Spurs</option>
                <option>Toronto Raptors</option>
                <option>Utah Jazz</option>
                <option>Washington Wizards</option>
              </select>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stat:
              &nbsp;&nbsp;<select className="stats">
                <option>Points Per Game</option>
                <option>Rebounds Per Game</option>
                <option>Steals Per Game</option>
                <option>Field Goal Percentage</option>
              </select>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="create">
                <text>Create</text>
              </button>
          </Box>
          

        
        </div>
          
      </header>
    </div>
  );
}

export default App;
