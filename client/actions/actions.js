import * as type from '../actionTypes/actionTypes.js';

export const choosePerson = array => ({
    type: type.CHOOSE_PERSON,
    payload: array
});

export const dropPerson = (array) => ({
    type: type.DROP_PERSON,
    payload: array
});

export const pullSelections = (array) => ({
    type: type.LOAD_SELECTIONS,
    payload: array
})