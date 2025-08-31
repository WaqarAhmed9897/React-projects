import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./views/Dashboard";
import ContactUs from "./views/ContactUs";
import AboutUs from "./views/AboutUs"

/*
Components in terms of usage:
1. Screenwise Component (AboutUs.js, ContactUs.js, Dashboard.js)
folder: views / screens
2. Reusable Component (CustomBtn.js, Card.js)
folder: components
*/

/*
  Props: Parent component se Child component me data pass karna
*/

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screen, setScreen] = useState('dashboard')

  useEffect(() => {
    if (currentIndex === 5) {
      alert("5 hogae bas ker!");
    }
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const updateScreen = (currentScreen) => {
    setScreen(currentScreen)
  }

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={() => updateScreen('dashboard')}>Dashboard</button>
        <button onClick={() => updateScreen('contactUs')}>ContactUs</button>
        <button onClick={() => updateScreen('aboutUs')}>AboutUs</button>


        {screen === 'dashboard' && <Dashboard />}
        {screen === 'contactUs' && <ContactUs />}
        {screen === 'aboutUs' && <AboutUs />}

        <h1>{currentIndex}</h1>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default App;
