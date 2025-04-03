import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactComponent from './ReactComponent';

export function mountReactComponent(element) {
  const root = ReactDOM.createRoot(element);
  root.render(ReactComponent);
}
