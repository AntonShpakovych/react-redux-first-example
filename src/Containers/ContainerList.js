import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ContactReducers from '../reducers/ContactReducers'
import {selectContact} from '../Actions/Action'
class ContainerList extends Component{
    showList(){
        return(
            this.props.contacts.map((contact)=>{
                return(
                    <li onClick ={()=>this.props.selectContact(contact)} key = {contact.id}>{contact.name}</li>
                )
            })
        )
    }
    render(){
        return(
            <ol>
              {this.showList()}
            </ol>
        )
    }
}

function mapStateToProps(state){
    return{
        contacts:state.contacts
    }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectContact:selectContact},dispatch)  
}
export default connect(mapStateToProps,matchDispatchToProps)(ContainerList)