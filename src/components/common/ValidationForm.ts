import { InitialLoginValues, InitialRegisterValues } from "@/types/auth";
import * as Yup from 'yup'

export const initialLoginValues:InitialLoginValues = {
    email: "",
    password: ""
}

export const initialRegisterValues:InitialRegisterValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: true
}

export const validationLoginSchema = Yup.object({
    email: Yup.string().email("must be using @").required("Please input email"),
    password: Yup.string().required("Please input password")
});

export const validationRegisterSchema = Yup.object({
    firstName: Yup.string().required("Please input firstname"),
    lastName: Yup.string().optional(),
    email: Yup.string().email("must be using @").required("Please input email"),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{8,}$/,
            "Password must contain at least 8 characters, including uppercase, lowercase, number and special character"
        )
        .required("Please input password"),
    isAdmin: Yup.bool().required("Please checklist for register as admin")
});