import React, { ChangeEventHandler, MouseEventHandler, useContext, useState } from 'react';
import './SearchCity.css';
import { FaSearch } from 'react-icons/fa'
import { AppContext } from '../../store/Context';

type Props = { onChange?: ChangeEventHandler<HTMLInputElement>}

function SearchCity({ onChange } : Props) {
   const { setSearchQuery } = useContext(AppContext);
   const [ text, setText ] = useState('');

   const onSearch = (e: any) => {
      setText(e.target.value);
   }

   const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      setSearchQuery(text);
    }
  };

  return (
    <div className="searchCity">
      <div className="searchIcon">
       <FaSearch />
      </div>
      <div className="inputfield">

      </div>
      <div className="searchIt">
        <input 
        type="text" 
        placeholder='Search City to view Results' 
        onChange={onSearch} 
        onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  )
}

export default SearchCity
