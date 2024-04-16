import React from 'react';
import axios from 'axios';
import AuthPanel from '../auth/Auth';
import { useEffect } from 'react';

import './App.scss';

function App() {
  useEffect(() => {
    axios.get('http://localhost:8000/user/')
      .then(res => {
        if (res.data.message === 'anonymous') {

        }
      })
      .catch(err => {

      })
      .finally(() => {
      });
  }, []);

  return (
    <div className="App">
      <div className="wrapper container-fluid">
        <div className="row h-100 p-3 d-flex justify-content-center align-items-center">
          <AuthPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
