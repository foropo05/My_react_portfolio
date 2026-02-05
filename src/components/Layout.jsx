import { Link } from "react-router-dom";

// Navigation layout used on all pages
export default function Layout() {
  return (
    <>
      
        
         <div className="logo-wrapper">
           <img src="/logo.png" alt="Logo" className="logo" style={{ width: "70px", height: "50px" }}/>
           <span className="logo-text"><strong>Favour Ayomide Oropo</strong></span>
         </div>

        <nav style={{ fontSize: "18px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/projects">Projects</Link> |{" "}
          <Link to="/services">Services</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
      
      <hr />
    </>
  );
}
