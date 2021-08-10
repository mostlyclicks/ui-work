import React from 'react'
import './App.css';
import Nav1 from './components/Navigation/Nav1'

const MAIN_NAV = [
  {linkName: 'Home', urlPath: '/'},
  {linkName: 'Services', urlPath: '/services'},
  {linkName: 'About', urlPath: '/about'},
  {linkName: 'Contact', urlPath: '/contact'}
]


const App = () => {
  return (
    <div>
      <Nav1 navLinks={MAIN_NAV} />
     
    </div>
  );
}

export default App;
