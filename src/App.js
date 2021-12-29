import React from 'react'
import InputBox from './components/Input'
const App = () => {
  const [input, setInput] = useState("")
  const [desc, setDesc] = useState("")
  const [temp, setTemp] = useState("")
  const [icon, setIcon] = useState("")

  const findWeather = ()=>{

  }
  return (
    <div>
      <InputBox setInput={setInput} input={input}/>
    </div>
  )
}

export default App
