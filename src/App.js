import React from 'react';
import './App.css';
import Field from './partials/field';
import { leftFields, rightFields, topFields, bottomFields } from './constants';

function App() {
  return (
    <div className="App">
        <svg stroke="black">
            {leftFields.reverse().map((cell, key) => <Field key={`${cell.label}-${key}`} x={0} y={key} {...cell} />)}
            {topFields.map((cell, key) => <Field key={`${cell.label}-${key}`} x={key} y={0} {...cell} />)}
            {bottomFields.map((cell, key) => <Field key={`${cell.label}-${key}`} x={10} y={key} {...cell} />)}
            {rightFields.reverse().map((cell, key) => <Field key={`${cell.label}-${key}`} x={key} y={10} {...cell} />)}
        </svg>
    </div>
  );
}

export default App;
