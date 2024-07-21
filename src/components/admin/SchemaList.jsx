import React from 'react';

const SchemaList = ({ schemas = [], onEdit, onDelete }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Schema List</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {schemas.length > 0 ? (
            schemas.map(schema => (
              <tr key={schema.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{schema.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schema.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schema.isActive ? 'Yes' : 'No'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    onClick={() => onEdit(schema)} 
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => onDelete(schema.id)} 
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">No schemas available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SchemaList;
