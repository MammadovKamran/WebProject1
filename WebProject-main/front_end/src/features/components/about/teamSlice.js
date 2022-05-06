// @ts-nocheck
import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const EmployeeAdapter = createEntityAdapter({
    selectId: (Employee) => Employee.id,
    sortComparer: (preEmployee, nextEmployee) => preEmployee.id.localeCompare(nextEmployee.id)
});

const initialState = {
    status: "idle",
    error: null,
    checked: false,
    selectedEmployee: {},
    Employees: {
        ids: [],
        entities: {}
    }
};

export const fetchEmployees = createAsyncThunk("Employees/fetchEmployees",
    async () => {
        try {
            const response = await fetch("/api/Employee/getall");
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const fetchEmployeeById = createAsyncThunk("Employees/fetchEmployeeById",
    async (id) => {
        try {
            const response = await fetch(`/api/Employee/getbyid${id}`);
            return await response.json();
        } catch (error) {
            return error;
        }
    });

export const AddEmployee = createAsyncThunk("Employees/addEmployee",
    async (Employee) => {
        try {
            const addedEmployee = await fetch("/api/Employee/add",
                {
                    method: "POST",
                    body: JSON.stringify(Employee),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then((response) => response.json());
            return addedEmployee;
        } catch (error) {
            return error;
        }
    });

export const updateEmployeePassword = createAsyncThunk("Employees/updateEmployeePassword",
    async (Employee) => {
        try {
            const updatedEmployee = await fetch(`/api/Employee/update${Employee.id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(Employee),
                    headers: {
                        'Content-Type': "application/json"
                    }
                }).then((response) => response.json());
            return updatedEmployee;
        } catch (error) {
            return error;
        }
    });

export const deleteEmployee = createAsyncThunk("Employees/deleteEmployee",
    async (id) => {
        try {
            const response = await fetch(`/api/Employee/delete${id}`,
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
        name: "Employees",
        initialState,
        reducers: {
            setChecked: (state, action) => {
                state.checked = action.payload;
            }, // setChecked
            setSelectedEmployee: (state, action) => {
                state.selectedEmployee = action.payload;
            }, // setSelectedEmployee
            setStatus: (state, action) => {
                state.status = action.payload;
            } // setStatus
        },
        extraReducers: {
            [fetchEmployees.pending]: (state, action) => {
                state.status = "loading";
            },
            [fetchEmployees.fulfilled]: (state, action) => {
                state.status = "succeeded";
                EmployeeAdapter.setAll(state, action.payload);
            },
            [fetchEmployees.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [fetchEmployeeById.pending]: (state, action) => {
                state.status = "loading";
            },
            [fetchEmployeeById.fulfilled]: (state, action) => {
                state.status = "succeeded";
                state.selectedEmployee = action.payload;
            },
            [fetchEmployeeById.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [AddEmployee.pending]: (state, action) => {
                state.status = "loading";
            },
            [AddEmployee.fulfilled]: (state, action) => {
                state.status = "succeeded";
                EmployeeAdapter.addOne(state, action.payload);
            },
            [AddEmployee.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [updateEmployeePassword.pending]: (state, action) => {
                state.status = "loading";
            },
            [updateEmployeePassword.fulfilled]: (state, action) => {
                state.status = "succeeded";
                state.selectedEmployee = action.payload;
            },
            [updateEmployeePassword.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            },
            [deleteEmployee.pending]: (state, action) => {
                state.status = "loading";
            },
            [deleteEmployee.fulfilled]: (state, action) => {
                state.status = "succeeded";
                EmployeeAdapter.removeOne(state, action.payload);
            },
            [deleteEmployee.rejected]: (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            }
        }
    };
};

const EmployeesSlice = createSlice(sliceInvoker());

export const {
    selectAll: selectAllEmployees,
    selectById: selectEmployeeById,
    selectIds: selectAllEmployeeIds,
    selectEntities: selectAllEmployeeEntities,
    selectTotal: selectTotalEmployees
} = EmployeeAdapter.getSelectors((state) => state.Employees);

export const { setChecked, setSelectedEmployee, setStatus } = EmployeesSlice.actions;

export default EmployeesSlice.reducer;