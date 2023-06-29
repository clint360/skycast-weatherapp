import React from 'react'
import Temp from '../../atoms/Temp'

function TemperatureBox() {
  return (
    <div className='prop-box'>
        <Temp id={2} value={20} title={"Temp"} />
    </div>
  )
}

export default TemperatureBox