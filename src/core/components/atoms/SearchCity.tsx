import React, { ChangeEventHandler, MouseEventHandler, useContext, useState } from 'react';
import './SearchCity.css';
import { FaSearch } from 'react-icons/fa'
import { AppContext } from '../../store/Context';
import Select from 'react-select';
import SearchBox from './Input';

type Props = { onChange?: ChangeEventHandler<HTMLInputElement>}

function SearchCity({ onChange } : Props) {
   const { setSearchQuery } = useContext(AppContext);
   const [ text, setText ] = useState('');

  return (
    <div className="searchCity">
      <div className="searchIcon">
       <FaSearch />
      </div>
      <div className="inputfield">

      </div>
      <div className="searchIt">
        {/* <input 
        type="text" 
        placeholder='Search City to view Results' 
        onChange={onSearch} 
        onKeyDown={handleKeyDown}
        /> */}
        <SearchBox />
      </div>
    </div>
  )
}

export default SearchCity
