import React from 'react';
import { RootContext } from '../../../context/RootContext';

export default function Quantities(props) {
	let context = React.useContext(RootContext);

	const handleChange = (e) => {
		if (e.target.checked) {
			context.addOrder(e.target.value);
		} else {
			context.removeOrder(e.target.value);
		}
	};
	const list = props.quantity.map((item) => {
		console.log(context.getOrder());
		return (
			<li
				key={item.id}
				style={{
					fontSize: '14px',
					marginTop: '8px',
					display: 'flex !important',
					justifyContent: 'space-between'
				}}
			>
				<label className="switch">
					<input type="checkbox" className="switch__input" value={item.id} onChange={handleChange} />
					<div className="switch__toggle">
						<div className="switch__handle" />
					</div>
				</label>
				<span>{item.quantity}</span>

				<span>{'SLSH ' + item.price}</span>
			</li>
		);
	});
	return list;
}
