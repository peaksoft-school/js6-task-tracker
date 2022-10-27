import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const validationSchema = yup.object({
   firstName: yup
      .string()
      .typeError("Должно быть строкой")
      .max(15, "Максимум 15 символов")
      .required("Обязательное поле"),
   lastName: yup
      .string()
      .max(15, "Максимум 15 символов")
      .required("Обязательное поле"),
   email: yup
      .string()
      .max(30, "Максимум 30 символов")
      .email("Неверный адрес электронной почты")
      .required("Обязательное поле"),
   password: yup
      .string()
      .min(5, "Минимум 5 символов")
      .matches(passwordRules, {
         message: "Пароль должен содержать одну заглавную букву,и цифру",
      })
      .required("Обязательное поле"),
   confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Пароли не совпадают")
      .required("Обязательное поле"),
})
