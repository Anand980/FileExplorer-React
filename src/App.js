import React from 'react';
import './style.css';
import Directory from './Directory';
import { files } from './files.js';

export default function App() {
  return (
    <div>
      <h1>File Explorer</h1>
      <ul>
        {files.map((file) => {
          return <Directory file={file} />;
        })}
      </ul>
    </div>
  );
}
