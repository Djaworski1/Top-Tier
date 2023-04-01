
import * as types from '../actionTypes/actionTypes.js';
import {socket} from '../socket'

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
    pickerBoard: null,
    score: 0,
    currSelections: {},
    category: null,
    emptyBoard: {
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
}

const cardsReducer = (state = initialState, action) => {
    let tempState = JSON.stringify(state)
    tempState = JSON.parse(tempState)
    let {cardsObj, 
        selection, 
        score, 
        pickerBoard, 
        emptyBoard, 
        currSelections,
        category } = tempState;
    let card;
    let row;
    let contents;
    let allRanked = true;

    switch (action.type) {
        case types.CHOOSE_PERSON:
            [ row, card, contents ] = [ action.payload[0], action.payload[1], action.payload[2] ]
            row = action.payload[0];
            card = action.payload[1];
            selection = Object.assign({row: row, card: card}, cardsObj[row][card])
            cardsObj[row][card]['selected'] = true;
            // socket.broadcast.emit('personChosen', action.payload)
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
            // socket.broadcast.emit('personDropped', action.payload)
            return {
                ...state,
                cardsObj,
                selection:null,
            }

        case types.LOAD_SELECTIONS:
            contents = action.payload;
            for (let i = 0; i < 8; i++) {
                cardsObj['select'][i + 1]['contents'] = contents[i];
            }

            currSelections = cardsObj['select'];

            return {
                ...state,
                cardsObj,
                currSelections
            }

        case types.SUBMIT_BOARD:
            // console.log(cardsObj['select'])
            // socket.broadcast.emit('boardSubmitted')
            for (let i = 1; i <= 5; i++) {
                if (cardsObj['select'][i]['contents'] !== '-') {
                    allRanked = false;
                    break
                } 
            }
            if (!pickerBoard && allRanked) {
                pickerBoard = JSON.parse(JSON.stringify(cardsObj));
                cardsObj = emptyBoard;
                cardsObj['select'] = currSelections;
            } else if (pickerBoard && allRanked) {
                for (let row of Object.keys(cardsObj)) {
                    for (let i = 1; i <= 5; i++) {
                        if (cardsObj[row][i]['contents'] !== '-' && cardsObj[row][i]['contents'] === pickerBoard[row][i]['contents']) {
                            score += 1;
                        }
                    }
                }
            } else {
                window.alert('All cards haven\'t been ranked')
            }

            console.log('score', score)
            return {
                ...state,
                tempState,
                score,
                allRanked,
                pickerBoard,
                cardsObj
            }

        case types.CLEAR_BOARD:
            cardsObj = emptyBoard;
            cardsObj['select'] = currSelections;
            // socket.broadcast.emit('clearBoard')
            return {
                ...state,
                cardsObj
            }

        case types.LOAD_CATEGORY: 
            category = action.payload['category'];
            // socket.broadcast.emit('loadCategory', action.payload)
            return {
                ...state,
                category
            }
        
        case types.ADD_CHOICE:

            if (!selection) {
                window.alert('Pick a person to replace')
            } else {
                currSelections[selection.card]['contents'] = action.payload
                cardsObj[selection.row][selection.card]['selected'] = false
                cardsObj[selection.row][selection.card]['contents'] = action.payload;
                selection = null
                fetch('/people/addAllPeople', {
                    method: 'POST', 
                    mode: 'cors',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({people: [action.payload]})
                })
            }
            
            return {
                ...state,
                cardsObj,
                selection,
                currSelections
            }

        default: {
            return state
        }
    }
}

export default cardsReducer
