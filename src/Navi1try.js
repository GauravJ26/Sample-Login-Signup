import React from 'react'
import { Link} from 'react-router-dom';
function Navi1try() {
  return (
    <div>
        
 <div class="container">
  <div class="row">
 
 <nav class="nav flex-column">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <ul> <Link to="/about">About company</Link></ul>
 <ul><Link to="/logg">Login page</Link></ul>
 <Link to="/logg">Login page</Link>
 <Link to="/newlog">SignUp here </Link>
   {/* link to the path location  */}

</nav>
</div>


</div>
    </div>
  )
}

export default Navi1try