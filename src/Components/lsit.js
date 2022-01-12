import React from 'react'
import { useDispatch, useSelector } from '../redux/store';
import {  getdata } from '../redux/slices/data';
import { useEffect, useRef,useCallback } from 'react';
import {useNavigate} from 'react-router-dom'
const List=()=>{

    const dispatch=useDispatch()
const state=useSelector((state)=>state.data)
console.log(state)
useEffect(()=>{
 dispatch(getdata())
},[])
const navigate=useNavigate()
const observer=useRef()
const lastelement=useCallback(node=>{
  if(observer.current) observer.current.disconnect();
  observer.current=new IntersectionObserver(e=>{
    if(e[0].isIntersecting){
      if(state.currentdata.length<1000)
      dispatch(getdata())
    }
  })
  if(node) observer.current.observe(node)
})

    return (
        <div>
        {
          state.currentdata.map((item,index)=>{
            if(state.currentdata.length===index+1){
             return <div ref={lastelement} key={item.id} onClick={()=>navigate(`/list/${item.id}`)}
             style={{padding:"10px",margin:'10px',
             backgroundColor:'white',boxShadow:'0px 0px 10px white',width:'100%',
             cursor:'pointer'
             }}
             >
             {item.email}
          </div>
            } else{
             return <div  key={item.id}  onClick={()=>navigate(`/list/${item.id}`)} style={{padding:"10px",marginTop:"10px",
             backgroundColor:'white',boxShadow:'0px 0px 10px white',width:'90%'
             }}>
               <div>
             first Name:{item.first_name} 
             </div> 
             <div>
            email: {item.email}
             </div>
          </div>
            }
         
          })
        }
       </div>
    )
}
export default List