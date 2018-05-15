import React      from 'react'
import { Meteor } from 'meteor/meteor'

export default class AddPictures extends React.Component{
        constructor(){
        	super()
        	this.handleAddPicture = this.handleAddPicture.bind(this)
        	
        }

        handleAddPicture = (productId,url,public_id) => {
                 
            this.props.addPicture(productId,url,public_id)
              
        }
        

        uploadWidget() {
           
        var { productId } = this.props 
        var that = this
        cloudinary.openUploadWidget({ 
                cloud_name     : 'estefanodi2009', 
                upload_preset  : 'mc39je42'
        },
            function(error, result){
                if(error){
                  debugger
                }else{
                	
                  var     url     = result[0].url
                  var  public_id  = result[0].public_id
                  //var  picture    = {url,public_id,productId}
                       

               that.handleAddPicture(productId,url,public_id)
                 }
            });
    }

        render(){

        	let main = { 
        		        width  : '100%',
        		        height : '100vh',
        		        backgroundColor: 'red'
                       }

                return (
                        
                
                    <button className ="ui button"
                            onClick={ this.uploadWidget.bind(this) }>
                        add image
                    </button>
                
            
                )
        }
}
