import * as yup from 'yup'

export const signupSchema = yup.object().shape({
    name: yup.string('')
})