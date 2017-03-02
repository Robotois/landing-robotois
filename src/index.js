import React from 'react';
import {render} from 'react-dom';
import Header from './header/Header.jsx';
import Footer from './Footer.jsx';
import App from './App';
import Videos from './Videos.jsx';
import './index.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';


/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
const Main = ({ children, location }) => (
  <div>
    <Header />
    <ReactCSSTransitionGroup
      component="div"
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {React.cloneElement(children, {
        key: location.pathname
      })}
    </ReactCSSTransitionGroup>
    <Footer />
  </div>
)

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={App}/>
      <Route path="videos" component={Videos} />
    </Route>
  </Router>
), document.getElementById('root'));
