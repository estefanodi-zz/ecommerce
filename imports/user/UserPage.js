import React                   from 'react'
import Navbar                  from '../Navbar'
import Footer                  from '../Footer'
import { Route,BrowserRouter,Link } from 'react-router-dom'
import  { Products   }         from '../api/Products'
import  { Favourites   }       from '../api/Favourites'
import  { Orders   }           from '../api/Orders'

export default class UserPage extends React.Component{
constructor(){
super()
    this.second = this.second.bind(this)
    this.state = { 
       favourites : [],
       user       : {},
       orders     : []
    }
}
componentWillMount(){  
    Meteor.call('loggedCheck2',(error,data)=>{
        if(data){
           this.setState({user:data.profile})
           this.second()
              console.log(data)
        }else null
    })    
}

second = () =>{
  Tracker.autorun( ()=>{
    Meteor.subscribe('favourites')
    Meteor.subscribe('orders')
    let favourites = Favourites.find({}).fetch()
    let orders     = Orders.find({'user.email':this.state.user.email}).fetch()
    this.setState({favourites,orders})
  })
}

changePage = (productId) => {
       let proper     = Products.find({_id:productId}).fetch()
       this.setState({proper}) 
       let properties = this.state.proper[0]                 
       this.props.history.push({
             pathname : '/product-details',
             state    : {properties},
             search   : `?product=${productId}`
      })
    }

handleRemove = (favouriteId) => {
     Meteor.call('removeFavourite',favouriteId, (err,suc) => {
            if( err ){
              alert('favourite error')
            }else{
               return
            }
     })
}

render(){
let remove = {fontSize:'0.5em'}
return(
    <div className = 'userContainer'>

      <Navbar history = { this.props.history }/>
        <div className = 'userMain' >


             <div className = 'userColumn userColumnUser'>

                  <div className = 'userColumnHeader'>

                       <div className = 'userColumnHeaderText'>User</div>
                       </div>

                       <div className = 'userColumnBody'>

                            <div className = 'userColumnBodyLine'>
                                  <p>{this.state.user.name} {this.state.user.lastname}</p>
                            </div>

                            <div className = 'userColumnBodyLine'>
                                  <p>{this.state.user.email}</p>
                            </div>

                            <div className = 'userColumnBodyLine'>
                                  <p>{this.state.user.telephone}</p>
                            </div>

                            <div className = 'userColumnBodyLine'>
                                  <p>{this.state.user.city}</p>
                            </div>

                            <div className = 'userColumnBodyLine'>
                                  <p>{this.state.user.address}</p>
                            </div>

                            <div className = 'userColumnBodyLine'>
                                  <p>{this.state.user.postcode}</p>
                            </div>

                            <div className = 'userColumnBodyLine'>
                                  <p>{this.state.user.country}</p>
                            </div>


                      </div>
             </div>


             <div className = 'userColumn userColumnFavourites'>

                  <div className = 'userColumnHeader'>

                       <div className = 'userColumnHeaderText'>Favourites</div>
                  </div>

           <div className='favouriteContainer'>{
                this.state.favourites.map( (ele,i) => {
                  return <div key       = { i }
                              className = 'favouriteRow'>
                            <div
                                      onClick={this.changePage.bind(this,ele.productId)}
                            >{ele.product}</div>
                            <div>{ele.price} €</div>
                              <div>
                                   <span 
                                            onClick ={this.handleRemove.bind(this,ele._id)}
                                        style   = {remove}>remove</span>
                              </div>

                         </div>
                            })
                       }</div>
             </div>


         <div className = 'userColumn userColumnOrders'>

              <div className = 'userColumnHeader'>

                   <div className = 'userColumnHeaderText'>My Orders</div>
              </div>
                <div className='ordersContainer'>{
                        this.state.orders.map( (ele,i) => {
                          return <div key       = { i }
                                      className = 'ordersRow'>
                                    <div className = 'ordersRowHead'>

                                       <div className = 'ordersRowHeadDate'>
                                            {ele.date.day+'/'+ele.date.month+'/'+ele.date.year}
                                       </div>
                                       <div className = 'ordersRowHeadNumber'>{ele._id}</div>

                                    </div>

                                <div className = 'ordersRowBody'>

                                           {
                                            ele.cart.map( (ele2,i) => {
                                              return <div key       = { i }
                                                          className = 'ordersRowBodyDetails'>
                                                              <div><img src   = {ele2.picture}
                                                                        width = '60px'
                                                                    /></div>

                                                              <div>{ele2.product}</div>
                                                              <div>{ele2.price} €</div>
                                                              <div>qty {ele2.quantity}</div>
                                                     </div>
                                            })
                                           }

                                      </div>
                                      <div className = 'ordersRowTotal'>Total : {ele.total} €</div>
                                       </div>
                                           })
                                       }</div>
                                  </div>
                                </div>
                           <Footer/>
                         </div>
         )
  }
}


















                                        
