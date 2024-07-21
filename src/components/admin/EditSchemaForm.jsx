import React, { useState, useEffect } from 'react';

const EditSchemaForm = ({ schema, editSchema, setEditingSchema }) => {
  const [formData, setFormData] = useState({ ...schema });

  useEffect(() => {
    setFormData({ ...schema });
  }, [schema]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSchema = {
      ...formData,
      benefits: formData.benefits.split(',').map(item => item.trim()),
      documents: formData.documents.split(',').map(item => item.trim())
    };
    editSchema(updatedSchema);
    setEditingSchema(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Short Description</label>
        <input type="text" name="shortDescription" value={formData.shortDescription} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Price</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Active</label>
        <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} className="mt-1" />
      </div>
      <div>
        <label className="block text-sm font-medium">Details</label>
        <textarea name="details" value={formData.details} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Benefits (comma separated)</label>
        <input type="text" name="benefits" value={formData.benefits} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Eligibility</label>
        <input type="text" name="eligibility" value={formData.eligibility} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Documents Required (comma separated)</label>
        <input type="text" name="documents" value={formData.documents} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
      </div>
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={() => setEditingSchema(null)} className="mt-4 px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600">
          Cancel
        </button>
        <button type="submit" className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditSchemaForm;
