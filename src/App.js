import React from 'react';
import './App.css';
import Song from './components/song/song'
import Young from './components/young/young'
//router
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename = {process.env.PUBLIC_URL}>
        <Router>
          <Switch>
              <Route exact path="/" component={Song}/>  
              <Route exact path="/detail"
                    render={ () => <Young id=""/> }       //props 필요하면 이렇게 보내면 댑니당.
              />
          </Switch>
        </Router>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
  