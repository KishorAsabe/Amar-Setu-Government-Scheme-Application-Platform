import React, { createContext, useContext } from 'react';

const SchemaContext = createContext();

export const SchemaProvider = ({ children }) => {
  const schemas = [
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
    }
    ,{
      id: 2,
      name: 'Dr. Ambedakar Centrally Sponsored Scheme of Post-Matric Scholarships for the Economically Backward Class (EBC) Students',
      shortDescription: 'Short description of Schema 2',
      price: 200,
      isActive: false,
      details: '"Dr. Ambedakar Centrally Sponsored Scheme of Post-Matric Scholarships for the Economically Backward Class (EBC) Students" is a Scholarship Scheme by the Department of Social Justice and Empowerment, Ministry of Social Justice and Empowerment. The objective of the scheme is to provide financial assistance to the Economically Backward Class (EBC) students studying at the post-matriculation or post-secondary stage to enable them to complete their education. These scholarships shall be available for studies in India only and will be awarded by the Government of State/Union Territory to which the applicant actually belongs, i.e. permanently settled.',
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
