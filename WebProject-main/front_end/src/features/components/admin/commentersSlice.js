// @ts-nocheck
import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const commenterAdapter = createEntityAdapter({
    selectId: ( commenter ) => commenter.id,
    sortComparer: ( preCommenter, nextCommenter ) => preCommenter.id.localeCompare(nextCommenter.id)
});

const initialState = {
    status: "idle",
    error: null,
    checked: false,
    selectedCommenter: {},
    commenters: {
        ids: [],
        entities: {}
    }
};

export const fetchCommenters = createAsyncThunk("commenters/fetchCommenters",
    async () => {
        try {
            const response = await fetch("/api/Commenter/getall");
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const fetchCommenterById = createAsyncThunk("commenters/fetchCommenterById",
    async ( id ) => {
        try {
            const response = await fetch(`/api/Commenter/getbyid/${id}`);
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const addCommenter = createAsyncThunk("commenters/addCommenter",
    async ( commenter ) => {
        try {
            const addedCommenter = await fetch("/api/Commenter/add",
                {
                    method: "POST",
                    body: JSON.stringify(commenter),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then(response => response.json());
            return addedCommenter;
        } catch (error) {
            return error;
        }
    });

export const updateCommenterPassword = createAsyncThunk("commenters/updateCommenterPassword",
    async ( commenter ) => {
        try {
            const updatedCommenter = await fetch(`/api/Commenter/update/${commenter.id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(commenter),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then(response => response.json());
            return updatedCommenter;
        } catch (error) {
            return error;
        }
    });

export const deleteCommenter = createAsyncThunk("commenters/deleteCommenter",
    async ( id ) => {
        try {
            const response = await fetch(`/api/Commenter/delete/${id}`,
                {
                    method: "DELETE"
                }).then(response => response.json());
            return response;
        } catch (error) {
            return error;
        }
    });

const sliceInvoker = () => {
    return {
        name: "commenters",
        initialState,
        reducers: {
            setChecked: ( state, action ) => {
                state.checked = action.payload;
            }, // setChecked
            setSelectedCommenter: ( state, action ) => {
                state.selectedCommenter = action.payload;
            }, // setSelectedCommenter
            setStatus: ( state, action ) => {
                state.status = action.payload;
            }, // setStatus
        },
        extraReducers: {
            [ fetchCommenters.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ fetchCommenters.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                commenterAdapter.setAll(state, action.payload);
            },
            [ fetchCommenters.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ fetchCommenterById.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ fetchCommenterById.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                state.selectedCommenter = action.payload;
            },
            [ fetchCommenterById.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ addCommenter.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ addCommenter.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                commenterAdapter.addOne(state, action.payload);
            },
            [ addCommenter.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ updateCommenterPassword.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ updateCommenterPassword.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                state.selectedCommenter = action.payload;
            },
            [ updateCommenterPassword.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ deleteCommenter.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ deleteCommenter.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                commenterAdapter.removeOne(state, action.payload);
            },
            [ deleteCommenter.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            }

        }
    };
};

const commentersSlice = createSlice(sliceInvoker());

export const {
    selectAll: selectAllCommenters,
    selectById: selectCommenterById,
    selectIds: selectAllCommenterIds,
    selectEntities: selectAllCommenterEntities,
    selectTotal: selectTotalCommenters
} = commenterAdapter.getSelectors(state => state.commenters);

export const {
    setChecked,
    setSelectedCommenter,
    setStatus
} = commentersSlice.actions;

export default commentersSlice.reducer;