// src/context/SchemaContext.jsx
import React, { createContext, useContext, useState } from 'react';

const SchemaContext = createContext();

export const SchemaProvider = ({ children }) => {
  const [schemas, setSchemas] = useState([
    {
      id: 1,
      name: 'Long Term Fellowship under the Human Resource Development Programme for Health Research',
      shortDescription: 'Long Term Fellowship” under the Human Resource Development',
      price: 100,
      isActive: true,
      details: 'Detailed description of Schema 1',
      benefits: ['Benefit 1', 'Benefit 2'],
      eligibility: 'Eligibility criteria for Schema 1',
      documents: ['Document 1', 'Document 2']
    },
    {
      id: 2,
      name: 'Schema 2',
      shortDescription: 'Short description of Schema 2',
      price: 200,
      isActive: false,
      details: 'Detailed description of Schema 2',
      benefits: ['Benefit A', 'Benefit B'],
      eligibility: 'Eligibility criteria for Schema 2',
      documents: ['Document A', 'Document B']
    }
  ]);

  const generateId = () => {
    return schemas.length > 0 ? Math.max(schemas.map(schema => schema.id)) + 1 : 1;
  };

  const addSchema = (schema) => {
    setSchemas([...schemas, { ...schema, id: generateId() }]);
  };

  console.log(schemas); // after adding scheme this is ok printing 

  const value = { schemas, setSchemas, addSchema };

  return (
    <SchemaContext.Provider value={value}>
      {children}
    </SchemaContext.Provider>
  );
};

// Hook to access the whole context object
export const useSchemasContext = () => {
  const context = useContext(SchemaContext);
  if (context === undefined) {
    throw new Error('useSchemasContext must be used within a SchemaProvider');
  }
  return context; // Return the whole context object
};

// Hook to access only schemas
export const useSchemas = () => {
  const { schemas } = useSchemasContext(); // Use the whole context object and destructure schemas
  return schemas; // Return only schemas
};
