import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const adapterizer = () => {
  return {
    sortById: (contact) => contact.id,
    sortComparer: (preContact, nextContact) => nextContact.id.localeCompare(preContact.id)
  };
};

const contactsAdapter = createEntityAdapter(adapterizer());

const initialState = {
  status: 'idle',
  error: null,
  activeContact: {},
  contacts: {
    ids: [],
    entities: {}
  }
};

const sliceInvoker = () => {
  return {
    name: 'contacts',
    initialState,
    reducers: {
      addContacts: (state, action) => {
        contactsAdapter.addOne(state, action.payload);
      }
    },
    extraReducers: {}
  };
};

const contactSlice = createSlice(sliceInvoker());

export const {
  selectAll: selectAllContacts,
  selectById: selectContactById,
  selectIds: selectAllContactIds,
  selectEntities: selectAllContactEntities,
  selectTotal: selectContactIdsAndEntities
} = contactsAdapter.getSelectors((state) => state.contacts.contacts);

export const { addContacts } = contactSlice.actions;

export default contactSlice.reducer;
