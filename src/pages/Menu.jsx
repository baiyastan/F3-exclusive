import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCake, changeState, setSearch } from '../redux/cake/cakeSlice'

function Menu() {
    const {cake, loading, error, category, search} = useSelector((state) => state.cake)
    const dispatch = useDispatch()
    const [text, setText] = useState("")

    useEffect(() => {
        dispatch(getCake({category, text}))
    }, [dispatch, category, search])



    const menu = ['Десерт', 'кофе и чай', 'холодные напитки', 'шоколадтар', 'завтрак', 'завтраки весь день', 'блинчиктер', 'пицца', 'суптар', 'горячие блюда', 'сендвичи', 'доставка', 'салаттар', 'соусы']
  

    function setCake (item) {
        dispatch(changeState(item))
    }
    
    function changeSearch() {
        dispatch(setSearch(text))
    }
    
  return (
    <div>
        <input  
            type="text" 
            placeholder='search' 
            onChange={(e) => setText(e.target.value)}
            onKeyDown={changeSearch}
            />
        <div>
            {
                menu.map((item, index) => (
                    <div onClick={() => setCake(item)} key={index}>{item}</div>
                ))
            }
        </div>
      {
        cake.map((item) => (
            <div key={item.id}>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Menu
