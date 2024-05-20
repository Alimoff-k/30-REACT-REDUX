import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
	OnlyFavorite: false,
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //You can mutate state thanks to Immer library
      return {
        ...state,
        title: action.payload,
      };
      //You can mutate state thanks to Immer library
      // state.title = action.payload;
      // return state
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },

		setOnlyFavoriteFilter: (state) => {
			state.OnlyFavorite = !state.OnlyFavorite
		},
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setTitleFilter, setAuthorFilter, setOnlyFavoriteFilter, resetFilters } =
  filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title; 

export const selectAuthorFilter = (state) => state.filter.author;

export const selectOnlyFavoriteFilter = (state) => state.filter.OnlyFavorite

// const {setTitleFilter} = filterSlice.actions.setTitleFilter

export default filterSlice.reducer;
