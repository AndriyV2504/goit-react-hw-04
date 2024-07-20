import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    query: Yup.string().required("Please enter a search term"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (!values.query.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(values.query.trim());
    resetForm();
  };

  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            name="query"
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
          <FormikErrorMessage name="query" component="div" />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
