import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function LoggInn() {

    const [xyz, setXyz] = useState([])

 const fetchdatas =()=>{  

  axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=55b559a4")
  .then((response)=>{

    console.log(response);
  setXyz(response.data)

  })
 }


  return (
    <div>
 
 <button type="button" class="btn btn-primary" onClick={fetchdatas}>get api data in console</button>





 {     xyz.map((value)=>{
            return( 

        <div className="card mb-5 mx-5 my-5" >
<h4>{value.title}</h4>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
       
        <p className="card-text">This d-in to additional content. </p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      
        


        <button type="button" class="btn btn-primary">Watch Trailer</button>
          
     
      </div>
    </div>
  </div>  
</div>


)})}
      
      
     
    </div>
  )
}

export default LoggInn