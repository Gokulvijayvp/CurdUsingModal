import {useEffect, useState} from 'react'
import axios from 'axios'
const { createContext, useContext } = require("react");

const customerContext = createContext('')

export function UseCustomerContext(){
    return  useContext(customerContext)
}

export default function CustomerProvider({children}){
    const [data,setData] = useState([])
    const [openAdd,setOpenAdd] = useState(false)
    const [openUp, setOpenUp] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false);

    
    const [newUsers ,setNewUsers] = useState({
        name:'',
        email:'',
        password:'',
        phone:'',
        age:'',
        address:'',
        state:'',
        pincode:'',
    })

    const [users ,setUsers] = useState({
        name:'',
        email:'',
        password:'',
        phone:'',
        age:'',
        address:'',
        state:'',
        pincode:'',
    })

    const client = axios.create({
        baseURL:'http://localhost:3030'
    })

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const res = await client.get('/users')
                console.log(res.data)    
                setData(res.data)
            } catch (error) {
            console.log(error)
            }
        }
        fetchData()
    },[])

 


    const handleNewuserAdd = async(event) =>{
        event.preventDefault()
        if (
            newUsers.name !== '' &&
            newUsers.email !== '' &&
            newUsers.password !== '' &&
            newUsers.phone !== '' &&
            newUsers.age !== '' &&
            newUsers.address !== '' &&
            newUsers.state !== '' &&
            newUsers.pincode !== ''
        ) {
            const datas = {
                name: newUsers.name,
                email: newUsers.email,
                password: newUsers.password,
                phone: newUsers.phone,
                age: newUsers.age,
                address: newUsers.address,
                state: newUsers.state,
                pincode: newUsers.pincode,
            };
        
            try {
                const response = await client.post('/users/newuser', datas);
                setData(prevData => [response.data, ...prevData]);
                setOpenAdd(false);
                
            } catch (error) {
                
                console.error('Error creating new user:', error);
            }
        }
    }

    const handleUpdate = async(id) =>{
        if(
            users.name !== '' &&
            users.email !== '' &&
            users.password !== '' &&
            users.phone !== '' &&
            users.age !== '' &&
            users.address !== '' &&
            users.state !== '' &&
            users.pincode !== ''
        ){
        try {
            
            const datas={
                name:users.name,
                email:users.email,
                password:users.password,
                phone:users.phone,
                age:users.age,
                address:users.address,
                state:users.state,
                pincode:users.pincode,
            }      

            const response = await client.put(`/users/updateuser/${id}`, datas)
            setData(data.map((users) => (users._id === id ? {...response.data} : users)))
            setOpenUp(false)
        } catch (error) {
            console.log(error)
        }
        }
    }

    const handleDelete = async(id)=>{
        try {
            await client.delete(`/users/deleteusers/${id}`)
            setData(data.filter( users => users._id !==id ))
            setShowConfirmation(false)
        } catch (error) {
            console.log(error)
        }
    }
    
    return  <customerContext.Provider value={{openAdd,setOpenAdd,data,users,openUp,showConfirmation, setShowConfirmation, setOpenUp ,setUsers,handleUpdate,newUsers,setNewUsers,handleNewuserAdd,handleDelete}}>
            {children}
        </customerContext.Provider>
    
}

 
