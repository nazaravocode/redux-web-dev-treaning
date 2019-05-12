export const ADD_ITEM = 'ADD_ITEM';

export  function setItem(payload) {
    return {
        type: ADD_ITEM,
        payload
    }
}