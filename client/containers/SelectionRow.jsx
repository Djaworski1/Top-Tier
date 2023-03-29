import React from 'react';
import Card from '../components/card.jsx';
import tempDB from '../tempDB.js';


const SelectRow = props => {
    const cardsArr = [];
    for (let i = 1; i <= 8; i++) {
        cardsArr.push(
        <Card 
            key={'selectionCard' + i} 
            card={i} 
            contents={tempDB[i - 1]}
        />
        )
    };

    return (
        <div className='selectRowContainer'>
            {cardsArr}
        </div>
    )
}

export default SelectRow;