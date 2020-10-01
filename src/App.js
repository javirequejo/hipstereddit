import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sub from './screens/Sub'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/sub/:subId'><Sub/></Route>
          <Route path='/'><p>Search subs</p></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
