import React from 'react'
import { useState } from 'react' 

export default function availableTimes() {
  const [times, setTimes] = useState([]);

  function handleSelect () {
    setTimes([
      {label: "17:00", value: "5:00"},
      {label: "18:00", value: "6:00"},
      {label: "19:00", value: "7:00"},
      {label: "20:00", value: "8:00"},
      {label: "21:00", value: "9:00"},
      {label: "22:00", value: "10:00"},
    ])
  }
  return (
    <div className="box">
      <select onClick={handleSelect}>
        {times.map((time, value) => (<option key={value} value={time.value}>{time.label}</option>))}
      </select>
    </div>
  )
}
