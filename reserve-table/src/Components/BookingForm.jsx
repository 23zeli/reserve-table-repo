import React from 'react'
import { useState } from 'react';
import AvailableTimes from './availableTimes';

export default function BookingForm() {
    const [date, setDate] = useState ("")
    const [number, setNumber] = useState ("")
    const [time, setTime] = useState ("")
    const [occasion, setOccasion] = useState ("")

    const handleSubmit= (e) =>{
        e.preventDefault();
        setDate("");
        setNumber("");
        setTime("");
        setOccasion("");
    }
  return (
    <div>
        <fieldset>
            <form 
                style={{display: "grid", 
                    maxWidth: "200px", 
                    gap: "20px",
                    margin: "auto",
                }} 
                onSubmit={handleSubmit}
            >
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id='res-date' value={date} onChange={(e) => setDate(e.target.vale)}/>
                <label htmlFor="res-time">Choose time</label>
                <AvailableTimes value={time} onChange={(e) => setTime(e.target.vale)}/>
                {/* <select id='res-time' value={time} onChange={(e) => setTime(e.target.vale)}>
                    <option></option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select> */}
                <label htmlFor="guests">Number of guests </label>
                <input type='number' placeholder='1' min={1} max={10} id='guests' value={number} onChange={(e) => setNumber(e.target.value)}></input>
                <label htmlFor="occasion">Occasion</label>
                <select value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                    <option></option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                </select>
                <input id='submit' role='button' type='submit' value={"Make your reservation"}/>
            </form>
        </fieldset>
    </div>
  )
}
