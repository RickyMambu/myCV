import './App.css';
import Header from './components/Header';
import About from './components/About';
import Field from './components/Field';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Field />
      <Resume />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
