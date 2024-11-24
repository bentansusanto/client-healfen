import { InitialLoginValues, InitialRegisterValues } from "@/types/auth";
import * as Yup from 'yup'

export const initialLoginValues:InitialLoginValues = {
    email: "",
    password: ""
}

export const initialRegisterValues:InitialRegisterValues = {
    name: "",
    email: "",
    password: "",
    role: "client"
}

export const validationLoginSchema = Yup.object({
    email: Yup.string().email("must be using @").required("Please input email"),
    password: Yup.string().required("Please input password")
});

export const validationRegisterSchema = Yup.object({
    name: Yup.string().required("Please input name"),
    email: Yup.string().email("must be using @").required("Please input email"),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{8,}$/,
            "Password must contain at least 8 characters, including uppercase, lowercase, number and special character"
        )
        .required("Please input password"),
    role: Yup.bool().required("Please checklist for register as admin")
});