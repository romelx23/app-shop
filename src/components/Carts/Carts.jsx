import React, { useEffect, useState } from 'react'
import { Cart } from '../Cart/Cart'
import './Carts.css'
import '../../data/data.json';
export const Carts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const datos=async()=>{
            const data=await fetch('http://localhost:8080/api/productos');
            const {productos} =await data.json();
            // console.log(resp)
            setProducts(productos)
        }
        datos()
    }, [])

    return (
        <div className="container__carts">
            {
                // products &&
                products.map((product)=>{
                    return (
                        <Cart product={product} key={product._id}/>
                    )
                })
            }
            {/* <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/> */}
        </div>
    )
}
