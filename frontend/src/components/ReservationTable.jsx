import React from 'react'
import ProductDetails from './ProductDetails'

function ReservationTable({ data, expandedRows, toggleRow }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Reservation UUID</th>
          <th>Number of Active Purchases</th>
          <th>Sum of Active Charges</th>
        </tr>
      </thead>
      <tbody>
        {data.map((reservation, index) => (
          <React.Fragment key={index}>
            <tr onClick={() => toggleRow(reservation.reservationUUID)}>
              <td>
                <span className="expand-arrow">
                  {expandedRows.includes(reservation.reservationUUID) ? 'v' : '>'}
                </span>
                {reservation.reservationUUID}{' '}
              </td>
              <td>{reservation.activePurchases}</td>
              <td>{Math.round(reservation.sumOfActiveCharges)}</td>
            </tr>
            {expandedRows.includes(reservation.reservationUUID) && (
              <tr>
                <td colSpan="3">
                  <ProductDetails products={reservation.products} />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default ReservationTable
