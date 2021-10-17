import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Create from './Create';
import FdDetails from './FdDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
             <Route path="/" exact>
                <Home />
             </Route>
             <Route path="/create" exact>
                <Create />
             </Route>
             <Route path="/fds/:id" exact>
                <FdDetails  />
             </Route>
             <Route path="*">
               <NotFound />
             </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
