// @ts-nocheck
import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const candidateAdapter = createEntityAdapter({
    selectId: (candidate) => candidate.id,
    sortComparer: (previousCandidate, nextCandidate) => previousCandidate.id.localeCompare(nextCandidate.id)
});

const initialState = {
    status: "idle",
    error: null,
    selectedCandidate: {},
    candidates: {
        ids: [],
        entities: {}
    }
};

export const fetchCandidates = createAsyncThunk("candidates/fetchCandidates",
    async () => {
        try {
            const response = await fetch("/api/Candidate/getall");
            const candidates = await response.json();
            return candidates;
        } catch (error) {
            return error;
        }
    });

export const fetchCandidateById = createAsyncThunk("candidates/fetchCandidateById",
    async (id) => {
        try {
            const response = await fetch(`/api/Candidate/getbyid/${id}`);
            const candidate = await response.json();
            return candidate;
        } catch (error) {
            return error;
        }
    });

export const updateCandidate = createAsyncThunk("candidates/updateCandidate",
    async (candidate) => {
        try {
            const response = await fetch(`/api/Candidate/update/${candidate.id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(candidate),
                    headers: {
                        'Content-Type': "application/json"
                    }
                });
            const updatedCandidate = await response.json();
            return updatedCandidate;
        } catch (error) {
            return error;
        }
    });

export const addCandidate = createAsyncThunk("candidates/addCandidate",
    async (candidate) => {
        try {
            const response = await fetch("/api/Candidate/add",
                {
                    method: "POST",
                    body: JSON.stringify(candidate),
                    headers: {
                        'Content-Type': "application/json"
                    }
                });
            const addedCandidate = await response.json();
            return addedCandidate;
        } catch (error) {
            return error;
        }
    });

export const deleteCandidate = createAsyncThunk("candidates/deleteCandidate",
    async (id) => {
        try {
            const response = await fetch(`/api/Candidate/delete/${id}`,
                {
                    method: "DELETE"
                });
            const deletedCandidate = await response.json();
            return deletedCandidate;
        } catch (error) {
            return error;
        }
    });

const sliceInvoker = () => {
    return {
        name: "candidates",
        initialState,
        reducers: {
            setSelectedCandidate: (state, action) => {
                state.selectedCandidate = action.payload;
            },
            setCandidates: (state, action) => {
                state.candidates = action.payload;
            },
            setCandidatesStatus: (state, action) => {
                state.status = action.payload;
            },
            setCandidatesError: (state, action) => {
                state.error = action.payload;
            },
            clearCandidates: (state, action) => {
                state.candidates = initialState.candidates;
            },
            clearSelectedCandidate: (state, action) => {
                state.selectedCandidate = initialState.selectedCandidate;
            }
        },
        extraReducers: {
            [fetchCandidates.pending]: (state, action) => {
                state.status = "loading";
            },
            [fetchCandidates.fulfilled]: (state, action) => {
                state.status = "succeeded";
                candidateAdapter.setAll(state, action.payload);
            },
            [fetchCandidates.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [fetchCandidateById.pending]: (state, action) => {
                state.status = "loading";
            },
            [fetchCandidateById.fulfilled]: (state, action) => {
                state.status = "succeeded";
                state.selectedCandidate = action.payload;
            },
            [fetchCandidateById.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [addCandidate.pending]: (state, action) => {
                state.status = "loading";
            },
            [addCandidate.fulfilled]: (state, action) => {
                state.status = "succeeded";
                candidateAdapter.addOne(state, action.payload);
            },
            [addCandidate.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [updateCandidate.pending]: (state, action) => {
                state.status = "loading";
            },
            [updateCandidate.fulfilled]: (state, action) => {
                state.status = "succeeded";
                state.selectedCandidate = action.payload;
            },
            [updateCandidate.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [deleteCandidate.pending]: (state, action) => {
                state.status = "loading";
            },
            [deleteCandidate.fulfilled]: (state, action) => {
                state.status = "succeeded";
                candidateAdapter.removeOne(state, action.payload);
            },
            [deleteCandidate.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            }
        }
    };
};

const candidatesSlice = createSlice(sliceInvoker());

export const {
    selectIds: selectCandidateIds,
    selectEntities: selectCandidateEntities,
    selectAll: selectAllCandidates,
    selectTotal: selectTotalCandidates,
    selectById: selectCandidateById
} = candidateAdapter.getSelectors((state) => state.candidates.candidates);

export const {
    setSelectedCandidate,
    setCandidates,
    setCandidatesStatus,
    setCandidatesError,
    clearCandidates,
    clearSelectedCandidate
} = candidatesSlice.actions;

export default candidatesSlice.reducer;