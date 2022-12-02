import axios from 'axios';
import React, { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom';

export default function ListUser() {
  let [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get('https://637fa2292f8f56e28e927ecf.mockapi.io/users').then(
      (response)=>{
        console.log(response.data);
        setUsers(response.data);
      }
    )
  })
  return (
    <div>
     <h2>ListUser</h2> 

    <table>
      <thead>
        <tr>
          <th>action</th>
        
          <th>no</th>
          <th>first name</th>
          <th>last name</th>
          <th>email</th>
          <th>avatar</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user,i)=>{
            return(
              <tr key={i}>
                <td><Link className='btn btn-primary' to="/edit/1"><i className="fa-solid fa-pen-to-square"></i></Link>.
            <button className='btn btn-danger'><i className="fa fa-trash"  ></i>  </button>
            </td>
                <td>{ i + 1}</td>
                <td>{ user.first_name}</td>
                <td>{ user.Last_name}</td>
                <td>{ user.email}</td>
                <td>
                  <img src={ user.avatar} /></td>

              </tr>
            )
          })
        }

      </tbody>
    </table>
    </div>
  )
}
