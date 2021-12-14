import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from './shared/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path='/'
          exact
          component={Home}
        />
        <Route
          path='/month-statistics'
          exact
          component={MonthStatistics} />
      </Switch>
    </div>
  );
}

export default App;
