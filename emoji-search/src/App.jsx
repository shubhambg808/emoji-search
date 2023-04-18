import json from "./json/data.json";
import './App.css'
import { useState,useEffect } from "react";

function App() {
  const [filter,setFilter]=useState("")
  const [iterate,setIterate]=useState([])
  const [msg,setMsg]=useState("")

useEffect(()=>{
  let  filteredResult=json.filter((ele)=>(
    ele.title.toLowerCase().includes(filter.toLowerCase())
  ))

setIterate(filteredResult)

  if(filteredResult.length==0){
setMsg("no emoji found")
  }
  else if(filteredResult.length>0){
 setMsg("")
  }

},[filter])

  return (
    <div className="App">
      <input type="text" style={{height:"30px",width:"500px" ,fontSize:"20px"}} onChange={(event)=>setFilter(event.target.value)}  value={filter} />
      <h2>{msg}</h2>
   <div style={{listStyle:"none",display:"grid", gridTemplateColumns:"auto auto auto auto"}}>
   {iterate.map((ele,ind)=>(

      <p key={ind} style={{border:"2px solid white" , height:"50px", width:'auto',padding:"10px", margin:"10px",backgroundColor:"lightblue", color:"black"}}>
        {ele.symbol}  {ele.title}  </p>

    ))}
   </div>
    </div>
  )
}

export default App
