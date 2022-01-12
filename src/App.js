import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from './redux/store';
import {  getdata } from './redux/slices/data';
import { useEffect, useRef,useCallback } from 'react';

function App() {
const dispatch=useDispatch()
const state=useSelector((state)=>state.data)
console.log(state)
useEffect(()=>{
 dispatch(getdata())
},[])

const observer=useRef()
const lastelement=useCallback(node=>{
  if(observer.current) observer.current.disconnect();
  observer.current=new IntersectionObserver(e=>{
    if(e[0].isIntersecting){
      dispatch(getdata())
    }
  })
  if(node) observer.current.observe(node)
})

  return (
    <div style={{display: 'flex', width:'100vw',minHeight:'100vh',
    background:'lightgray',flexDirection:'column',
    justifyContent:'center',alignItems: 'center'}}>
     {
       state.currentdata.map((item,index)=>{
         if(state.currentdata.length===index+1){
          return <div ref={lastelement} key={item.id}>
          {item.email}
       </div>
         } else{
          return <div  key={item.id}>
          {item.email}
       </div>
         }
      
       })
     }
    
    </div>
  );
}

export default App;
