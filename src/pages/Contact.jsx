import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Contact page
export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData); // captures data (assignment requirement)
    navigate("/"); // redirect to Home
  }

  return (
    <>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <br />

        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <br />

        <input name="email" placeholder="Email" onChange={handleChange} required />
        <br />

        <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
        <br />

        <button type="submit">Send</button>
      </form>
    </>
  );
}
