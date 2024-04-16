import React from 'react'
import { UseCustomerContext } from '../Mycontext/context'


const UserAdd = ({setOpenAdd}) => {
   const {newUsers,setNewUsers,handleNewuserAdd} = UseCustomerContext()
  return (
    <div className='darkBg'>
      <div className='modelOverview'>
        <div className='model'>
            <div>
              <div className='col-12 float-start header borderBottom p-3'>
                <h4 className='textblack float-start mb-0'>New User</h4>
                <button className='float-end btn btn-outline-secondary btn-sm' onClick={() =>setOpenAdd(false)}> X </button>
              </div>
              
              <form className='body col-12 float-start p-3'>
                <input className='form-control mb-2' name='name' placeholder='name' value={newUsers.name} onChange={(e) => setNewUsers({ ...newUsers, name: e.target.value })} />
       
                <input className='form-control mb-2' name='email' placeholder='email' value={newUsers.email} onChange={(e) => setNewUsers({ ...newUsers, email : e.target.value })} />

                <input className='form-control mb-2' name='password' type='password' placeholder='password' value={newUsers.password} onChange={(e) => setNewUsers({ ...newUsers, password: e.target.value })} />

                <input className='form-control mb-2' name='phone' type='number' placeholder='phone' value={newUsers.phone} onChange={(e) => setNewUsers({ ...newUsers, phone: e.target.value })} />

                <input className='form-control mb-2' name='age' type='number' placeholder='age' value={newUsers.age} onChange={(e) => setNewUsers({ ...newUsers, age: e.target.value })} />

                <textarea className='form-control mb-2' name='address' placeholder='address' value={newUsers.address} onChange={(e) => setNewUsers({ ...newUsers, address: e.target.value })} />

                <input className='form-control mb-2' name='state' placeholder='state' value={newUsers.state} onChange={(e) => setNewUsers({ ...newUsers, state: e.target.value })} />

                <input className='form-control mb-2' name='pincode' type='number' placeholder='pincode' value={newUsers.pincode} onChange={(e) => setNewUsers({ ...newUsers, pincode: e.target.value })} />
              </form>
              <div className='footer col-12 float-start p-3 borderTop'>
                <button className='btn btn-primary btn-sm float-end ms-2' onClick={(event) => handleNewuserAdd(event)}>Submit</button>
                <button className='btn btn-outline-secondary btn-sm float-end' onClick={() =>setOpenAdd(false)}>close</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserAdd