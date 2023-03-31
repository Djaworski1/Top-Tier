import React from 'react';
import Card from '../components/card.jsx';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    {
        cardsObj: state.cards.cardsObj,
        selection: state.cards.selection,
    }
)

const SelectRow = props => {
    const row = props.row
    const cardsArr = [];
    const { cardsObj, selection } = props
    for (let i = 1; i <= 8; i++) {
        cardsArr.push(
        <Card 
            key={'selectionCard' + i} 
            row={row} 
            card={i} 
            contents={cardsObj['select'][i]['contents']} 
            selected={cardsObj['select'][i]['selected']}
            selection={selection}/>
        )
    };

    return (
        <div className='selectRowContainer'>
            {cardsArr}
        </div>
    )
}

export default connect(mapStateToProps, null) (SelectRow);