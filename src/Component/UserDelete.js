import React, { useEffect, useState } from 'react'
import { UseCustomerContext } from '../Mycontext/context'

const UserDelete = ({ userId, setShowConfirmation }) => {
    const {handleDelete,data} = UseCustomerContext()
    const [seletedName, setSeletedName] = useState('')
    
    const handleDeleteClick = () => {
        handleDelete(userId);
        setShowConfirmation(false);
    };

    const userData = data.find( user => user._id === userId)

    useEffect(()=>{
        setSeletedName(userData.name)
    },[setSeletedName,userData.name])

  return (
    <div>
        <div className='darkBg'>
            <div className='modelOverview'>
                <div className='modelConfirm'>
                    <div className='col-12 float-start p-3 borderBottom'>
                        <h4 className='textblack float-start'>Delete User</h4>
                        <button className='btn btn-outline-secondary btn-sm float-end' onClick={() => setShowConfirmation(false)}> x </button>
                    </div>
                    <div className='col-12 float-start p-3 py-4'>
                        
                        <div className="alert alert-danger mb-0" role="alert">
                        Are you sure you want to user {seletedName}
                        </div>
                    </div>
                    <div className='p-3 borderTop col-12 float-start'>
                        
                        <button className='btn btn-danger btn-sm  ms-2 float-end' onClick={handleDeleteClick}>Delete</button>
                        <button className='btn btn-outline-secondary float-end btn-sm' onClick={() => setShowConfirmation(false)}>Cencel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDelete