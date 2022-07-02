
import React, { useState } from 'react'

function Justtrialform() {


    
const [name, setName]= useState("");

function handleSubmit(e){
  e.preventDefault()
alert('form submittes', setName);
}

    return (
    <div>Justtrialform


<>
<div className='card-form my-5'>
   
    <form className='form mx-4 my-4' onSubmit={handleSubmit}>
<div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" onChange={(e)=>setName(e.target.value) } name="username" class="form-control" id="username" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label for="username" class="form-label">Phone No.</label>
    <input type="name" name="phone" class="form-control"  />
  </div>
  <div class="mb-3">
  <label for="inputjob" class="form-label">Profession</label>
    <select id="inputjob" class="form-select">
      <option selected>Select Your Profession...</option>
      <option>Engineer</option>
      <option>Developer</option>
      <option>Manager</option>
      <option>Tech Support</option>
    </select>  
    </div>
 
  <div class="mb-4 form-check">
   <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Register me</label>
    </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</>

    </div>
  )
}

export default Justtrialform