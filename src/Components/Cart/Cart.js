import React,{useContext , useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import CartItem from "./CartItem";
import './Cart.css'
import classes from './Cart.module.css'
import CloseButton from 'react-bootstrap/CloseButton';
import CartContext from "../Store/CartContext";
import Modal from "../UI/Modal";
import { useHistory } from "react-router-dom";



export const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const totalAmount= `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;
   

  /*return (
    <Modal>
    <Container className="cart">
       <CloseButton onClick={props.onHideCart} />
      <div className="cart-main">
        <div className="cart-item">ITEM</div>
        <div className="cart-price">PRICE</div>
        <div className="cart-quantity">QUANTITY</div>
      </div>
     {/* {console.log(cartCtx.items)} }
      {cartCtx.items.map(item=><CartItem key={item.id} prod={item} />)}

      <div style={{"fontWeight" : "bold"}}>{`Total : ${cartCtx.totalAmount}`}</div>

  
  </Container>
  </Modal>
  );*/
  const History=useHistory()
  const order = () =>{
    alert("Thanks for Purchasing");
    History.replace('/store');

  }
  return(
    <Modal>
   
    
      {cartCtx.items.map(item=><CartItem key={item.id} prod={item} />)}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']}  onClick={props.onHideCart}>Close</button>
    {hasItems && <button className={classes.button} onClick={order}>Order</button>}  
    </div>
    </Modal>
  
  )
};

export default Cart
