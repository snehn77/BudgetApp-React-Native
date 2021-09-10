import remove  from "lodash.remove";
export const ADD_ELEMENT = 'ADD_ELEMENT';
export const DELETE_ELEMENT = 'DELETE_ELEMENT';

let elementID = 0;

// Action
export function addelement(element){
    return{
        type: ADD_ELEMENT,
        id:elementID++,
        element
    }
}

export function deleteelement(id){
    return{
        type: DELETE_ELEMENT,
        payload:id
    }
}


// Reducers 

const initialState = []

function elementReducers(state = initialState , action){
    switch(action.type){
        case ADD_ELEMENT:
            return[
                ...state,
                {
                    id:action.id,
                    element:action.element
                }
            ]

        case DELETE_ELEMENT:
            const deleteNewArray = remove(state , obj => {
                return obj.id != action.payload
            })
            return deleteNewArray

        default:
            return state
    }
}

export default elementReducers;