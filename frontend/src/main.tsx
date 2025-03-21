// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.css';

// const container = document.getElementById('root');
// const root = createRoot(container!); // createRoot(container!) if you use TypeScript

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// filepath: d:\hello\project\src\main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
