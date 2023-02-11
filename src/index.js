

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';



const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);



