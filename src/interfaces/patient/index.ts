import { AppointmentInterface } from 'interfaces/appointment';
import { TreatmentInterface } from 'interfaces/treatment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  first_name: string;
  last_name: string;
  dob: any;
  gender: string;
  phone: string;
  address: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  treatment?: TreatmentInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    treatment?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  phone?: string;
  address?: string;
  user_id?: string;
}
