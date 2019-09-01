import React from 'react';
import ReactDOM from 'react-dom';

//JSX.Element: TS custom definition
export default function App(): JSX.Element {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  return (
    <div>
      <h1>TypeScript sum function:</h1>
      <h2>{sum(1, 1)}</h2>
    </div>
  );
}

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);
