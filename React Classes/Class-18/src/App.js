import Router from './config/router'
import Header from './components/Header'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Header />
          <Router />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App;

/*
  localStorage: data globally mil jae aur refresh karne per save rahe
  Problem: jab hum ek component me localStorage me kuch set karwatay hain, to dosre component
  me realtime pata nahi chalta jab tak refresh na karlen!

  Solution: REDUX
  Redux: Ek store room jahan hum esa data rakhe jo hum multiple components me chahye ho.

  Definition: A global state management tool

  - Jab bhi redux me data set hota hai, her component ko realtime pata chal sakta hai.
*/