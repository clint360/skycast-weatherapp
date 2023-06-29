import React from 'react';
import Barometer from '../../atoms/Barometer';
import './Three.css';
import Temp from '../../../components/atoms/Temp';
import Dail from '../../../components/atoms/Dail';


function Three() {
  return (
    <div className="bgcontainer4">
    <div className='three'>
      <Barometer />
      <Temp id={2} value={20} title={"Temp"} />
      <Dail id="dial1" value={40} title="Speed X" />
    </div>
    </div>
  )
}

export default Three
