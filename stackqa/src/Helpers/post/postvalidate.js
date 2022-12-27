import * as yup from 'yup'

export const validatePost = (details)=>{
    const schema = yup.object().shape({
        question: yup.string().required('Please fill in the fields'),
        category: yup.string().required('Please select the category')
    })
    return schema.validate(details)
}
