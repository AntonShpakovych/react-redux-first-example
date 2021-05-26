import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component{
    render(){
        console.log(this.props)
        if(!this.props.contact){
            return(<p>Выберите контакт</p>)
        }
        return(
            <div>
                <h2>{this.props.contact.surname}</h2>
                <h2>{this.props.contact.years}</h2>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        contact:state.active
    }
}

export default connect(mapStateToProps)(Details);