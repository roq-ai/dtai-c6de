interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Dentist'],
  customerRoles: ['Customer'],
  tenantRoles: ['Dentist', 'Dental Assistant', 'Office Manager', 'Receptionist'],
  tenantName: 'Practice',
  applicationName: 'dtai',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
