'use client';

import PatientDetails from '@/components/PatientDetails';

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Dashboard</h1>
      <PatientDetails />
      {/* Add more components to display patient data */}
    </div>
  );
}