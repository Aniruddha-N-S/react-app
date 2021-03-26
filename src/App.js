
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/navbar';
import { Home } from './home';
import { About } from './about';
import  Contact   from './contact';


function App() {
  
  return (
    <Router>
      <NavigationBar />


<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact}/>

</Switch>
    </Router>
  );
}


export default App;
