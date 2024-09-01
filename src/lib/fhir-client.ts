import FHIR from 'fhirclient';

export const fhirClient = FHIR.client({
  serverUrl: process.env.NEXT_PUBLIC_FHIR_SERVER_URL!,
});

export const initializeFhirClient = () => {
  return FHIR.oauth2.init({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!, // Add client secret if required
    scope: 'launch/patient patient/*.read',
    redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
    iss: process.env.NEXT_PUBLIC_ISS!,
  });
};