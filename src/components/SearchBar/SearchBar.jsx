import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const initialValues = { query: "" };

  const handleSubmit = (values, actions) => {
    if (!values.query.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(values.query);
    actions.resetForm();
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
