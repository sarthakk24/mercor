import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import {
  type RequestInterface,
  requestSchema,
  type ResponseInterface,
  type InputInterface,
} from "@task/utils/schema";

// Toast
import { ToastContainer } from "react-toastify";
import { Toast } from "../shared/toast";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Spinner from "../shared/spinner";
import { getContentData } from "@task/utils/services/rest";
import { type AxiosResponse } from "axios";
import Content from "./content";

const InputModule = ({ content, setContent }: InputInterface) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    description: "",
  };

  const onSubmit = async (
    values: RequestInterface,
    { resetForm }: FormikHelpers<RequestInterface>
  ) => {
    try {
      setLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { data }: AxiosResponse<ResponseInterface> = await getContentData(
        values.description
      );
      setContent(data);
      Toast(true, "Request successfully");
      resetForm();
    } catch (err) {
      console.log(err);
      Toast(false, "Uh oh! We are facing some issues. Please try again later!");
    } finally {
      setLoading(false);
      console.log("finally");
    }
  };
  return (
    <div className="m-5 flex flex-col items-center justify-center">
      <ToastContainer />
      {content !== null && content !== undefined ? (
        <Content data={content} />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={requestSchema}
          onSubmit={onSubmit}
        >
          <Form>
            {loading ? (
              <Spinner />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2 xl my-4 text-center text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl xl:text-6xl">
                  Enter Description
                </h1>
                <Field
                  name="description"
                  as="textarea"
                  rows={10}
                  className="my-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Description"
                />

                <ErrorMessage name="description" />
                <button
                  type="submit"
                  className="mb-2 rounded-full bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Submit
                </button>
              </div>
            )}
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default InputModule;
