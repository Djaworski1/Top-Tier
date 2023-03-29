import React from 'react';
import Row from './Row.jsx'
import SelectRow from './SelectionRow.jsx';

const MainContainer = props => {
    const topCardColors = ['#D26864', '#D69859', '#E6BE68', '#EFEB7D', '#C6D673'];
    const ranks = ['S', 'A', 'B', 'C', 'D'];
    const rowArr = [];

    for (let i = 0; i < 5; i++) {
        rowArr.push(<Row key={'row' + i} row={ranks[i]} topColor={topCardColors[i]}/>)
    };

    return(
        <div>
            <div className='header'>
                <h1>{'Rank\'d'}</h1>
                {/* <h2>a party game about ranking people</h2> */}
            </div>
            <div className='cardsContainer'>
                {rowArr}
            </div>
            <div className='selectionContainer'>
                <SelectRow/>
            </div>
            <button style={{height: '100px', width: '100px'}} onClick={()=> {socket.emit('update')}}></button>
        </div>
    )
}

export default MainContainer;