import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import {
  type RequestInterface,
  requestSchema,
  type ResponseInterface,
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

const InputModule = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<RequestInterface | null>(null);

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
    <div className="m-20">
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
              <>
                <Field
                  name="description"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Description"
                />

                <ErrorMessage name="description" />
              </>
            )}
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default InputModule;
