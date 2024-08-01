import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Error from './pages/Error';
import Operator from './pages/Operator';

// Components
import Navbar from './components/Common/Navbar';
import UploadDocs from './components/documents/UploadDocs';
import Schema from './pages/Schema';
import SchemaDescription from './components/schemaz/SchemaDescription';

// Auth Components
import OpenRoute from './components/core/Auth/OpenRoute';
import PrivateRoute from './components/core/Auth/PrivateRoute';

//context
import { SchemaProvider } from './context/SchemaContext';
import VerifyContact from './pages/Verification';

const App = () => {
  return (

    <SchemaProvider>

      {/* <div className='flex min-h-screen w-screen flex-col bg-richblack-900 font-inter'> */}
      <div className='flex min-h-screen w-screen flex-col bg-demoGreen font-inter'>

        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upload-docs" element={<UploadDocs />} />

          <Route path="/schemas" element={<Schema />} />
          <Route path="/schemas/:id" element={<SchemaDescription />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/operator" element={<Operator />} />

          {/* Authentication Routes */}
          <Route
            path="/login"
            element={<OpenRoute>
              <Login />
            </OpenRoute>} />
          <Route
            path="/signup"
            element={<OpenRoute>
              <Signup />
            </OpenRoute>} />
          <Route
            path="verify-contact"
            element={
              <OpenRoute>
                <VerifyContact />
              </OpenRoute>
            }
          />

          {/* Private Routes */}
          <Route
            path="/dashboard"
            element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />

          {/* Catch-all Route */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

    </SchemaProvider>
  );
};

export default App;
