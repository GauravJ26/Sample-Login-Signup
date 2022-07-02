// Login page 

import React from 'react'

function Comp2() {
  return (
    <div>
        <h2>Login Page</h2>
        <>
<div className='card-form my-5'>
    <form className='form mx-4 my-4'>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check my Credentials...</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</>

    </div>
   
   
  )
}

export default Comp2