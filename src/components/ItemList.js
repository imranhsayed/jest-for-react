import React from 'react'

const ItemList = ( { items } ) => {
	console.log( 'items', items );
	return items.length ? (
		<ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
	) : (
		'no items'
	)
};

export default ItemList