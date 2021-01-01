import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     {/* Header */}
     <Router>
      <Header/>
     </Router>
     
     {/* navbar */}
    </div>
  );
}

export default App;
