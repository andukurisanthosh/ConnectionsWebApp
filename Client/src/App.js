import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Create from './Components/Create';
import Edit from './Components/Edit';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit" element={<Edit />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>


    </>
  );
}

export default App;
