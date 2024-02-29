import * as Yup from "yup";
import Button from "../common/Button";
import InputField from "../common/InputField";
import StatusMessage from "../common/StatusMessage";
import { useState } from "react";
import { httpPost } from "../../utils/http-client";
import { StatusType } from "../../utils/types/global-types";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";

// Interface for status message
interface Status {
  type: StatusType;
  message: string;
}

// Interface for form values
interface Values {
  firstName: string;
  lastName: string;
  birthDate: string;
}

// Validation schema for form
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  birthDate: Yup.date().required("Birth date is required."),
});

// Default values for form
const defaultValues: Values = {
  firstName: "",
  lastName: "",
  birthDate: "",
};

/**
 * Component representing new post form
 */
export default function NewPostForm() {
  const [statusMsg, setStatusMsg] = useState<Status | null>(null);

  /**
   * Submit handler of form
   */
  const submitHandler = async (
    values: FormikValues,
    actions: FormikHelpers<Values>
  ) => {
    // Show loading message
    setStatusMsg({ type: StatusType.LOADING, message: "Creating new post..." });

    // Prepare data for post request
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      birthDate: values.birthDate,
    };

    // Make post request
    const response = await httpPost("/formdata", data);

    // Handle response
    if (response.error) {
      setStatusMsg({
        type: StatusType.ERROR,
        message: "Error occurred while creating post.",
      });
      return;
    }

    // Reset form values
    actions.resetForm({ values: defaultValues });

    // Show success message
    setStatusMsg({
      type: StatusType.SUCCESS,
      message: "Post created successfully.",
    });
    setTimeout(() => {
      setStatusMsg(null);
    }, 3000);
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form>
          {statusMsg && (
            <StatusMessage type={statusMsg.type}>
              {statusMsg.message}
            </StatusMessage>
          )}
          <InputField
            type="text"
            name="firstName"
            placeholder="First Name"
            error={
              errors.firstName && touched.firstName ? errors.firstName : false
            }
          />
          <InputField
            type="text"
            name="lastName"
            placeholder="Last Name"
            error={
              errors.lastName && touched.lastName ? errors.lastName : false
            }
          />
          <InputField
            type="date"
            name="birthDate"
            error={
              errors.birthDate && touched.birthDate ? errors.birthDate : false
            }
          />
          <div className="flex flex-col items-center">
            <Button type="submit" className="mt-4 text-sm">
              Create
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
