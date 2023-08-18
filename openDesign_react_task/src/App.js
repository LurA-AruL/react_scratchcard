import './App.css';
import { Helmet } from 'react-helmet';
import React from 'react';

function App() {


  return (
    <div> 
      <figure id="bridgeContainer"> 
      <canvas id="bridge" width="750" height="465"></canvas> 
        <figcaption>Downtown Calgary in 2013 and 1943; mouse down or touch on photo to reveal</figcaption>
     </figure>
      <Helmet> 
        <script src="./script.js" type="text/javascript" /> 
      </Helmet> 
      </div>
  );
}

export default App;
