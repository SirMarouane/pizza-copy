import { createSlice } from "@reduxjs/toolkit"

export const panierSlice = createSlice({
    name: 'panier',
    initialState: {
        value: []
    },
    reducers: {
      addArticle: (state, action) => {
        state.value.push(action.payload)
    },
      removeArticle: (state, action) => {
        state.value.splice(action.payload, 1)
    },

}})

export const {addArticle,removeArticle} = panierSlice.actions

export default panierSlice.reducer
