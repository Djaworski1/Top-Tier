import * as type from '../actionTypes/actionTypes.js';

export const choosePerson = array => ({
    type: type.CHOOSE_PERSON,
    payload: array
});

export const dropPerson = (array) => ({
    type: type.DROP_PERSON,
    payload: array
});

export const loadSelections = (array) => ({
    type: type.LOAD_SELECTIONS,
    payload: array
})

export const submitBoard = () => ({
    type: type.SUBMIT_BOARD,
})

export const clearBoard = () => ({
    type: type.CLEAR_BOARD,
})

export const loadCategory = (category) => ({
    type: type.LOAD_CATEGORY,
    payload: category,
})

export const addChoice = (contents) => ({
    type: type.ADD_CHOICE, 
    payload: contents,
})