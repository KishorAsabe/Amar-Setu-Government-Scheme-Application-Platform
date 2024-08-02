// src/components/documents/UploadDocs.jsx

import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const UploadDocs = () => {
  const [selectedFiles, setSelectedFiles] = useState({
    AADHAAR: null,
    PAN_CARD: null,
    DRIVING_LICENSE: null,
    INCOME_CERTIFICATE: null,
  });

  const [previews, setPreviews] = useState({
    AADHAAR: null,
    PAN_CARD: null,
    DRIVING_LICENSE: null,
    INCOME_CERTIFICATE: null,
  });

  const [message, setMessage] = useState('');

  const handleFileChange = (event, docType) => {
    const file = event.target.files[0];
    setSelectedFiles({
      ...selectedFiles,
      [docType]: file,
    });
    setMessage(`${docType.replace('_', ' ')} selected.`);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviews({
          ...previews,
          [docType]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(selectedFiles).every(file => file === null)) {
      setMessage('Please select at least one file to upload.');
      return;
    }

    setMessage('Files selected but no backend to upload.');
  };

  const handlePreviewClick = (docType) => {
    if (previews[docType]) {
      const win = window.open("", "_blank", "width=800,height=600");
      win.document.write(`
        <html>
          <head>
            <title>Preview - ${docType.replace('_', ' ')}</title>
          </head>
          <body style="margin:0; display:flex; align-items:center; justify-content:center; height:100vh;">
            <iframe src="${previews[docType]}" frameborder="0" style="border:0; width:90%; height:90%;" allowfullscreen></iframe>
          </body>
        </html>
      `);
    } else {
      setMessage('No file selected to preview.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">Upload Documents</h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {['AADHAAR', 'PAN_CARD', 'DRIVING_LICENSE', 'INCOME_CERTIFICATE'].map((docType) => (
          <div key={docType}>
            <label htmlFor={docType} className="block text-lg font-medium text-gray-700">
              {docType.replace('_', ' ')}
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id={docType}
                onChange={(e) => handleFileChange(e, docType)}
                className="mt-1 block w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => handlePreviewClick(docType)}
                className="ml-2"
              >
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              </button>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#1a73e8] text-white text-lg font-medium rounded-md shadow-sm hover:bg-[#003f88] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadDocs;
