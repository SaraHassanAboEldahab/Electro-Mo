import React, { useRef, useState, useEffect } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Home from './components/pages/Home'
import Navbar from "./components/reusable/Navbar"
import Footer from "./components/reusable/Footer"
import ProductDetails from './components/pages/ProductDetails'
import Categories from './components/pages/Categories'
import CartScreen from "./components/pages/CartScreen"
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Information from './components/pages/Information'
import ProfileScreen from './components/pages/ProfileScreen'
import PaymentScreen from './components/pages/PaymentScreen'
import Shipping from './components/pages/Shipping'
import OrderScreen from './components/pages/OrderScreen'
import UserListScreen from './components/pages/UserListScreen'
import ProductListScreen from './components/pages/ProductListScreen'
import ProductEditScreen from './components/pages/ProductEditScreen'
import ProductCreateScreen from './components/pages/ProductCreateScreen'
import UserEditScreen from './components/pages/UserEditScreen'
import OrdersListScreen from "./components/pages/OrdersListScreen"
import OrderCreated from './components/pages/OrderCreated'
import CreateCategory from './components/pages/CreateCategory'
import LikeScreen from "./components/pages/LikeScreen"
import CategoryScreen from './components/pages/CategoryScreen'
import BrandScreen from './components/pages/BrandScreen'
import CartModal from './components/subComponents/CartModal'

const App = () => {

  const [showCart, setShowCart] = useState(false)

  const [scrollHeight, setScrollHeight] = useState(0)

  const pathName = window.location.pathname

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollHeight(position);
    };
    window.addEventListener("scroll", handleScroll)
    console.log(scrollHeight)

  }, [scrollHeight])



  return (
    <BrowserRouter>
      <Route render={({ history }) => <Navbar scrollHeight={scrollHeight} setShowCart={setShowCart} history={history} />} />
      {pathName !== "/cart" && showCart && <CartModal showCart={showCart} setShowCart={setShowCart} />}
      <main className="" onMouseEnter={() => setShowCart(false)}>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={ProductDetails} exact />
        <Route path="/cart/:id?" component={CartScreen} exact />
        <Route path="/categories" component={Categories} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/information" component={Information} exact />
        <Route path="/shipping" component={Shipping} exact />
        <Route path="/profile" component={ProfileScreen} exact />
        <Route path="/payment" component={PaymentScreen} exact />
        <Route path="/order/:id" component={OrderScreen} exact />
        <Route path="/admin/userlist" component={UserListScreen} exact />
        <Route path="/admin/productlist" component={ProductListScreen} exact />
        <Route path="/admin/productlist/:pageNumber" component={ProductListScreen} exact />
        <Route path="/admin/product/create" component={ProductCreateScreen} exact />
        <Route path="/admin/product/:id/edit" component={ProductEditScreen} exact />
        <Route path="/search/:keyword" component={Categories} exact />
        <Route path="/page/:pageNumber" component={Categories} exact />
        <Route path="/search/:keyword/page/:pageNumber" component={Categories} exact />
        <Route path="/admin/user/:id/edit" component={UserEditScreen} exact />
        <Route path="/admin/orderlist" component={OrdersListScreen} exact />
        <Route path="/ordercreated" component={OrderCreated} exact />
        <Route path="/admin/createcategory" component={CreateCategory} exact />
        <Route path="/like" component={LikeScreen} exact />
        <Route path="/category/:name" component={CategoryScreen} exact />
        <Route path="/brand/:brand" component={BrandScreen} exact />
      </main>
    </BrowserRouter>
  )
}

export default App