import React from "react";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../css/Register/Register.css";
import { Button } from "../../components/Button";
import { useFormik, Formik, Field, ErrorMessage,Form } from "formik";
import * as yup from "yup";
import {register} from '../../redux/actions/Auth/Register'
import Loading from "../../components/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  email: "",
password: "",
  firstName: "",
  lastName: ""
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
    firstName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required')
});
// const onSubmit = ({ firstName, lastName, email, password }) => {
//   if (firstName === '' || lastName === '' || email === '' || password === '') {
//     alert('Hello')
//   } else {
//     register(firstName,lastName,email,password)
//   }
 
// };
const onSubmit = ({ firstName,lastName,email,password}) => {
  if (firstName || lastName || email || password) {
     register(firstName,email,lastName,password)
    alert('Hello')
  } 
  // console.log(values)
}

function Register(props) {
  // const notify = () => toast("All fields must be field !");
 

  return (
    <div className="register">
      <div className="icon-cont">
        <FaUser className="icon" />
        <h5>SIGN UP</h5>
      </div>
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
       
      >
              <Form >
              <div className="single-input">
            <Field
              type="firstName"
              name="firstName"
              id="firstName"
              required
              className="input"
            />
            <div className="error">
              <ErrorMessage name="firstName" />
            </div>
            <label htmlFor="firstName" className="label">
              FirstName :
            </label>
          </div>
          <div className="single-input">
            <Field
              type="lastName"
              name="lastName"
              id="lastName"
              required
              className="input"
            />
            <div className="error">
              <ErrorMessage name="lastName" />
            </div>
            <label htmlFor="lastName" className="label">
              lastName :
            </label>
          </div>
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
              Already have an account ?
              <span>
                <Link to="/user/login"> Login</Link>
              </span>
            </h6>
            
          </div>
          <Button
            buttonSize="btn--wide"
            buttonColor="blue"
            disabled={props.loading }
            type="submit"
            className="buttn"
          >
           {props.loading ? <Loading/> : ' Submit'}
          </Button>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    loading: state.loading,
    isLoggedIn: state.isLoggedIn
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//    register: dispatch(register)
//  }
// }

export default connect(mapStateToProps,{register})(withRouter(Register));

