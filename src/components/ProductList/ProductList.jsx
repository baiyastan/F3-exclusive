import React from 'react'
import Card from '../Card/Card'
import "./Product.scss"


function ProductList({data}) {
  return (
    <div className='product-grid'>
        {
            data.map((item) => (

                <Card key={item.id} product={item} />
            ))
        }
    </div>
  )
}

export default ProductList
