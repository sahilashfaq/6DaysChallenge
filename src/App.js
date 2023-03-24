import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import StepsComponent from './components/StepsComponent';
import SignUp from './components/SignUpPage';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  withRouter
} from 'react-router-dom';

function App() {  
  return (
  
      <Router>
       <Switch>
          
       <Route path='/signup'><SignUp /></Route>      
       <Route path='/' exact><Header /><StepsComponent /></Route>      
      
       
       </Switch>
      </Router>
  
  );
}

export default App;
