import React from 'react'
import { 
    BrowserRouter, 
    Routes,
   Route,
   Link,
  } from 'react-router-dom';

import Aboutt from './Aboutt';
import Comp2 from './Comp2';
import {useNavigate } from 'react-router-dom';
import Navi1try from './Navi1try';
import Comp1 from './Comp1';
import Heddr from './Heddr';


// This is main page instead of App js file for Routing purpose 

function Routing() {


  return (
 <>
{/* **  This is main page instead of App js file for Routing purpose <br></br>
   - wwrap Header navbar inside BrowserRouter tag <br></br>
   - then we can add links to the things inside of Header navbar component.<br></br> 
   <br></br>
** Add header, footer and static page component outside of the router.<br></br>
 thats how these component will be same for every page. <br></br>
  or do not place these tags inside the route. <br></br>
  <br></br>  
*** wrap every components inside BrowserRouter,, <br></br>  
  -- Use Link tags inside the header comp for routing path to desired path.   */}
{/*  
  <br></br>  <br></br> */}


<BrowserRouter>
<Heddr/>
    <div class="container">
  <div class="row">
    {/* <div class="col-sm-1 my-3"> */}

    <div class="col-lg-2 my-2">
<Navi1try/>
</div>
<div class="col-sm-7 my-3">
<Routes>

<Route path="/" element={<> this is home page </>}/>
      <Route path="/abc" element={<div>Routing 1st page
      </div>}>   </Route>     
      <Route path="/xyz" element= {
      <div className=' justify-content '> xyz page  </div> } />
      <Route path="/about" element={<Aboutt/>}/>
      {/* <Route path="/home" element={<App/>}/> */}
      
      <Route path="/logg" element={<Comp2/>}/>
      <Route path="/newlog" element={<Comp1/>}/>


</Routes>
</div>
</div>
</div>
</BrowserRouter>

</>
  )
}

export default Routing