
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import View from './components/PostsTable/Actions/View/View';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/post/:data" component={View}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;