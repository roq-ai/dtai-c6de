const mapping: Record<string, string> = {
  appointments: 'appointment',
  diagnoses: 'diagnosis',
  patients: 'patient',
  practices: 'practice',
  treatments: 'treatment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
