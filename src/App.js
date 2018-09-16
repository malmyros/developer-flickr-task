import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/navbar';
import Footer from './components/footer';
import PhotoStreamContainer from './containers/photoStreamContainer';
import { appName } from './properties';

const App = () => (
  <div className="App">
    <Helmet>
      <title>{appName} | Home</title>
      <meta name="description" content="A basic example of representing competence in building
          single page applications with react."/>
    </Helmet>
    <header>
      <Navbar/>
    </header>
    <main role="main">
      <PhotoStreamContainer/>
    </main>
    <Footer/>
  </div>
);

export default App;
