import React , {useState , useContext , useEffect , Suspense} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import './NavBar.css'
import CartContext from '../Store/CartContext';
import {BrowserRouter as Router , Switch , Route , Link ,  Redirect   } from 'react-router-dom'
import About from '../../Pages/About';
//import Product from '../../Products/Product';
import Card from './Card';
import Home from '../../Pages/Home';
//import Contact from '../../../pages/Contact';
//import ProductPage from '../../Products/ProductPage';
import Footer from './Footer';
import Login from '../../Pages/Login';
import { useHistory } from 'react-router-dom';
const ProductPage = React.lazy(()=> import('../Products/ProductPage') )
const Contact = React.lazy(()=>import('../../Pages/ContactUs'))
const Product = React.lazy(()=> import('../Products/Product'))


function NavBar(props) {

  const cartCtx = useContext(CartContext);
  
   const numberOfCartItems = cartCtx.items.reduce((curr, item)=> curr + item.quantity , 0) 
  const history = useHistory();
  const isLoggedIn = cartCtx.isLoggedIn;


  const logoutHandler=()=>{
    cartCtx.logout()
    console.log("logout done")
    localStorage.removeItem("email")
    history.replace("/home")
    
  }


  return (
    <div>
    <Suspense fallback={<div style={{"position":"fixed" , "top":"50%"}} className='text-center'>Loading</div>}>
     <Router>
        <Navbar className='position-fixed' bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
              { isLoggedIn && <Nav.Link as={Link} to={"/store"}>Store</Nav.Link>}
              <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
              {!isLoggedIn && <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>}
              {isLoggedIn && <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>}
             
            </Nav>

            {isLoggedIn && <Button onClick={props.onShowCart}  variant="primary">Cart<span>{numberOfCartItems}</span></Button>}
            </Navbar.Collapse>
  s        </Container>
        </Navbar>
        
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
        {isLoggedIn &&  <Route path="/store" exact>
              <Card />
              <Product />
            </Route> }
            <Route path="/about">
              <Card />
              <About />
            </Route>
            <Route path="/home" exact>
              <Card />
              <Home />
            </Route>
            <Route path="/contact">
              <Card />
              <Contact/>
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/" exact>
              <Card />
              <Home />
            </Route>  
            <Route path="/Store/:storeid">
              <ProductPage key={props.product.id} products={props.product} />
            </Route> 
          
          </Switch>
        
      </Router> 
    </Suspense>  
    <Footer />
    </div>
  );
}

export default NavBar;
