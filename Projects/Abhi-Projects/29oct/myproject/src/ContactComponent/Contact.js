import './Contact.css';
import { useState } from 'react';

function Contact()
{
  const [ users , setUsers ] = useState([{"uid":1,"username":"admin@gmail.com","password":12345},{"uid":2,"username":"test@gmail.com","password":12323},{"uid":3,"username":"check@gmail.com","password":33345}]);

  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
                <div class="about-text">
<p>Welcome to RoomRent.com</p>
<h2>View & Manage User Details</h2>
<br/>
<table class="table table-bordered">
<tr>
<th>UserID</th>
<th>Username</th>
<th>Password</th>    
</tr>    

{
 users.map((row)=>(
    <tr> 
    <td>{row.uid}</td>
    <td>{row.username}</td>
    <td>{row.password}</td>    
    </tr>
 ))        
}

</table>

                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default Contact;