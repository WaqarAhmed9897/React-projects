import './App.css';
import Custombtn from './Components/Custom btn';
import Aboutus from './views/About';
import Dashboard from './views/Dashborad'

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <Dashboard />
        <Custombtn text = {'change hogya'} />
        <Aboutus title = {'mei About ka Button hu'} />
      </div>
    </div>
  );
}

export default App;
