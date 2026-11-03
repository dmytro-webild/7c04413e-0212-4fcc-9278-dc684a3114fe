export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/politica-de-privacidad', label: 'Política de Privacidad', pageFile: 'PrivacyPolicyPage' },
];
