import React from 'react'


const Form = (props)=>{
        return(
                <form onSubmit={props.getWeather}>
                        <input type="text" placeholder='City..' name='City'/>
                        <input type="text" placeholder='Country...' name='Country'/>
                        <button>Get Weather</button>
                </form>
        )
}

export default Form
