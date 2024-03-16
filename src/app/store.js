import { configureStore } from "@reduxjs/toolkit"
import panierSlice from '../features/panier/panierSlice'

export default configureStore({
    reducer: {
        panier: panierSlice
    }
})
