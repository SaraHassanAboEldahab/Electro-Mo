import React from 'react'
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


const App = () => {
  return (
    <BrowserRouter>
      <Route render={({ history }) => <Navbar history={history} />} />
      <main className="py-3">
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/categories" component={Categories} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/information" component={Information} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/admin/userlist" component={UserListScreen} />
        <Route path="/admin/productlist" component={ProductListScreen} exact />
        <Route path="/admin/productlist/:pageNumber" component={ProductListScreen} exact />
        <Route path="/admin/product/create" component={ProductCreateScreen} />
        <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        <Route path="/search/:keyword" component={Categories} exact />
        <Route path="/page/:pageNumber" component={Categories} exact />
        <Route path="/search/:keyword/page/:pageNumber" component={Categories} exact />
        <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        <Route path="/admin/orderlist" component={OrdersListScreen} />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App