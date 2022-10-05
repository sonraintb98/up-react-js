import './App.scss';
import Login from './LoginPage/LoginPage';
import AdminPage from './AdminPage/AdminPage';
import EmployeePage from './EmployeePage/EmployeePage';
import HRPage from './HRPage/HRPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login /> */}
        <Switch>
          <Route path="/" exact><Login /></Route>
          <Route path="/admin" exact><AdminPage /></Route>
          <Route path="/hr" exact><HRPage /></Route>
          <Route path="/employee" exact><EmployeePage /></Route>
        </Switch>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
