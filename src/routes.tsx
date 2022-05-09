import { BrowserRouter as Router } from 'react-router-dom'
import styles from './App.module.scss';
import Header from './Components/Header';

function AppRouter() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
      </div>
    </Router>
  );
}

export default AppRouter;