import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

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
    <header className={styles.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <Field
            name="query"
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
