import React from 'react';
import {useDrag, useDrop} from 'react-dnd';

const Card = props => {
    return (
        <div className='card'>
            <div className='content' >
                {props.contents}
            </div>
        </div>
    )
}

export default Card;