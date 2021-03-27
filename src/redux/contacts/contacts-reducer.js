import {combineReducers} from 'redux';
import  actions from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';

// const {itemAddRequest,
//      itemAddSuccess, 
//      itemAddError,
//      itemRemoveRequest,
//      itemRemoveSuccess,
//      itemRemoveError,
//      itemGetRequest,
//      itemGetSuccess,
//      itemGetError,
    
//     }= actions;

const itemsReducer = createReducer([], {
    [actions.itemGetSuccess]:(_, {payload})=> payload,
    [actions.itemAddSuccess]:(state, {payload})=>[...state, payload],
    [actions.itemRemoveSuccess]: ( state, {payload}) => state.filter((item)=>item.id !== payload),
})

// const itemsReducer = ( state=[], {type, payload}) => {
//     switch (type) {
//         case types.ADD_ITEMS : 
//             return[...state, payload];
//         case types.REMOVE_ITEM : 
//         return state.filter((item)=>item.id !== payload );

//         default:
//             return state;
//     }
// }

const filterReducer= createReducer('',{
    'contacts/filter_items':(_, {payload})=> payload,
})

// const filterReducer = (state='', {type, payload})=> {
//     switch (type) {
//         case types.FILTER_ITEMS:
//             return payload;
    
//         default:
//             return state;
//     }
// };
// const loading = createReducer(false, {
//     [itemAddRequest]: ()=> true,
//     [itemAddSuccess]: ()=> false,
//     [itemAddError]: ()=> false,
//     [itemRemoveRequest]: ()=> true,
//     [itemRemoveSuccess]: ()=> false,
//     [itemRemoveError]: ()=> false,
//     [itemGetRequest]: ()=> true,
//     [itemGetSuccess]: ()=> false,
//     [itemGetError]: ()=> false,
// })

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    // loading,
})