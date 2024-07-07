// src/redux/personSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Person {
  id: string;
  prefix: string;
  firstName: string;
  lastName: string;
  idCard: string;
  gender: string;
  birthDate: string;
  nationality: string;
  countryCode: string;
  phone: string;
  passport?: string;
  expectedSalary: string;
}

interface PersonState {
  people: Person[];
}

const initialState: PersonState = {
  people: JSON.parse(localStorage.getItem('people') || '[]'),
};

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson(state, action: PayloadAction<Person>) {
      state.people.push(action.payload);
      localStorage.setItem('people', JSON.stringify(state.people));
    },
    editPerson(state, action: PayloadAction<Person>) {
      const index = state.people.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.people[index] = action.payload;
        localStorage.setItem('people', JSON.stringify(state.people));
      }
    },
    deletePerson(state, action: PayloadAction<string>) {
      state.people = state.people.filter(p => p.id !== action.payload);
      localStorage.setItem('people', JSON.stringify(state.people));
    },
  },
});

export const { addPerson, editPerson, deletePerson } = personSlice.actions;
export default personSlice.reducer;
