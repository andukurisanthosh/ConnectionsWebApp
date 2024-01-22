import React from 'react'

function Login() {
  return (
    <div className="container p-4">
      <h3> Login</h3>
      <form action="/login">
          <div className="mb-3 mt-3">
            
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="mb-3">
           
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login