import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (

    <BrowserRouter>
    
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">myg.com</Link>
          </div>
          <div className="header-links">
          
          
            <a href="/cart/">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onPointerDown={closeMenu}>
            <img src="/images/sym.jpg" height="10" width="10"/>
          </button>
          <ul className="categories">
          <li>
              <Link to="/category/Vegetable & Fruits">Vegetable & fruits</Link>
            </li>
            <li>
              <Link to="/category/Man's">Men's Clothes</Link>
            </li>
            <li>
              <Link to="/category/Women's">Women's Clothes</Link>
            </li>
            <li>
              <Link to="/category/Kids">Kid's clothes</Link>
            </li>
            <li>
              <Link to="/category/Toys">Kid's Toys</Link>
            </li>
            <li>
              <Link to="/category/Electronics">Electronic Item</Link>
            </li>
            <li>
              <Link to="/category/Furniture">Furniture</Link>
            </li>
            <li>
              <Link to="/category/Fancy">Fancy Items</Link>
            </li>

            <li>
              <Link to="/category/Mobile">Mobile And Accessories</Link>
            </li>
            <li>
              <Link to="/category/Computer">Computer and Accessories</Link>
            </li>
            <li>
              <Link to="/category/Local Jobs">Local Jobs</Link>
            </li>
            <li>
              <Link to="/category/Solution">Solution</Link>
            </li>
            <li>
              <Link to="/category/Nagar Panchayat">Nagar Panchayat Geedam</Link>
            </li>
            <li>
              <Link to="/category/Tour">Tour And Travels</Link>
            </li>
            <li>
              <Link to="/category/Adivasi">Adivasi Food and Arts</Link>
            </li>
            <li>
              <Link to="/category/Dairy">Dairy Products</Link>
            </li>
            <li>
              <Link to="/category/Bakery">Bakery  Products</Link>
            </li>
            <li>
              <Link to="/category/Education">Online Classes</Link>
            </li>
            <li>
              <Link to="/category/Automobile">Automobile Parts</Link>
            </li>

            <li>
              <Link to="/category/Bikes">Bikes</Link>
            </li>
            <li>
              <Link to="/category/Cars">Cars</Link>
            </li>


            
          </ul>
        </aside>
        <main className="main">
          <div className="content">

            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.          
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
