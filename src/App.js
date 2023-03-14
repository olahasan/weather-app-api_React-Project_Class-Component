import React from "react";
import { Component } from "react";
import Weather from './components/Weather'
import Form from './components/Form'


const API_Key = "45741e928f9af218d91ae12f7286a49e";
//  http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component{

state ={
  Country : '',
  City : '',
  tempreature : '',
  humidity : '',
  description : '',
  error : '',
}


getWeather = async (e) =>{
  e.preventDefault();
  // console.log("weather");

   const City = e.target.elements.City.value;
   const Country = e.target.elements.Country.value;
  //  console.log(City , Country);


   const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City}%2C${Country}&appid=${API_Key}&units=metric`);
   const data = await api.json();
  //  console.log(data);

 if(City && Country){
  this.setState({
    Country : data.sys.country,
    City : data.name,
    tempreature : data.main.temp,
    humidity : data.main.humidity,
    description : data.weather[0].description,
    error : '',
  })
 }else{
  this.setState({
    tempreature : '',
    City : '',
    Country : '',
    humidity : '',
    description : '',
    error : 'Please Enter Data',
  })
 }

}


  render(){
    return(
      <div className="wrapper">
        <div className="form-container">

        <h2>Weather App</h2>
        <Form  getWeather={this.getWeather}/>

        <Weather 

          tempreature = {this.state.tempreature}
          City = {this.state.City}
          Country = {this.state.Country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}

        />
        
        </div>
       
      </div>
    )
  }
}

export default App;
