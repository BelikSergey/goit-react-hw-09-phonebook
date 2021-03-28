import {combineReducers} from 'redux';
import  actions from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';

const itemsReducer = createReducer([], {
    [actions.itemGetSuccess]:(_, {payload})=> payload,
    [actions.itemAddSuccess]:(state, {payload})=>[...state, payload],
    [actions.itemRemoveSuccess]: ( state, {payload}) => state.filter((item)=>item.id !== payload),
})

const filterReducer= createReducer('',{
    'contacts/filter_items':(_, {payload})=> payload,
})

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    // loading,
})