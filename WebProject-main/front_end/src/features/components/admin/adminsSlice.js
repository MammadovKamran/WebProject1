// @ts-nocheck
import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const adminAdapter = createEntityAdapter({
    selectId: ( admin ) => admin.id,
    sortComparer: ( preAdmin, nextAdmin ) => preAdmin.id.localeCompare(nextAdmin.id)
});

const initialState = {
    status: "idle",
    error: null,
    checked: false,
    selectedAdmin: {},
    admins: {
        ids: [],
        entities: {}
    }
};

export const fetchAdmins = createAsyncThunk("admins/fetchAdmins",
    async () => {
        try {
            const response = await fetch("/api/Admin/getall");
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const fetchAdminById = createAsyncThunk("admins/fetchAdminById",
    async ( id ) => {
        try {
            const response = await fetch(`/api/Admin/getbyid/${id}`);
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const addAdmin = createAsyncThunk("admins/addAdmin",
    async ( admin ) => {
        try {
            const addedAdmin = await fetch("/api/Admin/add",
                {
                    method: "POST",
                    body: JSON.stringify(admin),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then(response => response.json());
            return addedAdmin;
        } catch (error) {
            return error;
        }
    });

export const updateAdminPassword = createAsyncThunk("admins/updateAdminPassword",
    async ( admin ) => {
        try {
            const updatedAdmin = await fetch(`/api/Admin/update/${admin.id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(admin),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then(response => response.json());
            return updatedAdmin;
        } catch (error) {
            return error;
        }
    });

export const deleteAdmin = createAsyncThunk("admins/deleteAdmin",
    async ( id ) => {
        try {
            const response = await fetch(`/api/Admin/delete/${id}`,
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
        name: "admins",
        initialState,
        reducers: {
            setChecked: ( state, action ) => {
                state.checked = action.payload;
            }, // setChecked
            setSelectedAdmin: ( state, action ) => {
                state.selectedAdmin = action.payload;
            }, // setSelectedAdmin
            setStatus: ( state, action ) => {
                state.status = action.payload;
            }, // setStatus
        },
        extraReducers: {
            [ fetchAdmins.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ fetchAdmins.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                adminAdapter.setAll(state, action.payload);
            },
            [ fetchAdmins.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ fetchAdminById.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ fetchAdminById.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                state.selectedAdmin = action.payload;
            },
            [ fetchAdminById.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ addAdmin.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ addAdmin.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                adminAdapter.addOne(state, action.payload);
            },
            [ addAdmin.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ updateAdminPassword.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ updateAdminPassword.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                state.selectedAdmin = action.payload;
            },
            [ updateAdminPassword.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ deleteAdmin.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ deleteAdmin.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                adminAdapter.removeOne(state, action.payload);
            },
            [ deleteAdmin.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            }

        }
    };
};

const adminsSlice = createSlice(sliceInvoker());

export const {
    selectAll: selectAllAdmins,
    selectById: selectAdminById,
    selectIds: selectAllAdminIds,
    selectEntities: selectAllAdminEntities,
    selectTotal: selectTotalAdmins
} = adminAdapter.getSelectors(state => state.admins);

export const {
    setChecked,
    setSelectedAdmin,
    setStatus
} = adminsSlice.actions;

export default adminsSlice.reducer;