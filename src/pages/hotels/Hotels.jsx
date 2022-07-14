import { format } from "date-fns"
import { useState } from "react"
import { DateRange } from "react-date-range"
import { useLocation } from "react-router-dom"
import Header from "../../components/header/Header"
import Nav from "../../components/nav/Nav"
import SearchItem from "../../components/searchItem/SearchItem"
import "./hotels.css"

const Hotels = () => {

  const location = useLocation()
  const [openDate, setOpenDate] = useState(false)
  const [dest, setDest] = useState(location.state.dest)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Nav />
      <Header type="hotels" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={dest} />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false} ranges={date} minDate={new Date()} />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsoptions">
                <div className="lsOption">
                  <span className="lsOptionText">Min price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOption">
                  <span className="lsOptionText">Max price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOption">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" className="lsOptionInput" min={1} placeholder={options.adult} />
                </div>
                <div className="lsOption">
                  <span className="lsOptionText">Children</span>
                  <input type="number" className="lsOptionInput" min={0} placeholder={options.children} />
                </div>
                <div className="lsOption">
                  <span className="lsOptionText">Room</span>
                  <input type="number" className="lsOptionInput" min={1} placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels