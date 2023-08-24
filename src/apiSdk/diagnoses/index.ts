import axios from 'axios';
import queryString from 'query-string';
import { DiagnosisInterface, DiagnosisGetQueryInterface } from 'interfaces/diagnosis';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDiagnoses = async (
  query?: DiagnosisGetQueryInterface,
): Promise<PaginatedInterface<DiagnosisInterface>> => {
  const response = await axios.get('/api/diagnoses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDiagnosis = async (diagnosis: DiagnosisInterface) => {
  const response = await axios.post('/api/diagnoses', diagnosis);
  return response.data;
};

export const updateDiagnosisById = async (id: string, diagnosis: DiagnosisInterface) => {
  const response = await axios.put(`/api/diagnoses/${id}`, diagnosis);
  return response.data;
};

export const getDiagnosisById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/diagnoses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDiagnosisById = async (id: string) => {
  const response = await axios.delete(`/api/diagnoses/${id}`);
  return response.data;
};
