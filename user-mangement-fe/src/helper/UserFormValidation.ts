import * as yup from 'yup';

export const getUserValidationRules = () => {
  return yup.object().shape({
    name: yup.string().required('Name is required'),
    age: yup
      .number()
      .typeError('Age must be a number')
      .required('Age is required'),
    email: yup.string()
  .email('Enter a valid email address')
  .matches(
    /^[^\s@]+@[^\s@]+\.[^\s@]{1,}$/,
    'Enter a valid email address '
  )
  .required('Email is required')
  });
};
