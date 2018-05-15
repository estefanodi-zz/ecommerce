import    React   from 'react'
import { Orders } from '../../imports/api/Orders'

export default class OrderDetails extends React.Component{
        
        constructor(){
        	super()
        	//this.findOrder = this.findOrder.bind(this)
        	this.state = { }
        }

        componentWillMount(){
           
           let datas = this.props.location.state.datas
               this.setState({datas})
        }

        componentDidMount(){

      
        Meteor.call('getUserId',(error,data) =>{
             if(error){
              console.log('error message')
             }else{
              if(data!='admin'){
                this.props.history.push('/')
              }
             }
         })
      }
        
        // findOrder = () => {
        // 	let { email } = this.state.datas.user
        //     let orders = Orders.find({email:email}).fetch()
        //     this.setState({orders},()=>console.log(this.state.orders))
        // }

        render(){
                let {  day  } = this.state.datas.date
                let { month } = this.state.datas.date
                let { year  } = this.state.datas.date
                let text = { color:'grey'}

                return(
                                
    	               <div className = 'orderDetailsMain'>
    	                     <div className = 'orderDetailsMainSquare'>

                                  <div className = 'orderDetailsHeader'>
                                      <p>Order Details</p>
                                  </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Order number :</span> {this.state.datas._id}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Order date :</span> {day} / {month} / {year}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Total :</span> {this.state.datas.total} € 
                                    </p>
    	                          </div>
    	                     </div>
    	                     <div className = 'orderDetailsMainSquare'>
                                  
                                  <div className = 'orderDetailsHeader'>
                                      <p>Delivery Details</p>
                                  </div>
                                  
                                  <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Name :</span> {this.state.datas.user.name}
                                    </p>
    	                          </div>

                                  <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Lastname :</span> {this.state.datas.user.lastname}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Email :</span> {this.state.datas.user.email}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Telephone :</span> {this.state.datas.user.telephone}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Address :</span> {this.state.datas.user.address}
                                    </p>
    	                          </div>

                                  <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >City :</span> {this.state.datas.user.city}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Postcode :</span> {this.state.datas.user.postcode}
                                    </p>
    	                          </div>

    	                          <div className = 'orderDetailsRow'>
                                    <p><span style = {text}
                                    >Country :</span> {this.state.datas.user.country}
                                    </p>
    	                          </div>
    	                     </div>

    	                     <div className = 'orderDetailsMainSquare'>

                                  <div className = 'orderDetailsHeader'>
                                      <p>Products Details</p>
                                  </div>

                                  <div className = 'orderDetailsBody'>
                                  {
                                  	this.state.datas.cart.map( (ele,i) => {
                                  		return <div
                                                   key = { i }
                                                   className = 'ordersDetailsProducts'
                                  		       >
                                                 <div>{ele.product}</div>
                                                 <div>qty : {ele.quantity}</div>
                                                 <div>Price : {ele.price} €</div>
                                  		       </div>
                                  	})
                                  }
    	                     </div>
    	                     </div>
    	               </div>
                )



        }
                    
}
