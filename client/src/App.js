import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     {/* Header */}
     <Router>
      <Header/>
      <Route exact path='/' component={Home}/>
     </Router>
     
     {/* navbar */}
    </div>
  );
}

export default App;
