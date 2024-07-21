// src/components/admin/SchemaForm.jsx
import React, { useState, useEffect } from 'react';

const SchemaForm = ({ onSubmit, editingSchema, setEditingSchema }) => {
  const [formData, setFormData] = useState({
    name: '',
    shortDescription: '',
    price: '',
    isActive: false,
    details: '',
    benefits: '',
    eligibility: '',
    documents: '',
  });

  useEffect(() => {
    if (editingSchema) {
      setFormData(editingSchema);
    }
  }, [editingSchema]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      shortDescription: '',
      price: '',
      isActive: false,
      details: '',
      benefits: '',
      eligibility: '',
      documents: '',
    });
    setEditingSchema(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-semibold mb-4">{editingSchema ? 'Edit Schema' : 'Add New Schema'}</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="shortDescription">Short Description</label>
        <input 
          type="text" 
          name="shortDescription" 
          id="shortDescription" 
          value={formData.shortDescription} 
          onChange={handleChange} 
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="price">Price</label>
        <input 
          type="number" 
          name="price" 
          id="price" 
          value={formData.price} 
          onChange={handleChange} 
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input 
            type="checkbox" 
            name="isActive" 
            checked={formData.isActive} 
            onChange={handleChange} 
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-sm font-medium">Active</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="details">Details</label>
        <textarea 
          name="details" 
          id="details" 
          value={formData.details} 
          onChange={handleChange} 
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="benefits">Benefits (comma-separated)</label>
        <input 
          type="text" 
          name="benefits" 
          id="benefits" 
          value={formData.benefits} 
          onChange={handleChange} 
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="eligibility">Eligibility</label>
        <input 
          type="text" 
          name="eligibility" 
          id="eligibility" 
          value={formData.eligibility} 
          onChange={handleChange} 
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="documents">Documents (comma-separated)</label>
        <input 
          type="text" 
          name="documents" 
          id="documents" 
          value={formData.documents} 
          onChange={handleChange} 
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        {editingSchema ? 'Update Schema' : 'Add Schema'}
      </button>
    </form>
  );
};

export default SchemaForm;
