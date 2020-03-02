import React from 'react'
import { RootContext } from '../../../context/RootContext';

export default function Quantities(props) {
    let context = React.useContext(RootContext);

    const handleChange = (e) => {
        if(e.target.checked){
            context.addOrder(e.target.value)
        }
        else{
            context.removeOrder(e.target.value);
        }
    }
    const list = props.quantity.map((item,i) => {
       console.log(context.getOrder());
        return (
            <ul key={item.id}>
                <li><input type="checkbox" value={item.id} onChange={handleChange} /> {item.quantity}</li>
            </ul>
        )
    })
   return list;
}
