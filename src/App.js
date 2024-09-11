import React from 'react';
import Counter from './Counter';
import { Store } from './Store'
import { Provider } from 'react-redux'


function App() {
  return (
    <>
      <Provider store={Store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
