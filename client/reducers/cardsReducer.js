import * as types from '../actionTypes/actionTypes.js';

const initialState = {
    cardsObj: {
        S: {
            1: {contents: '-',
                selected: false},
            2: {contents: '-',
                selected: false},
            3: {contents: '-',
                selected: false},
            4: {contents: '-',
                selected: false},
            5: {contents: '-',
                selected: false},
        },
        A: {
            1: {contents: '-',
                selected: false},
            2: {contents: '-',
                selected: false},
            3: {contents: '-',
                selected: false},
            4: {contents: '-',
                selected: false},
            5: {contents: '-',
                selected: false},
        },
        B: {
            1: {contents: '-',
                selected: false},
            2: {contents: '-',
                selected: false},
            3: {contents: '-',
                selected: false},
            4: {contents: '-',
                selected: false},
            5: {contents: '-',
                selected: false},
        },
        C: {
            1: {contents: '-',
                selected: false},
            2: {contents: '-',
                selected: false},
            3: {contents: '-',
                selected: false},
            4: {contents: '-',
                selected: false},
            5: {contents: '-',
                selected: false},
        },
        D: {
            1: {contents: '-',
                selected: false},
            2: {contents: '-',
                selected: false},
            3: {contents: '-',
                selected: false},
            4: {contents: '-',
                selected: false},
            5: {contents: '-',
                selected: false},
        },
        select: {
            1: {contents: '-',
                selected: false},
            2: {contents: '-',
                selected: false},
            3: {contents: '-',
                selected: false},
            4: {contents: '-',
                selected: false},
            5: {contents: '-',
                selected: false},
            6: {contents: '-',
                selected: false},
            7: {contents: '-',
                selected: false},
            8: {contents: '-',
                selected: false},
        }
    },
    selection: null,
}

const cardsReducer = (state = initialState, action) => {
    let tempState = JSON.stringify(state)
    tempState = JSON.parse(tempState)
    let {cardsObj, selection} = tempState;
    let select = tempState['cardsObj']['select']
    let card;
    let row;
    let contents;

    switch (action.type) {
        case types.CHOOSE_PERSON:
            [ row, card, contents ] = [ action.payload[0], action.payload[1], action.payload[2] ]
            row = action.payload[0];
            card = action.payload[1];
            selection = Object.assign({row: row, card: card}, cardsObj[row][card])
            cardsObj[row][card]['selected'] = true;
            return {
                ...state,
                selection,
                cardsObj,
            }

        case types.DROP_PERSON:
            row = action.payload[0];
            card = action.payload[1];
            cardsObj[row][card]['contents'] = selection['contents'];
            cardsObj[selection.row][selection.card]['selected'] = false
            cardsObj[selection.row][selection.card]['contents'] = '-';
            
            return {
                ...state,
                cardsObj,
                selection:null,
            }

        case types.LOAD_SELECTIONS:
            contents = action.payload;
            for (let i = 0; i < 8; i++) {
                select[i + 1]['contents'] = contents[i];
            }

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
