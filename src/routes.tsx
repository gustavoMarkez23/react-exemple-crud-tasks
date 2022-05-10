import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import styles from './App.module.scss';
import TaskDetails from './components/TaskDetails';
import TaskProvider from './commun/contexts/Tasks';

function AppRouter() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route element={<TaskProvider />}>
            <Route path='/' element={
              <>
                <AddTask />
                <Tasks />
              </>
            } />
            <Route path="/:taskid" element={<TaskDetails />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;