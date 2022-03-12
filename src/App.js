import React from "react"
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

//npm install -g npm@8.5.4
//cd reactor
//npm start

let API_KEY = 'b8700f10b203b79cff3a2237de1ed4f2'

//let city

class App extends React.Component {

  gettingWeather = async (e) => {
    e.preventDefault()
    let city = e.target.elements.city.value
    let api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},ua&appid=${API_KEY}&units=metric`)
    const data = await api_url.json()
    console.log(data)
  }

  render() {
    return (
      <div>
        <div>src='data'</div>
        <Info />
        <Form weatherMethod={this.gettingWeather}/>
        <Weather />
      </div>
    )
  }
}

export default App;