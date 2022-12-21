import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const validationSchema = yup.object({
   firstName: yup
      .string()
      .typeError("Should be a string")
      .max(15, "maximum 15 characters")
      .required("required field"),
   lastName: yup
      .string()
      .max(15, "maximum 15 characters")
      .required("required field"),
   email: yup
      .string()
      .max(30, "maximum 30 characters")
      .email("Incorrect email address")
      .required("required field"),
   password: yup
      .string()
      .min(6, "minimum 6 characters")
      .matches(passwordRules, {
         message: "Please add number and capital letter",
      })
      .required("required field"),
   confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match")
      .required("required field"),
})

export const validationEmailInForgotPassword = yup.object({
   email: yup
      .string()
      .max(30, "maximum 30 characters")
      .email("incorrect email address")
      .required("required field"),
})

export const validationConfirmPassword = yup.object({
   password: yup
      .string()
      .min(5, "minimum 15 characters")
      .matches(passwordRules, {
         message: "think of a more complex password",
      })
      .required("required field"),
   confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords do not match")
      .required("required field"),
})
