import React from 'react';
import { useParams } from 'react-router-dom';
import { useSchemas } from '../../context/SchemaContext';

const SchemaDescription = () => {
  const { id } = useParams();
  const schemas = useSchemas();
  const schema = schemas.find(s => s.id === parseInt(id));

  if (!schema) return <div>Schema not found</div>;

  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-white shadow-md">
      <h1 className="text-2xl font-bold mb-2">{schema.name}</h1>
      <p className="text-lg mb-2">{schema.details}</p>
      <h2 className="text-lg font-semibold mb-1">Benefits</h2>
      <ul className="list-disc pl-5 mb-2">
        {schema.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <h2 className="text-lg font-semibold mb-1">Eligibility</h2>
      <p className="mb-2">{schema.eligibility}</p>
      <h2 className="text-lg font-semibold mb-1">Document Requirement</h2>
      <ul className="list-disc pl-5 mb-2">
        {schema.documents.map((document, index) => (
          <li key={index}>{document}</li>
        ))}
      </ul>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Apply
      </button>
    </div>
  );
};

export default SchemaDescription;
