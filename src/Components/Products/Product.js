import React , {useContext, useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import ProductItem from "./ProductItem";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {Link} from 'react-router-dom'
import CartContext from "../Store/CartContext";

const Product = (props) => {
  const dummy_products = [
    {
      id : 1,
      title: "Colors",
      quantity : 1,
      price: 100,
      
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id :2,
      title: "Black and white Colors",
      quantity : 1,
      price: 50,
      
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id :3 ,
      title: "Yellow and Black Colors",
      quantity : 1,
      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:4,
      title: "Blue Color",
      quantity : 1,
      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
 const cartCtx = useContext(CartContext);

 useEffect(()=>{
  const email = localStorage.getItem("email");
  const str = email.replace("@", "");
  const newstr = str.replace(".", "");

  fetch(` https://crudcrud.com/api/2ef1b44e1d9d4e29adc1d01b7fe16b4b/cart${newstr}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(res=>{
    return res.json(); 
  }).then(data=>{
    let totalAmount =0
     data.forEach(element => {
         totalAmount += element.quantity*element.price
     });
    cartCtx.setData(data , totalAmount);
  }).catch(error=>{
    console.log(error.message)
  })
 },[])
 
  return (
    <Container>
      <Row>
        {dummy_products.map(item=><ProductItem key={item.id} prod={item} />)}
      </Row>
    </Container>
  );
};

export default Product;
