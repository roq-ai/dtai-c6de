import { TreatmentInterface } from 'interfaces/treatment';
import { GetQueryInterface } from 'interfaces';

export interface DiagnosisInterface {
  id?: string;
  name: string;
  description?: string;
  treatment_id: string;
  created_at?: any;
  updated_at?: any;

  treatment?: TreatmentInterface;
  _count?: {};
}

export interface DiagnosisGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  treatment_id?: string;
}
