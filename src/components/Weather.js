import React  from 'react'

const Weather = (props) => {
        return(
            <div className='info'>

                {
                props.Country &&  
                <p className='info_key'>Country : 
                <span className='info_value'>{props.Country}</span>
                </p>
                }
                
                {
                props.City &&
                <p className='info_key'>City :
                <span className='info_value'> {props.City}</span>
                </p>
                }

                {
                props.tempreature && 
                <p className='info_key'>tempreature :
                <span className='info_value'>{props.tempreature}</span>
                </p>
                }

                {
                props.humidity &&  
                <p className='info_key'>humidity : 
                <span className='info_value'>{props.humidity}</span>
                </p>
                }

                {
                props.description &&  
                <p className='info_key'>description : 
                <span className='info_value'>{props.description}</span>
                </p>
                }

                {
                props.error && 
                <p className='info_key'>error : 
                <span className='info_value'>{props.error}</span>
                </p>
                }
                
                {/* {props.error} */}

            </div>
        )
}

export default Weather
