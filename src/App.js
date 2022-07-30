import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'light'}
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <div className='container my-3' >
        <TextForm heading="Enter The Text To Analyze">
        </TextForm>
        <About />
      </div>

    </>
  );
}

export default App;
