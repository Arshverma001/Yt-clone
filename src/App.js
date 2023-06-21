
import './App.css';
import Header from './Header';
import Main from './Main';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path='/search/:searchterm'>
            <div className='flex'>
            <Sidebar/>
          <SearchPage/>
            </div>
          
          </Route>
    <Route path='/'>     
     <div className='flex'>
     <Sidebar/>
     <Main/> 
     </div>
          </Route>
        </Switch>
      </Router>
   
     
    </div>
  );
}

export default App;
