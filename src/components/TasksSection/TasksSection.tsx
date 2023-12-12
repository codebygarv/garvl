// components/TasksSection.tsx
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Directory from '../Routes/Directory';
import DoneTasks from '../Routes/DoneTasks';
import Alltask from '../Routes/AllTask';
import ImportantTasks from '../Routes/ImportantTasks';
import SearchResults from '../Routes/SearchResults';
import TaskOnly from '../Routes/TaskOnly';
import TodaysTasks from '../Routes/TodaysTasks';
import HeaderTasks from './HeaderTasks';

const TasksSection: React.FC = () => {
  return (
    <main className="pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen">
      <HeaderTasks />
      <Routes>
        <Route path="/*" element={<Alltask />} />
        <Route path="tasks/today/*" element={<TodaysTasks />} />
        <Route path="tasks/important/*" element={<ImportantTasks />} />
        <Route path="tasks/completed/*" element={<DoneTasks done={true} title="Completed tasks" />} />
        <Route path="tasks/uncompleted/*" element={<DoneTasks done={false} title="Uncompleted tasks" />} />
        <Route path="tasks/results/*" element={<SearchResults />} />
        <Route path="tasks/dir/:dir/*" element={<Directory />} />
        <Route path="tasks/task/:taskId/*" element={<TaskOnly />} />
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </main>
  );
};

export default TasksSection;