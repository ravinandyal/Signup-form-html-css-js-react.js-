import React,{useState,useRef,useEffect,useMemo,Component} from "react"
import Pcards from "./Product-cards.js"
import Home from "./Home.js"
import About,{Order,Order2} from "./About.js"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import "./App.css"

function App(){

   var [a,b]=useState('')
   var [c,d]=useState('')
  
   var [e,eu]=useState('')
   var [p,pu]=useState('')
   
 var passpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/

 
   function btn1(){
      if(a.trim()===""){
       eu('Enter the email address')
      }else{
       eu("")
      }
   }
   
   function btn2(){
      if(c.trim()===""){
       pu('Enter the password')
      }else if(c.trim().length<8){
      pu("Enter the 8 charector")
      }else if(!passpattern.test(c)){
        pu("Invaid password")
       }else {
        pu("")
      }
   }
   
   
   
   
   var x  = useRef(null)
     
  
    
      return (
        <>
      <div className="border border-primary w-20 mt-5 m-auto p-3">
      <h2 className="text-primary text-center" >Login Form</h2>
      
    
   <div>
       <label>Email:</label> 
       <input type="email" className="form-control" onChange={(e)=>{
         b(e.target.value)
         
       }}/>
     {e && <span className="text-danger">{e}</span>}
   </div>
     
      
   <div>
       <label>Password:</label> 
       <input type="Password" className="form-control"  onChange={(e)=>{
         d(e.target.value)
         
       }}/>
    {p && <span className="text-danger">{p}</span>}
   </div>
  
 
   <div className="mt-3">
     <button onClick={()=>{
       btn1()
       btn2()
     }} className="btn btn-primary w-100" >Login</button>
   </div>
  
  
</div>

     </>
     )
   

}




export default App