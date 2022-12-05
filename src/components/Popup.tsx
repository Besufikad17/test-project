import { PrimaryButton } from "../styles/ButtonPrimary";
import {
  FormBody,
  FormGroup,
  FormHeader,
  Input,
  Form,
  Label,
} from "../styles/Form";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import axios from "axios";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  date_of_birth: yup.string().required("Date of birth required"),
  gender: yup.string().required("Gender is required"),
  salary: yup.string().required("Salary is required"),
});

function Popup() {
  
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
        name: "",
        date_of_birth: "",
        gender: "Male",
        salary: ""
    },
    validationSchema,
    onSubmit: (values) => {
        console.log(values);
        axios.post("http://localhost:4000/api/add", values).then(result => {
            navigate("/")
        }).catch((err) => {
            console.log(err);
        })
    }
  })
  return (
    <div>
      <FormGroup>
        <FormHeader>Add Employee</FormHeader>
        <FormBody>
          <Form>
            <form method="submit" onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Input type="text" name="name" placeholder="name" value={formik.values.name} onChange={formik.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Input type="date" name="date_of_birth" value={formik.values.date_of_birth} onChange={formik.handleChange}/>
              </FormGroup>
              <FormGroup>
                <div style={{ display: "inline-block", padding: "5px" }}>
                  <Label>Gender: </Label>
                  Male
                  <input type="radio" value="Male" name="gender" onChange={formik.handleChange}/>
                  Female
                  <input type="radio" value="Female" name="gender" onChange={formik.handleChange}/>
                </div>
              </FormGroup>
              <FormGroup>
                <Input
                  type="number"
                  name="salary"
                  min={500}
                  max={2000}
                  placeholder="salary"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  value={formik.values.salary} onChange={formik.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <PrimaryButton>Add</PrimaryButton>
              </FormGroup>
            </form>
          </Form>
        </FormBody>
      </FormGroup>
    </div>
  );
}

export default Popup;
