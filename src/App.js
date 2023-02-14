import React,{useState} from 'react'
import NavBar from './Components/UI/Navbar';
import Card from './Components/UI/Card';
import Product from './Components/Products/Product';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
import ProductPage from './Components/Products/ProductPage';
function App() {
  const[cartIsShow , setCartIsShow]=useState(false)

  const dummy_products = [
    {
      id : 1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id :2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id :3 ,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:4,
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const showCartHandler =()=>{
    console.log("show cart")
    setCartIsShow(true)
  }

  const hideCartHandler =()=>{
    setCartIsShow(false)
  }

 

  return (
    <CartProvider>
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <NavBar product={dummy_products} onShowCart={showCartHandler} />

      {/* <ProductPage /> */}
      {/* <Card />
      <Product /> */}
    </CartProvider>
  );
}

export default App;
