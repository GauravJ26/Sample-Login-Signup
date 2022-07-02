import React from 'react'
import Comp2 from './Comp2'
import Routing from './Routing'
import { 
    BrowserRouter, 
    Routes,
   Route,
   Link,
  } from 'react-router-dom';

function Appp1() {


    return (
    <div>
<header>        

        <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
       {/* <button class="nav-link" onClick={aboutPage}>about company</button> */}
       {/* <Link className="nav-link" to="about">abt company</Link> */}

        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
</header>


 {/* Side navbar  */}

 <div class="container">
  <div class="row">
    <div class="col-sm-2 mx-2 my-3">
 <nav class="nav flex-column">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">to abt page</a>
  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</nav>
</div>

</div>
</div>
   

    </div>
  )
}

export default Appp1