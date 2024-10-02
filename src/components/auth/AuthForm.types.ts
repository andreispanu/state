import * as Yup from 'yup';

export const authFormValidationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username should be at least 3 characters')
      .required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });