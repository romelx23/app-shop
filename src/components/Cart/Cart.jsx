import React from 'react'
import './Cart.css'
import cart from '../../assets/icons/shopping-cart-alt.svg';
import { Link } from 'react-router-dom';
export const Cart = ({product}) => {

    // console.log(product)
    const {nombre,precio,descripcion,_id,img}=product;

    const showDetails=()=>{

    }

    return (
        <div className="container__cart" onClick={showDetails}>
            {
                img?<img className="product__cart" src={img} alt="product" />
                :
                <img className="product__cart" src="https://scontent.flim17-1.fna.fbcdn.net/v/t1.6435-9/s720x720/241397919_292337989397454_382293405033945799_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=pwijKG1qgOsAX8zL8n-&_nc_ht=scontent.flim17-1.fna&oh=33d0495cefb7c59a34f2348d9b76a009&oe=615AB2F4" alt="product" />
            }
            <div className="content__description">
                <button className="cart__button"><img className="cart__button__image" src={cart} alt="cart" />
                </button>
                <h3>{nombre}</h3>
                <h3>{precio}</h3>
                <h4>Marca</h4>
                <h4>raiting</h4>
                <h5><Link to={'/producto/'+_id}>Ver más</Link></h5>
            </div>
        </div>
    )
}
