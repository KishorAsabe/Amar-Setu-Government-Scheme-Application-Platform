import React from 'react';
import { useNavigate } from 'react-router-dom';

const SchemaCard = ({ schema }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/schemas/${schema.id}`);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-semibold">{schema.name}</h2>
      <p className="text-sm text-gray-600">{schema.shortDescription}</p>
      <p className="text-sm font-medium text-gray-900">Price: ${schema.price}</p>
      <p className={`text-sm font-medium ${schema.isActive ? 'text-green-600' : 'text-red-600'}`}>
        {schema.isActive ? 'Active' : 'Inactive'}
      </p>
      <button
        onClick={handleDetailsClick}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Details
      </button>
    </div>
  );
};

export default SchemaCard;
