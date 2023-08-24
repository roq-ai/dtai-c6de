import { DiagnosisInterface } from 'interfaces/diagnosis';
import { PatientInterface } from 'interfaces/patient';
import { GetQueryInterface } from 'interfaces';

export interface TreatmentInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  patient_id: string;
  created_at?: any;
  updated_at?: any;
  diagnosis?: DiagnosisInterface[];
  patient?: PatientInterface;
  _count?: {
    diagnosis?: number;
  };
}

export interface TreatmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  patient_id?: string;
}
