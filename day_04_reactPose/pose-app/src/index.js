import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';


import posed, { PoseGroup } from 'react-pose';

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    beforeChildren: true
  },
  exit: { opacity: 0 }
});

const App = () => (
  <Route
    render={({ location }) => (
      <div id="site-container">
        <div id="content-container">
          <ul id="site-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <PoseGroup>
            {/* <RoutesContainer key={location.key}> */}
            <RoutesContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </RoutesContainer>
          </PoseGroup>

        </div>
      </div>
    )}
  />
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
