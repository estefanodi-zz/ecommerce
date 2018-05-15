import {  Meteor  }    from 'meteor/meteor'
import {  Email   }    from 'meteor/email'


var products= function (cart) {
    	
    	return cart.map( (ele,i) => {
    		   return `<div style = 'display:inline-block;
                                     width: 60%;
                                     height:40%;
    		           '>
    		           <div style = 'width:50%;float:left;'><h4>${ele.product}</h4></div>
                       <div style = 'width:25%;float:left;'><h4>${ele.quantity}</h4></div>
                       <div style = 'width:25%;float:left;'><h4>${ele.price} €</h4></div>
                       </div>
    		          ` 
    	})
    }



Meteor.methods({

    sendEmail:function(name,email){

    	Email.send({ to      : email,
                     subject : `Hi, ${name}`, 
                     html    : `<h2>Thank you for your registration!<h2>

                                <h3>You can contact
                                us 24/7 at the number +34 123456789, or by 
                                email at estefanodi2017@gmail.com`
        })
    },
    sendOrderEmail:function(name,email,orderNumber,cart,total){
       

        Email.send({ to      : email, 
                     subject : `Order confirmation.`, 
                     html    : `<div>
                     	
                                <h2>Dear ${name} your order has been processed correctly.</h2>
                                <h2>Order number : ${orderNumber}<h2> 
                                <h3>Total : ${total} €</h2>
                              

                                <div style = 'width:60%;
                                              height:40px;
                                              display:inline-block;
                                              background-color:#f2f2f2;
                                              font-weight:700;'
                                              >
                                    <div style = 'float:left;
                                                  width:48%;
                                                  
                                                  
                                                  padding-top:10px'
                                    >Product</div>

                                    <div style = 'float:left;
                                                  width:27%;
                                                  
                                                  
                                                  padding-top:10px'
                                    >Quantity</div>

                                    <div style = 'float:left;
                                                  width:25%;
                                                  
                                                  
                                                  padding-top:10px'
                                    >Price</div>
                                </div> 

                                  
                                
                                    <div>${products(cart)}</div>

                                    
                                      
                              

                                </div>`
        })
    },
    contactUsEmail:function(name,email,telephone,message){

    	Email.send({ to      : 'estefanodi2017@gmail.com', 
                     subject : `Contact us email from ${email}`, 
                     html    : `<div>name : ${name}</div>
                                <div>telephone : ${telephone}</div>
                                <div>message : ${message}</div>
                               `

    	})
    }

})