// @ts-nocheck
import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const customerAdapter = createEntityAdapter({
    selectId: (customer) => customer.id,
    sortComparer: (preCustomer, nextCustomer) => preCustomer.id.localeCompare(nextCustomer.id)
});

const initialState = {
    status: "idle",
    error: null,
    checked: false,
    selectedCustomer: {},
    customers: {
        ids: [],
        entities: {}
    }
};

export const fetchCustomers = createAsyncThunk("customers/fetchCustomers",
    async () => {
        try {
            const response = await fetch("/api/Customer/getall");
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const fetchCustomerById = createAsyncThunk("customers/fetchCustomerById",
    async (id) => {
        try {
            const response = await fetch(`/api/Customer/getbyid/${id}`);
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const addCustomer = createAsyncThunk("customers/addCustomer",
    async (customer) => {
        try {
            const addedCustomer = await fetch("/api/Customer/add",
                {
                    method: "POST",
                    body: JSON.stringify(customer),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then((response) => response.json());
            return addedCustomer;
        } catch (error) {
            return error;
        }
    });

export const updateCustomerPassword = createAsyncThunk("customers/updateCustomerPassword",
    async (customer) => {
        try {
            const updatedCustomer = await fetch(`/api/Customer/update/${customer.id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(customer),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then((response) => response.json());
            return updatedCustomer;
        } catch (error) {
            return error;
        }
    });

export const deleteCustomer = createAsyncThunk("customers/deleteCustomer",
    async (id) => {
        try {
            const response = await fetch(`/api/Customer/delete/${id}`,
                {
                    method: "DELETE"
                }).then((response) => response.json());
            return response;
        } catch (error) {
            return error;
        }
    });

const sliceInvoker = () => {
    return {
        name: "customers",
        initialState,
        reducers: {
            setChecked: (state, action) => {
                state.checked = action.payload;
            }, // setChecked
            setSelectedCustomer: (state, action) => {
                state.selectedCustomer = action.payload;
            }, // setSelectedCustomer
            setStatus: (state, action) => {
                state.status = action.payload;
            } // setStatus
        },
        extraReducers: {
            [fetchCustomers.pending]: (state, action) => {
                state.status = "loading";
            },
            [fetchCustomers.fulfilled]: (state, action) => {
                state.status = "succeeded";
                customerAdapter.setAll(state, action.payload);
            },
            [fetchCustomers.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [fetchCustomerById.pending]: (state, action) => {
                state.status = "loading";
            },
            [fetchCustomerById.fulfilled]: (state, action) => {
                state.status = "succeeded";
                state.selectedCustomer = action.payload;
            },
            [fetchCustomerById.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [addCustomer.pending]: (state, action) => {
                state.status = "loading";
            },
            [addCustomer.fulfilled]: (state, action) => {
                state.status = "succeeded";
                customerAdapter.addOne(state, action.payload);
            },
            [addCustomer.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [updateCustomerPassword.pending]: (state, action) => {
                state.status = "loading";
            },
            [updateCustomerPassword.fulfilled]: (state, action) => {
                state.status = "succeeded";
                state.selectedCustomer = action.payload;
            },
            [updateCustomerPassword.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [deleteCustomer.pending]: (state, action) => {
                state.status = "loading";
            },
            [deleteCustomer.fulfilled]: (state, action) => {
                state.status = "succeeded";
                customerAdapter.removeOne(state, action.payload);
            },
            [deleteCustomer.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            }
        }
    };
};

const customersSlice = createSlice(sliceInvoker());

export const {
    selectAll: selectAllCustomers,
    selectById: selectCustomerById,
    selectIds: selectAllCustomerIds,
    selectEntities: selectAllCustomerEntities,
    selectTotal: selectTotalCustomers
} = customerAdapter.getSelectors((state) => state.Customers);

export const { setChecked, setSelectedCustomer, setStatus } = customersSlice.actions;

export default customersSlice.reducer;