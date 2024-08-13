import { createSlice } from '@reduxjs/toolkit'

export type FormData  = {
    id: number | null,
    title: string,
    firstName: string,
    lastName:string,
    birthday:string,
    nationality: string,
    citizenId: string ,
    gender: string,
    mobilePhone: string,
    passportNumber: string,
    expectSalary: number | null,
};

const initialState: FormData = {
  id: null,
  title: '',
  firstName: '',
  lastName:'',
  birthday:'',
  nationality: '',
  citizenId: '',
  gender: '',
  mobilePhone: '',
  passportNumber: '',
  expectSalary: null
}

export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setData: (state, action) => {
      Object.assign(state, action.payload);
    },
    resetData: () => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { setData, resetData } = formSlice.actions

export default formSlice.reducer