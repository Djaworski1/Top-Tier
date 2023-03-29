import * as types from '../actionTypes/actionTypes.js';

const initialState = {
    cardsObj: {
        S: {
            1: '-',
            2: '-',
            3: '-',
            4: '-',
            5: '-',
            isSelected: false,
        },
        A: {
            1: '-',
            2: '-',
            3: '-',
            4: '-',
            5: '-',
            isSelected: false,
        },
        B: {
            1: '-',
            2: '-',
            3: '-',
            4: '-',
            5: '-',
            isSelected: false,
        },
        C: {
            1: '-',
            2: '-',
            3: '-',
            4: '-',
            5: '-',
            isSelected: false,
        },
        D: {
            1: '-',
            2: '-',
            3: '-',
            4: '-',
            5: '-',
            isSelected: false,
        },
        select: {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: null,
            7: null,
            8: null,
        }
    },
    selection: null,
}

const cardsReducer = (state = initialState, action) => {
    let cardsObj = state.cardsObj;
    let selection = state.selection;
    let card;
    let row;
    switch (action.type) {
        case types.CHOOSE_PERSON:
            selection = action.payload
            return {
                ...state,
                selection
            }
        case types.DROP_PERSON:
            row = action.payload[0];
            card = action.payload[1];
            cardsObj.row.card = selection;
            return {
                ...state,
                cardsObj
            }
        default: {
            return state
        }
    }
}

export default cardsReducer
