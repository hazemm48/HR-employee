import { createSlice } from '@reduxjs/toolkit';
import { data } from '../Components/employee/employeeData.js';

export const employeeSlice = createSlice({
  name: 'employees',
  initialState: { value: data, searchData: '', showForm: false },
  reducers: {
    addEmployee: (state, action) => {
      state.value.push(action.payload);
    },
    removeEmployee: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    searchEmployee: (state, action) => {
      state.searchData = action.payload;
    },
    showForm: (state, action) => {
      state.showForm = action.payload;
    },
  },
});

export const { addEmployee, removeEmployee, searchEmployee, showForm } =
  employeeSlice.actions;

export default employeeSlice.reducer;
