import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function CopiedFakeApi() {

    const [xyz, setXyz] = useState([])

 const fetchdatas =()=>{  

  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response)=>{

    console.log(response);
   setXyz(response.data)

  })
 }


  return (
    <div>
 
 <button type="button" class="btn btn-info" onClick={fetchdatas}>view api data in console and in card </button>





 {     xyz.map((value)=>{
            return( 

        <div className="card mb-5 mx-5 my-5" >
  

  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{value.name}</h5>

        <p className="card-text"><small className="text-muted"> {value.phone}
<br></br>
{value.email}
</small></p>
  
  
        <button type="button" class="btn btn-primary">Know more</button>
          
     
      </div>
    </div>
  </div>  
</div>


)})}
      
      
     
    </div>
  )
}

export default CopiedFakeApi