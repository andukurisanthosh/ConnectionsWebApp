import React from 'react'

function Register() {
  return (
    <div className="container p-4">
      <h2>Register</h2>
      <form>
        <div className="mb-3 mt-3">
          
          <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" />
        </div>
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

export default Register