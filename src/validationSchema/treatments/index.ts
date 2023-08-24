import * as yup from 'yup';

export const treatmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  patient_id: yup.string().nullable().required(),
});
