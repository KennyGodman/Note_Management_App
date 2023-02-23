
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import TextInput from "../../components/common/TextInput";
import AuthLayout from "../../components/layouts/AuthLayout";

function ForgotPassword() {
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className="mt-40">
              <Field name="email">
                {({ field, meta }) => (
                  <TextInput placeholder="Email" className="mt-40" {...field} />
                )}
              </Field>
              <Field name="password">
                {({ field, meta }) => (
                  <TextInput
                    placeholder="Password"
                    className="mt-40"
                    type="password"
                    {...field}
                  />
                )}
              </Field>

              <div className="mt-40">
                
                <p>
                  <Button text="SEND" />

                  <Link to="/forgotPassword"></Link>
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
}

export default ForgotPassword;
