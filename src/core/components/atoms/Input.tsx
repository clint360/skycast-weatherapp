"use client"
import React, { useEffect, useState } from "react"
import { useContext } from "react";
import useDebounce from "../../../hooks/useDebounce"
import { AppContext } from "../../store/Context";
import './Input.css';

type city = any;

export default function SearchBox({ className, handleClick, ...other }: any) {
  const [value, setValue] = useState("")
  const [show, setShow] = useState(false)
  const debouncedValue = useDebounce(value, 500)
  const [cities, setCities] = useState([])
  const [city, setCity] = useState("")
  const [toggle, setToggle] = useState(false)
  const { setSearchQuery, setBodyDisplay } = useContext(AppContext);

  useEffect(() => {
    if (debouncedValue === "") {
      setShow(false);
      setBodyDisplay(true);
      return
    }

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${debouncedValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.results.length === 0) {
          setShow(false)
          setCities([])
          return
        }

        setCities(data.results)
        setShow(true)
      })
  }, [debouncedValue])

  function handleClickEvent(city: any) {
    setCity(city.name)
    setShow(false)
    setToggle(true)
    setSearchQuery(city.name)
    setBodyDisplay(true)
  }

  return (
    <div className="w-full inputer">
      {!toggle ? (
        <input
          placeholder="Search for city"
          onInput={(e: any) => {setValue(e.target.value);}}
          onChange={()=> { setBodyDisplay(false)}}
          value={value}
          onFocus={() => setBodyDisplay(false)}
        />
      ) : (
        <div onClick={()=>setToggle(false)} className="p-3 w-full rounded-md bg-transparent border border-gray-400 focus:border-gray-200 outline-none shadow shadow-gray-300 text-gray-50 placeholder:text-gray-400">
          {city}
        </div>
      )}
      <ul className="unorderedlists">
        {show &&
          cities.map((city: any) => (
            <li onClick={() => handleClickEvent(city)} className="mapped" key={city.id}>
              {city.name}, {city.country}
            </li>
          ))}
      </ul>
    </div>
  )
}