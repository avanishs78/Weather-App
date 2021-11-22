import React,{useState,useEffect} from 'react';
//import { useEffect, useState } from 'react/cjs/react.development';

export default function NextDays({city}){
    const [result,setResult] = useState([]);
    const Api ={
        key : `59a3428f5398cab9973d765f9710d796`,
    }
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api.key}&units=metric`).then((data)=>{
            return data.json();
        }).then((actualData)=>{
            setResult(actualData.list);
        })
    },[city])
    console.log('child');
    return(
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {result.splice(0,16).map((item)=>{
            return <div style={{}} key={item.dt_txt}>
                <p>{item.dt_txt}</p>
                <p>{item.main.temp}°C</p>
            </div>
        })}
        </div>
    )
}