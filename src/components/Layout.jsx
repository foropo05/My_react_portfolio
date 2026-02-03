import { Link } from "react-router-dom";

// Navigation layout used on all pages
export default function Layout() {
  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <img src="/logo.png" alt="Logo" className="logo" style={{ width: "50px", height: "50px" }} />


        <nav style={{ fontSize: "18px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/projects">Projects</Link> |{" "}
          <Link to="/services">Services</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <hr />
    </>
  );
}
