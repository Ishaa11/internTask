import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";

function Form() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
    dob: "",
    companyName: "",
    idCardNumber: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  //  password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  //  confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  useEffect(() => {
    console.log(formErrors);
    //  ref could be null here
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
    // eslint-disable-next-line
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pincodeRegex = /^\d{6}$/;

    if (!values.username) {
      errors.username = "Username is required!";
    } else if (values.username.length < 3) {
      errors.username = "Username must be more than 3 characters";
    }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be more than 6 characters";
      } else if (values.password.length > 15) {
        errors.password = "Password cannot exceed more than 15 characters";
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = "Password is required";
      } else if (values.confirmPassword.length < 6) {
        errors.confirmPassword = "Password must be more than 6 characters";
      } else if (values.confirmPassword.length > 15) {
        errors.confirmPassword =
          "Password cannot exceed more than 15 characters";
      }

      if (!values.phoneNumber) {
        errors.phoneNumber = "Phone Number is required!";
      } else if (!/^\d{10}$/.test(values.phoneNumber)) {
        errors.phoneNumber = "Invalid phone number format!";
      }

      if (!values.alternatePhoneNumber) {
        errors.alternatePhoneNumber = "Alternate Phone Number is required!";
      } else if (!/^\d{10}$/.test(values.alternatePhoneNumber)) {
        errors.alternatePhoneNumber = "Invalid Alternate phone number format!";
      }

      if (!values.streetAddress) {
        errors.streetAddress = "Street Address is required!";
      }

      if (!values.city) {
        errors.city = "City is required!";
      }

      if (!values.state) {
        errors.state = "State is required!";
      } // You can add more specific validation rules for state

      if (!values.pincode) {
        errors.pincode = "Pincode is required!";
      } else if (!pincodeRegex.test(values.pincode)) {
        errors.pincode = "Invalid pincode format!";
      }

      if (!values.dob) {
        errors.dob = "Date of Birth is required!";
      }

      if (!values.companyName) {
        errors.companyName = "Company Name is required!";
      }

      if (!values.idCardNumber) {
        errors.idCardNumber = "ID Card Number is required!";
      }

      return errors;
  
  }
    return (
      <div className="container">
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <h1>User Registration</h1>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="row">
                <div className="field">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formValues.username}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.username}</p>
                <div className="field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.email}</p>
                {/*-------------- */}
                <div className="field">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.phoneNumber}</p>
              </div>
              {/*-------------- */}
              <div className="row">
                <div className="field">
                  <label>Alternate Phone Number</label>
                  <input
                    type="text"
                    name="alternatePhoneNumber"
                    placeholder=" AlternatePhone Number"
                    value={formValues.alternatePhoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.alternatePhoneNumber}</p>

                {/*-------------- */}
                <div className="field">
                  <label>Street address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address "
                    value={formValues.streetAddress}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.streetAddress}</p>

                {/*-------------- */}
                <div className="field">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formValues.city}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.city}</p>

                {/*-------------- */}
              </div>
              <div className="row">
                <div className="field">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formValues.state}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.state}</p>

                {/*-------------- */}
                <div className="field">
                  <label>Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    placeholder="pincode"
                    value={formValues.pincode}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.pincode}</p>

                {/*-------------- */}
                <div className="field">
                  <label>DOB</label>
                  <input
                    type="text"
                    name="dob"
                    placeholder="dob"
                    value={formValues.dob}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.dob}</p>

                {/*-------------- */}
              </div>

              <div className="row">
                <div className="field">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="companyName"
                    value={formValues.companyName}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.companyName}</p>

                <div className="field">
                  <label>ID Card Number</label>
                  <input
                    type="text"
                    name="idCardNumber"
                    placeholder="ID Card Number"
                    value={formValues.idCardNumber}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.idCardNumber}</p>
              </div>
              {/*-------------- */}

              <div className="row">
                <div className="field">
                  <label>Password</label>
                  <div className="input-container">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formValues.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="toggle-password-button"
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <p>{formErrors.password}</p>

                <div className="field">
                  <label>Confirm Password</label>
                  <div className="input-container">
                    <input
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formValues.confirmPassword}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="toggle-password-button"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {isConfirmPasswordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <p>{formErrors.confirmPassword}</p>
              </div>

              <button className="fluid ui button blue">Submit</button>
            </div>
          </div>
        </form>

        <button style={{ color: "white", marginTop: "5px" }}>
          <Link to="/profile">Go to Profile</Link>
        </button>
      </div>
    );
  };

export default Form;
