import axios from 'axios';
import queryString from 'query-string';
import { TreatmentInterface, TreatmentGetQueryInterface } from 'interfaces/treatment';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTreatments = async (
  query?: TreatmentGetQueryInterface,
): Promise<PaginatedInterface<TreatmentInterface>> => {
  const response = await axios.get('/api/treatments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTreatment = async (treatment: TreatmentInterface) => {
  const response = await axios.post('/api/treatments', treatment);
  return response.data;
};

export const updateTreatmentById = async (id: string, treatment: TreatmentInterface) => {
  const response = await axios.put(`/api/treatments/${id}`, treatment);
  return response.data;
};

export const getTreatmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/treatments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTreatmentById = async (id: string) => {
  const response = await axios.delete(`/api/treatments/${id}`);
  return response.data;
};
