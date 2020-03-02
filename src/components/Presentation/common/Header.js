import React from 'react'
import API_URL from '../../../config/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RootContext } from '../../../context/RootContext';

export default function Header(props) {
    let context = React.useContext(RootContext);

    return (
        <div className="header">
            <div className="container">
            <a href="#" id="bars"><FontAwesomeIcon icon="bars" style={{width:60,height:60,color:'gray'}} /></a>
            <img src={API_URL+'/product_image/adeegside.png'} alt="logo" className="logo"/>
           
            <p>{context.getTotalCart()}</p>
            </div>
            
        </div>
    )
}
