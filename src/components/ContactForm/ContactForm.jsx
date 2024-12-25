import { Formik } from "formik";
import * as Yup from "yup";
import sc from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("поля повинні бути обов'язковими для заповнення")
    .min(3, "мінімальна кількість символів - 3")
    .max(50, "максимальна кількість символів - 50"),
  number: Yup.string()
    .required("поля повинні бути обов'язковими для заповнення")
    .min(3, "мінімальна кількість символів - 3")
    .max(50, "максимальна кількість символів - 50"),
});

const ContactForm = ({ setContacts }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        values.id = nanoid();
        setContacts((prev) => [values, ...prev]);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form className={sc.form} onSubmit={handleSubmit}>
          <label className={sc.label}>
            Name
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={sc.input}
            />
            {touched.name && errors.name ? (
              <div className={sc.error}>{errors.name}</div>
            ) : null}
          </label>
          <label className={sc.label}>
            Number
            <input
              type="text"
              name="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              className={sc.input}
            />
            {touched.number && errors.number ? (
              <div className={sc.error}>{errors.number}</div>
            ) : null}
          </label>
          <button type="submit" className={sc.button}>
            Add contact
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
