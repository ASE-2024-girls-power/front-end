import { useState } from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";


const SignInForm = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleLoginEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      alert("You have been logged in");
      navigate("/stories");
      //TODO: Send user to stories page and show them as logged in in the corner  
    }
    else 
    {
    alert("Please provide a valid input");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="banner-container" onSubmit={handleLoginEvent}>
        <fieldest className="RegistrationForm">
        <h2>Sign In</h2>
        <div className="Field">
        <label htmlFor="username">Username:</label>
        <input
          type="username"
          id="username"
          name="username"
          placeholder="Username"
          aria-describedby="username"
          aria-invalid="false"
          onChange={handleInput}
        />
      </div>
      <div className="Field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          aria-describedby="password"
          aria-invalid="false"
          onChange={handleInput}
        />
      </div>
      <button className="btn-submit">Sign In</button>
      </fieldest>
    </form>
  );
};

export default SignInForm;