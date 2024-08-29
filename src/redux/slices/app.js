import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store"

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT",// can be contact, starred, shared
    }
}

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        //  Toggle Sidebar
        toggleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        }
    }

})


// reducer

export default slice.reducer;

//


export function toggleSidebar(){
    return async () => {
        dispatch(slice.actions.toggleSidebar())
    }
}
export function UpdateSidebarType(type){
    return async () => {
        dispatch(slice.actions.updateSidebarType({
            type
        }))
    }
}

