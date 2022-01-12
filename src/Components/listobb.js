import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { getsingledata } from '../redux/slices/data'
const Listobb=()=>{
    const state=useSelector(state=>state.data)
    const dispatch=useDispatch()
    const {id}=useParams()
    console.log(id)

    useEffect(()=>{
      
        dispatch(getsingledata(id))
    },[])


    return (
        <>
<div>
email:{state.currentobject?.email}
</div>
<div>
first Name:{state.currentobject?.first_name}
</div>
<div>
last Name:{state.currentobject?.last_name}
</div>
</>

    )
}
export default Listobb