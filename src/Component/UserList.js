import React, { useState } from 'react'
import {UseCustomerContext} from '../Mycontext/context'
import UserUpdate from './UserUpdate'
import UserDelete from './UserDelete'

const UserList = ( ) => {
      const {data,openUp, setOpenUp,showConfirmation, setShowConfirmation} = UseCustomerContext()
      const [selectedUserId, setSelectedUserId] = useState(null);
      

      const clickEdit = (id) => {
        setSelectedUserId(id); 
        setOpenUp(true);
    };
    const clickDelete = (id) =>{
        setShowConfirmation(true)
        setSelectedUserId(id)
    }
  return (
    <div className='col-12 float-start p-3'>
    
    {openUp && <UserUpdate userId={selectedUserId} setOpenUp={setOpenUp} />}
    {showConfirmation &&  <UserDelete userId={selectedUserId} setShowConfirmation={setShowConfirmation}/>}
        <div className='col-12 float-start overflowX'>  
          <table className="tblUl table table-bordered">
              <thead>
                <tr>
                <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Age</th>
                  <th scope="col">Address</th>
                  <th scope="col">State</th>
                  <th scope="col">PinCode</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {data ? data.map(user =>(
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.age}</td>
                  <td>{user.address}</td>
                  <td>{user.state}</td>
                  <td>{user.pincode}</td>
                  <td>
                    <button className='btn btn-sm  btn-primary' onClick={() => clickEdit(user._id)}>Edit</button>
                    <button className='btn btn-sm ms-2 btn-danger' onClick={() => clickDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              )) : <span>No Data</span>}
              </tbody>
           </table>
      </div>
    </div>
  )
}

export default UserList