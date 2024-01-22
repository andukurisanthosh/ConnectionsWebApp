import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([])
  const [redirect, setRedirect] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/connections")
    .then(response=>{
      response.json().then(info=>{
        setData(info)
        setRedirect(false)
      })
    })   

  }, [redirect])

  const handleDelete = async (e, id) => {
    e.preventDefault();
    const responce= await fetch(`http://localhost:5000/connections/${id}`,{
      method:'DELETE'
    })
    if(responce.ok){
      setRedirect(true)
    }      
  }
 
  return (
    <>
      <div className='container'>
        <div className="d-flex justify-content-between">
          <h2 className='m-2'>Your Connections</h2>
          <Link to="/create" className='text-muted  text-decoration-none'><h5 className='text-muted  text-decoration-none mt-3'>Create New Connection</h5></Link>
        </div>
        <form>
        <div className="row p-2 ms-4">
          {
            data.map(item =>
            (
              <div key={item._id} className='col-md-6 col-lg-4 col-xl-3 mb-4 p-2'>
                <div className="card rounded-3" style={{ width: 250 }} >
                  <Link to="/edit">
                    <img class="card-img-top " src={`http://localhost:5000/Images/${item.Image}`} style={{ height: 200 }} alt="Card image" />
                  </Link>

                  <div className="card-body">
                    <Link to="/edit" className='text-muted  text-decoration-none'>
                      <h3 className="card-title">{item.Name}</h3>
                    </Link>
                    <span className="card-text">{item.Phone}</span><br></br>
                    <span className="card-text">{item.Email}</span><br></br>
                    <span className="card-text">{item.Address}</span><br></br>
                    <button className='btn btn-danger mt-3 ms-3' onClick={e=>{handleDelete(e, item._id)}}>Delete</button>
                    
                  </div>
                  
                </div>
              </div>
            ))
          }
        </div>
        </form>
      </div>
    </>
  )
}

export default Home