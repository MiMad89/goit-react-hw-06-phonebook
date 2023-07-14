import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSave = JSON.parse(localStorage.getItem('contacts')) || [];

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactsSave,
    reducers: {
        addContact: {
            reducer(state, action) {
              const contactNames = state.map(contact => contact.name);
              if (contactNames.includes(action.payload.name))
                return alert(`${action.payload.name} is alredy in contacts`);
      
              state.push(action.payload);
              localStorage.setItem('contacts', JSON.stringify(state));
            },
            prepare(name, number) {
              return {
                payload: { name, number, id: nanoid() },
              };
            },
          },
        deleteContact(state, action) {
            const index = state.findIndex(task => task.id === action.payload)
            state.splice(index, 1);
            localStorage.setItem('contacts', JSON.stringify(state));
        },
    },
});


export const { addContact, deleteContact } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
