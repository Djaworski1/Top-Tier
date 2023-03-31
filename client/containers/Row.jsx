import React from 'react';
import Card from '../components/card.jsx';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    {
        cardsObj: state.cards.cardsObj,
        selection: state.cards.selection,
    }
)

const Row = props => {
    const row = props.row
    const cardsArr = [];
    const { cardsObj, selection } = props

    for (let i = 1; i <= 5; i++) {
        cardsArr.push(<Card key={'card' + i} 
        row={row} 
        card={i} 
        contents={cardsObj[row][i]['contents']} 
        selected={cardsObj[row][i]['selected']}
        selection={selection}/>)
    };

    return (
        <div className='rowContainer'>
            <div 
            className='card' 
            id='topCard' 
            style={{background: props.topColor}}>
                {props.row}
            </div>
            {cardsArr}
        </div>
    )
}

export default connect(mapStateToProps, null) (Row);