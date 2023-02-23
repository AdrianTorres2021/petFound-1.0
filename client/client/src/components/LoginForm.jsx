import { useFormik } from "formik";
import { basicSchema } from "../schemas/schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Loginform = () => {
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

  console.log(errors);

  return (
    <form className="form-register" onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email o username</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Ingrese su email o nombre de usuario"
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      
      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type="password"
        placeholder="Ingrese su contraseña"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <button className="button-register-form" disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};
export default Loginform;