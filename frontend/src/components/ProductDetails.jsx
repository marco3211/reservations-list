import React from 'react'

function ProductDetails({ products }) {
  return (
    <table className="inner-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Status</th>
          <th>Charge</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, idx) => (
          <tr
            key={idx}
            style={{
              backgroundColor:
                product.status === 'active' ? 'green' : product.status === 'cancelled' ? 'red' : 'transparent',
              color: product.status !== 'unknown' ? 'white' : 'black'
            }}
          >
            <td>{product.name}</td>
            <td>{product.status !== 'unknown' ? product.status : ''}</td>
            <td>{product.status !== 'unknown' ? product.charge : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductDetails
