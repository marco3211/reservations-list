import React, { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import ReservationTable from './components/ReservationTable'
import { fetchData, toggleRow, filterData } from './utils/dataUtils'

function App() {
  const [data, setData] = useState([])
  const [expandedRows, setExpandedRows] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchData(setData)
  }, [])

  const filteredData = filterData(data, searchTerm)

  return (
    <div className="app-container">
      <h1>Reservation Summary</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ReservationTable
        data={filteredData}
        expandedRows={expandedRows}
        toggleRow={(uuid) => toggleRow(uuid, expandedRows, setExpandedRows)}
      />
    </div>
  )
}

export default App
