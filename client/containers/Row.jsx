import React from 'react';
import Card from '../components/card.jsx';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    {
        cardsObj: state.cards.cardsObj,
    }
)

const Row = props => {
    const row = props.row
    const cardsArr = [];
    console.log(props.cardsObj[row])

    

    for (let i = 1; i <= 5; i++) {
        cardsArr.push(<Card key={'card' + i} row={row} card={i} contents={props.cardsObj[row][i]}/>)
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