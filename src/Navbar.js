import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>FD Manager</h1>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/create">New FD</Link>
      </div>
    </nav>
   );
}
  
export default Navbar; 