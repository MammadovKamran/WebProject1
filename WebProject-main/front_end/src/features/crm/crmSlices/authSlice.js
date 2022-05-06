import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const adapterizer = () => {
  return {
    sortById: (auth) => auth.id,
    sortComparer: (oreAuth, nextAuth) => nextAuth.id.localeCompare(oreAuth.id)
  };
};

const authAdapter = createEntityAdapter(adapterizer());

const initialState = {
  status: 'idle',
  error: null,
  active: {},
  auths: {
    ids: [],
    entities: {}
  }
};

const sliceInvoker = () => {
  return {
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {}
  };
};

const authSlice = createSlice(sliceInvoker());

export const {
  selectAll: selectAllAuths,
  selectById: selectAuthById,
  selectIds: selectAuthIds,
  selectEntities: selectAuthEntitites,
  selectTotal: selectAllAuthEntitiesAndIds
} = authAdapter.getSelectors((state) => state.auth.auths);

export default authSlice.reducer;
