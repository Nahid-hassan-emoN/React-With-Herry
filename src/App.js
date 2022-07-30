import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar />

      <div className='container my-3'>
        <TextForm heading="Enter The Text To Analyze">
        </TextForm>
        <About/>
      </div>

    </>
  );
}

export default App;
