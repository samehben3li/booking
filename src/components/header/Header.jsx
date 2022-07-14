import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from "react-date-range"
import { useRef, useState } from "react"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns" 
import { useNavigate } from "react-router-dom"

const Header = ({type}) => {

    const navigate = useNavigate()
    const destination = useRef()
    const [date,setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }])
    const [openDate,setOpenDate] = useState(false)
    const [options,setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const [openOptions,setOpenOptions] = useState(false)

    const handleSearch = ()=>{
        const dest = destination.current.value
        navigate("/hotels", {state:{dest,date,options}})
    }

  return (
    <div className="header">
        <div className= {type==="hotels" ? "headerContainer listMode":"headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            { type!=="hotels"&& <><h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input type="text" placeholder="Where are you going" className="headerSearchInput" ref={destination}/>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                    <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)}>
                        {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}
                    </span>
                    {openDate && <DateRange editableDateInputs={true} onChange={item=>setDate([item.selection])}
                     moveRangeOnFirstSelection={false} ranges={date} className="date" minDate={new Date()} />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>
                        {`${options.adult} adult ${options.children} children ${options.room} room`}
                    </span>
                    {openOptions && <div className="options">
                        <div className="option">
                            <span className="optionText">Adult</span>
                            <div className="optionCount">
                                <button className="optionBtn" onClick={()=>setOptions((op)=>{
                                    return{
                                        ...op,
                                        adult: options.adult>1 ? options.adult-1: 1,
                                    }
                                })}>-</button>
                                <span className="optionNbr">{options.adult}</span>
                                <button className="optionBtn" onClick={()=>setOptions((op)=>{
                                    return{
                                        ...op,
                                        adult: options.adult+1,
                                    }
                                })}>+</button>
                            </div>
                        </div>
                        <div className="option">
                            <span className="optionText">Children</span>
                            <div className="optionCount">
                                <button className="optionBtn" onClick={()=>setOptions((op)=>{
                                    return{
                                        ...op,
                                        children: options.children>0 ? options.children-1: 0,
                                    }
                                })}>-</button>
                                <span className="optionNbr">{options.children}</span>
                                <button className="optionBtn" onClick={()=>setOptions((op)=>{
                                    return{
                                        ...op,
                                        children: options.children+1,
                                    }
                                })}>+</button>
                            </div>
                        </div>
                        <div className="option">
                            <span className="optionText">Room</span>
                            <div className="optionCount">
                                <button className="optionBtn" onClick={()=>setOptions((op)=>{
                                    return{
                                        ...op,
                                        room: options.room>1 ? options.room-1: 1,
                                    }
                                })}>-</button>
                                <span className="optionNbr">{options.room}</span>
                                <button className="optionBtn" onClick={()=>setOptions((op)=>{
                                    return{
                                        ...op,
                                        room: options.room+1,
                                    }
                                })}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            </div></>}
        </div>
    </div>
  )
}

export default Header