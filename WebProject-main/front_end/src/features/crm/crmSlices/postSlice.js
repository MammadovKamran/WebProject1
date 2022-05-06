import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const adapterizer = () => {
  return {
    sortById: (post) => post.id,
    sortComparer: (prePost, nextPost) => nextPost.date.localeCompare(prePost.date)
  };
};

const postAdapter = createEntityAdapter(adapterizer());

const initialState = {
  status: 'idle',
  error: null,
  post: {},
  posts: {
    ids: [],
    entities: {}
  }
};

const sliceInvoker = () => {
  return {
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {}
  };
};

const postSlice = createSlice(sliceInvoker());

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectEntities: selectPostEntities,
  selectIds: selectPostIds,
  selectTotal: selectIdsAndEntities
} = postAdapter.getSelectors((state) => state.post.posts);

export default postSlice.reducer;
