import React from "react";
import { withRouter } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../css/Login/Login.css";
import { Button } from "../../components/Button";
import { useFormik, Formik, Field, ErrorMessage,Form } from "formik";
import * as yup from "yup";
import {connect} from 'react-redux'

const initialState = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};
// const validate = (values) => {
//   let errors = {};
//   if (!values.email) {
//     errors.email = "This field is required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "This field is required";
//   }
//     if (!values.password) {
//       errors.password = "This field is required";
//     }

//   return errors;
// };
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(6, "Password should be more than 6 character"),
});

function Login() {

  console.log(initialState)
  return (
    <div className="login">
      <div className="icon-cont">
        <FaUser className="icon" />
        <h5>LOGIN</h5>
      </div>
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form >
          <div className="single-input">
            <Field
              type="email"
              name="email"
              id="email"
              required
              className="input"
            />
            <div className="error">
              <ErrorMessage name="email" />
            </div>
            <label htmlFor="email" className="label">
              Email :
            </label>
          </div>

          <div className="single-input sec">
            <Field
              type="password"
              name="password"
              id="password"
              required
              className="input"
            />
            <div className="error">
              <ErrorMessage name="password" />
            </div>
            <label htmlFor="password" className="label">
              Password :
            </label>
          </div>
          <div className="opt-cont">
            <h6>
              Don't have an account yet ?
              <span>
                <Link to="/user/register"> Sign Up</Link>
              </span>
            </h6>
            <h6>
              <span>
                <Link to="/user/#">Forgot Password ?</Link>
              </span>
            </h6>
          </div>
          <Button
            buttonSize="btn--wide"
            buttonColor="blue"
            type="submit"
            className="buttn"
          >
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default withRouter(Login);
