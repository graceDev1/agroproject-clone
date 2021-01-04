import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     {/* Header */}
     <Router>
      <Header/>
      <Route exact path='/' component={Home}/>
       {/* navbar */}
     {/* home page */}
     {/* Footer */}
     <Footer/>
     </Router>
     
    
    </div>
  );
}

export default App;
