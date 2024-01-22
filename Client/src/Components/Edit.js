import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"

function Edit() {
  const { id } = useParams()
  const [file, setFile] = useState()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")

  const [redirect, setRedirect] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/connections/${id}`)
      .then(response => {
        response.json().then(info => {
          console.log(info)
          setFile(info.Image)
          setName(info.Name)
          setPhone(info.phone)
          setEmail(info.Email)
          setAddress(info.Address)
        })
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file)
    formData.append('Name', name)
    formData.append('Phone', phone)
    formData.append('Email', email)
    formData.append('Address', address)
    console.log(file);
    axios.post("http://localhost:5000/connections", formData)
      .then((response) => {
        // setRedirect(true)
        if (response.status == 200) {
          alert("created Successfully !")
          navigate("/")
        }

      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div className='container justify-content-center'>
        <h2 className='mt-5'>Edit your connection</h2>
        <form  >
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
            <div className="col-12 mb-2">
              <button className="btn btn-success  " onClick={handleSubmit}>Edit</button>
            </div>

          </div>
        </form>
      </div>

    </div>
  )
}

export default Edit