import React               from 'react'
import { Meteor }          from 'meteor/meteor'
import { Categories }      from '../api/Categories'


export default class AddProduct extends React.Component{
    
    constructor(){
    	super()
    	this.state = {
                   product      : '',
                   price        : '',
                   quantity     : '',
                   description  : '',
                   category     : '',
                   categoryId   : '',
                   details      : '',
                   pictures     : []
    	}
    }

    componentWillMount(){
       
       Tracker.autorun( () => {
          	
          	let categories = Categories.find({}).fetch()
          	    
          	    categories.map((ele,i) => {
                    ele.color='white'
          	    })

          	this.setState({categories},()=>console.log(this.state.categories))

          })
       
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
    
    setCatId = (categoryId,category) => {

    let { categories } = this.state
       
       categories.map( (ele,i) => {
             
             if( ele.category===category){
             	ele.color='#e6e6e6'
             }else{
             	ele.color='white'
             }
       })


       this.setState({categoryId,category})

    }

//**************************************************************************************  

    handleChange = (e) => {
    	this.setState({[e.target.name]:e.target.value})
    }
//**************************************************************************************
   
//**************************************************************************************
    handleSubmit = (e) => {

    	e.preventDefault()

    	let { product      } = this.state
    	let { price        } = this.state
    	let { quantity     } = this.state
    	let { description  } = this.state
    	let { categoryId   } = this.state
    	let { category     } = this.state
    	let { details      } = this.state
      let { pictures     } = this.state
    	
        Meteor.call('addProduct',
        	product.trim(),
        	Number(price),
        	Number(quantity),
        	category,
        	categoryId,
        	description,
          pictures,
        	(err,succ) =>{
        		if(err){
        			console.log('add product error')
        		}else{
        			this.props.history.push({pathname:'/admin/products-summary'})
        		}
        	}
        )

        this.myFormRef.reset();
       
    }

	render(){
        
        

		return(
			   <div className = 'adminMainContainer'>
			   <div className = 'addProductHeader'>Add Product</div>
			   <div className = 'addProductBody'>
                    <form  
                           ref={(el) => this.myFormRef = el}
                           onSubmit  = { this.handleSubmit.bind(this)}
                           onChange  = { this.handleChange.bind(this)}
                           className = 'formArea'>

                       <div>

                          <div className = 'inputContainer'>
                                <div   className = 'slimLabel'>Product</div>         
                                <input name      = 'product'
                                       className = 'slimInput'
                                       type      = 'text'
                                       required
                                       />

                          </div>

                    	  <div className = 'inputContainer'>
                                <div   className = 'slimLabel'>Price</div>         
                                <input name      = 'price'
                                       className = 'slimInput'
                                       type      = 'number'
                                       required
                                       />
                          </div>
                          
                          <div className = 'inputContainer'>
                                <div   className = 'slimLabel'>Quantity</div>         
                                <input 
                                       name      = 'quantity'
                                       className = 'slimInput'
                                       type      = 'number'
                                       required
                                       />
                          </div>
                          
                          <div className = 'inputContainer'>
                                <div      className = 'slimLabel'>Description</div>         
                                <textarea className = 'textArea'
                                          name      = 'description'
                                          required
                                />
                          </div>

                          <div className = 'inputContainer'>
                                <div      className = 'slimLabel'>Details</div>         
                                <textarea className = 'textArea'/>
                          </div>

                        </div>
                        <div>
                        	<div className = 'addProdCat'>Categories</div>
                        	{
                        		this.state.categories.map( (ele,i) => {
                        			return <div 

                        			      key       = { i }
                        			      className = 'addCat'
                        			      style     = {{backgroundColor:ele.color}}
                        			      onClick   = { this.setCatId.bind(this,ele._id,ele.category)}
                        			      >{ele.category}</div>
                        		})
                        	}
                        </div>
                        <button className = 'submitProduct'>Add Product</button>
                          
                    </form>
                    
                         
                      
                    </div>
                    
			   
                    
               </div>
			   )
	}
}


                     