import React from 'react';
import { useParams } from 'react-router-dom';
import { useSchemas } from '../../context/SchemaContext';

const SchemaDescription = () => {
  const { id } = useParams();
  const schemas = useSchemas();
  const schema = schemas.find(s => s.id === parseInt(id));

  if (!schema) return <div className="p-4 text-center text-red-500">Schema not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md">
      <h1 className="text-3xl font-bold mb-4">{schema.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{schema.details}</p>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Benefits</h2>
      <ul className="list-disc pl-5 mb-4 text-gray-600">
        {schema.benefits.map((benefit, index) => (
          <li key={index} className="mb-1">{benefit}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Eligibility</h2>
      <p className="text-gray-600 mb-4">{schema.eligibility}</p>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Document Requirement</h2>
      <ul className="list-disc pl-5 mb-4 text-gray-600">
        {schema.documents.map((document, index) => (
          <li key={index} className="mb-1">{document}</li>
        ))}
      </ul>
      <button
        className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Apply
      </button>
    </div>
  );
};

export default SchemaDescription;
