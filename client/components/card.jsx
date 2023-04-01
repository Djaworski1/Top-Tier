import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


const mapDispatchToProps = dispatch => (
    {
        choosePerson: (array) => dispatch(actions.choosePerson(array)),
        dropPerson: (array) => dispatch(actions.dropPerson(array))
    }
)

const Card = props => {
    const { row, card, contents, selected, selection, choosePerson, dropPerson } = props;

    const selectOrDropCard = (e) => {
        e.preventDefault();
        if (!selection) {
            choosePerson([row, card, contents])
        } else {
            dropPerson([row, card])
        }
    }

    return (
        <div className='card'
            style={{
                border: selected ? 'solid pink' : 'solid grey'
                }}
            onClick={selectOrDropCard}>
            <div className='content' >
                {contents}
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps) (Card);