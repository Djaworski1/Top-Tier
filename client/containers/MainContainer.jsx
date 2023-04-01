import React, { useEffect } from 'react';
import Row from './Row.jsx'
import SelectRow from './SelectionRow.jsx';
import {socket} from '../socket'
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => (
    {
        loadSelections: (array) => dispatch(actions.loadSelections(array)),
        submitBoard: () => dispatch(actions.submitBoard()),
        loadCategory: (category) => dispatch(actions.loadCategory(category))
    }
)
const mapStateToProps = state => (
    {
        score: state.cards.score,
        category: state.cards.category,
    }
)

const MainContainer = props => {
    const topCardColors = ['#D26864', '#D69859', '#E6BE68', '#EFEB7D', '#C6D673'];
    const ranks = ['S', 'A', 'B', 'C', 'D'];
    const rowArr = [];

    for (let i = 0; i < 5; i++) {
        rowArr.push(<Row key={'row' + i} row={ranks[i]} topColor={topCardColors[i]}/>)
    };

    useEffect(() => {
        fetch('/people/getAllPeople', {
            headers: { 'Content-Type': 'application/json' },
          })
        .then(res => res.json())
        .then(res => {
            props.loadSelections(res['people'])
            props.loadCategory(res['category'])
        })
        
    }, [])
    
    const submitHandler = (e) => {
        e.preventDefault()
        props.submitBoard()
    }
    
    // console.log(people)

    return(
        <div>
            <div className='header'>
                <h1>{'RANK\'D'}</h1>
            </div>
            <div className='header'>
                <h2>{`Your Category is... ${props.category}`}</h2>
            </div>
            <div className='cardsContainer'>
                {rowArr}
            </div>
            <div className='selectionContainer'>
                <SelectRow key={'selectionRow'} row={'select'}/>
            </div>
            <div>{props.score > 0 ? <div>{props.score}</div> : <div></div>}</div>
            <button style={{height: '100px', width: '100px'}} onClick={submitHandler}>Submit choices!</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (MainContainer);