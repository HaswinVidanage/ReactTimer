var React = require('react');
var ReactDOM = require('react-dom');
//es6 object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var About = require('About');
var Timer = require('Timer');
var Countdown = require('Countdown');

//Load foundation
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <Route path="about" component={About}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
   document.getElementById('app')
);
