import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import './SearchCity.css';
import { FaSearch } from 'react-icons/fa'

type Props = { onChange?: ChangeEventHandler<HTMLInputElement>}

function SearchCity({ onChange } : Props) {
  return (
    <div className="searchCity">
      <div className="searchIcon">
       <FaSearch />
      </div>
      <div className="inputfield">

      </div>
      <div className="searchIt">
        <input type="text" placeholder='Search City to view Results' onChange={onChange} />
      </div>
    </div>
  )
}

export default SearchCity
