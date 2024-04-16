import React, { useEffect} from 'react'
import { UseCustomerContext } from '../Mycontext/context'
///import {useParams} from 'react-router-dom'

const UserUpdate = ({userId,setOpenUp}) => {
    
    const {data,users ,setUsers,handleUpdate} = UseCustomerContext()
    const id = userId 
    const usersData = data.find((users) => users._id.toString() === id)

    useEffect(() => {
        if (usersData) {
          setUsers(prevUsers => ({ 
            ...prevUsers,
            name: usersData.name, 
            email: usersData.email, 
            password: usersData.password,
            phone: usersData.phone,
            age: usersData.age,
            address: usersData.address,
            state: usersData.state,
            pincode: usersData.pincode,
          }));
        }
      }, [usersData, setUsers]);


    return (
    <div className='darkBg'>
      <div className='modelOverview'>
        <div className=' model'>
            
              <div className='col-12 float-start header borderBottom p-3'>
                    <h4 className='textblack float-start mb-0'>Update User</h4>
                    <button className='float-end btn btn-outline-secondary btn-sm' onClick={() =>setOpenUp(false)}> X </button>
              </div>
              
              <form className='body col-12 float-start p-3'>
                <input className='form-control mb-2' name='name' placeholder='name' value={users.name} onChange={(e) => setUsers({ ...users, name: e.target.value })} />

                <input className='form-control mb-2' name='email' placeholder='email' value={users.email} onChange={(e) => setUsers({ ...users, email : e.target.value })} />

                <input className='form-control mb-2' name='password' type='password' placeholder='password' value={users.password} onChange={(e) => setUsers({ ...users, password: e.target.value })} />

                <input className='form-control mb-2' name='phone' type='number' placeholder='phone' value={users.phone} onChange={(e) => setUsers({ ...users, phone: e.target.value })} />

                <input className='form-control mb-2' name='age' type='number' placeholder='age' value={users.age} onChange={(e) => setUsers({ ...users, age: e.target.value })} />

                <textarea className='form-control mb-2' name='address' placeholder='address' value={users.address} onChange={(e) => setUsers({ ...users, address: e.target.value })} />

                <input className='form-control mb-2' name='state' placeholder='state' value={users.state} onChange={(e) => setUsers({ ...users, state: e.target.value })} />

                <input required className='form-control mb-2' name='pincode' type='number' placeholder='pincode' value={users.pincode} onChange={(e) => setUsers({ ...users, pincode: e.target.value })} />
              </form>
              <div className='footer col-12 float-start p-3 borderTop'>
                <button className='btn btn-primary btn-sm float-end ms-2' onClick={() =>handleUpdate(usersData._id)}>Update</button>
                <button className='btn btn-outline-secondary btn-sm float-end' onClick={() =>setOpenUp(false)}>close</button>
              </div>
            
        </div>
      </div>
    </div>
  )
}

export default UserUpdate