import { PatientInterface } from 'interfaces/patient';
import { PracticeInterface } from 'interfaces/practice';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  time: any;
  status: string;
  patient_id: string;
  practice_id: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  practice?: PracticeInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  patient_id?: string;
  practice_id?: string;
}
