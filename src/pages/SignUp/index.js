import { Icon } from "@iconify/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import TextInput from "../../components/common/TextInput";
import AuthLayout from "../../components/layouts/AuthLayout";
import styles from "./styles.module.css";

function SignUpPage() {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <div className={styles.container}>
        <h1>Welcome to Onenote</h1>
        <p>Best note management system </p>

        <p className={styles.google}>
          <Link to="#">
            <Icon icon="logos:google-icon" style={{ marginright: 10 }} inline />{" "}
            Signup with Google
          </Link>
        </p>
        <p>or</p>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <div className="mt-40">
                <Field name="fullName">
                  {({ field, meta }) => (
                    <TextInput placeholder="Full Name" {...field} />
                  )}
                </Field>
                <Field name="email">
                  {({ field, meta }) => (
                    <TextInput
                      placeholder="Email"
                      className="mt-40"
                      {...field}
                    />
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
                  <Button text="Sign up" />
                </div>

                <p className="mt-40">
                  Already have an account? <Link to="/login">Login Here</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
}

export default SignUpPage;
