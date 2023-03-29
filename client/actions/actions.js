import * as type from '../actionTypes/actionTypes.js';

export const choosePerson = contents => ({
    type: types.choosePerson,
    payload: contents
});

export const dropPerson = {
    type: types.dropPerson,
};