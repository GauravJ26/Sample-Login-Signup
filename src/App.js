
import Aboutt from './Aboutt';
import './App.css';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import LoggInn from './LoggInn';
import Routing from './Routing';

import {useNavigate } from 'react-router-dom'; 



function App() {

//  const navigate = useNavigate()

//  const btnroute101 =()=> {
//   navigate("/xyz");

// }


  return (
 
    <div className="App">
 

   <nav class="navbar navbar-dark bg-dark">
  
    <h3 class="nav-link  disabled " aria-current="page" href="#">React App</h3>

    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a className="nav-link warning active" aria-current="page" to="/about">Company Info</a>
  
  {/* <button onClick={btnroute101}>About Company </button> */}
  </li>

  <li class="nav-item"> 
    <a class="nav-link" href="#">free btn </a>
  </li>
  
  <li class="nav-item"> 
    <a class="nav-link" href="#">free btn </a>
  </li>
  </ul>
</nav>


  
      <header className="App-header">

      <div className=" bg-success">

</div>

<>
<Comp1/>
</>
<>
<Comp2/>
</>

<>
<Aboutt/>
</>

{/* <>
<LoggInn/>
</> */}
   </header>

    </div>
  );
}

export default App;
