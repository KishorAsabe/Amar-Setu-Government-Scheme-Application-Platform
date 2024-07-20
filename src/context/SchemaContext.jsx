import React, { createContext, useContext } from 'react';

const SchemaContext = createContext();

export const SchemaProvider = ({ children }) => {
  const schemas = [
    {
      id: 1,
      name: 'Schema 1',
      shortDescription: 'Short description of Schema 1',
      price: 100,
      isActive: true,
      details: 'Detailed description of Schema 1',
      benefits: ['Benefit 1', 'Benefit 2'],
      eligibility: 'Eligibility criteria for Schema 1',
      documents: ['Document 1', 'Document 2']
    }
    ,{
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
    ,{
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
    ,{
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
    ,{
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
    ,{
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
    ,{
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
    ,{
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
    ,{
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
    ,{
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
    ,{
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
  ];

  return (
    <SchemaContext.Provider value={schemas}>
      {children}
    </SchemaContext.Provider>
  );
};

export const useSchemas = () => useContext(SchemaContext);
