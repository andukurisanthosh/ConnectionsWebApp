import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


function Create() {
  const [file, setFile] = useState()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [redirect, setRedirect] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file)
    formData.append('Name', name)
    formData.append('Phone', phone)
    formData.append('Email', email)
    formData.append('Address', address)
    const response= await fetch("http://localhost:5000/connections", {
      method:'POST',
      body:formData,
      credentials:'include'
    })
    if( response.ok){
      console.log(response.ok)
      setRedirect(true)
    }      
  }
  if(redirect){
    //<Navigate to={'/'} ></Navigate>
    navigate('/')
  }
  
  return (
    <div className='container justify-content-center'>
      <h2 className='mt-5'>Create your connection</h2>
      <form enctype="multipart/form-data" >
        <div className=" d-flex flex-column ">
          <div className="col-12 mt-3 mb-2">
            <input name='file' className='form-control' onChange={(e) => { setFile(e.target.files[0]) }} type='file'></input>
          </div>
          <div className="col-12 mb-2">
            <input name="Name" className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} type='text' placeholder='Name'></input>
          </div>
          <div className="col-12 mb-2">
            <input name='Phone' className='form-control' value={phone} onChange={(e) => { setPhone(e.target.value) }} type='text' placeholder='Phone Number'></input>
          </div>
          <div className="col-12 mb-2">
            <input name='Email' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder='Email'></input>
          </div>
          <div className="col-12 mb-2">
            <textarea name='Address' className='form-control' value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder='Address' ></textarea>
          </div>
          <div class="col-6 mb-2"><button className="btn btn-success col-6 " onClick={handleSubmit}>Submit</button></div>
        </div>
      </form>
    </div>
  )
}

export default Create