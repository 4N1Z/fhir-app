'use client';

import { useEffect, useState } from 'react';
import { initializeFhirClient } from '@/lib/fhir-client';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initializeFhirClient()
      .then(() => setIsLoading(false))
      .catch((err: Error) => {
        console.error(err);
        setError('Failed to initialize FHIR client');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">EPIC EHR Integration</h1>
  

  <Link href="/dashboard">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Go to Dashboard
    </button>
  </Link>
    </main>
  );
}
