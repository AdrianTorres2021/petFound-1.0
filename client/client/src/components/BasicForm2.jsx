import axios from "axios";
import { useFormik } from "formik";
import { basicSchema } from "../schemas/schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const BasicForm2 = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log("Esto es values.email", values.email);
  const onClickHandler = () => {
    const {email, age, password, confirmPassword} = values;
    axios.post('http://localhost:8080/api/person/new' ,{
      email,
      age,
      username: "username",
      password,
      confirmPassword
  })
  .then(res => console.log("Response: ", res))
  .catch(err => console.log(err))
  
  }
  return (
    <form className ="form-register"onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Ingrese su email"
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="age">Edad</label>
      <input
        id="age"
        type="number"
        placeholder="Ingrese su edad"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="username"
        placeholder="Ingrese un nombre de usuario"
       
      />
      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type="password"
        placeholder="Ingrese una contraseña"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <label htmlFor="confirmPassword">Confirme la contraseña</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button className="button-register-form" disabled={isSubmitting} type="submit" onClick={onClickHandler}>
        Submit
      </button >
    </form>
  );
};
export default BasicForm2;