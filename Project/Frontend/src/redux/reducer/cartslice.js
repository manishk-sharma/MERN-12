import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addcart: (state, action) => {
      // Check if item already exists
      const existingItem = state.find(item => item._id === action.payload._id);
      if (!existingItem) {
        state.push(action.payload);
      } else {
        // Optional: Handle quantity increase here if needed
        // existingItem.quantity += 1; 
      }
    },
    removecart: (state, action) => {
      return state.filter(item => item._id !== action.payload);
    },
    clearcart: () => {
      return [];
    }
  },
});

export const { addcart, removecart, clearcart } = cartSlice.actions;
export default cartSlice.reducer;