import "./styles.css";
import { useState } from "react";
const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isSignedUP: true
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      };
    });
  }
  function handleSubmit() {}
  return (
    <div className="App">
      <form>
        <input
          className="form-input"
          name="firstName"
          type="text"
          placeholder="First name"
        />
        <input
          className="form-input"
          name="lastName"
          type="text"
          placeholder="Last name"
        />
        <input
          className="form-input"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="form-input"
          name="password"
          type="password"
          placeholder="password"
        />
        <input
          className="form-input"
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />
        <div className="checkbox">
          <input
            className="input-checkbox"
            name="isSignedUp"
            type="checkbox"
            placeholder="Confirm password"
          />
          <label> I Agree to the terms & conditons</label>
        </div>
        <button className="signUp-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default App;
