import React from 'react'
import { Switch, Route,BrowserRouter } from 'react-router-dom'
import Home              from '../imports/home/Home'
import About             from '../imports/about/About'
import Contact           from '../imports/contact/Contact'
import Login             from '../imports/login/Login'
import EmptyCart         from '../imports/cart/EmptyCart'
import FullCart          from '../imports/cart/FullCart'
import Register          from '../imports/register/Register'
import ProductsMain      from '../imports/products/ProductsMain'
import CheckoutOk        from '../imports/checkout/CheckoutOk'
import CheckoutErr       from '../imports/checkout/CheckoutErr'
import Item              from '../imports/products/Item'
import UserPage          from '../imports/user/UserPage'
import Checkout          from '../imports/checkout/Checkout'
import AdminMain         from '../imports/admin/AdminMain'
import CategorySummary   from '../imports/admin/CategorySummary'
import ProductsSummary   from '../imports/admin/ProductsSummary'
import AddProduct        from '../imports/admin/AddProduct'
import ShowOneProduct    from '../imports/admin/ShowOneProduct'
import AdminUsersMain    from '../imports/admin/AdminUsersMain'
import AdminOrdersMain   from '../imports/admin/AdminOrdersMain'
import OrderDetails      from '../imports/admin/OrderDetails'

const Main = () => (
  <BrowserRouter>

    
    
    <div>
      <Route exact path='/'                component={Home}/>
      <Route path='/about'                 component={About}/>
      <Route path='/contact'               component={Contact}/>
      <Route path='/emptycart'             component={EmptyCart}/>
      <Route path='/fullcart'              component={FullCart}/>
      <Route path='/login'                 component={Login}/>
      <Route path='/register'              component={Register}/>
      <Route path='/catalogue'              component={ProductsMain}/>
      <Route path='/checkout'              component={Checkout}/>
      <Route path='/checkout-confirm'      component={CheckoutOk}/>
      <Route path='/checkout-error'        component={CheckoutErr}/>
      <Route path='/product-details'       component={Item}/>
      <Route path='/user/page'             component={UserPage}/>
      <Route path='/admin/main'             component={AdminMain}/>
      <Route path='/admin/category-summary' component={CategorySummary}/>
      <Route path='/admin/products-summary' component={ProductsSummary}/>
      <Route path='/admin/add-product'      component={AddProduct}/>
      <Route path='/admin/product-details'  component={ShowOneProduct}/>
      <Route path='/admin/users-main'       component={AdminUsersMain}/>
      <Route path='/admin/orders-main'      component={AdminOrdersMain}/>
      <Route path='/admin/order-details'    component={OrderDetails}/>

    </div>
  </BrowserRouter>
)

export default Main

