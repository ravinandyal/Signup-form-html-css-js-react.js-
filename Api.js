import React,{useState,useRef,useEffect} from "react"

 
  function Api(url) {
  
 var [a,b] = useState([])
   
  async function api2() { 
    var p = await fetch(url)
      var y = await p.json()
         b(y)
  }
    
  useEffect(()=>{
        api2() 
     },[])

 return a
 
}
 
 export default Api