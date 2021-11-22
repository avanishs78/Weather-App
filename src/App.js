import React,{useState} from 'react';
import Login from './Components/LoginPage';
import WeatherInfo from './Components/WeatherInfoPage';
import './App.css';


function App() {
  const [verified,setVerified] = useState(false)
  return (
    
    <div className="App">
     {!verified?<Login setVerified={setVerified}/>:
      <WeatherInfo setVerified={setVerified}/>}
    </div>
  );
}
export default App;
