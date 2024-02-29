import * as Yup from "yup";
import InputField from "../common/InputField";
import { Form, Formik, FormikValues } from "formik";
import Button from "../common/Button";

// Validation schema for form
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  birthDate: Yup.date().required("Birth date is required"),
});

// Default values for form
const defaultValues = {
  firstName: "",
  lastName: "",
  birthDate: "",
};

/**
 * Component representing create post form
 */
export default function CreatePostForm() {
  const submitHandler = (values: FormikValues) => {};

  return (
    <Formik initialValues={defaultValues} onSubmit={submitHandler} validationSchema={validationSchema}>
      {({ errors, touched }) => (
        <Form>
          <InputField type="text" name="firstName" placeholder="First Name" error={errors.firstName && touched.firstName ? errors.firstName : false} />
          <InputField type="text" name="lastName" placeholder="Last Name" error={errors.lastName && touched.lastName ? errors.lastName : false} />
          <InputField type="date" name="birthDate" placeholder="Selett birth date" error={errors.birthDate && touched.birthDate ? errors.birthDate : false} />
          <Button type="submit" className="mt-6">
            Create post
          </Button>
        </Form>
      )}
    </Formik>
  );
}
