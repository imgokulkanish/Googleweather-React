import React, {useState} from 'react'
import InputBox from './components/Input'
import axios from 'axios'
const App = () => {
  const [input, setInput] = useState("")
  const [desc, setDesc] = useState("")
  const [temp, setTemp] = useState("")
  const [icon, setIcon] = useState("")

  const findWeather = ()=>{
const apiKey="51a3c4d2104687c7d565a0ad44d53954";
const unit="metric";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=51a3c4d2104687c7d565a0ad44d53954&units=metric`
   axios.get(url).then((response)=>{
     console.log(response)
   }).catch((err)=>{
     console.log(err);
   })
  }
  return (
    <div>
      <InputBox setInput={setInput} input={input} findWeather={findWeather}/>
    </div>
  )
}

export default App
