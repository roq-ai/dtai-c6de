import * as yup from 'yup';

export const diagnosisValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  treatment_id: yup.string().nullable().required(),
});
