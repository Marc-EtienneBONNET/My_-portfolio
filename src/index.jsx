import React from 'react';
import ReactDOM from 'react-dom/client';
import ComposantAddNewUser from './lib_react/1_composantAddNewUser/composantGlobal/addNewUser'
import ComposantConnectUser from './lib_react/2_composantConnectUser/composantGlobal/composantConnectUser'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div style={{height:'100%', width:'100%'}}>
      <ComposantConnectUser/>
    </div>
    <div style={{height:'100%', width:'100%'}}>
      <ComposantAddNewUser/>
    </div>
  </React.StrictMode>
);
