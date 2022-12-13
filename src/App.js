import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <h1>Users Authentication</h1>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;



//then pages sections like about, contact, projects. will be rendered in this main App.js file
//took the liberty of implementing the ErrorBoundary