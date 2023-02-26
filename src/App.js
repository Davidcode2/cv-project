import { GeneralInfo } from './components/general_info';
import { Education } from './components/education';
import { PracticalExperience } from './components/practical_experience';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <GeneralInfo />
      <Education />
      <PracticalExperience />
    </div>
  );
}

export default App;
