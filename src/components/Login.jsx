import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [email,setemail] = useState("vinay@gmail.com")
  const [password,setpassword]= useState("Vinay@123")

 const handleLogin = async ()=>{
   try{
    const res = await axios.post("http://localhost:3000/login",{
    email,
    password},
    {withCredentials:true}
  )
   dispatch(addUser(res.data));
   navigate("/");
   console.log(res.data)
   
  }
  catch(err){
   
    console.error(err)
  }
 }

  return (
   <div className='flex justify-center'>
      <div className="card bg-base-content text-white w-96 shadow-sm my-10">
          <div className="card-body">
           <h2 className="card-title">Login</h2>
           <div className=''>
           <label className="input my-2">
  <svg className="h-[1em] opacity-25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
  <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} className="grow text-black" placeholder="email" />

</label>
<label className="input my-2">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></g></svg>
  <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)} className="grow text-black" placeholder="password" />
</label>

           </div>
           <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>login</button>
           </div>
        </div>
     </div>
    </div>
  )
}

export default Login