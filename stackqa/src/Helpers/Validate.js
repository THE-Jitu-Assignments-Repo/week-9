import * as yup from 'yup'

export const validateLoginSchema = (details)=>{
    const schema = yup.object().shape({
        email: yup.string().email('Must be a valid email').required('Email is required'),
        password: yup.string().min(8, 'Password has to be longer than 8 characters!').required('Password is required!')
    })
    return schema.validate(details)
}

export const validateSignUpSchema = (details)=>{
    const schema = yup.object().shape({
        username: yup.string().required('Please include username'),
        email: yup.string().email('Must be a valid email').required('Email is required'),
        password: yup.string().min(8, 'Password has to be longer than 8 characters!').required('Password is required!')
    })
    return schema.validate(details)
}