import       React           from 'react'
import { Categories }        from '../api/Categories.js'
//import   FindAllCollections  from '../FindAllCollections'
import UpdateCategorymodal   from './UpdateCategoryModal'
import   { confirmAlert }    from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default class CategorySummary extends React.Component{
    
    constructor(){
    	super()
    	this.updateCategory = this.updateCategory.bind(this)
    	this.state = { 
                 category       : '',
                 newCategory    : 'inline-block'
    	}
    }

//*********************************************************************************

    componentWillMount(){
         
         
         Tracker.autorun( () => {
            
              Meteor.subscribe('categories')
              var categories = Categories.find({}).fetch()
              this.setState({categories})
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

//**********************************************************************************

    handleChange = (e) => { this.setState({category:e.target.value})}

//**********************************************************************************
   
    handleSubmit  = (e) => { 

    	e.preventDefault()

        if(this.state.category!=''){
        
                Meteor.call('addCategory',this.state.category,
                                         () => {
                                         	this.setState({category:''})
                                         })
        }else null
        
    }
//************************************************************************************
    updateCategory = (categoryId,newCategory,category) => {
          Meteor.call('updateCategory', categoryId,newCategory,category)
    }
//************************************************************************************

    handleRemove = (categoryId) => {
          
          let category = Categories.findOne({_id:categoryId}).category

    	  confirmAlert({
		      title  : 'Remove category',
		      message: `All products in category ${category} will be removed ?`,
		      buttons: [
                        { 
				          label: 'Confirm',
				          onClick: () => Meteor.call('removeCategory',categoryId)
                        },
                        {
				          label: 'Cancel',
				          onClick: () => console.log('not')
                        }
                       ]
        })
    	  
    }

	render(){

        let newCategory = {
        	display : `${this.state.newCategory}`,
        	width   : '40%',
        	margin  : '2% 30%'
        }

		 return(
                <div className = 'adminAreaContainer'>
                      <div className = 'categoryList'>

                           <div className = 'categoryListHeader'>Categories</div>
                           
                           <form 
                                onSubmit = { this.handleSubmit.bind(this)}
                                style    = { newCategory }>

                                <input   
	                                   value     = { this.state.category}
	                                   className = 'newCategoryInput'
	                                   onChange  = {this.handleChange.bind(this)}/>
                                <button
                                       className  = 'newCategoryButton'>Add Catergory
                                </button> 
                           </form>


                           <div className = 'categoriesContainer'>
                                {
                                  this.state.categories.map( (ele,i) => {

                                  	return <div 
                                                  key       = { i }
                                  	              className = 'categoryItem'>

                                               <p className = 'categoryText'>{ele.category}</p>
                                               <p className = 'categoryText'>{ele._id}</p>
                                               <div><button className = 'catButton catButton3'
                                                       onClick   = { this.handleRemove.bind(this,ele._id)}
                                               >Remove</button></div>

                                               

                                               <div><UpdateCategorymodal
                                                        category    = { ele }
                                                        updateCategory = { this.updateCategory}
                                               /></div>

                                           </div>
                                  })
                                }

                           </div>
                      </div>
                </div>
		 	   )
	}
}

 

