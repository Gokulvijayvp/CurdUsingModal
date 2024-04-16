import React from 'react'
import { UseCustomerContext } from '../Mycontext/context'
import UserAdd from './UserAdd'
import UserList from './UserList'

const Home = () => {
   const {openAdd,setOpenAdd} = UseCustomerContext()
  return (
    
    <div className='col-12 float-start container p-2'>
        {openAdd && <UserAdd setOpenAdd={setOpenAdd}/>}
        <div className='col-12 float-start mt-5'>
          <button className='float-end btn btn-primary' onClick={() =>setOpenAdd(true)}>Add page</button>
          </div>
          <UserList />
    </div>
  )
}

export default Home