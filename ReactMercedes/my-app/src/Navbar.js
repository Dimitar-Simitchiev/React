import { Link, useMatch, useResolvedPath } from "react-router-dom";

import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Navbar() {
  return (<>
  
    <nav className="nav">
      <Link to="/" className="site-title">
        HOME
      </Link>
      <ul>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
     
       
      
       <NavDropdown title="MENU">
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/morecars">More Cars</CustomLink>
        <CustomLink to="/createcar">Create</CustomLink>
        </NavDropdown>
         
      
        
      </ul>
    </nav>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}