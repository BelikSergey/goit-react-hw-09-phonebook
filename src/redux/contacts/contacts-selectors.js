import { createSelector } from '@reduxjs/toolkit';

const filterContacts= state => state.contacts.filter;

const AllContacts = state => state.contacts.items;

const isLoading = state => state.contacts.loading;

// const visibleFilteredContacts = state =>{
//     const items = AllContacts(state);
//     const filter=filterContacts(state);
//     return items.filter((item) =>
//     item.name.toLowerCase()
//     .includes(filter.toLowerCase())
//     );
// }
 const visibleFilteredContacts =createSelector([AllContacts,filterContacts],(items,filter)=>{
    return items.filter((item) =>
    item.name.toLowerCase()
    .includes(filter.toLowerCase())
    );
 })

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    filterContacts,
    visibleFilteredContacts,
    AllContacts,
    isLoading
}               