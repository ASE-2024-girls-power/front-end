import { useState } from "react";
import "./Banner.css";

const SignInForm = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleLoginEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      alert("You have been logged in");
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