// src/pages/Admin.jsx
import React, { useState } from 'react';
import { useSchemasContext } from '../context/SchemaContext'; // Ensure you're importing the correct hook
import SchemaForm from '../components/admin/SchemaForm';
import SchemaList from '../components/admin/SchemaList';
import Schema from './Schema';

const Admin = () => {
  const { schemas, setSchemas, addSchema } = useSchemasContext(); // Get the whole context object
  const [editingSchema, setEditingSchema] = useState(null);

  const handleAddSchema = (schema) => {
    addSchema(schema); // Call addSchema function from context
  };

  const handleEditSchema = (updatedSchema) => {
    setSchemas(schemas.map(schema => schema.id === updatedSchema.id ? updatedSchema : schema));
    setEditingSchema(null);
  };

  const handleDeleteSchema = (id) => {
    setSchemas(schemas.filter(schema => schema.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin - Manage Schemas</h1>
      <SchemaForm 
        onSubmit={editingSchema ? handleEditSchema : handleAddSchema} 
        editingSchema={editingSchema}
        setEditingSchema={setEditingSchema}
      />
      <SchemaList 
        schemas={schemas} 
        onEdit={setEditingSchema} 
        onDelete={handleDeleteSchema} 
      />


    <Schema/> // here all things are working fine
    </div>

  );
};

export default Admin;
