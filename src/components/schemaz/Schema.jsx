import React from 'react';
import SchemaCard from './SchemaCard';
import { useSchemas } from '../../context/SchemaContext';

const Schema = () => {
  const schemas = useSchemas();

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {schemas.map(schema => (
        <SchemaCard key={schema.id} schema={schema} />
      ))}
    </div>
  );
};

export default Schema;
