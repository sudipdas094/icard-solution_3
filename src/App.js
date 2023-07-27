import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminLteStudentForm from './AdminLTELayout_student.js';
import AdminLteSchoolForm from './AdminLTELayout_school.js';
import AdminLteSchoolSuccessForm from './AdminLTELayout_school_success.js'

import SchoolDetails from './SchoolDetails.js';

const App = () => {
  
  return (
    
    <Router>
      <Routes>
        <Route exact path="/school" element={<AdminLteSchoolForm />}  />
        <Route path="/student" element={<AdminLteStudentForm />} />
        <Route path="school/schoolSuccess" element={(<AdminLteSchoolSuccessForm />)}/>
      </Routes>
    </Router>
    
  );
}

export default App;
