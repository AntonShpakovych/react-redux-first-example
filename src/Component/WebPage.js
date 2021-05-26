import React from 'react'
import ContainerList from '../Containers/ContainerList'
import Details from '../Containers/Details'
const WebPage = () =>{
    return(
        <div>
        <h3>Contacts:</h3>
        <ContainerList/>
        <hr/>
        <h3>Details:</h3>
        <Details/>
    </div>
    )
}



export default WebPage