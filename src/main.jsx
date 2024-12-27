import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/tailwind.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
