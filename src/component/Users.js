import axios from 'axios';
import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';
import { Link } from 'react-router-dom'

function Users() {
  let [users, setUsers] = useState([]);
  let [showdeletealert, setShowDeleteAlert] = useState( false);
  let [ id, setId] = useState(0);

  useEffect(() => {
    bindData();
   
  }, [])

  function confirmDeleteUser(e, userid) {
    e.preventDefault();
    setId(userid);
    setShowDeleteAlert(true);
    
   
  }
  function deleteUser(e){
    
    if ( id !== 0){
      axios.delete('https://637fa2292f8f56e28e927ecf.mockapi.io/users/'+ id). then((result)=>{
      setShowDeleteAlert(false); 
      bindData();
      });
    }

  }
  function bindData(){
    axios.get('https://637fa2292f8f56e28e927ecf.mockapi.io/users').then(
      (result) => {

        setUsers(result.data);
      }, (err) => {
        console.log(err);
      }
    )

  }
  return (
    <div>
      <h1>neymar</h1>
      <hr />
      {
        showdeletealert &&
      
      <SweetAlert
  warning
  showCancel
  confirmBtnText="Yes, delete it!"
  confirmBtnBsStyle="danger"
  title="Are you sure?"
  onConfirm={ (e)=>{ deleteUser ()}}
  onCancel={ (e)=>{ setShowDeleteAlert( false);}}
  
  focusCancelBtn
>
  You will not be able to recover this imaginary file!
</SweetAlert>
}
      <table striped bordered hover variant="dark">
        <thead>
          <tr>
            
            <th>no</th>
            <th>avtar</th>
            <th>name</th>
            <th>email</th>
            <th>mobile</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => {
              return (
                <tr key={i}>
                  
                  <td>{i + 1}</td>
                  <td> <img src={user.avatar} alt={user.name} /></td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td><Link className='btn btn-primary' to="/edit/1"><i className="fa-solid fa-pen-to-square"></i></Link>.
                    <button onClick={(e) => { confirmDeleteUser(e, user.id) }} className='btn btn-danger'><i className="fa fa-trash"  ></i>  </button>
                  </td>
                </tr>

              )

            })
          }


        </tbody>
      </table>

    </div>
  );
}

export default Users
