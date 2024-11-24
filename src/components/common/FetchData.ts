'use client'
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { initialRegisterValues, validationRegisterSchema } from "./ValidationForm";
import axios from "axios";

const ApiUrl = process.env.NODE_ENV === 'development' ? process.env.API_URL_DEV : process.env.API_URL_PROD;

/*
    logic for handling API authentication & authorization
*/ 

// logic for handling register
export const HandlingRegister = () => {
    const [error, setError] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const router = useRouter()

    const formik = useFormik({
        initialValues: initialRegisterValues,
        validationSchema: validationRegisterSchema,
        onSubmit: async (values, {resetForm}) => {
            setMessage("")
            try {
                const res = await axios.post(`${ApiUrl}/auth/register`, {
                    ...values
                })
                console.log(res.data.message)
                setSuccess(true)
                resetForm();
            } catch (error:any) {
                setError(true)
                console.log(error.response.message)
            }
        }
    })
    
    return {
        error,
        success,
        message,
        formik
    }
}
