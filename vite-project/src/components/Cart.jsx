import React from 'react'
import style from "../styles/Cart.module.css"
import { products } from './products' 

const Cart = () => {
    const [item,setItem]=React.useState(products)
  return (
    <div>
    <h1>Cart</h1>
    {
        item.map((currItem)=>(
            <div key={currItem.id} style={{display:"flex"}}>
                <img src={currItem.img} alt="Image" style={{width:"200px",height:"200px"}}/>
                <div style={{display:"flex",flexDirection:"column"}}>
                <h3>{currItem.title}</h3>
                <p>{currItem.description}</p>
                </div>
                <div style={{display:"flex"}}>
                    <button>-</button>
                    <h1>0</h1>
                    <button>+</button>
                </div>
                <h1>{currItem.price}</h1>
                <div>
                    <h1 style={{color:"red"}}>DELETE</h1>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default Cart