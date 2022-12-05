import {
  Form,
  FormBody,
  FormHeader,
  FormGroup,
  FormContainer,
  Input,
} from "../styles/Form";
import { PrimaryButton } from "../styles/ButtonPrimary";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { LoginRequest } from "../actions/authActions";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .max(16, "Password should be of maximum 16 characters length")
    .required("Password is required"),
});

function Login(props: any) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:4000/api/login", values)
        .then((result) => {
          props.login(result.data.user);
          localStorage.removeItem("token");
          localStorage.setItem("token", result.data.token);
          navigate("/");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  });

  return (
    <FormContainer>
      <FormHeader>Login</FormHeader>
      <FormBody>
        <Form>
          <form method="post" onSubmit={formik.handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="username"
              />
              {formik.errors.username && formik.touched.username ? (
                <div style={{color: "red"}}>{formik.errors.username}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="password"
              />
              {formik.errors.password && formik.touched.password ? (
                <div style={{color: "red"}}>{formik.errors.password}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <PrimaryButton type="submit">
                Login
              </PrimaryButton>
            </FormGroup>
            <FormGroup><br/>
              <a href="/signup">Don't have account ?</a>
            </FormGroup>
          </form>
        </Form>
      </FormBody>
    </FormContainer>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  login: (params: any) => dispatch(LoginRequest(params)),
});

export default connect(null, mapDispatchToProps)(Login);
