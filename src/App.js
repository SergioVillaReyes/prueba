import React from 'react';
import Header from './components/Header';

//Redux
import store from './store';
import {Provider} from 'react-redux';

// console.log('store',store);

function App() {

  return (
    <Provider store={store}>
      <Header/>
    </Provider>
  );
}

export default App;
