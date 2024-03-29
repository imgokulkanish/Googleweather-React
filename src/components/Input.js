import React from 'react'
import { Input,Button } from '@material-ui/core'
import "./Input.css"
const InputBox = ({input,setInput,findWeather}) => {
    const functionCall = (event) => {
        event.preventDefault();
        findWeather();
    };
    return (
        <div  className='inputBox'>
            <div className='inputBox_field'>
            <h1>Google Weather App</h1>
            <p>Powered by</p>
            <img src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt=""/>
            <form>
              <Input placeholder='Enter the city name' onChange={(e)=> setInput(e.target.value)} value={input}/>
              <br/>
              <Button variant="contained" color="secondary" type="submit" onClick={functionCall}>
                  Search
              </Button>
            </form>
            </div>
        </div>
    )
}

export default InputBox
