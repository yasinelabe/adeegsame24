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
            <ul  key={item.id}>
          <li><label className="switch">
              <input type="checkbox" className="switch__input" value={item.id} onChange={handleChange} />
              <div className="switch__toggle">
                <div className="switch__handle" />
              </div>
            </label>
            {item.quantity}
            <span className="p">{item.price}</span></li>
        </ul>
        )
    })
   return list;
}
