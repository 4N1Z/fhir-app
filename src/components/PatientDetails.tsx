'use client';

import { useEffect, useState } from 'react';
import { fhirClient } from '@/lib/fhir-client';

interface Patient {
  id: string;
  name: { given: string[]; family: string }[];
  gender: string;
  birthDate: string;
}

export default function PatientDetails() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fhirClient.patient.read()
      .then((patientData: any) => {
        console.log('Patient Data:', patientData);
        const patient: Patient = {
          id: patientData.id,
          name: patientData.name,
          gender: patientData.gender,
          birthDate: patientData.birthDate,
        };
        setPatient(patient);
      })
      .catch((err: Error) => {
        console.error('Error fetching patient details:', err);
        setError(`Failed to fetch patient details: ${err.message}`);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!patient) {
    return <div>Loading patient details...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
      <p><strong>ID:</strong> {patient.id}</p>
      <p><strong>Name:</strong> {patient.name[0].given.join(' ')} {patient.name[0].family}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Birth Date:</strong> {patient.birthDate}</p>
    </div>
  );
}