import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import TextInput from "../../components/common/TextInput";
import AuthLayout from "../../components/layouts/AuthLayout";
import ForgotPassword from "../ForgotPassword";
import EmptyPage from "../Home/EmptyPage";
import styles from "./styles.module.css";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const baseUrl = "";

  useEffect(() => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const post = { email: email, password: password };
      try {
        const res = await axios.post(baseUrl, post);
        console.log(res.data);
      } catch (e) {
        alert(e);
      }
    };
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, helpers) => {
    console.log(values);
  };
  return (
    <AuthLayout>
      <div className={styles.container}>
        <h1>Welcome back, Kehinde</h1>
        <p>Glad you’re back, Please enter your details</p>

        <p className={styles.google}>
          <Link to="#">
            <Icon icon="logos:google-icon" style={{ marginright: 10 }} inline />{" "}
            Login with Google
          </Link>
        </p>
        <p>or</p>
        <Formik initialValues={initialValues}>
          {() => (
            <Form>
              <div className="mt-40">
                <Field name="email">
                  {({ field, meta }) => (
                    <TextInput
                      placeholder="Email"
                      className="mt-40"
                      {...field}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  )}
                </Field>

                <p className={styles.forgot}>
                  <Link to="/forgotPassword">Forgot Password?</Link>
                </p>

                <div className="mt-40">
                  <Button text="Log in" onSubmit={handleSubmit} />
                </div>

                <p className="mt-40">
                  Don’t have an account?{" "}
                  <Link to="/signup">Sign up for free</Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
}
export default LoginPage;
