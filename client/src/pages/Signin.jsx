import React, { useState } from "react";
import { Button, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

export const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          //   e.preventDefault();
          try {
            const response = await fetch(
              "http://localhost:3000/api/auth/signin",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }
            );

            const data = await response.json();
            if (data.success === false) {
              return alert(data.message);
            }
            console.log(data);
            if (response.ok) {
              navigate("/");
            }
          } catch (error) {
            alert(error);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="name@flowbite.com"
                required
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                id="password"
                required
              />
              {errors.password && touched.password && errors.password}
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Spinner size={"sm"} />} &nbsp; Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
