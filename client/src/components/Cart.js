import React, {useState} from 'react';
import axios from 'axios';
const Cart = () => {
    const [cartArticle, setCartaticle] = useState([]);
    
    return (
        <div>
           <h2 className="cart-items-header">Liste des articles</h2>
           {cartArticle.length === 0 && (
             <div className="cart-items-empty"> Votre panier est vide </div>
         )}
         <div>
             {cartArticle.map((items) =>(
               <div key={items.id} className="cart-items-list">
               <img className="cart-items-image" src={items.image} alt={items.name}/>
               <div className="cart-items-name">{items.title}</div>
               <div className="cart-items-function">
               <button className="cart-items-add" >+</button>
               <button className="cart-items-remove">-</button>
               </div>
               <div className="cart-items-price">{items.quantity} * {items.price}</div>
               </div>   
             ))}
         </div>
        </div>
    )
}
export default Cart;