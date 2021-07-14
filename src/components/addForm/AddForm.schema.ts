import * as yup from 'yup'

export const AddFormSchema = yup.object().shape({
  label: yup.string().required().min(3).max(30),
})
