/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import {data} from './datafile'
const initialState={
    data:[...data],
    currentdata:[],
    pagecount:0,
    currentobject:{}
};

const slice= createSlice({
    name:'data',
    initialState,
    reducers:{
        addpagecount(state,action) {
            state.pagecount=action.payload
        },
        setcurrentdata(state,action){
            
            state.currentdata=action.payload
        },
        setcurrentobject(state,action){
          
            state.currentobject=action.payload
        }
    }
})

export default slice.reducer


export const getdata=()=>{
    return (dispatch,getState) => {
        const  state=getState()
      
        const pagecount=state.data.pagecount+1
        const data=[...state.data.data]
        data.splice(50*pagecount)
       dispatch(slice.actions.setcurrentdata(data))
        dispatch(slice.actions.addpagecount(pagecount))
    }
}

export const getsingledata=(id)=>{
    return (dispatch,getState) => {
        const  state=getState()
 
        const data=[...state.data.data]
        
      data.map((item)=>{
            if(String(item.id)===id){
                dispatch(slice.actions.setcurrentobject(item))
               
            }
      })
      
    }
}
