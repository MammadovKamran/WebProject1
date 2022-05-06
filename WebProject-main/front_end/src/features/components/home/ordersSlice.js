// @ts-nocheck
import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const orderAdapter = createEntityAdapter({
    selectId: (order) => order.id,
    sortComparer: (preOrder, nextOrder) => preOrder.id.localeCompare(nextOrder.id)
});

const initialState = {
    status: "idle",
    error: null,
    checked: false,
    selectedOrder: {},
    orders: {
        ids: [],
        entities: {}
    }
};

export const fetchOrders = createAsyncThunk("orders/fetchOrders",
    async () => {
        try {
            const response = await fetch("/api/Order/getall");
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const fetchOrderById = createAsyncThunk("orders/fetchOrderById",
    async (id) => {
        try {
            const response = await fetch(`/api/Order/getbyid/${id}`);
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const addOrder = createAsyncThunk("orders/addOrder",
    async (order) => {
        try {
            const addedOrder = await fetch("/api/Order/add",
                {
                    method: "POST",
                    body: JSON.stringify(order),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then((response) => response.json());
            return addedOrder;
        } catch (error) {
            return error;
        }
    });

export const updateOrderPassword = createAsyncThunk("orders/updateOrderPassword",
    async (order) => {
        try {
            const updatedOrder = await fetch(`/api/Order/update/${order.id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(order),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then((response) => response.json());
            return updatedOrder;
        } catch (error) {
            return error;
        }
    });

export const deleteOrder = createAsyncThunk("orders/deleteOrder",
    async (id) => {
        try {
            const response = await fetch(`/api/Order/delete/${id}`,
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
        name: "orders",
        initialState,
        reducers: {
            setChecked: (state, action) => {
                state.checked = action.payload;
            }, // setChecked
            setSelectedOrder: (state, action) => {
                state.selectedOrder = action.payload;
            }, // setSelectedOrder
            setStatus: (state, action) => {
                state.status = action.payload;
            } // setStatus
        },
        extraReducers: {
            [fetchOrders.pending]: (state, action) => {
                state.status = "loading";
            },
            [fetchOrders.fulfilled]: (state, action) => {
                state.status = "succeeded";
                orderAdapter.setAll(state, action.payload);
            },
            [fetchOrders.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [fetchOrderById.pending]: (state, action) => {
                state.status = "loading";
            },
            [fetchOrderById.fulfilled]: (state, action) => {
                state.status = "succeeded";
                state.selectedOrder = action.payload;
            },
            [fetchOrderById.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [addOrder.pending]: (state, action) => {
                state.status = "loading";
            },
            [addOrder.fulfilled]: (state, action) => {
                state.status = "succeeded";
                orderAdapter.addOne(state, action.payload);
            },
            [addOrder.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [updateOrderPassword.pending]: (state, action) => {
                state.status = "loading";
            },
            [updateOrderPassword.fulfilled]: (state, action) => {
                state.status = "succeeded";
                state.selectedOrder = action.payload;
            },
            [updateOrderPassword.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [deleteOrder.pending]: (state, action) => {
                state.status = "loading";
            },
            [deleteOrder.fulfilled]: (state, action) => {
                state.status = "succeeded";
                orderAdapter.removeOne(state, action.payload);
            },
            [deleteOrder.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            }
        }
    };
};

const ordersSlice = createSlice(sliceInvoker());

export const {
    selectAll: selectAllOrders,
    selectById: selectOrderById,
    selectIds: selectAllOrderIds,
    selectEntities: selectAllOrderEntities,
    selectTotal: selectTotalOrders
} = orderAdapter.getSelectors((state) => state.Orders);

export const { setChecked, setSelectedOrder, setStatus } = ordersSlice.actions;

export default ordersSlice.reducer;