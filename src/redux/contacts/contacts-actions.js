import { createAction } from '@reduxjs/toolkit';


const itemAddRequest= createAction('contacts/itemAddRequest');
const itemAddSuccess= createAction('contacts/itemAddSuccess');
const itemAddError= createAction('contacts/itemAddError');

const itemRemoveRequest= createAction('contacts/itemRemoveRequest');
const itemRemoveSuccess= createAction('contacts/itemRemoveSuccess');
const itemRemoveError= createAction('contacts/itemRemoveError');

const itemGetRequest= createAction('contacts/itemGetRequest');
const itemGetSuccess= createAction('contacts/itemGetSuccess');
const itemGetError= createAction('contacts/itemGetError');

const filterItems = createAction('contacts/filter_items')

// eslint-disable-next-line import/no-anonymous-default-export
 export default { 
    itemAddRequest,
    itemAddSuccess,
    itemAddError, 
    itemRemoveRequest,
    itemRemoveSuccess,
    itemRemoveError, 
    filterItems,
    itemGetRequest,
    itemGetSuccess,
    itemGetError
    }; 

