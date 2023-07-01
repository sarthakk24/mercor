import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import { type RequestInterface, requestSchema } from "@task/utils/schema";

const InputModule = () => {
  const initialValues = {
    description: "",
  };

  const onSubmit = (
    values: RequestInterface,
    { resetForm }: FormikHelpers<RequestInterface>
  ) => {
    try {
      console.log(values);
      resetForm();
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally");
    }
  };
  return (
    <div className="m-20">
      <Formik
        initialValues={initialValues}
        validationSchema={requestSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field
            name="description"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Description"
          />

          <ErrorMessage name="description" />
        </Form>
      </Formik>
    </div>
  );
};

export default InputModule;
