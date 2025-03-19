import React, {useEffect} from 'react'
import Banner from '../components/banner/Banner'
import ProductList from '../components/ProductList/ProductList'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../redux/product/productSlice';

function Home() {
  const {products, loading, error, category} = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( getProduct(category))
  },[dispatch, category])

  return (
    <div>
      <Banner/>
      <ProductList data={products}/>
    </div>
  )
}

export default Home

