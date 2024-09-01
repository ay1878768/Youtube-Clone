import { createSlice } from "@reduxjs/toolkit";

const menuSlice=createSlice({
    name:"menu",
    initialState:{
        isShowMenuBar:true,
    },
    reducers:{
        toggleMenu: (state) => {
            state.isShowMenuBar=!state.isShowMenuBar;
        },
        closeMenu: (state) => {
            state.isShowMenuBar=false;
        },
        showMenu: (state) => {
            state.isShowMenuBar=true;
        }
    }
});
export const { toggleMenu,closeMenu,showMenu} = menuSlice.actions;
export default menuSlice.reducer;