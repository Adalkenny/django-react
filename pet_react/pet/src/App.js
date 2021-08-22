import React from 'react';
//import './App.css';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardList from './components/CardList';
import RegistarPet from './components/RegistarPet';
import Header from './components/Header';



function App() {


  return (

    <Router>
      <Header />
      <Container maxWidth="xl">
        <Switch>
          <Route exact path="/" component={CardList} />
          <Route exact path="/detalhes/:id" component={RegistarPet} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
