// @ts-nocheck
import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const ServiceAdapter = createEntityAdapter({
    selectId: ( Service ) => Service.id,
    sortComparer: ( preService, nextService ) => preService.id.localeCompare(nextService.id)
});

const initialState = {
    status: "idle",
    error: null,
    checked: false,
    selectedService: {},
    Services: {
        ids: [],
        entities: {}
    }
};

export const fetchServices = createAsyncThunk("Services/fetchServices",
    async () => {
        try {
            const response = await fetch("/api/Service/getall");
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const fetchServiceById = createAsyncThunk("Services/fetchServiceById",
    async ( id ) => {
        try {
            const response = await fetch(`/api/Service/getbyid${id}`);
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const AddService = createAsyncThunk("Services/addService",
    async ( Service ) => {
        try {
            const addedService = await fetch("/api/Service/add",
                {
                    method: "POST",
                    body: JSON.stringify(Service),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then(response => response.json());
            return addedService;
        } catch (error) {
            return error;
        }
    });

export const updateServicePassword = createAsyncThunk("Services/updateServicePassword",
    async ( Service ) => {
        try {
            const updatedService = await fetch(`/api/Service/update${Service.id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(Service),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then(response => response.json());
            return updatedService;
        } catch (error) {
            return error;
        }
    });

export const deleteService = createAsyncThunk("Services/deleteService",
    async ( id ) => {
        try {
            const response = await fetch(`/api/Service/delete${id}`,
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
        name: "Services",
        initialState,
        reducers: {
            setChecked: ( state, action ) => {
                state.checked = action.payload;
            }, // setChecked
            setSelectedService: ( state, action ) => {
                state.selectedService = action.payload;
            }, // setSelectedService
            setStatus: ( state, action ) => {
                state.status = action.payload;
            }, // setStatus
        },
        extraReducers: {
            [ fetchServices.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ fetchServices.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                ServiceAdapter.setAll(state, action.payload);
            },
            [ fetchServices.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ fetchServiceById.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ fetchServiceById.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                state.selectedService = action.payload;
            },
            [ fetchServiceById.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ AddService.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ AddService.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                ServiceAdapter.addOne(state, action.payload);
            },
            [ AddService.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ updateServicePassword.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ updateServicePassword.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                state.selectedService = action.payload;
            },
            [ updateServicePassword.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [ deleteService.pending ]: ( state, action ) => {
                state.status = "loading";
            },
            [ deleteService.fulfilled ]: ( state, action ) => {
                state.status = "succeeded";
                ServiceAdapter.removeOne(state, action.payload);
            },
            [ deleteService.rejected ]: ( state, action ) => {
                state.status = "failed";
                state.error = action.payload;
            }

        }
    };
};

const ServicesSlice = createSlice(sliceInvoker());

export const {
    selectAll: selectAllServices,
    selectById: selectServiceById,
    selectIds: selectAllServiceIds,
    selectEntities: selectAllServiceEntities,
    selectTotal: selectTotalServices
} = ServiceAdapter.getSelectors(state => state.Services);

export const {
    setChecked,
    setSelectedService,
    setStatus
} = ServicesSlice.actions;

export default ServicesSlice.reducer;