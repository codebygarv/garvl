// App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PasswordLoginWithFirebase from './components/loginData/PasswordLoginWithFirebase';
import TasksSection from './components/TasksSection/TasksSection';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/*" element={<PasswordLoginWithFirebase />} />
        <Route path="/tasks/*" element={<TasksSection />} />
      </Routes>
  );
};

export default App;
