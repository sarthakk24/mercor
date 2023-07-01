import * as Yup from "yup";

export const requestSchema = Yup.object().shape({
  description: Yup.string()
    .required("Description is required!")
    .min(60, "Description must be at least 60 characters long"),
});

export interface RequestInterface {
  description: string;
}
