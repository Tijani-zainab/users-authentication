import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <h1>Users Authentication</h1>
        <Projects />
      </div>
    </ErrorBoundary>
  );
}

export default App;



//then pages sections like about, contact, projects. will be rendered in this main App.js file
//took the liberty of implementing the ErrorBoundary