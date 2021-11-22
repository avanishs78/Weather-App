import React, { useEffect,useState } from 'react';
//import { useState } from 'react/cjs/react.development';
import '../Components/WeatherInfoPage.css';
import NextDays from './NextDays';

export default function WeatherInfo({setVerified}){
    const [result,setResult] = useState('');
    const [city,setCity] = useState('New Delhi');
    const [about,setAbout] = useState(false);
    const Api ={
        key : `59a3428f5398cab9973d765f9710d796`,
    }
    const date = new Date().toLocaleString();

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api.key}&units=metric`).then((data)=>{
          return data.json();
        }).then((actualData)=>{
            setResult(actualData.main)
        }).catch((error)=> console.log('Please select a country to get data'))
       },[city])
       console.log('parent');
    return(
        <div className='container'>
            <button className='logout' onClick={()=>setVerified(false)}>Logout</button>
            <span style={{color:'black',fontWeight:'bold'}}>Select city :</span>
            <select className="dropDown" onChange={(e)=>setCity(e.target.value)}>
                <option>List of Cities</option>
                <option value='New Delhi'>New Delhi</option>
                <option value='Mumbai'>Mumbai</option>
                <option value='kolkata'>kolkata</option>
                <option value='Jaipur'>Jaipur</option>
                <option value='Chennai'>Chennai</option>
                <option value='Pune'>Pune</option>
            </select><br/>
             <h4>Showing Results for <span style={{color:'#B22222',fontWeight:'bold',fontSize:'25px'}}>{city}</span>:</h4>
            <div className="weatherData">
                <div className="current">
                    <h1 style={{color:'black'}}><u>Current : </u></h1>
                    <div className='currenttemp'>{result.temp}°C</div>
                    <h3>{date}</h3>
                    <h2>Humidity: {result.humidity}</h2>
                    <h2>Max Temperature:{result.temp_max}°C</h2>
                    <h2>Min Temperature:{result.temp_min}°C</h2>
                </div>
                <div className="next5days"> 
                  <h3 style={{color:'black'}}><u>Upcoming days forecasted data</u></h3>
                   <div><NextDays city={city}/></div>
                </div>
                {about && <div className='about'>
                   <h3> About Us Information:</h3>
                    <p>Welcome !!!<br/>This is weather forcasting App.<br/> Select any city from<br/> select options 
                    and get the weather<br/> information of that city </p>
                </div>}
            </div>
            <div className='about-logout'>
               <button className='aboutbtn' onClick={()=>setAbout(!about)}> About </button>
               
            </div>
        </div>
    )
}