import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import User from './components/users/User';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import NotFound from './components/pages/NotFound';

const App = () => {

  /*useEffect(() => {
    setLoading(true);
      //console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
      async function getUsers() {
        const res =  await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setUsers(res.data)
        setLoading(false)
      }
      getUsers();
      // eslint-disable-next-line
  },[])*/

     return (
       <GithubState>
         <AlertState>
          <Router>
            <div className='App'>
              <Navbar />
              <div className="container">
                <Alert alert={alert}/>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/user/:login' component={User}/>
                  <Route component={NotFound}/>
                </Switch>  
              </div>
            </div>
          </Router>
        </AlertState>
       </GithubState>
    );
}

export default App;
