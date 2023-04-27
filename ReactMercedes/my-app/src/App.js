import Navbar from "./Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import About from "./pages/About"
import Register from "./pages/Register"
import { Route, Routes } from "react-router-dom"
import  CreateCar from"./pages/CreateCar"
import Morecars from "./pages/Morecars"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/morecars" element={<Morecars />} />
          <Route path="/createcar" element={<CreateCar />} />
        </Routes>
      </div>
    </>
  )
}

export default App